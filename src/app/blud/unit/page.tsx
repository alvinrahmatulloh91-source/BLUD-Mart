import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

const units = [
  {
    name: "K-Tuba Digital Printing",
    slug: "k-tuba-digital-printing",
    description: "Layanan digital printing profesional untuk kebutuhan sekolah dan umum. Banner, poster, brosur, dan berbagai media cetak lainnya.",
    category: "Digital Printing / Produksi",
    services: 5,
    products: 8,
    status: "active",
  },
  {
    name: "Solusi Sistem Digital (SSD)",
    slug: "solusi-sistem-digital",
    description: "Pengembangan perangkat lunak dan sistem informasi. Website, aplikasi, dan solusi digital untuk berbagai kebutuhan.",
    category: "Pengembangan Perangkat Lunak",
    services: 4,
    products: 3,
    status: "active",
  },
  {
    name: "Jari Manis",
    slug: "jari-manis",
    description: "Unit produksi kreatif dengan fokus pada karya seni dan desain.",
    category: "Kreatif & Desain",
    services: 0,
    products: 0,
    status: "active",
  },
  {
    name: "Skansaba IT Solution",
    slug: "skansaba-it-solution",
    description: "Layanan IT dan digital service. Pembuatan website, sistem informasi, konsultasi IT, dan solusi digital.",
    category: "IT & Digital Service",
    services: 4,
    products: 2,
    status: "active",
  },
  {
    name: "LKM Mitra Siswa Abadi",
    slug: "lkm-mitra-siswa-abadi",
    description: "Lembaga Keuangan Mikro untuk siswa. Layanan keuangan dan pembiayaan untuk kebutuhan produktif.",
    category: "Keuangan & Perbankan",
    services: 3,
    products: 0,
    status: "active",
  },
  {
    name: "SKANSABA STORE",
    slug: "skansaba-store",
    description: "Toko merchandise dan produk kreatif sekolah. Produk non-makanan, atribut sekolah, dan produk kreatif siswa.",
    category: "Retail & Merchandise",
    services: 0,
    products: 6,
    status: "active",
  },
];

export default function UnitDirectoryPage() {
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
            <Link href="/blud/unit" className="text-sm font-medium text-primary">Semua Unit</Link>
            <Link href="/blud/karya-siswa" className="text-sm font-medium hover:text-primary">Karya Siswa</Link>
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
          <div className="mb-8">
            <Link href="/blud" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-4">
              <ArrowLeft className="h-4 w-4" />
              Kembali ke Beranda BLUD
            </Link>
            <h1 className="text-4xl font-bold mb-4">Semua Unit BLUD</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Pilih unit untuk melihat website, layanan, katalog, dan portofolio unit tersebut.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {units.map((unit) => (
              <div key={unit.slug} className="rounded-xl border bg-card p-6 hover:shadow-lg transition-all">
                <div className="mb-4">
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-secondary/10 text-secondary">
                    {unit.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{unit.name}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {unit.description}
                </p>
                <div className="flex gap-4 text-xs text-muted-foreground mb-4">
                  {unit.services > 0 && (
                    <span>{unit.services} Layanan</span>
                  )}
                  {unit.products > 0 && (
                    <span>{unit.products} Produk</span>
                  )}
                  {unit.services === 0 && unit.products === 0 && (
                    <span>Informasi segera hadir</span>
                  )}
                </div>
                <Link
                  href={`/blud/${unit.slug}`}
                  className="inline-flex items-center gap-2 w-full justify-center bg-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Masuk ke Website Unit
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
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
