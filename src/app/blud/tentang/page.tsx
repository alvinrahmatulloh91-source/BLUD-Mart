import Link from "next/link";
import { ArrowLeft, Building2, Users, Target, Lightbulb } from "lucide-react";

export default function TentangBLUDPage() {
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
            <Link href="/blud/karya-siswa" className="text-sm font-medium hover:text-primary">Karya Siswa</Link>
            <Link href="/blud/tentang" className="text-sm font-medium text-primary">Tentang BLUD</Link>
          </nav>
          <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
            Kembali ke SMKN 1 Bantul
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="py-12">
        <div className="container max-w-4xl">
          <Link href="/blud" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8">
            <ArrowLeft className="h-4 w-4" />
            Kembali ke Beranda BLUD
          </Link>

          <h1 className="text-4xl font-bold mb-8 text-primary">Tentang BLUD</h1>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Apa itu BLUD?</h2>
            <p className="text-muted-foreground mb-4">
              BLUD (Badan Layanan Umum Daerah) adalah unit kerja di lingkungan pemerintah daerah yang memberikan layanan kepada masyarakat dengan prinsip fleksibilitas dalam pengelolaan keuangan dan operasional. 
            </p>
            <p className="text-muted-foreground">
              Di SMKN 1 Bantul, BLUD memungkinkan sekolah untuk mengelola unit-unit produksi dan jasa secara lebih mandiri, sehingga siswa dapat belajar dari pengalaman bisnis yang nyata.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">BLUD di SMKN 1 Bantul</h2>
            <p className="text-muted-foreground mb-6">
              SMKN 1 Bantul mengimplementasikan BLUD sebagai wadah pembelajaran berbasis produksi dan jasa (Teaching Factory). Melalui BLUD, siswa tidak hanya belajar teori di kelas, tetapi juga terlibat langsung dalam proses produksi, pemasaran, dan layanan kepada pelanggan.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl border bg-card">
                <Target className="h-10 w-10 text-secondary mb-4" />
                <h3 className="font-semibold mb-2">Visi</h3>
                <p className="text-sm text-muted-foreground">
                  Menjadi lembaga pendidikan vokasi yang menghasilkan lulusan kompeten, berkarakter, dan siap menghadapi dunia kerja melalui pembelajaran berbasis produksi.
                </p>
              </div>
              <div className="p-6 rounded-xl border bg-card">
                <Lightbulb className="h-10 w-10 text-secondary mb-4" />
                <h3 className="font-semibold mb-2">Misi</h3>
                <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                  <li>Mengembangkan unit produksi yang relevan dengan kompetensi keahlian</li>
                  <li>Memberikan pengalaman kerja nyata kepada siswa</li>
                  <li>Menghasilkan produk dan jasa berkualitas</li>
                  <li>Membangun kemandirian finansial sekolah</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Hubungan BLUD dan Unit Produksi</h2>
            <p className="text-muted-foreground mb-6">
              Unit Produksi (UP) adalah ujung tombak implementasi BLUD di SMKN 1 Bantul. Setiap UP dikelola oleh siswa dengan bimbingan guru dan tenaga profesional, menghasilkan produk dan jasa yang dapat diakses oleh masyarakat.
            </p>
            <div className="rounded-xl border bg-card p-6">
              <div className="flex items-start gap-4">
                <Building2 className="h-8 w-8 text-secondary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Struktur Pengelolaan</h3>
                  <p className="text-sm text-muted-foreground">
                    Setiap unit produksi memiliki pengelola tersendiri yang bertanggung jawab atas operasional harian, kualitas produk/layanan, dan kepuasan pelanggan. Sistem ini memastikan setiap unit dapat berjalan secara profesional sambil tetap menjadi media pembelajaran bagi siswa.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Peran Skansaba BLUD-Mart</h2>
            <p className="text-muted-foreground mb-6">
              Skansaba BLUD-Mart adalah platform digital yang menghubungkan seluruh unit produksi BLUD SMKN 1 Bantul dengan masyarakat. Platform ini memudahkan akses informasi dan pemesanan layanan dari berbagai unit dalam satu tempat.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg border bg-card text-center">
                <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="font-medium text-sm">Akses Mudah</h4>
                <p className="text-xs text-muted-foreground mt-1">Satu platform untuk semua unit</p>
              </div>
              <div className="p-4 rounded-lg border bg-card text-center">
                <Building2 className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="font-medium text-sm">Website Mandiri</h4>
                <p className="text-xs text-muted-foreground mt-1">Setiap unit punya halaman sendiri</p>
              </div>
              <div className="p-4 rounded-lg border bg-card text-center">
                <Target className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="font-medium text-sm">Pemesanan Online</h4>
                <p className="text-xs text-muted-foreground mt-1">Proses pemesanan yang mudah</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Manfaat Digitalisasi</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-secondary font-bold">✓</span>
                <span>Meningkatkan aksesibilitas layanan unit produksi kepada masyarakat</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary font-bold">✓</span>
                <span>Memberikan pengalaman digital kepada siswa dalam mengelola bisnis online</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary font-bold">✓</span>
                <span>Mempermudah tracking pesanan dan manajemen layanan</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary font-bold">✓</span>
                <span>Menampilkan portofolio dan karya siswa secara terstruktur</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary font-bold">✓</span>
                <span>Meningkatkan profesionalisme pengelolaan unit produksi</span>
              </li>
            </ul>
          </section>

          <section className="pt-8 border-t">
            <h2 className="text-2xl font-semibold mb-4">Unit Produksi BLUD</h2>
            <p className="text-muted-foreground mb-6">
              Berikut adalah unit-unit produksi yang tergabung dalam BLUD SMKN 1 Bantul:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "K-Tuba Digital Printing",
                "Solusi Sistem Digital (SSD)",
                "Jari Manis",
                "Skansaba IT Solution",
                "LKM Mitra Siswa Abadi",
                "SKANSABA STORE",
              ].map((unit) => (
                <div key={unit} className="p-4 rounded-lg border bg-card hover:shadow-md transition-all">
                  <p className="font-medium">{unit}</p>
                </div>
              ))}
            </div>
          </section>
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
