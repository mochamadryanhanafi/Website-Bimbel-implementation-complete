# Naa Bimbel — Astro

```
src/
  domain/          entitas + data konten (tanpa dependensi framework)
  application/     use case: validasi form, bangun pesan WA (+ test)
  infrastructure/  adapter eksternal: link WhatsApp (env PUBLIC_WA_NUMBER)
  presentation/    layout, komponen .astro, CSS token
  pages/           routing Astro
public/images/     hero.png (Hero), section.png (About)
```

```sh
cp .env.example .env   # set PUBLIC_WA_NUMBER
npm i
npm run dev
npm test
```

Aturan dependensi: `presentation → application → domain`; `infrastructure` hanya diimpor oleh presentation/application.
