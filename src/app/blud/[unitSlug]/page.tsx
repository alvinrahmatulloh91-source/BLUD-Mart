import Link from "next/link";
import { ArrowLeft, ArrowRight, Package, Wrench, Image as ImageIcon, Mail } from "lucide-react";

// Sample unit data - in production this would come from database
const unitData: Record<string, any> = {
  "k-tuba-digital-printing": {
    name: "K-Tuba Digital Printing",
    category: "Digital Printing / Produksi",
    description: "Layanan digital printing profesional untuk kebutuhan sekolah dan umum. Banner, poster, brosur, dan berbagai media cetak lainnya dengan kualitas terbaik.",
    services: [
      { name: "Cetak Banner", price: "Rp 25.000/m" },
      { name: "Cetak Brosur", price: "Rp 15.000/lembar" },
      { name: "Desain Grafis", price: "Rp 50.000/design" },
    ],
    products: [
      { name: "Print Dokumen", price: "Rp 500/lembar" },
      { name: "Laminating", price: "Rp 3.000/lembar" },
    ],
  },
  "solusi-sistem-digital": {
    name: "Solusi Sistem Digital (SSD)",
    category: "Pengembangan Perangkat Lunak",
    description: "Pengembangan perangkat lunak dan sistem informasi. Website, aplikasi, dan solusi digital untuk berbagai kebutuhan.",
    services: [
      { name: "Pembuatan Website", price: "Mulai Rp 500.000" },
      { name: "Sistem Informasi", price: "Mulai Rp 1.000.000" },
      { name: "Konsultasi IT", price: "Rp 150.000/sesi" },
    ],
    products: [],
  },
  "skansaba-store": {
    name: "SKANSABA STORE",
    category: "Retail & Merchandise",
    description: "Toko merchandise dan produk kreatif sekolah. Produk non-makanan, atribut sekolah, dan produk kreatif siswa.",
    services: [],
    products: [
      { name: "Kaos Sekolah", price: "Rp 75.000" },
      { name: "Tas Sekolah", price: "Rp 150.000" },
      { name: "ID Card Holder", price: "Rp 25.000" },
    ],
  },
};

export default async function UnitPage({ params }: { params: Promise<{ unitSlug: string }> }) {
  const { unitSlug } = await params;
  const unit = unitData[unitSlug] || unitData["k-tuba-digital-printing"];

  if (!unit) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Unit tidak ditemukan</h1>
          <Link href="/blud/unit" className="text-primary hover:underline">
            Kembali ke direktori unit
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Unit Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Link 
              href="/blud/unit" 
              className="text-sm text-muted-foreground hover:text-primary inline-flex items-center gap-1"
            >
              <ArrowLeft className="h-4 w-4" />
              Semua Unit
            </Link>
            <div className="h-6 w-px bg-border" />
            <span className="text-lg font-bold text-primary">{unit.name}</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href={`/blud/${unitSlug}`} className="text-sm font-medium text-primary">Beranda</Link>
            <Link href={`/blud/${unitSlug}/katalog`} className="text-sm font-medium hover:text-primary">Katalog</Link>
            <Link href={`/blud/${unitSlug}/layanan`} className="text-sm font-medium hover:text-primary">Layanan</Link>
            <Link href={`/blud/${unitSlug}/portofolio`} className="text-sm font-medium hover:text-primary">Portofolio</Link>
            <Link href={`/blud/${unitSlug}/kontak`} className="text-sm font-medium hover:text-primary">Kontak</Link>
          </nav>
          <Link href="/blud" className="text-sm text-muted-foreground hover:text-primary">
            Kembali ke BLUD-Mart
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container text-center">
          <span className="text-sm font-medium px-3 py-1 rounded-full bg-secondary/10 text-secondary mb-4 inline-block">
            {unit.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            {unit.name}
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            {unit.description}
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              href={`/blud/${unitSlug}/katalog`} 
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Lihat Katalog
              <ArrowRight className="h-4 w-4" />
            </Link>
            {unit.services.length > 0 && (
              <Link 
                href={`/blud/${unitSlug}/layanan`} 
                className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary/5 transition-colors"
              >
                Pesan Layanan
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      {unit.services.length > 0 && (
        <section className="py-16">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <Wrench className="h-6 w-6 text-secondary" />
              Layanan Unggulan
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {unit.services.map((service: any, index: number) => (
                <div key={index} className="p-6 rounded-xl border bg-card hover:shadow-md transition-all">
                  <h3 className="font-semibold text-lg mb-2">{service.name}</h3>
                  <p className="text-secondary font-medium">{service.price}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Products Preview */}
      {unit.products.length > 0 && (
        <section className="py-16 bg-muted/50">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <Package className="h-6 w-6 text-secondary" />
              Produk Unggulan
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {unit.products.map((product: any, index: number) => (
                <div key={index} className="p-6 rounded-xl border bg-card hover:shadow-md transition-all">
                  <div className="h-32 bg-muted rounded-lg mb-4 flex items-center justify-center">
                    <ImageIcon className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="font-semibold mb-2">{product.name}</h3>
                  <p className="text-secondary font-medium">{product.price}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact CTA */}
      <section className="py-16">
        <div className="container text-center">
          <h2 className="text-2xl font-bold mb-4">Tertarik untuk memesan?</h2>
          <p className="text-muted-foreground mb-8">
            Hubungi kami atau kunjungi katalog untuk melihat semua layanan dan produk.
          </p>
          <Link 
            href={`/blud/${unitSlug}/kontak`} 
            className="inline-flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-lg font-medium hover:bg-secondary/90 transition-colors"
          >
            <Mail className="h-4 w-4" />
            Hubungi Kami
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 bg-muted/50">
        <div className="container text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} {unit.name} - SKANSABA BLUD-MART
        </div>
      </footer>
    </div>
  );
}
