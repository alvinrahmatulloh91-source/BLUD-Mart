import "dotenv/config";
import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import bcrypt from "bcryptjs";
import * as schema from "./schema";

const { users, units, products, services, studentWorks, portfolios, schoolPages } =
  schema;

async function main() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not set");
  }

  const pool = mysql.createPool({ uri: process.env.DATABASE_URL });
  const db = drizzle(pool, { schema, mode: "default" });

  console.log("🌱 Starting database seed...");

  // ============================================
  // CREATE ADMIN USERS
  // ============================================

  const hashedPassword = await bcrypt.hash("admin123", 10);

  await db
    .insert(users)
    .values({
      email: "superadmin@smkn1bantul.sch.id",
      name: "Super Administrator",
      password: hashedPassword,
      role: "SUPER_ADMIN",
    })
    .onDuplicateKeyUpdate({ set: { name: "Super Administrator" } });

  await db
    .insert(users)
    .values({
      email: "bludadmin@smkn1bantul.sch.id",
      name: "BLUD Administrator",
      password: hashedPassword,
      role: "BLUD_ADMIN",
    })
    .onDuplicateKeyUpdate({ set: { name: "BLUD Administrator" } });

  console.log("✅ Admin users created");

  // ============================================
  // CREATE UNITS (Unit Produksi / Unit Usaha)
  // ============================================

  const unitList = [
    {
      name: "K-Tuba Digital Printing",
      slug: "k-tuba-digital-printing",
      description:
        "Layanan digital printing profesional untuk kebutuhan sekolah dan umum. Banner, poster, brosur, dan berbagai media cetak lainnya.",
      category: "Digital Printing / Produksi",
      isPublic: true,
      isActive: true,
      isDemo: true,
    },
    {
      name: "Solusi Sistem Digital (SSD)",
      slug: "solusi-sistem-digital",
      description:
        "Pengembangan perangkat lunak dan sistem informasi. Website, aplikasi, dan solusi digital untuk berbagai kebutuhan.",
      category: "Pengembangan Perangkat Lunak",
      isPublic: true,
      isActive: true,
      isDemo: true,
    },
    {
      name: "Jari Manis",
      slug: "jari-manis",
      description:
        "Unit produksi kreatif dengan fokus pada karya seni dan desain.",
      category: "Kreatif & Desain",
      isPublic: true,
      isActive: true,
      isDemo: true,
    },
    {
      name: "Skansaba IT Solution",
      slug: "skansaba-it-solution",
      description:
        "Layanan IT dan digital service. Pembuatan website, sistem informasi, konsultasi IT, dan solusi digital.",
      category: "IT & Digital Service",
      isPublic: true,
      isActive: true,
      isDemo: true,
    },
    {
      name: "LKM Mitra Siswa Abadi",
      slug: "lkm-mitra-siswa-abadi",
      description:
        "Lembaga Keuangan Mikro untuk siswa. Layanan keuangan dan pembiayaan untuk kebutuhan produktif.",
      category: "Keuangan & Perbankan",
      isPublic: true,
      isActive: true,
      isDemo: true,
    },
    {
      name: "SKANSABA STORE",
      slug: "skansaba-store",
      description:
        "Toko merchandise dan produk kreatif sekolah. Produk non-makanan, atribut sekolah, dan produk kreatif siswa.",
      category: "Retail & Merchandise",
      isPublic: true,
      isActive: true,
      isDemo: true,
    },
    {
      name: "Cafetaria",
      slug: "cafetaria",
      description:
        "Unit produksi makanan dan minuman (tidak ditampilkan di portal publik).",
      category: "F&B",
      isPublic: false,
      isActive: true,
      isDemo: true,
    },
  ];

  const createdUnits: Record<string, { id: string; isPublic: boolean; isDemo: boolean; name: string }> = {};

  for (const unit of unitList) {
    await db
      .insert(units)
      .values(unit)
      .onDuplicateKeyUpdate({ set: { name: unit.name } });
  }

  const allUnits = await db.select().from(units);
  for (const u of allUnits) createdUnits[u.slug] = u as any;

  console.log("✅ Units created");

  // Assign admin to K-Tuba as example
  const [ktubaAdmin] = await db
    .insert(users)
    .values({
      email: "ktuba@smkn1bantul.sch.id",
      name: "Admin K-Tuba",
      password: hashedPassword,
      role: "UNIT_ADMIN",
      unitId: createdUnits["k-tuba-digital-printing"].id,
    })
    .onDuplicateKeyUpdate({
      set: { unitId: createdUnits["k-tuba-digital-printing"].id },
    });

  // ============================================
  // CREATE PRODUCTS FOR K-TUBA DIGITAL PRINTING
  // ============================================

  const ktubaProducts = [
    {
      name: "Cetak Banner",
      slug: "cetak-banner",
      description:
        "Banner vinyl berkualitas tinggi untuk berbagai keperluan promosi dan acara.",
      type: "SERVICE" as const,
      price: "25000.00",
      estimatedDuration: "1-2 hari",
      isDemo: true,
    },
    {
      name: "Cetak Brosur",
      slug: "cetak-brosur",
      description: "Brosur lipat dengan berbagai ukuran dan jenis kertas.",
      type: "SERVICE" as const,
      price: "15000.00",
      estimatedDuration: "2-3 hari",
      isDemo: true,
    },
    {
      name: "Cetak Poster",
      slug: "cetak-poster",
      description: "Poster A3+ dengan kualitas cetak tinggi.",
      type: "SERVICE" as const,
      price: "10000.00",
      estimatedDuration: "1 hari",
      isDemo: true,
    },
    {
      name: "Desain Grafis",
      slug: "desain-grafis",
      description:
        "Jasa desain grafis untuk banner, brosur, logo, dan kebutuhan visual lainnya.",
      type: "DIGITAL_SERVICE" as const,
      price: "50000.00",
      estimatedDuration: "2-3 hari",
      isDemo: true,
    },
    {
      name: "Cetak Kartu Nama",
      slug: "cetak-kartu-nama",
      description: "Kartu nama premium dengan berbagai pilihan bahan.",
      type: "SERVICE" as const,
      price: "30000.00",
      estimatedDuration: "2-3 hari",
      isDemo: true,
    },
  ];

  for (const p of ktubaProducts) {
    await db
      .insert(products)
      .values({
        ...p,
        unitId: createdUnits["k-tuba-digital-printing"].id,
        status: "PUBLISHED",
      })
      .onDuplicateKeyUpdate({ set: { price: p.price } });
  }

  console.log("✅ K-Tuba products created");

  // ============================================
  // CREATE SERVICES FOR SSD
  // ============================================

  const ssdServices = [
    {
      name: "Pembuatan Website",
      slug: "pembuatan-website",
      description:
        "Jasa pembuatan website responsive untuk profil perusahaan, toko online, atau kebutuhan lainnya.",
      priceFrom: "500000.00",
      duration: "7-14 hari",
      requirements: "Konten, logo, referensi desain",
      isDemo: true,
    },
    {
      name: "Sistem Informasi",
      slug: "sistem-informasi",
      description:
        "Pengembangan sistem informasi berbasis web untuk manajemen data dan proses bisnis.",
      priceFrom: "1000000.00",
      duration: "14-30 hari",
      requirements: "Dokumentasi kebutuhan, flow bisnis",
      isDemo: true,
    },
    {
      name: "Aplikasi Mobile",
      slug: "aplikasi-mobile",
      description:
        "Pengembangan aplikasi mobile Android/iOS untuk berbagai kebutuhan.",
      priceFrom: "2000000.00",
      duration: "30-60 hari",
      requirements: "Spesifikasi fitur, desain UI/UX",
      isDemo: true,
    },
    {
      name: "Konsultasi IT",
      slug: "konsultasi-it",
      description:
        "Konsultasi terkait teknologi informasi dan transformasi digital.",
      priceFrom: "150000.00",
      duration: "Per sesi",
      requirements: "Topik konsultasi",
      isDemo: true,
    },
  ];

  for (const s of ssdServices) {
    await db
      .insert(services)
      .values({
        ...s,
        unitId: createdUnits["solusi-sistem-digital"].id,
        status: "PUBLISHED",
      })
      .onDuplicateKeyUpdate({ set: { duration: s.duration } });
  }

  console.log("✅ SSD services created");

  // ============================================
  // CREATE PRODUCTS FOR SKANSABA STORE
  // ============================================

  const storeProducts = [
    {
      name: "Kaos Sekolah",
      slug: "kaos-sekolah",
      description: "Kaos identitas sekolah dengan berbagai ukuran.",
      type: "PRODUCT" as const,
      price: "75000.00",
      isDemo: true,
    },
    {
      name: "Tas Sekolah",
      slug: "tas-sekolah",
      description: "Tas sekolah berkualitas dengan desain eksklusif.",
      type: "PRODUCT" as const,
      price: "150000.00",
      isDemo: true,
    },
    {
      name: "ID Card Holder",
      slug: "id-card-holder",
      description: "Tempat ID card dengan lanyard sekolah.",
      type: "PRODUCT" as const,
      price: "25000.00",
      isDemo: true,
    },
    {
      name: "Notebook Custom",
      slug: "notebook-custom",
      description: "Notebook dengan cover custom desain sekolah.",
      type: "PRODUCT" as const,
      price: "35000.00",
      isDemo: true,
    },
  ];

  for (const p of storeProducts) {
    await db
      .insert(products)
      .values({
        ...p,
        unitId: createdUnits["skansaba-store"].id,
        status: "PUBLISHED",
      })
      .onDuplicateKeyUpdate({ set: { price: p.price } });
  }

  console.log("✅ SKANSABA STORE products created");

  // ============================================
  // CREATE STUDENT WORKS
  // ============================================

  const workList = [
    {
      title: "Website E-Commerce UMKM",
      slug: "website-e-commerce-umkm",
      description: "Platform e-commerce untuk membantu UMKM lokal go digital.",
      major: "RPL",
      unitId: createdUnits["solusi-sistem-digital"].id,
      studentTeam: "Tim SSD 2024",
      year: 2024,
      isDemo: true,
    },
    {
      title: "Sistem Informasi Perpustakaan",
      slug: "sistem-informasi-perpustakaan",
      description: "Digitalisasi manajemen perpustakaan sekolah.",
      major: "RPL",
      unitId: createdUnits["skansaba-it-solution"].id,
      studentTeam: "Tim IT Solution",
      year: 2024,
      isDemo: true,
    },
    {
      title: "Branding K-Tuba",
      slug: "branding-k-tuba",
      description: "Redesign identitas visual K-Tuba Digital Printing.",
      major: "DKV",
      unitId: createdUnits["k-tuba-digital-printing"].id,
      studentTeam: "Tim Desain",
      year: 2024,
      isDemo: true,
    },
  ];

  for (const w of workList) {
    await db
      .insert(studentWorks)
      .values({ ...w, status: "PUBLISHED" })
      .onDuplicateKeyUpdate({ set: { year: w.year } });
  }

  console.log("✅ Student works created");

  // ============================================
  // CREATE PORTFOLIOS
  // ============================================

  for (const [slug, unit] of Object.entries(createdUnits)) {
    if (unit.isPublic && !unit.isDemo) continue;

    await db.insert(portfolios).values({
      title: `Portfolio ${unit.name}`,
      description: "Kumpulan karya dan proyek yang telah diselesaikan.",
      unitId: unit.id,
      category: "Proyek",
      year: 2024,
      status: "PUBLISHED",
    });
  }

  console.log("✅ Portfolios created");

  // ============================================
  // CREATE SCHOOL PAGES
  // ============================================

  const pageList = [
    {
      title: "Profil",
      slug: "profil",
      content: "Informasi profil SMKN 1 Bantul.",
      status: "PUBLISHED" as const,
    },
    {
      title: "Program Keahlian",
      slug: "program-keahlian",
      content: "Daftar program keahlian yang tersedia.",
      status: "PUBLISHED" as const,
    },
    {
      title: "Kesiswaan",
      slug: "kesiswaan",
      content: "Informasi kesiswaan dan kegiatan siswa.",
      status: "PUBLISHED" as const,
    },
  ];

  for (const page of pageList) {
    await db
      .insert(schoolPages)
      .values(page)
      .onDuplicateKeyUpdate({ set: { title: page.title } });
  }

  console.log("✅ School pages created");

  console.log("\n🎉 Database seeding completed successfully!");
  console.log("\n📧 Login credentials:");
  console.log("   Super Admin: superadmin@smkn1bantul.sch.id / admin123");
  console.log("   BLUD Admin: bludadmin@smkn1bantul.sch.id / admin123");
  console.log("   Unit Admin (K-Tuba): ktuba@smkn1bantul.sch.id / admin123");

  await pool.end();
}

main().catch((e) => {
  console.error("❌ Seed failed:", e);
  process.exit(1);
});
