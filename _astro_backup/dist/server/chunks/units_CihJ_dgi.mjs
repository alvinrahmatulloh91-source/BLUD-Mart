import { and, eq } from 'drizzle-orm';
import { d as db, p as products, a as services, u as units } from './index_DOAsqgH8.mjs';

const DEMO_UNITS = [
  {
    id: "demo-k-tuba",
    name: "K-Tuba Digital Printing",
    slug: "k-tuba-digital-printing",
    description: "Layanan digital printing profesional untuk kebutuhan sekolah dan umum. Banner, poster, brosur, dan berbagai media cetak lainnya.",
    category: "Digital Printing / Produksi",
    logo: null,
    coverImage: null,
    isPublic: true,
    isActive: true,
    isDemo: true,
    adminId: null,
    createdAt: /* @__PURE__ */ new Date("2024-01-01"),
    updatedAt: /* @__PURE__ */ new Date("2024-01-01")
  },
  {
    id: "demo-ssd",
    name: "Solusi Sistem Digital (SSD)",
    slug: "solusi-sistem-digital",
    description: "Pengembangan perangkat lunak dan sistem informasi. Website, aplikasi, dan solusi digital untuk berbagai kebutuhan.",
    category: "Pengembangan Perangkat Lunak",
    logo: null,
    coverImage: null,
    isPublic: true,
    isActive: true,
    isDemo: true,
    adminId: null,
    createdAt: /* @__PURE__ */ new Date("2024-01-01"),
    updatedAt: /* @__PURE__ */ new Date("2024-01-01")
  },
  {
    id: "demo-jari-manis",
    name: "Jari Manis",
    slug: "jari-manis",
    description: "Unit produksi kreatif dengan fokus pada karya seni dan desain.",
    category: "Kreatif & Desain",
    logo: null,
    coverImage: null,
    isPublic: true,
    isActive: true,
    isDemo: true,
    adminId: null,
    createdAt: /* @__PURE__ */ new Date("2024-01-01"),
    updatedAt: /* @__PURE__ */ new Date("2024-01-01")
  },
  {
    id: "demo-skansaba-it",
    name: "Skansaba IT Solution",
    slug: "skansaba-it-solution",
    description: "Layanan IT dan digital service. Pembuatan website, sistem informasi, konsultasi IT, dan solusi digital.",
    category: "IT & Digital Service",
    logo: null,
    coverImage: null,
    isPublic: true,
    isActive: true,
    isDemo: true,
    adminId: null,
    createdAt: /* @__PURE__ */ new Date("2024-01-01"),
    updatedAt: /* @__PURE__ */ new Date("2024-01-01")
  },
  {
    id: "demo-lkm",
    name: "LKM Mitra Siswa Abadi",
    slug: "lkm-mitra-siswa-abadi",
    description: "Lembaga Keuangan Mikro untuk siswa. Layanan keuangan dan pembiayaan untuk kebutuhan produktif.",
    category: "Keuangan & Perbankan",
    logo: null,
    coverImage: null,
    isPublic: true,
    isActive: true,
    isDemo: true,
    adminId: null,
    createdAt: /* @__PURE__ */ new Date("2024-01-01"),
    updatedAt: /* @__PURE__ */ new Date("2024-01-01")
  },
  {
    id: "demo-store",
    name: "SKANSABA STORE",
    slug: "skansaba-store",
    description: "Toko merchandise dan produk kreatif sekolah. Produk non-makanan, atribut sekolah, dan produk kreatif siswa.",
    category: "Retail & Merchandise",
    logo: null,
    coverImage: null,
    isPublic: true,
    isActive: true,
    isDemo: true,
    adminId: null,
    createdAt: /* @__PURE__ */ new Date("2024-01-01"),
    updatedAt: /* @__PURE__ */ new Date("2024-01-01")
  }
];
const DEMO_PRODUCTS = [
  {
    id: "demo-p1",
    name: "Cetak Banner",
    slug: "cetak-banner",
    description: "Banner vinyl berkualitas tinggi untuk promosi dan acara.",
    type: "SERVICE",
    price: 25e3,
    unitId: "demo-k-tuba",
    categoryId: null,
    images: [],
    status: "PUBLISHED",
    estimatedDuration: "1-2 hari",
    isDemo: true,
    createdAt: /* @__PURE__ */ new Date("2024-01-01"),
    updatedAt: /* @__PURE__ */ new Date("2024-01-01")
  },
  {
    id: "demo-p2",
    name: "Cetak Brosur",
    slug: "cetak-brosur",
    description: "Brosur lipat dengan berbagai ukuran dan jenis kertas.",
    type: "SERVICE",
    price: 15e3,
    unitId: "demo-k-tuba",
    categoryId: null,
    images: [],
    status: "PUBLISHED",
    estimatedDuration: "2-3 hari",
    isDemo: true,
    createdAt: /* @__PURE__ */ new Date("2024-01-01"),
    updatedAt: /* @__PURE__ */ new Date("2024-01-01")
  },
  {
    id: "demo-p3",
    name: "Desain Grafis",
    slug: "desain-grafis",
    description: "Jasa desain grafis untuk banner, brosur, logo, dll.",
    type: "DIGITAL_SERVICE",
    price: 5e4,
    unitId: "demo-k-tuba",
    categoryId: null,
    images: [],
    status: "PUBLISHED",
    estimatedDuration: "2-3 hari",
    isDemo: true,
    createdAt: /* @__PURE__ */ new Date("2024-01-01"),
    updatedAt: /* @__PURE__ */ new Date("2024-01-01")
  },
  {
    id: "demo-p4",
    name: "Kaos Sekolah",
    slug: "kaos-sekolah",
    description: "Kaos identitas sekolah dengan berbagai ukuran.",
    type: "PRODUCT",
    price: 75e3,
    unitId: "demo-store",
    categoryId: null,
    images: [],
    status: "PUBLISHED",
    estimatedDuration: null,
    isDemo: true,
    createdAt: /* @__PURE__ */ new Date("2024-01-01"),
    updatedAt: /* @__PURE__ */ new Date("2024-01-01")
  },
  {
    id: "demo-p5",
    name: "Tas Sekolah",
    slug: "tas-sekolah",
    description: "Tas sekolah berkualitas dengan desain eksklusif.",
    type: "PRODUCT",
    price: 15e4,
    unitId: "demo-store",
    categoryId: null,
    images: [],
    status: "PUBLISHED",
    estimatedDuration: null,
    isDemo: true,
    createdAt: /* @__PURE__ */ new Date("2024-01-01"),
    updatedAt: /* @__PURE__ */ new Date("2024-01-01")
  }
];
const DEMO_SERVICES = [
  {
    id: "demo-s1",
    name: "Pembuatan Website",
    slug: "pembuatan-website",
    description: "Jasa pembuatan website responsive untuk profil perusahaan atau toko online.",
    unitId: "demo-ssd",
    priceFrom: 5e5,
    duration: "7-14 hari",
    requirements: "Konten, logo, referensi desain",
    status: "PUBLISHED",
    isDemo: true,
    createdAt: /* @__PURE__ */ new Date("2024-01-01"),
    updatedAt: /* @__PURE__ */ new Date("2024-01-01")
  },
  {
    id: "demo-s2",
    name: "Sistem Informasi",
    slug: "sistem-informasi",
    description: "Pengembangan sistem informasi berbasis web.",
    unitId: "demo-ssd",
    priceFrom: 1e6,
    duration: "14-30 hari",
    requirements: "Dokumentasi kebutuhan, flow bisnis",
    status: "PUBLISHED",
    isDemo: true,
    createdAt: /* @__PURE__ */ new Date("2024-01-01"),
    updatedAt: /* @__PURE__ */ new Date("2024-01-01")
  },
  {
    id: "demo-s3",
    name: "Konsultasi IT",
    slug: "konsultasi-it",
    description: "Konsultasi teknologi informasi dan transformasi digital.",
    unitId: "demo-ssd",
    priceFrom: 15e4,
    duration: "Per sesi",
    requirements: "Topik konsultasi",
    status: "PUBLISHED",
    isDemo: true,
    createdAt: /* @__PURE__ */ new Date("2024-01-01"),
    updatedAt: /* @__PURE__ */ new Date("2024-01-01")
  }
];
async function tryDb(fn, fallback) {
  try {
    if (!process.env.DATABASE_URL) return fallback;
    return await fn();
  } catch (err) {
    console.warn("[data] Database unavailable, using demo data:", err.message);
    return fallback;
  }
}
async function getPublicUnits() {
  return tryDb(async () => {
    const rows = await db.select().from(units).where(and(eq(units.isPublic, true), eq(units.isActive, true)));
    if (rows.length === 0) return DEMO_UNITS;
    return rows;
  }, DEMO_UNITS);
}
async function getUnitBySlug(slug) {
  const demo = DEMO_UNITS.find((u) => u.slug === slug) ?? null;
  return tryDb(async () => {
    const rows = await db.select().from(units).where(eq(units.slug, slug)).limit(1);
    if (rows[0]) return rows[0];
    return demo;
  }, demo);
}
async function getUnitProducts(unitId) {
  return tryDb(async () => {
    const rows = await db.select().from(products).where(and(eq(products.unitId, unitId), eq(products.status, "PUBLISHED")));
    if (rows.length === 0) return DEMO_PRODUCTS.filter((p) => p.unitId === unitId);
    return rows.map((r) => ({ ...r, price: Number(r.price) }));
  }, DEMO_PRODUCTS.filter((p) => p.unitId === unitId));
}
async function getUnitServices(unitId) {
  return tryDb(async () => {
    const rows = await db.select().from(services).where(and(eq(services.unitId, unitId), eq(services.status, "PUBLISHED")));
    if (rows.length === 0) return DEMO_SERVICES.filter((s) => s.unitId === unitId);
    return rows.map((r) => ({ ...r, priceFrom: r.priceFrom ? Number(r.priceFrom) : null }));
  }, DEMO_SERVICES.filter((s) => s.unitId === unitId));
}

export { getUnitProducts as a, getUnitServices as b, getPublicUnits as c, getUnitBySlug as g };
