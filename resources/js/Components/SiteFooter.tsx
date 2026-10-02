import { Link } from '@inertiajs/react';
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';

export function SiteFooter() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-slate-200 bg-slate-900 text-white">
            <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
                {/* Identity */}
                <div className="space-y-3">
                    <div className="flex items-center gap-3">
                        <img
                            src="/images/school/logo.png"
                            alt="Logo SMKN 1 Bantul"
                            className="h-11 w-11 object-contain bg-white rounded-lg p-1"
                            width={44}
                            height={44}
                        />
                        <div className="leading-tight">
                            <p className="font-bold text-white text-base">SKANSABA BLUD-MART</p>
                            <p className="text-xs text-slate-400">Portal Direktori Unit Produksi SMKN 1 Bantul</p>
                        </div>
                    </div>
                    <p className="text-xs leading-relaxed text-slate-300">
                        Pusat direktori resmi seluruh Unit Produksi SMKN 1 Bantul. Portal ini berfungsi sebagai penghubung ke masing-masing website eksternal unit.
                    </p>
                    <p className="flex items-start gap-2 text-xs text-slate-400 pt-2">
                        <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#F7941D]" />
                        <span>SMK Negeri 1 Bantul, Jl. Parangtritis Km. 11, Sabdodadi, Bantul, D.I. Yogyakarta</span>
                    </p>
                </div>

                {/* BLUD Links */}
                <div>
                    <p className="text-sm font-bold uppercase tracking-wider text-orange-300">Direktori BLUD-Mart</p>
                    <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
                        <li>
                            <Link href="/blud" className="hover:text-white hover:underline transition">Beranda BLUD-Mart</Link>
                        </li>
                        <li>
                            <Link href="/blud/units" className="hover:text-white hover:underline transition">Semua Unit Produksi</Link>
                        </li>
                        <li>
                            <Link href="/karya-siswa" className="hover:text-white hover:underline transition">Karya Siswa</Link>
                        </li>
                    </ul>
                </div>

                {/* School Links */}
                <div>
                    <p className="text-sm font-bold uppercase tracking-wider text-orange-300">Website Utama Sekolah</p>
                    <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
                        <li>
                            <Link href="/" className="hover:text-white hover:underline transition">Beranda SMKN 1 Bantul</Link>
                        </li>
                        <li>
                            <Link href="/profil" className="hover:text-white hover:underline transition">Profil Sekolah</Link>
                        </li>
                        <li>
                            <Link href="/program-keahlian" className="hover:text-white hover:underline transition">Program Keahlian</Link>
                        </li>
                        <li>
                            <Link href="/ppdb" className="hover:text-white hover:underline transition">Informasi PPDB</Link>
                        </li>
                        <li>
                            <Link href="/bkk" className="hover:text-white hover:underline transition">PKL & Career Center (BKK)</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-slate-800 py-5 text-center text-xs text-slate-400">
                © {currentYear} Skansaba BLUD-Mart — Ekosistem Vokasi SMK Negeri 1 Bantul.
            </div>
        </footer>
    );
}
