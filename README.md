# SKANSABA BLUD-MART

Portal pusat BLUD SMKN 1 Bantul. Aplikasi Laravel tunggal menyajikan landing page dan directory Unit Produksi melalui React, TypeScript, Inertia, Tailwind CSS, dan Vite.

Website Unit Produksi berada di luar aplikasi. Setiap kartu hanya menyimpan informasi singkat dan `website_url` eksternal opsional; tidak ada halaman unit internal, katalog, keranjang, transaksi, atau checkout.

## Kebutuhan

- PHP 8.3+
- Composer
- Node.js dan npm
- MySQL

Versi framework dan adapter mengikuti `composer.lock` dan `package-lock.json`.

## Menjalankan lokal

1. Buat database MySQL bernama `skansaba_blud_mart`.
2. Salin `.env.example` ke `.env`, lalu isi `DB_HOST`, `DB_PORT`, `DB_DATABASE`, `DB_USERNAME`, dan `DB_PASSWORD`.
3. Jalankan `composer install` dan `npm install`.
4. Jalankan `php artisan key:generate`.
5. Jalankan `php artisan migrate --seed`.
6. Jalankan `npm run dev` dan `php artisan serve`.

Seeder Unit Produksi hanya menggunakan dua belas nama yang disediakan pada brief. Deskripsi, logo, dan URL yang tidak tersedia dibiarkan kosong. Unit lama yang bukan bagian dari daftar awal dinonaktifkan, tidak dihapus.

Tidak ada akun admin dengan kata sandi bawaan. Buat akun admin yang berwenang secara manual sebelum memakai CMS unit.

## Route publik

- `/` — landing page
- `/semua-unit` — seluruh kartu Unit Produksi
- `/tentang-blud` — pengenalan BLUD
- `/karya-siswa` — informasi karya siswa
- `/sitemap.xml` — sitemap halaman publik

Tidak ada route detail Unit Produksi. Untuk unit tanpa URL, portal menampilkan tombol nonaktif “Website Segera Hadir”. URL yang tersedia membuka situs eksternal dengan `target="_blank"` dan `rel="noopener noreferrer"`.
