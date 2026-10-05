import type { Faq, Program, Session, Subject } from './types.ts';

export const BRAND = {
  name: 'Naa Bimbel',
  tagline: 'TK & SD · Warujayeng',
  location: 'Warujayeng, Tanjunganom, Nganjuk',
  coords: '-7.63825,112.013167',
};

export const PROGRAMS: Program[] = [
  {
    level: 'TK',
    tag: 'TK A · TK B',
    desc: 'Belajar dasar dengan pendekatan yang menyenangkan.',
    normalPrice: 100000,
    promoPrice: 85000,
    features: ['Pengenalan angka & huruf', 'Membaca, menulis, berhitung dasar', 'Jadwal rutin', 'Suasana belajar nyaman'],
    classes: ['TK A', 'TK B'],
  },
  {
    level: 'SD',
    tag: 'Kelas 1 – 6',
    desc: 'Pendampingan pelajaran sekolah untuk kelas 1–6.',
    normalPrice: 125000,
    promoPrice: 100000,
    features: ['Pendampingan pelajaran sekolah', 'Beragam mata pelajaran', 'Jadwal rutin', 'Materi mengikuti kebutuhan anak'],
    classes: ['Kelas 1', 'Kelas 2', 'Kelas 3', 'Kelas 4', 'Kelas 5', 'Kelas 6'],
  },
];

export const SESSIONS: Session[] = [
  { id: '1', name: 'Sesi 1 · Sore', time: '15.00 – 17.00', days: 'Kamis – Minggu' },
  { id: '2', name: 'Sesi 2 · Malam', time: '18.00 – 20.00', days: 'Kamis – Minggu' },
];

export const SUBJECTS: Subject[] = [
  { name: 'Matematika', desc: 'Berhitung, konsep bilangan, hingga soal cerita sesuai materi kelas.', icon: 'calc', tone: 'primary' },
  { name: 'Bahasa', desc: 'Bahasa Indonesia, Bahasa Inggris, dan Bahasa Jawa.', icon: 'book', tone: 'peach' },
  { name: 'PAI & BTQ', desc: "Pendidikan Agama Islam serta Baca Tulis Al-Qur'an.", icon: 'heart', tone: 'green' },
  { name: 'Pendidikan Pancasila', desc: 'Nilai, sikap, dan pengetahuan kewarganegaraan sesuai kurikulum.', icon: 'flag', tone: 'yellow' },
  { name: 'IPAS', desc: 'Ilmu Pengetahuan Alam dan Sosial dengan contoh sehari-hari.', icon: 'leaf', tone: 'purple' },
];

export const FAQS: Faq[] = [
  { q: 'Bimbingan belajar ini untuk kelas berapa?', a: 'Untuk anak TK (TK A dan TK B) serta SD kelas 1 sampai 6.' },
  { q: 'Apa saja mata pelajarannya?', a: 'SD: Matematika, Bahasa Indonesia, Bahasa Inggris, Bahasa Jawa, PAI, BTQ, Pendidikan Pancasila, dan IPAS. TK: pengenalan angka dan huruf, membaca, menulis, dan berhitung dasar.' },
  { q: 'Berapa biaya per bulan?', a: 'Sedang ada harga promo: TK Rp85.000 per bulan (normal Rp100.000) dan SD Rp100.000 per bulan (normal Rp125.000).' },
  { q: 'Bagaimana memilih jadwal?', a: 'Pilih Sesi 1 (15.00–17.00) atau Sesi 2 (18.00–20.00) saat mendaftar. Keduanya berlangsung Kamis sampai Minggu.' },
  { q: 'Apakah bisa pindah sesi?', a: 'Bisa. Hubungi admin melalui WhatsApp untuk menyesuaikan sesi dengan ketersediaan tempat.' },
  { q: 'Bagaimana cara mendaftar?', a: 'Isi formulir pendaftaran singkat di website ini, lalu admin akan menghubungi Anda melalui WhatsApp untuk konfirmasi.' },
  { q: 'Bagaimana sistem pembayarannya?', a: 'Pembayaran dilakukan per bulan. Admin akan mengirimkan invoice melalui WhatsApp setiap periode.' },
];

export const STEPS = [
  { title: 'Isi Data Anak', desc: 'Formulir singkat, kurang dari 2 menit.', icon: 'pen', tone: 'primary' },
  { title: 'Pilih Sesi', desc: 'Sesi sore atau malam.', icon: 'clock', tone: 'peach' },
  { title: 'Admin Menghubungi', desc: 'Konfirmasi lewat WhatsApp.', icon: 'wa', tone: 'green' },
  { title: 'Mulai Belajar', desc: 'Anak siap belajar di sesi pilihan.', icon: 'book', tone: 'yellow' },
] as const;

export const NAV = [
  ['#program', 'Program'],
  ['#jadwal', 'Jadwal'],
  ['#biaya', 'Biaya'],
  ['#tentang', 'Tentang'],
  ['#faq', 'FAQ'],
] as const;

export const rupiah = (n: number) => 'Rp' + n.toLocaleString('id-ID');
