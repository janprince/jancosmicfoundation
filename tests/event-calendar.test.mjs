import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';

function loadTS(file, dependencies = {}, globals = {}) {
  const output = ts.transpileModule(readFileSync(file, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText;
  const exports = {};
  vm.runInNewContext(output, { exports, require: name => dependencies[name], process: { env: { NODE_ENV: 'production' } }, console, URL, AbortSignal, ...globals });
  return exports;
}
const status = loadTS('src/lib/event-status.ts');
function apiWith(results, fail = false) {
  return loadTS('src/lib/api.ts', { './event-status': status, '@/content/programmes': { foundationPrograms: [] } }, {
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
test('a detail outage remains an error rather than becoming a missing or invented event', async () => {
  await assert.rejects(() => apiWith([], true).getEventBySlug('sample-event'), /offline/);
});

function publishedApi(fetcher) {
  return loadTS('src/lib/api.ts', { './event-status': status, '@/content/programmes': { foundationPrograms: [] } }, { fetch: fetcher });
}
const response = data => ({ ok: true, json: async () => data });
test('empty published causes and centres never become sample content', async () => {
  const api = publishedApi(async () => response({ results: [], next: null }));
  assert.equal((await api.getCauses()).length, 0);
  assert.equal((await api.getCentres()).length, 0);
});
test('published copy is not overwritten by local matching slugs', async () => {
  const api = publishedApi(async () => response({ results: [{ id: 9, slug: 'guide-the-children', title: 'Approved title', is_active: true }], next: null }));
  const [cause] = await api.getCauses();
  assert.equal(cause.title, 'Approved title');
  assert.equal(cause.donorsCount, null);
});
test('collections follow subsequent pages, including relative next links', async () => {
  const urls = [];
  const api = publishedApi(async url => {
    urls.push(url);
    return response({ results: [{ id: urls.length, name: `Centre ${urls.length}` }], next: urls.length < 3 ? `?page=${urls.length + 1}` : null });
  });
  assert.equal((await api.getCentres()).length, 3);
  assert.ok(urls[1].endsWith('/centres/?page=2'));
  assert.ok(urls[2].endsWith('/centres/?page=3'));
});
test('pagination cannot send a content request to another origin', async () => {
  let calls = 0;
  const api = publishedApi(async () => { calls++; return response({ results: [], next: 'https://unexpected.example/api/centres/' }); });
  await assert.rejects(() => api.getCentres(), /Unexpected content pagination/);
  assert.equal(calls, 1);
});
test('missing and inactive causes do not offer a checkout record', async () => {
  const missing = publishedApi(async () => ({ ok: false, status: 404 }));
  assert.equal(await missing.getCauseBySlug('removed'), undefined);
  const inactive = publishedApi(async () => response({ id: 1, is_active: false }));
  assert.equal(await inactive.getCauseBySlug('closed'), undefined);
});
test('content outages are not presented as empty published collections', async () => {
  const api = publishedApi(async () => { throw new Error('offline'); });
  await assert.rejects(() => api.getCauses(), /offline/);
});
test('gallery requires a real image and uses it when a thumbnail is absent', async () => {
  const api = publishedApi(async () => response({ results: [{ id: 1, type: 'image' }, { id: 2, type: 'image', image_url: '/real.jpg' }], next: null }));
  const images = await api.getGalleryItems();
  assert.equal(images.length, 1);
  assert.equal(images[0].thumbnail, '/real.jpg');
});
test('absent centre counts are preserved as unknown', async () => {
  const api = publishedApi(async () => response({ results: [{ id: 1, name: 'Centre' }], next: null }));
  assert.equal((await api.getCentres())[0].memberCount, null);
});
