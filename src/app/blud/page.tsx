import Link from "next/link";
import { Building2, ArrowRight, Layers, Award, Users } from "lucide-react";

export default function BLUDHomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* BLUD Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Building2 className="h-6 w-6 text-secondary" />
            <div>
              <span className="text-lg font-bold text-secondary">SKANSABA BLUD-MART</span>
              <p className="text-xs text-muted-foreground">Portal Digital BLUD SMKN 1 Bantul</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/blud" className="text-sm font-medium text-primary">Beranda BLUD</Link>
            <Link href="/blud/unit" className="text-sm font-medium hover:text-primary">Semua Unit</Link>
            <Link href="/blud/karya-siswa" className="text-sm font-medium hover:text-primary">Karya Siswa</Link>
            <Link href="/blud/tentang" className="text-sm font-medium hover:text-primary">Tentang BLUD</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link 
              href="/" 
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Kembali ke SMKN 1 Bantul
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/10 to-primary/5">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Semua Unit BLUD dalam Satu Platform
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Kenali berbagai unit produksi, jasa, layanan, dan karya produktif dalam ekosistem BLUD SMKN 1 Bantul.
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              href="/blud/unit" 
              className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-lg font-semibold hover:bg-secondary/90 transition-colors text-lg"
            >
              Jelajahi Semua Unit
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link 
              href="/blud/tentang" 
              className="inline-flex items-center gap-2 border border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary/5 transition-colors text-lg"
            >
              Pelajari BLUD
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Ekosistem BLUD SMKN 1 Bantul</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl border bg-card hover:shadow-lg transition-all">
              <Layers className="h-12 w-12 text-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Unit Produksi</h3>
              <p className="text-muted-foreground">
                Berbagai unit produksi yang dikelola oleh siswa dengan bimbingan guru profesional.
              </p>
              <Link href="/blud/unit" className="text-secondary font-medium mt-4 inline-flex items-center gap-1 hover:gap-2 transition-all">
                Lihat Unit <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="p-6 rounded-xl border bg-card hover:shadow-lg transition-all">
              <Award className="h-12 w-12 text-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Karya Siswa</h3>
              <p className="text-muted-foreground">
                Portofolio dan karya inovatif siswa dari berbagai program keahlian.
              </p>
              <Link href="/blud/karya-siswa" className="text-secondary font-medium mt-4 inline-flex items-center gap-1 hover:gap-2 transition-all">
                Lihat Karya <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="p-6 rounded-xl border bg-card hover:shadow-lg transition-all">
              <Users className="h-12 w-12 text-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Pembelajaran Nyata</h3>
              <p className="text-muted-foreground">
                Pengalaman bisnis riil sebagai bagian dari pembelajaran berbasis produksi.
              </p>
              <Link href="/blud/tentang" className="text-secondary font-medium mt-4 inline-flex items-center gap-1 hover:gap-2 transition-all">
                Pelajari Lebih <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Unit Preview */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Unit Unggulan</h2>
            <Link href="/blud/unit" className="text-secondary font-medium hover:underline">
              Lihat Semua →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "K-Tuba Digital Printing", category: "Digital Printing" },
              { name: "Solusi Sistem Digital", category: "Software Development" },
              { name: "SKANSABA STORE", category: "Merchandise" },
            ].map((unit) => (
              <div key={unit.name} className="p-6 rounded-xl border bg-card hover:shadow-md transition-all">
                <h3 className="font-semibold text-lg">{unit.name}</h3>
                <p className="text-sm text-muted-foreground">{unit.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 bg-muted/50">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4 text-secondary">SKANSABA BLUD-MART</h3>
              <p className="text-sm text-muted-foreground">
                Portal Digital Badan Layanan Umum Daerah SMKN 1 Bantul
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Navigasi</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/blud" className="hover:text-primary">Beranda BLUD</Link></li>
                <li><Link href="/blud/unit" className="hover:text-primary">Semua Unit</Link></li>
                <li><Link href="/blud/karya-siswa" className="hover:text-primary">Karya Siswa</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Informasi</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/blud/tentang" className="hover:text-primary">Tentang BLUD</Link></li>
                <li><Link href="/" className="hover:text-primary">SMKN 1 Bantul</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Kontak</h4>
              <p className="text-sm text-muted-foreground">
                Jl. Pramuka No. 27 Bantul<br />
                blud@smkn1bantul.sch.id
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} SKANSABA BLUD-MART - SMKN 1 BANTUL
          </div>
        </div>
      </footer>
    </div>
  );
}
