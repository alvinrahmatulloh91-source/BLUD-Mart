import { eq, desc } from "drizzle-orm";
import { db } from "@/lib/db";
import { studentWorks } from "@/lib/db/schema";
import type { StudentWork } from "@/types";

const DEMO_WORKS: StudentWork[] = [
  {
    id: "demo-w1",
    title: "Website E-Commerce UMKM",
    slug: "website-e-commerce-umkm",
    description:
      "Platform e-commerce untuk membantu UMKM lokal go digital dengan fitur katalog produk, keranjang belanja, dan sistem pembayaran.",
    major: "RPL",
    unitId: null,
    studentTeam: "Tim SSD 2024",
    year: 2024,
    images: [],
    status: "PUBLISHED",
    isDemo: true,
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2024-01-01"),
  },
  {
    id: "demo-w2",
    title: "Sistem Informasi Perpustakaan",
    slug: "sistem-informasi-perpustakaan",
    description:
      "Digitalisasi manajemen perpustakaan sekolah dengan fitur peminjaman, pengembalian, dan katalog buku online.",
    major: "RPL",
    unitId: null,
    studentTeam: "Tim IT Solution",
    year: 2024,
    images: [],
    status: "PUBLISHED",
    isDemo: true,
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2024-01-01"),
  },
  {
    id: "demo-w3",
    title: "Branding K-Tuba",
    slug: "branding-k-tuba",
    description:
      "Redesign identitas visual K-Tuba Digital Printing termasuk logo, kartu nama, dan materi promosi.",
    major: "DKV",
    unitId: null,
    studentTeam: "Tim Desain",
    year: 2024,
    images: [],
    status: "PUBLISHED",
    isDemo: true,
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2024-01-01"),
  },
  {
    id: "demo-w4",
    title: "Aplikasi Kasir LKM",
    slug: "aplikasi-kasir-lkm",
    description:
      "Sistem point of sale untuk LKM Mitra Siswa Abadi dengan fitur transaksi, laporan, dan manajemen anggota.",
    major: "AKL",
    unitId: null,
    studentTeam: "Tim LKM",
    year: 2024,
    images: [],
    status: "PUBLISHED",
    isDemo: true,
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2024-01-01"),
  },
];

export async function getStudentWorks(): Promise<StudentWork[]> {
  try {
    if (!process.env.DATABASE_URL) return DEMO_WORKS;
    const rows = await db
      .select()
      .from(studentWorks)
      .where(eq(studentWorks.status, "PUBLISHED"))
      .orderBy(desc(studentWorks.year));
    if (rows.length === 0) return DEMO_WORKS;
    return rows as StudentWork[];
  } catch (err) {
    console.warn("[data] Database unavailable, using demo data:", (err as Error).message);
    return DEMO_WORKS;
  }
}
