import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';

const exports = {};
const source = ts.transpileModule(readFileSync('src/lib/seo.ts', 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
vm.runInNewContext(source, { exports, URL, require: () => ({ siteConfig: { name: 'Jan Cosmic Foundation', url: 'https://www.jancosmicfoundation.org' } }) });

test('a detail page has its own canonical and sharing URL, without losing its image', () => {
  const result = exports.pageMetadata('/centres/accra', { title: 'Accra Centre', description: 'Meet our community in Accra.', openGraph: { images: [{ url: '/images/accra.jpg' }] } });
  assert.equal(result.alternates.canonical, 'https://www.jancosmicfoundation.org/centres/accra');
  assert.equal(result.openGraph.url, result.alternates.canonical);
  assert.equal(result.openGraph.images[0].url, '/images/accra.jpg');
  assert.equal(result.twitter.description, 'Meet our community in Accra.');
});

test('an absent record image falls back to a real Foundation photograph', () => {
  const result = exports.pageMetadata('/centres/example', { openGraph: { images: undefined }, twitter: { images: undefined } });
  assert.equal(result.openGraph.images[0].url, '/images/teaching.jpg');
  assert.equal(result.twitter.images[0], '/images/teaching.jpg');
});

test('long CMS descriptions become readable snippets on all three metadata surfaces', () => {
  const description = '<p>A community for shared practice, teaching, and service in Accra.</p> ' + 'A longer description with more details. '.repeat(10);
  const result = exports.pageMetadata('/centres/accra', { description, openGraph: { description }, twitter: { description } });
  for (const value of [result.description, result.openGraph.description, result.twitter.description]) {
    assert.ok(value.length <= 160);
    assert.ok(!value.includes('<'));
    assert.equal(value, 'A community for shared practice, teaching, and service in Accra.');
  }
});
