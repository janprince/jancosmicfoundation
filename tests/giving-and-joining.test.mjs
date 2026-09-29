import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';

function load(file, env = {}, fetcher) {
  const exports = {};
  const output = ts.transpileModule(readFileSync(file, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
  }).outputText;
  vm.runInNewContext(output, {
    exports, require: () => ({}), process: { env }, fetch: fetcher, AbortSignal,
  });
  return exports;
}
const json = value => JSON.parse(JSON.stringify(value));
const paystack = load('src/lib/paystack.ts');

test('general gifts omit the cause ID from Paystack metadata and verification', async () => {
  const metadata = paystack.donationMetadata('General donation');
  assert.equal(metadata.custom_fields.some(field => field.variable_name === 'cause_id'), false);
  let request;
  const api = load('src/lib/api.ts', {}, async (url, options) => {
    request = { url, body: JSON.parse(options.body) };
    return { ok: true };
  });
  assert.equal((await api.verifyDonation({ reference: 'general-test', cause_id: undefined })).ok, true);
  assert.ok(request.url.endsWith('/donations/verify/'));
  assert.deepEqual(request.body, { reference: 'general-test' });
});

test('initiative gifts preserve the cause ID in Paystack metadata and verification', async () => {
  assert.deepEqual(json(paystack.donationMetadata('Children', '42').custom_fields[1]), {
    display_name: 'Cause ID', variable_name: 'cause_id', value: '42',
  });
  let body;
  const api = load('src/lib/api.ts', {}, async (_, options) => {
    body = JSON.parse(options.body);
    return { ok: true };
  });
  await api.verifyDonation({ reference: 'initiative-test', cause_id: '42' });
  assert.deepEqual(body, { reference: 'initiative-test', cause_id: '42' });
});

test('registration uses the Foundation API by default and sends the form contract', async () => {
  let request;
  const api = load('src/lib/api.ts', { NEXT_PUBLIC_API_URL: 'http://127.0.0.1:8001/api/' }, async (url, options) => {
    request = { url, body: JSON.parse(options.body) };
    return { ok: true, json: async () => ({ status: 'registered' }) };
  });
  const details = { name: 'Test Member', email: 'test@example.com', phone: '', country: 'Ghana', region: 'Greater Accra' };
  assert.equal((await api.submitJoinFoundation(details)).ok, true);
  assert.equal(request.url, 'http://127.0.0.1:8001/api/join-foundation/');
  assert.deepEqual(request.body, details);
});

test('registration does not show success for an unexpected or unreadable response', async () => {
  for (const response of [{}, { status: 'pending' }]) {
    const api = load('src/lib/api.ts', {}, async () => ({ ok: true, json: async () => response }));
    assert.equal((await api.submitJoinFoundation({})).ok, false);
  }
  const html = load('src/lib/api.ts', {}, async () => ({ ok: true, json: async () => { throw new Error('not JSON'); } }));
  assert.equal((await html.submitJoinFoundation({})).ok, false);
});

test('registration preserves server validation and handles a failed connection', async () => {
  const env = {};
  const rejected = load('src/lib/api.ts', env, async () => ({ ok: false, json: async () => ({ email: ['Enter a valid email.'] }) }));
  const result = await rejected.submitJoinFoundation({});
  assert.equal(result.ok, false);
  assert.match(result.error, /email: Enter a valid email/);
  const offline = load('src/lib/api.ts', env, async () => { throw new Error('offline'); });
  assert.equal((await offline.submitJoinFoundation({})).ok, false);
});
