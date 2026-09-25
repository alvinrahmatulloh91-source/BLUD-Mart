import { eq, and } from "drizzle-orm";
import { db } from "@/lib/db";
import { units, products, services } from "@/lib/db/schema";
import type { Unit, Product, Service } from "@/types";

// ============================================
// FALLBACK DEMO DATA
// Used when the database is not configured/reachable,
// so the public site keeps working out of the box.
// ============================================

const DEMO_UNITS: Unit[] = [
  {
    id: "demo-k-tuba",
    name: "K-Tuba Digital Printing",
    slug: "k-tuba-digital-printing",
    description:
      "Layanan digital printing profesional untuk kebutuhan sekolah dan umum. Banner, poster, brosur, dan berbagai media cetak lainnya.",
    category: "Digital Printing / Produksi",
    logo: null,
    coverImage: null,
    isPublic: true,
    isActive: true,
    isDemo: true,
    adminId: null,
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2024-01-01"),
  },
  {
    id: "demo-ssd",
    name: "Solusi Sistem Digital (SSD)",
    slug: "solusi-sistem-digital",
    description:
      "Pengembangan perangkat lunak dan sistem informasi. Website, aplikasi, dan solusi digital untuk berbagai kebutuhan.",
    category: "Pengembangan Perangkat Lunak",
    logo: null,
    coverImage: null,
    isPublic: true,
    isActive: true,
    isDemo: true,
    adminId: null,
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2024-01-01"),
  },
  {
    id: "demo-jari-manis",
    name: "Jari Manis",
    slug: "jari-manis",
    description:
      "Unit produksi kreatif dengan fokus pada karya seni dan desain.",
    category: "Kreatif & Desain",
    logo: null,
    coverImage: null,
    isPublic: true,
    isActive: true,
    isDemo: true,
    adminId: null,
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2024-01-01"),
  },
  {
    id: "demo-skansaba-it",
    name: "Skansaba IT Solution",
    slug: "skansaba-it-solution",
    description:
      "Layanan IT dan digital service. Pembuatan website, sistem informasi, konsultasi IT, dan solusi digital.",
    category: "IT & Digital Service",
    logo: null,
    coverImage: null,
    isPublic: true,
    isActive: true,
    isDemo: true,
    adminId: null,
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2024-01-01"),
  },
  {
    id: "demo-lkm",
    name: "LKM Mitra Siswa Abadi",
    slug: "lkm-mitra-siswa-abadi",
    description:
      "Lembaga Keuangan Mikro untuk siswa. Layanan keuangan dan pembiayaan untuk kebutuhan produktif.",
    category: "Keuangan & Perbankan",
    logo: null,
    coverImage: null,
    isPublic: true,
    isActive: true,
    isDemo: true,
    adminId: null,
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2024-01-01"),
  },
  {
    id: "demo-store",
    name: "SKANSABA STORE",
    slug: "skansaba-store",
    description:
      "Toko merchandise dan produk kreatif sekolah. Produk non-makanan, atribut sekolah, dan produk kreatif siswa.",
    category: "Retail & Merchandise",
    logo: null,
    coverImage: null,
    isPublic: true,
    isActive: true,
    isDemo: true,
    adminId: null,
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2024-01-01"),
  },
];

const DEMO_PRODUCTS: Product[] = [
  {
    id: "demo-p1",
    name: "Cetak Banner",
    slug: "cetak-banner",
    description: "Banner vinyl berkualitas tinggi untuk promosi dan acara.",
    type: "SERVICE",
    price: 25000,
    unitId: "demo-k-tuba",
    categoryId: null,
    images: [],
    status: "PUBLISHED",
    estimatedDuration: "1-2 hari",
    isDemo: true,
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2024-01-01"),
  },
  {
    id: "demo-p2",
    name: "Cetak Brosur",
    slug: "cetak-brosur",
    description: "Brosur lipat dengan berbagai ukuran dan jenis kertas.",
    type: "SERVICE",
    price: 15000,
    unitId: "demo-k-tuba",
    categoryId: null,
    images: [],
    status: "PUBLISHED",
    estimatedDuration: "2-3 hari",
    isDemo: true,
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2024-01-01"),
  },
  {
    id: "demo-p3",
    name: "Desain Grafis",
    slug: "desain-grafis",
    description: "Jasa desain grafis untuk banner, brosur, logo, dll.",
    type: "DIGITAL_SERVICE",
    price: 50000,
    unitId: "demo-k-tuba",
    categoryId: null,
    images: [],
    status: "PUBLISHED",
    estimatedDuration: "2-3 hari",
    isDemo: true,
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2024-01-01"),
  },
  {
    id: "demo-p4",
    name: "Kaos Sekolah",
    slug: "kaos-sekolah",
    description: "Kaos identitas sekolah dengan berbagai ukuran.",
    type: "PRODUCT",
    price: 75000,
    unitId: "demo-store",
    categoryId: null,
    images: [],
    status: "PUBLISHED",
    estimatedDuration: null,
    isDemo: true,
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2024-01-01"),
  },
  {
    id: "demo-p5",
    name: "Tas Sekolah",
    slug: "tas-sekolah",
    description: "Tas sekolah berkualitas dengan desain eksklusif.",
    type: "PRODUCT",
    price: 150000,
    unitId: "demo-store",
    categoryId: null,
    images: [],
    status: "PUBLISHED",
    estimatedDuration: null,
    isDemo: true,
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2024-01-01"),
  },
];

