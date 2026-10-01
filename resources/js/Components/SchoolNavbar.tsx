import { Link } from '@inertiajs/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const links = [
    ['Beranda', '/'], ['Profil', '/profil'], ['Program Keahlian', '/program-keahlian'],
    ['Informasi', '/informasi'], ['Prestasi', '/prestasi'], ['BKK', '/bkk'], ['PPDB', '/ppdb'],
];

export function SchoolNavbar() {
    const [open, setOpen] = useState(false);
    return <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <Link href="/" className="leading-tight" aria-label="SMK Negeri 1 Bantul, beranda">
                <strong className="block text-sm tracking-wide text-primary-950 sm:text-base">SMK NEGERI 1 BANTUL</strong><span className="text-xs text-slate-500">Sekolah Vokasi · Bantul, DIY</span>
            </Link>
            <nav className="hidden items-center gap-5 lg:flex" aria-label="Navigasi sekolah">
                {links.map(([label, href]) => <Link key={label} href={href} className="text-sm font-medium text-slate-600 transition hover:text-primary-700 focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-700">{label}</Link>)}
                <Link href="/blud" className="rounded-lg bg-accent-500 px-4 py-2.5 text-sm font-bold text-primary-950 shadow-sm transition hover:bg-accent-400">Skansaba BLUD-Mart</Link>
            </nav>
            <button onClick={() => setOpen(!open)} className="rounded-lg p-2 text-slate-700 lg:hidden" aria-label={open ? 'Tutup menu' : 'Buka menu'} aria-expanded={open}>{open ? <X /> : <Menu />}</button>
        </div>
        {open && <nav className="border-t border-slate-100 bg-white px-4 py-3 lg:hidden" aria-label="Navigasi mobile">
            <div className="mx-auto flex max-w-7xl flex-col gap-1">{links.map(([label, href]) => <Link key={label} href={href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-sm font-medium text-slate-700 hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-700">{label}</Link>)}<Link href="/blud" onClick={() => setOpen(false)} className="mt-1 rounded-lg bg-accent-500 px-4 py-3 text-center font-bold text-primary-950">Skansaba BLUD-Mart</Link></div>
        </nav>}
    </header>;
}
