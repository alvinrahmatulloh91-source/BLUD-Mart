import { SchoolNavbar } from '@/Components/SchoolNavbar';
import { Head, Link } from '@inertiajs/react';
import { MapPin, Phone, Mail, Award, ExternalLink } from 'lucide-react';
import type { ReactNode } from 'react';

export function SchoolLayout({
    title,
    description,
    children,
}: {
    title: string;
    description: string;
    children: ReactNode;
}) {
    const currentYear = new Date().getFullYear();

    return (
        <div className="min-h-screen flex flex-col bg-white text-[#172033]">
            <Head title={title}>
                <meta name="description" content={description} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="SMK Negeri 1 Bantul" />
                <meta property="og:image" content="/images/school/logo.png" />
                <meta name="twitter:card" content="summary" />
            </Head>

            <SchoolNavbar />

            <main className="flex-1">{children}</main>

            {/* Official Institutional Footer */}
            <footer className="border-t border-slate-200 bg-[#001b54] text-white">
                <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                    <div className="grid gap-10 lg:grid-cols-12">
                        {/* Col 1: School Identity */}
                        <div className="lg:col-span-5 space-y-4">
                            <div className="flex items-center gap-3">
                                <img
                                    src="/images/school/logo.png"
                                    alt="Logo SMK Negeri 1 Bantul"
                                    className="h-12 w-12 object-contain bg-white rounded-lg p-1"
                                    width={48}
                                    height={48}
                                />
                                <div>
                                    <h2 className="text-lg font-bold tracking-tight">SMK NEGERI 1 BANTUL</h2>
                                    <p className="text-xs text-blue-200">Terakreditasi A · NPSN: 20400345</p>
                                </div>
                            </div>
                            <p className="text-sm leading-relaxed text-blue-100/90 max-w-md">
                                Sekolah Menengah Kejuruan unggulan di Kabupaten Bantul yang berorientasi pada penguatan karakter, kompetensi vokasi terstandar industri, dan kesiapan berkarya.
                            </p>
                            <div className="space-y-2 pt-2 text-xs sm:text-sm text-blue-200">
                                <p className="flex items-start gap-2.5">
                                    <MapPin className="h-4 w-4 shrink-0 text-[#F7941D] mt-0.5" />
                                    <span>Jl. Parangtritis Km. 11, Sabdodadi, Bantul, D.I. Yogyakarta 55715</span>
                                </p>
                                <p className="flex items-center gap-2.5">
                                    <Phone className="h-4 w-4 shrink-0 text-[#F7941D]" />
                                    <span>(0274) 367156</span>
                                </p>
                                <p className="flex items-center gap-2.5">
                                    <Mail className="h-4 w-4 shrink-0 text-[#F7941D]" />
                                    <span>skansaba@smkn1bantul.sch.id</span>
                                </p>
                            </div>
                        </div>

                        {/* Col 2: School Links */}
                        <div className="lg:col-span-4">
                            <h3 className="text-sm font-bold uppercase tracking-wider text-orange-300">
                                Navigasi Sekolah
                            </h3>
                            <div className="mt-4 grid grid-cols-2 gap-2 text-sm text-blue-100">
                                <Link href="/" className="hover:text-white hover:underline py-1">Beranda</Link>
                                <Link href="/profil" className="hover:text-white hover:underline py-1">Profil Sekolah</Link>
                                <Link href="/program-keahlian" className="hover:text-white hover:underline py-1">Program Keahlian</Link>
                                <Link href="/informasi" className="hover:text-white hover:underline py-1">Berita & Informasi</Link>
                                <Link href="/prestasi" className="hover:text-white hover:underline py-1">Prestasi</Link>
                                <Link href="/ppdb" className="hover:text-white hover:underline py-1">Informasi PPDB</Link>
                                <Link href="/bkk" className="hover:text-white hover:underline py-1">PKL & BKK Career</Link>
                                <Link href="/karya-siswa" className="hover:text-white hover:underline py-1">Karya Siswa</Link>
                            </div>
                        </div>

                        {/* Col 3: Ekosistem BLUD */}
                        <div className="lg:col-span-3">
                            <h3 className="text-sm font-bold uppercase tracking-wider text-orange-300">
                                Ekosistem BLUD-Mart
                            </h3>
                            <p className="mt-4 text-xs leading-relaxed text-blue-200">
                                Unit Produksi SMKN 1 Bantul dikelola secara profesional di bawah tata kelola Badan Layanan Umum Daerah (BLUD).
                            </p>
                            <div className="mt-4 space-y-2 text-sm">
                                <Link
                                    href="/blud"
                                    className="flex items-center justify-between rounded-lg bg-white/10 px-3.5 py-2 text-white font-medium hover:bg-white/20 transition"
                                >
                                    <span>Portal BLUD-Mart</span>
                                    <ExternalLink className="h-3.5 w-3.5 text-orange-300" />
                                </Link>
                                <Link
                                    href="/blud/units"
                                    className="flex items-center justify-between rounded-lg bg-white/10 px-3.5 py-2 text-white font-medium hover:bg-white/20 transition"
                                >
                                    <span>Direktori Unit Produksi</span>
                                    <ExternalLink className="h-3.5 w-3.5 text-orange-300" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 border-t border-blue-900/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-200">
                        <p>© {currentYear} SMK Negeri 1 Bantul. Hak Cipta Dilindungi.</p>
                        <p className="text-blue-300">Portal Resmi Ekosistem Pendidikan Vokasi SMKN 1 Bantul</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