const DEMO_SERVICES: Service[] = [
  {
    id: "demo-s1",
    name: "Pembuatan Website",
    slug: "pembuatan-website",
    description:
      "Jasa pembuatan website responsive untuk profil perusahaan atau toko online.",
    unitId: "demo-ssd",
    priceFrom: 500000,
    duration: "7-14 hari",
    requirements: "Konten, logo, referensi desain",
    status: "PUBLISHED",
    isDemo: true,
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2024-01-01"),
  },
  {
    id: "demo-s2",
    name: "Sistem Informasi",
    slug: "sistem-informasi",
    description: "Pengembangan sistem informasi berbasis web.",
    unitId: "demo-ssd",
    priceFrom: 1000000,
    duration: "14-30 hari",
    requirements: "Dokumentasi kebutuhan, flow bisnis",
    status: "PUBLISHED",
    isDemo: true,
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2024-01-01"),
  },
  {
    id: "demo-s3",
    name: "Konsultasi IT",
    slug: "konsultasi-it",
    description: "Konsultasi teknologi informasi dan transformasi digital.",
    unitId: "demo-ssd",
    priceFrom: 150000,
    duration: "Per sesi",
    requirements: "Topik konsultasi",
    status: "PUBLISHED",
    isDemo: true,
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2024-01-01"),
  },
];

async function tryDb<T>(fn: () => Promise<T>, fallback: T): Promise<T> {
  try {
    if (!process.env.DATABASE_URL) return fallback;
    return await fn();
  } catch (err) {
    console.warn("[data] Database unavailable, using demo data:", (err as Error).message);
    return fallback;
  }
}

export async function getPublicUnits(): Promise<Unit[]> {
  return tryDb(async () => {
    const rows = await db
      .select()
      .from(units)
      .where(and(eq(units.isPublic, true), eq(units.isActive, true)));
    if (rows.length === 0) return DEMO_UNITS;
    return rows as Unit[];
  }, DEMO_UNITS);
}

export async function getUnitBySlug(slug: string): Promise<Unit | null> {
  const demo = DEMO_UNITS.find((u) => u.slug === slug) ?? null;
  return tryDb(async () => {
    const rows = await db.select().from(units).where(eq(units.slug, slug)).limit(1);
    if (rows[0]) return rows[0] as Unit;
    return demo;
  }, demo);
}

export async function getUnitProducts(unitId: string): Promise<Product[]> {
  return tryDb(async () => {
    const rows = await db
      .select()
      .from(products)
      .where(and(eq(products.unitId, unitId), eq(products.status, "PUBLISHED")));
    if (rows.length === 0) return DEMO_PRODUCTS.filter((p) => p.unitId === unitId);
    return rows.map((r) => ({ ...r, price: Number(r.price) })) as Product[];
  }, DEMO_PRODUCTS.filter((p) => p.unitId === unitId));
}

export async function getUnitServices(unitId: string): Promise<Service[]> {
  return tryDb(async () => {
    const rows = await db
      .select()
      .from(services)
      .where(and(eq(services.unitId, unitId), eq(services.status, "PUBLISHED")));
    if (rows.length === 0) return DEMO_SERVICES.filter((s) => s.unitId === unitId);
    return rows.map((r) => ({ ...r, priceFrom: r.priceFrom ? Number(r.priceFrom) : null })) as Service[];
  }, DEMO_SERVICES.filter((s) => s.unitId === unitId));
}
