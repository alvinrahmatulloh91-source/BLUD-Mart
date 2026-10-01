import { Link } from '@inertiajs/react';
import { MapPin } from 'lucide-react';

export function SiteFooter() {
    return <footer className="border-t border-gray-200 bg-white"><div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3 lg:px-8">
        <div><div className="flex items-center gap-3"><img src="/images/logo-skansaba.svg" alt="" className="h-10 w-10"/><div className="leading-tight"><p className="font-bold text-primary-900">SKANSABA BLUD-MART</p><p className="text-xs text-gray-500">Portal Digital Unit Produksi SMKN 1 Bantul</p></div></div><p className="mt-4 flex items-start gap-2 text-sm text-gray-500"><MapPin className="mt-0.5 h-4 w-4 shrink-0"/>SMK Negeri 1 Bantul, Kabupaten Bantul, Daerah Istimewa Yogyakarta</p></div>
        <div><p className="text-sm font-semibold">Navigasi BLUD</p><ul className="mt-3 space-y-2 text-sm text-gray-600"><li><Link href="/blud">Beranda BLUD</Link></li><li><Link href="/blud/units">Semua Unit</Link></li><li><Link href="/karya-siswa">Karya Siswa</Link></li><li><Link href="/tentang-blud">Tentang BLUD</Link></li></ul></div>
        <div><p className="text-sm font-semibold">Sekolah</p><ul className="mt-3 space-y-2 text-sm text-gray-600"><li><Link href="/">Beranda SMKN 1 Bantul</Link></li><li><Link href="/ppdb">PPDB</Link></li><li><Link href="/bkk">PKL & Career Center</Link></li></ul></div>
    </div><div className="border-t border-gray-200 py-5 text-center text-xs text-gray-400">© {new Date().getFullYear()} Skansaba BLUD-Mart — SMK Negeri 1 Bantul.</div></footer>;
}
