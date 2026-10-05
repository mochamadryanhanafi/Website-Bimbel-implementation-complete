const number = (import.meta.env.PUBLIC_WA_NUMBER ?? '6281200000000').replace(/\D/g, '');

export const waLink = (text: string) => `https://wa.me/${number}?text=${encodeURIComponent(text)}`;

export const WA_ASK = waLink('Halo Admin, saya ingin bertanya tentang Naa Bimbel (TK/SD).');
