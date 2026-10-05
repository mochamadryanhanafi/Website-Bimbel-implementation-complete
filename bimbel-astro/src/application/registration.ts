import type { Registration } from '../domain/types.ts';
import { PROGRAMS, SESSIONS, rupiah } from '../domain/content.ts';

export type RegistrationErrors = Partial<Record<keyof Registration, string>>;

export function validate(r: Registration): RegistrationErrors {
  const e: RegistrationErrors = {};
  if (!r.parent.trim()) e.parent = 'Wajib diisi';
  if (!r.child.trim()) e.child = 'Wajib diisi';
  if (!r.level) e.level = 'Pilih jenjang';
  if (r.wa.replace(/\D/g, '').length < 9) e.wa = 'Masukkan nomor yang valid';
  if (!r.sesi) e.sesi = 'Pilih sesi';
  return e;
}

export const sessionLabel = (id: string) => {
  const s = SESSIONS.find((x) => x.id === id);
  return s ? `${s.name.split(' · ')[0]} (${s.time.replace(/ /g, '')})` : '';
};

export const levelLabel = (level: string) => {
  const p = PROGRAMS.find((x) => x.level === level);
  return p ? `${p.level} · ${rupiah(p.promoPrice)}/bln` : '';
};

export function buildWaMessage(r: Registration): string {
  return [
    'Halo Admin Naa Bimbel, saya sudah mendaftar.',
    `Orang tua: ${r.parent}`,
    `Anak: ${r.child}`,
    `Jenjang: ${r.level}${r.kelas ? ' – ' + r.kelas : ''}`,
    `Sesi: ${sessionLabel(r.sesi)}`,
    r.note ? `Catatan: ${r.note}` : '',
  ]
    .filter(Boolean)
    .join('\n');
}
