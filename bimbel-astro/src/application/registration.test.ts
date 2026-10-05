import assert from 'node:assert/strict';
import { test } from 'node:test';
import { buildWaMessage, validate } from './registration.ts';

const ok = { parent: 'Ibu Ani', child: 'Aisyah', level: 'SD', kelas: 'Kelas 2', wa: '081234567890', sesi: '1', note: '' } as const;

test('valid form has no errors', () => {
  assert.deepEqual(validate(ok), {});
});

test('empty form reports all required fields', () => {
  const e = validate({ parent: '', child: '', level: '', kelas: '', wa: '123', sesi: '', note: '' });
  assert.deepEqual(Object.keys(e).sort(), ['child', 'level', 'parent', 'sesi', 'wa']);
});

test('wa message includes kelas and session label', () => {
  const m = buildWaMessage(ok);
  assert.match(m, /Jenjang: SD – Kelas 2/);
  assert.match(m, /Sesi: Sesi 1 \(15\.00–17\.00\)/);
  assert.doesNotMatch(m, /Catatan/);
});
