import Link from "next/link";
import { Building2, BookOpen, Users, Trophy, Newspaper, Calendar, Image as ImageIcon, ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Building2 className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-primary">SMKN 1 BANTUL</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary">Beranda</Link>
            <Link href="/profil" className="text-sm font-medium hover:text-primary">Profil</Link>
            <Link href="/program-keahlian" className="text-sm font-medium hover:text-primary">Program Keahlian</Link>
            <Link href="/kesiswaan" className="text-sm font-medium hover:text-primary">Kesiswaan</Link>
            <Link href="/berita" className="text-sm font-medium hover:text-primary">Berita</Link>
            <Link href="/agenda" className="text-sm font-medium hover:text-primary">Agenda</Link>
            <Link href="/galeri" className="text-sm font-medium hover:text-primary">Galeri</Link>
            <Link href="/blud" className="text-sm font-medium text-secondary hover:text-secondary/80">BLUD</Link>
            <Link href="/kontak" className="text-sm font-medium hover:text-primary">Kontak</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary">
            SMKN 1 BANTUL
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Sekolah Menengah Kejuruan Unggulan yang Menghasilkan Lulusan Kompeten dan Berkarakter
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              href="/blud" 
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Kunjungi BLUD-Mart
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link 
              href="/profil" 
              className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary/5 transition-colors"
            >
              Profil Sekolah
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Layanan & Informasi</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Link href="/program-keahlian" className="group p-6 rounded-xl border bg-card hover:shadow-lg transition-all text-center">
              <BookOpen className="h-10 w-10 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold">Program Keahlian</h3>
            </Link>
            <Link href="/kesiswaan" className="group p-6 rounded-xl border bg-card hover:shadow-lg transition-all text-center">
              <Users className="h-10 w-10 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold">Kesiswaan</h3>
            </Link>
            <Link href="/berita" className="group p-6 rounded-xl border bg-card hover:shadow-lg transition-all text-center">
              <Newspaper className="h-10 w-10 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold">Berita</h3>
            </Link>
            <Link href="/agenda" className="group p-6 rounded-xl border bg-card hover:shadow-lg transition-all text-center">
              <Calendar className="h-10 w-10 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold">Agenda</h3>
            </Link>
            <Link href="/galeri" className="group p-6 rounded-xl border bg-card hover:shadow-lg transition-all text-center">
              <ImageIcon className="h-10 w-10 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold">Galeri</h3>
            </Link>
            <Link href="/blud" className="group p-6 rounded-xl border bg-card hover:shadow-lg transition-all text-center">
              <Building2 className="h-10 w-10 mx-auto mb-4 text-secondary group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold">BLUD-Mart</h3>
            </Link>
            <Link href="/kontak" className="group p-6 rounded-xl border bg-card hover:shadow-lg transition-all text-center col-span-2 md:col-span-2">
              <Trophy className="h-10 w-10 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold">Prestasi Siswa</h3>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 bg-muted/50">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4 text-primary">SMKN 1 BANTUL</h3>
              <p className="text-sm text-muted-foreground">
                Sekolah Menengah Kejuruan Unggulan di Kabupaten Bantul
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Tautan</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/profil" className="hover:text-primary">Profil</Link></li>
                <li><Link href="/program-keahlian" className="hover:text-primary">Program Keahlian</Link></li>
                <li><Link href="/blud" className="hover:text-secondary">BLUD-Mart</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Jl. Pramuka No. 27 Bantul</li>
                <li>info@smkn1bantul.sch.id</li>
                <li>(0274) 123456</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Sosial Media</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Facebook</li>
                <li>Instagram</li>
                <li>YouTube</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} SMKN 1 BANTUL. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
