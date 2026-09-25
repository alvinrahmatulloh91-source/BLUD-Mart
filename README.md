# SKANSABA BLUD-MART - SMKN 1 BANTUL

Platform Digital BLUD (Badan Layanan Umum Daerah) untuk SMKN 1 Bantul — dibangun dengan **Astro**, **Drizzle ORM**, dan **MySQL**.

## 🏗️ Arsitektur

```
SMKN 1 BANTUL
        ↓
PORTAL BLUD (Skansaba BLUD-Mart)
        ↓
SEMUA UNIT PRODUKSI
        ↓
PILIH 1 UNIT
        ↓
WEBSITE MANDIRI UNIT
        ↓
KATALOG MANDIRI UNIT
        ↓
PRODUK / JASA / LAYANAN
        ↓
PEMESANAN → TRANSAKSI
```

## 🛠️ Tech Stack

- **Framework:** Astro 5 (output `server`, adapter Node.js)
- **Bahasa:** TypeScript strict
- **Styling:** Tailwind CSS 3
- **Database:** MySQL + Drizzle ORM (mysql2)
- **Icons:** Inline SVG (gaya Lucide)
- **Validasi:** Zod

## 🚀 Quick Start

### Prerequisites
- Node.js 18.17+ / 20+
- MySQL 8+

### 1. Install Dependencies

```bash
npm install
```

### 2. Setup Environment

```bash
cp .env.example .env
```

Edit `.env`:

```env
DATABASE_URL="mysql://root:password@localhost:3306/skansaba_blud"
```

### 3. Setup Database

Buat database, lalu push schema dan seed:

```bash
mysql -u root -e "CREATE DATABASE IF NOT EXISTS skansaba_blud"

npm run db:push      # push schema Drizzle ke MySQL
npm run db:seed      # isi data demo
```

Atau gunakan migration files:

```bash
npm run db:generate  # generate migration dari schema
npm run db:migrate   # jalankan migration
```

### 4. Run Development Server

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000)

> **Catatan:** Tanpa `DATABASE_URL`, situs tetap berjalan dengan **data demo** (fallback) sehingga cocok untuk preview cepat.

## 📜 Scripts

| Perintah | Keterangan |
|---|---|
| `npm run dev` | Development server (Astro) |
| `npm run build` | Build produksi |
| `npm run preview` | Preview hasil build |
| `npm run check` | `astro check` (type checking) |
| `npm run db:push` | Push schema ke database |
| `npm run db:generate` | Generate migration |
| `npm run db:migrate` | Jalankan migration |
| `npm run db:studio` | Drizzle Studio |
| `npm run db:seed` | Seed data demo |

## 📁 Struktur Folder

```
src/
├── components/          # Komponen Astro (header, footer, link, icons)
├── layouts/
│   └── BaseLayout.astro # Layout dasar (head, meta, font)
├── lib/
│   ├── data/            # Data layer (units, student works) + fallback demo
│   ├── db/              # Drizzle client, schema, seed
│   ├── fonts.ts         # Font loader
│   ├── utils.ts         # formatRupiah, formatDate, dll
│   └── validations.ts   # Zod schemas
├── pages/
│   ├── index.astro              # Beranda sekolah
│   ├── 404.astro                # Not found
│   ├── api/health.ts            # API endpoint contoh
│   └── blud/
│       ├── index.astro          # Beranda BLUD
│       ├── tentang.astro        # Tentang BLUD
│       ├── unit/index.astro     # Direktori unit
│       ├── karya-siswa/         # Karya siswa
│       └── [unitSlug]/          # Mini-site unit
│           ├── index.astro      # Beranda unit
│           ├── katalog.astro    # Katalog produk
│           ├── layanan.astro    # Layanan
│           ├── portofolio.astro # Portofolio
│           └── kontak.astro     # Kontak
├── styles/globals.css   # Tailwind + design tokens
└── types/index.ts       # Shared types
```

## 🏢 Unit Produksi

1. **K-Tuba Digital Printing** - Digital Printing / Produksi
2. **Solusi Sistem Digital (SSD)** - Pengembangan Perangkat Lunak
3. **Jari Manis** - Kreatif & Desain
4. **Skansaba IT Solution** - IT & Digital Service
5. **LKM Mitra Siswa Abadi** - Keuangan & Perbankan
6. **SKANSABA STORE** - Retail & Merchandise

*Note: Cafetaria ada di database tetapi tidak ditampilkan di portal publik (isPublic=false)*

## 🎨 Design System

- Primary: `#0033A0` (Blue)
- Secondary: `#F7941D` (Orange)
- Background: `#FFFFFF`
- Text: `#172033`

## 🔒 Security Features

- Input validation (Zod)
- SQL injection prevention (Drizzle parameterized queries)
- Environment variables untuk kredensial

## 🛒 Shopping Flow

1. Pilih Unit dari direktori
2. Masuk ke website unit
3. Browse katalog unit
4. Tambah ke keranjang (hanya produk dari unit yang sama)
5. Checkout (form customer info)
6. Pembayaran (simulasi QRIS/Transfer)
7. Tracking pesanan

**Penting:** Keranjang hanya boleh berisi produk dari SATU unit.

## 📖 API Endpoints

- `GET /api/health` - Health check
- `GET /blud/unit` - Direktori unit (SSR)
- `GET /blud/[unitSlug]` - Mini-site unit (SSR)

## 🚀 Production Deployment

```bash
npm run build
node ./dist/server/entry.mjs
```

Atau dengan PM2:

```bash
pm2 start dist/server/entry.mjs --name skansaba-blud
```

Setup reverse proxy Nginx ke port aplikasi (default 3000).

## 📄 License

Proprietary - SMKN 1 Bantul

---

**Developed for SMKN 1 Bantul BLUD Digitalization**
