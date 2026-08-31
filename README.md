# SKANSABA BLUD-MART - SMKN 1 BANTUL

Platform Digital BLUD (Badan Layanan Umum Daerah) untuk SMKN 1 Bantul.

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
PEMESANAN
        ↓
TRANSAKSI
```

## 📋 Fitur Utama

### Layer 1: Base Website SMKN 1 Bantul
- Beranda
- Profil
- Program Keahlian
- Kesiswaan
- Berita
- Agenda
- Galeri
- Kontak

### Layer 2: Platform BLUD
- Portal Skansaba BLUD-Mart
- Direktori Unit Produksi
- Website Mandiri per Unit
- Katalog per Unit
- Sistem Pemesanan
- Manajemen Keranjang (per unit)
- Checkout & Pembayaran (simulasi)
- Tracking Pesanan

### Admin Panel
- Super Admin: Mengelola semua data
- BLUD Admin: Mengelola portal BLUD
- Unit Admin: Mengelola unit masing-masing
- Customer: Manajemen pesanan pribadi

## 🛠️ Tech Stack

**Frontend:**
- Next.js 15 (App Router)
- TypeScript
- React 19
- Tailwind CSS
- shadcn/ui components
- Lucide React Icons
- Zustand (state management)
- TanStack Table
- Recharts

**Backend:**
- Next.js Route Handlers
- Server Actions
- Prisma ORM
- PostgreSQL
- Auth.js (NextAuth)
- Zod validation
- React Hook Form

**Infrastructure:**
- Vercel / VPS Linux
- PostgreSQL (managed/self-hosted)
- S3-compatible storage (optional)

## 🚀 Quick Start

### Prerequisites
- Node.js 20+
- PostgreSQL database
- npm/pnpm/yarn

### 1. Install Dependencies

```bash
npm install
```

### 2. Setup Environment Variables

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

Edit `.env` dengan konfigurasi Anda:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/skansaba_blud?schema=public"
NEXTAUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"
```

### 3. Setup Database

Generate Prisma Client:

```bash
npx prisma generate
```

Run migrations:

```bash
npx prisma migrate dev --name init
```

Seed database with demo data:

```bash
npx prisma db seed
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📁 Struktur Folder

```
src/
├── app/
│   ├── (school)/          # Base website SMKN 1 Bantul
│   │   ├── page.tsx       # Homepage
│   │   ├── profil/
│   │   ├── program-keahlian/
│   │   ├── kesiswaan/
│   │   ├── berita/
│   │   ├── agenda/
│   │   ├── galeri/
│   │   └── kontak/
│   ├── blud/              # Platform BLUD
│   │   ├── page.tsx       # BLUD homepage
│   │   ├── unit/          # Unit directory
│   │   ├── [unitSlug]/    # Dynamic unit mini-site
│   │   │   ├── page.tsx   # Unit homepage
│   │   │   ├── katalog/   # Unit catalog
│   │   │   ├── layanan/   # Unit services
│   │   │   ├── portofolio/
│   │   │   └── kontak/
│   │   ├── karya-siswa/   # Student works
│   │   └── tentang/       # About BLUD
│   ├── admin/             # Admin panel
│   │   ├── blud/          # BLUD admin dashboard
│   │   └── unit/          # Unit admin dashboard
│   └── api/               # API routes
├── components/
│   ├── ui/                # Base UI components
│   ├── school/            # School website components
│   ├── blud/              # BLUD components
│   ├── admin/             # Admin components
│   └── forms/             # Form components
├── lib/
│   ├── auth/              # Authentication utilities
│   ├── db/                # Database client
│   ├── validations/       # Zod schemas
│   └── utils/             # Utility functions
├── server/
│   ├── services/          # Business logic
│   └── repositories/      # Data access layer
├── hooks/                 # Custom React hooks
└── types/                 # TypeScript types
prisma/
├── schema.prisma          # Database schema
└── seed.ts                # Database seeder
```

## 👥 User Roles

### SUPER_ADMIN
- Mengelola semua unit
- Mengelola semua pengguna
- Mengakses semua data
- Konfigurasi sistem

### BLUD_ADMIN
- Melihat semua unit
- Mengelola data BLUD umum
- Mengelola karya siswa
- Laporan aktivitas

### UNIT_ADMIN
- Hanya melihat unit miliknya
- Kelola produk/jasa unit
- Kelola portofolio unit
- Lihat pesanan unit
- **Authorization enforced di server**

### CUSTOMER
- Browse unit dan katalog
- Buat pesanan
- Lihat pesanan sendiri
- Kelola profil

## 🔐 Default Login Credentials

Setelah menjalankan seed:

| Role | Email | Password |
|------|-------|----------|
| Super Admin | superadmin@smkn1bantul.sch.id | admin123 |
| BLUD Admin | bludadmin@smkn1bantul.sch.id | admin123 |
| Unit Admin (K-Tuba) | ktuba@smkn1bantul.sch.id | admin123 |

## 🏢 Unit Produksi

Unit yang tersedia dalam sistem:

1. **K-Tuba Digital Printing** - Digital Printing / Produksi
2. **Solusi Sistem Digital (SSD)** - Pengembangan Perangkat Lunak
3. **Jari Manis** - Kreatif & Desain
4. **Skansaba IT Solution** - IT & Digital Service
5. **LKM Mitra Siswa Abadi** - Keuangan & Perbankan
6. **SKANSABA STORE** - Retail & Merchandise

*Note: Cafetaria ada di database tetapi tidak ditampilkan di portal publik (isPublic=false)*

## 🎨 Design System

**Warna:**
- Primary: `#0033A0` (Blue)
- Secondary: `#F7941D` (Orange)
- Background: `#FFFFFF`
- Soft Background: `#F5F7FA`
- Text: `#172033`

