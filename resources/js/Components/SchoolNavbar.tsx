import { Link, usePage } from '@inertiajs/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

const links = [
    { label: 'Beranda', href: '/' },
    { label: 'Profil', href: '/profil' },
    { label: 'Program Keahlian', href: '/program-keahlian' },
    { label: 'Informasi', href: '/informasi' },
    { label: 'Prestasi', href: '/prestasi' },
    { label: 'BKK', href: '/bkk' },
    { label: 'PPDB', href: '/ppdb' },
];

export function SchoolNavbar() {
    const [open, setOpen] = useState(false);
    const { url } = usePage();

    const isActive = (href: string) => {
        if (href === '/') {
            return url === '/';
        }
        return url.startsWith(href);
    };

    return (
        <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md transition-all shadow-sm">
            <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Brand / Logo */}
                <Link
                    href="/"
                    className="flex items-center gap-3 group focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0033A0] focus-visible:rounded-lg"
                    aria-label="SMK Negeri 1 Bantul - Beranda"
                >
                    <img
                        src="/images/school/logo.png"
                        alt="Logo Resmi SMK Negeri 1 Bantul"
                        className="h-11 w-11 object-contain transition-transform group-hover:scale-105"
                        width={44}
                        height={44}
                    />
                    <div className="flex flex-col leading-tight">
                        <span className="text-base font-extrabold tracking-tight text-[#0033A0] sm:text-lg">
                            SMKN 1 BANTUL
                        </span>
                        <span className="text-[11px] font-medium text-slate-500">
                            Sekolah Vokasi · Bantul, D.I. Yogyakarta
                        </span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-1 xl:gap-2 lg:flex" aria-label="Navigasi Utama Sekolah">
                    {links.map((link) => {
                        const active = isActive(link.href);
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`rounded-md px-3 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0033A0] ${
                                    active
                                        ? 'text-[#0033A0] bg-blue-50/80 font-bold'
                                        : 'text-slate-600 hover:text-[#0033A0] hover:bg-slate-50'
                                }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}

                    {/* Prominent CTA to Skansaba BLUD-Mart */}
                    <div className="ml-3 pl-3 border-l border-slate-200">
                        <Link
                            href="/blud"
                            className="inline-flex items-center gap-1.5 rounded-lg bg-[#F7941D] px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-[#d8770e] hover:shadow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F7941D]"
                        >
                            <span>SKANSABA BLUD-MART</span>
                            <ArrowUpRight className="h-4 w-4" />
                        </Link>
                    </div>
                </nav>

                {/* Mobile Menu Button */}
                <div className="flex items-center gap-2 lg:hidden">
                    <Link
                        href="/blud"
                        className="inline-flex items-center gap-1 rounded-md bg-[#F7941D] px-2.5 py-1.5 text-xs font-bold text-white"
                    >
                        <span>BLUD</span>
                        <ArrowUpRight className="h-3 w-3" />
                    </Link>
                    <button
                        type="button"
                        onClick={() => setOpen(!open)}
                        className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0033A0]"
                        aria-label={open ? 'Tutup navigasi' : 'Buka navigasi'}
                        aria-expanded={open}
                    >
                        {open ? <X className="h-6 w-6 text-slate-900" /> : <Menu className="h-6 w-6 text-slate-900" />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {open && (
                <nav className="border-t border-slate-200 bg-white px-4 py-3 lg:hidden shadow-lg" aria-label="Navigasi Mobile">
                    <div className="mx-auto flex max-w-7xl flex-col gap-1">
                        {links.map((link) => {
                            const active = isActive(link.href);
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                    className={`rounded-lg px-3.5 py-2.5 text-sm font-semibold transition ${
                                        active
                                            ? 'bg-blue-50 text-[#0033A0] font-bold'
                                            : 'text-slate-700 hover:bg-slate-50'
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                        <div className="mt-2 pt-2 border-t border-slate-100">
                            <Link
                                href="/blud"
                                onClick={() => setOpen(false)}
                                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#F7941D] px-4 py-3 text-center text-sm font-bold text-white shadow-sm hover:bg-[#d8770e]"
                            >
                                <span>Kunjungi Skansaba BLUD-Mart</span>
                                <ArrowUpRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </nav>
            )}
        </header>
    );
}
