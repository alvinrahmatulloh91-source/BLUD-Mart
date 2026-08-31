import Link from "next/link";
import { ArrowLeft, Award, User, Calendar, ExternalLink } from "lucide-react";

const karyaSiswa = [
  {
    title: "Website E-Commerce UMKM",
    slug: "website-e-commerce-umkm",
    description: "Platform e-commerce untuk membantu UMKM lokal go digital dengan fitur katalog produk, keranjang belanja, dan sistem pembayaran.",
    major: "RPL",
    unit: "Solusi Sistem Digital",
    unitSlug: "solusi-sistem-digital",
    studentTeam: "Tim SSD 2024",
    year: 2024,
    image: null,
  },
  {
    title: "Sistem Informasi Perpustakaan",
    slug: "sistem-informasi-perpustakaan",
    description: "Digitalisasi manajemen perpustakaan sekolah dengan fitur peminjaman, pengembalian, dan katalog buku online.",
    major: "RPL",
    unit: "Skansaba IT Solution",
    unitSlug: "skansaba-it-solution",
    studentTeam: "Tim IT Solution",
    year: 2024,
    image: null,
  },
  {
    title: "Branding K-Tuba",
    slug: "branding-k-tuba",
    description: "Redesign identitas visual K-Tuba Digital Printing termasuk logo, kartu nama, dan materi promosi.",
    major: "DKV",
    unit: "K-Tuba Digital Printing",
    unitSlug: "k-tuba-digital-printing",
    studentTeam: "Tim Desain",
    year: 2024,
    image: null,
  },
  {
    title: "Aplikasi Kasir LKM",
    slug: "aplikasi-kasir-lkm",
    description: "Sistem point of sale untuk LKM Mitra Siswa Abadi dengan fitur transaksi, laporan, dan manajemen anggota.",
    major: "AKL",
    unit: "LKM Mitra Siswa Abadi",
    unitSlug: "lkm-mitra-siswa-abadi",
    studentTeam: "Tim LKM",
    year: 2024,
    image: null,
  },
];

export default function KaryaSiswaPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-secondary">SKANSABA BLUD-MART</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/blud" className="text-sm font-medium hover:text-primary">Beranda BLUD</Link>
            <Link href="/blud/unit" className="text-sm font-medium hover:text-primary">Semua Unit</Link>
            <Link href="/blud/karya-siswa" className="text-sm font-medium text-primary">Karya Siswa</Link>
            <Link href="/blud/tentang" className="text-sm font-medium hover:text-primary">Tentang BLUD</Link>
          </nav>
          <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
            Kembali ke SMKN 1 Bantul
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="py-12">
        <div className="container">
          <Link href="/blud" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8">
            <ArrowLeft className="h-4 w-4" />
            Kembali ke Beranda BLUD
          </Link>

          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4 text-primary">Karya Siswa</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Portofolio dan karya inovatif siswa SMKN 1 Bantul dari berbagai program keahlian dan unit produksi.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {karyaSiswa.map((karya) => (
              <div key={karya.slug} className="rounded-xl border bg-card overflow-hidden hover:shadow-lg transition-all">
                <div className="h-48 bg-muted flex items-center justify-center">
                  <Award className="h-16 w-16 text-muted-foreground" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                      {karya.major}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {karya.year}
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{karya.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {karya.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {karya.studentTeam}
                    </span>
                  </div>
                  {karya.unit && (
                    <Link
                      href={`/blud/${karya.unitSlug}`}
                      className="inline-flex items-center gap-1 text-sm text-secondary hover:underline"
                    >
                      Lihat Unit
                      <ExternalLink className="h-3 w-3" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          {karyaSiswa.length === 0 && (
            <div className="text-center py-12">
              <Award className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Belum ada karya siswa</h3>
              <p className="text-muted-foreground">
                Karya siswa akan ditampilkan di sini setelah ditambahkan.
              </p>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t py-8 bg-muted/50">
        <div className="container text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} SKANSABA BLUD-MART - SMKN 1 BANTUL
        </div>
      </footer>
    </div>
  );
}