**Style:**
- Modern & Profesional
- Clean & Minimalis
- Education Technology
- Rounded corners
- Subtle shadows
- Thin borders
- Responsive

## 📱 Responsive Design

- **Desktop:** 3-4 cards per row, sidebar navigation
- **Tablet:** Responsive grid, drawer menu
- **Mobile:** Hamburger menu, bottom navigation, 1-2 column cards

## 🔒 Security Features

- Server-side authorization (RBAC)
- Password hashing (bcrypt)
- CSRF protection
- Input validation (Zod)
- SQL injection prevention (Prisma)
- Secure cookies
- Environment variables
- Rate limiting ready

## 🛒 Shopping Flow

1. Pilih Unit dari direktori
2. Masuk ke website unit
3. Browse katalog unit
4. Tambah ke keranjang (hanya produk dari unit yang sama)
5. Checkout (form customer info)
6. Pembayaran (simulasi QRIS/Transfer)
7. Tracking pesanan

**Important:** Keranjang hanya bisa berisi produk dari SATU unit. Jika user mencoba menambah produk dari unit lain, sistem akan meminta konfirmasi untuk mengosongkan keranjang.

## 📊 Database Models

Core models:
- User, Account, Session (Auth)
- Unit, UnitMember
- Product, Service, Category
- Portfolio, StudentWork
- Cart, CartItem
- Order, OrderItem, Payment
- SchoolPage, SchoolNews, SchoolEvent

## 🧪 Testing

Basic tests included:
- Customer browsing units
- Unit-specific catalog
- Single-unit order creation
- Authorization checks
- Search scoped to unit

Run tests:
```bash
npm test
```

## 📝 Important Rules

1. **1 UP = 1 Website** - Setiap unit punya mini-site mandiri
2. **No Global Catalog** - Katalog hanya di level unit
3. **No Global Search** - Search hanya di dalam unit
4. **Single Unit Cart** - Tidak boleh campur produk antar unit
5. **Server-side Authorization** - UNIT_ADMIN hanya akses unit sendiri
6. **No Food Display** - Cafetaria tidak tampil di portal publik
7. **Dummy Data Labelled** - Data demo ditandai isDemo=true

## 🚀 Production Deployment

### Vercel

1. Push code ke GitHub
2. Connect repository di Vercel
3. Set environment variables
4. Deploy

### VPS Linux

1. Build aplikasi:
```bash
npm run build
```

2. Setup PM2:
```bash
pm2 start npm --name "skansaba-blud" -- start
```

3. Setup reverse proxy (Nginx)

## 📖 API Endpoints

### Public
- `GET /api/blud/units` - List all public units
- `GET /api/blud/units/[slug]` - Unit detail
- `GET /api/blud/units/[slug]/products` - Unit products
- `GET /api/blud/units/[slug]/services` - Unit services
- `GET /api/karya-siswa` - Student works

### Protected
- `POST /api/orders` - Create order
- `GET /api/orders` - User orders
- `GET /api/orders/[id]` - Order detail

### Admin
- `POST /api/admin/units` - Create unit
- `PUT /api/admin/units/[id]` - Update unit
- `POST /api/admin/products` - Create product
- `DELETE /api/admin/products/[id]` - Delete product

## 🤝 Contributing

1. Fork repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request

## 📄 License

Proprietary - SMKN 1 Bantul

---

**Developed for SMKN 1 Bantul BLUD Digitalization**

For questions or support, contact the development team.
