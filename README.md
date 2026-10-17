# Website Bijak Diri

Website edukasi interaktif **Bijak Diri** dengan tagline: *“Kenali kebutuhanmu, kelola uangmu, hargai dirimu.”*

## Teknologi
- React
- TypeScript
- Vite

## Menjalankan secara lokal

Pastikan Node.js sudah terpasang, lalu buka terminal di folder proyek dan jalankan:

```bash
npm install
npm run dev
```

Vite akan menampilkan alamat lokal di terminal (biasanya `http://localhost:5173`).

## Memeriksa build produksi

```bash
npm run build
npm run preview
```

Hasil build akan dibuat di folder `dist/`.

## Struktur utama
- `src/pages/` — halaman website
- `src/components/` — komponen antarmuka
- `src/data/content.ts` — data/konten
- `public/` — aset statis
- `index.html` — dokumen HTML utama

## Catatan
File ini berisi kode sumber proyek website yang diekstrak dari file proyek Figma Make. Dependensi (`node_modules`) tidak disertakan; instal dengan `npm install` setelah mengekstrak ZIP.

## Status pemeriksaan
- Struktur arsip ZIP telah diuji dan tidak ditemukan kerusakan kompresi.
- Impor relatif pada file sumber telah diperiksa; tidak ada file impor lokal yang hilang.
- Build produksi belum dapat dikonfirmasi dalam pemeriksaan ini karena proses instalasi dependensi tidak selesai. Setelah membuka proyek, jalankan `npm install` lalu `npm run build` untuk memverifikasi build di komputer kamu.

## Mengunggah ke GitHub
Ekstrak ZIP, lalu unggah **isi folder `Website-Bijak-Diri`** ke repository GitHub. Jangan hanya mengunggah file ZIP jika ingin melihat dan mengedit file sumber langsung di GitHub.
