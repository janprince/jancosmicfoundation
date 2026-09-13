import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';

function loadTS(file, dependencies = {}, globals = {}) {
  const output = ts.transpileModule(readFileSync(file, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText;
  const exports = {};
  vm.runInNewContext(output, { exports, require: name => dependencies[name], process: { env: { NODE_ENV: 'production' } }, console, ...globals });
  return exports;
}
const status = loadTS('src/lib/event-status.ts');
function apiWith(results, fail = false) {
  return loadTS('src/lib/api.ts', { './event-status': status, './mock-data': { events: [{ slug: 'sample-event', date: '2099-01-01', isPast: false }] } }, {
    fetch: async () => { if (fail) throw new Error('offline'); return { ok: true, json: async () => ({ results }) }; },
  });
}

test('an event remains current through its final day in Ghana', () => {
  assert.equal(status.eventHasEnded('2026-09-10', '2026-09-13', Date.parse('2026-09-13T23:59:59Z')), false);
  assert.equal(status.eventHasEnded('2026-09-10', '2026-09-13', Date.parse('2026-09-14T00:00:00Z')), true);
});
test('single-day, timestamp and invalid dates are handled safely', () => {
  assert.equal(status.eventHasEnded('2026-09-13', null, Date.parse('2026-09-13T12:00:00Z')), false);
  assert.equal(status.eventHasEnded('2026-09-13T10:00:00Z', null, Date.parse('2026-09-13T12:00:00Z')), true);
  assert.equal(status.eventHasEnded('invalid'), true);
});
test('an empty upcoming calendar never inserts sample events', async () => {
  assert.equal((await apiWith([]).getEvents('upcoming')).length, 0);
});
test('an unavailable calendar never inserts sample events', async () => {
  assert.equal((await apiWith([], true).getEvents('upcoming')).length, 0);
});
test('stale server flags cannot make past events upcoming; upcoming events are sorted', async () => {
  const api = apiWith([{ id: 1, date: '2000-01-01', is_past: false }, { id: 2, date: '2099-02-01' }, { id: 3, date: '2099-01-01' }, { id: 4, date: 'not-a-date' }]);
  assert.equal((await api.getEvents('upcoming')).map(event => event.id).join(','), '3,2');
  assert.equal((await api.getEvents('past')).map(event => event.id).join(','), '1');
});
test('a missing detail page does not fall back to an invented event', async () => {
  assert.equal(await apiWith([], true).getEventBySlug('sample-event'), undefined);
});
