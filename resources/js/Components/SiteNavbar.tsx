import { Button } from '@/Components/ui/button';
import { cn } from '@/lib/utils';
import { Link, usePage } from '@inertiajs/react';
import { Menu, X, ArrowLeft, ExternalLink } from 'lucide-react';
import { useState } from 'react';

const navItems = [
    { label: 'Beranda BLUD', href: '/blud' },
    { label: 'Direktori Unit', href: '/blud/units' },
    { label: 'Karya Siswa', href: '/karya-siswa' },
];

export function SiteNavbar() {
    const [open, setOpen] = useState(false);
    const { url } = usePage();

    const isActive = (href: string) => {
        if (href === '/blud') return url === '/blud';
        return url.startsWith(href);
    };

    return (
        <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md shadow-sm">
            <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo + Identity */}
                <Link href="/blud" className="flex items-center gap-3 group">
                    <img
                        src="/images/school/logo.png"
                        alt="Logo SMK Negeri 1 Bantul"
                        className="h-10 w-10 sm:h-11 sm:w-11 object-contain transition-transform group-hover:scale-105"
                        width={44}
                        height={44}
                    />
                    <div className="flex flex-col leading-tight">
                        <div className="flex items-center gap-2">
                            <span className="text-base font-extrabold tracking-tight text-[#0033A0] sm:text-lg">
                                SKANSABA BLUD-MART
                            </span>
                            <span className="hidden sm:inline-flex rounded-full bg-orange-100 px-2 py-0.5 text-[10px] font-bold text-[#F7941D]">
                                PORTAL UP
                            </span>
                        </div>
                        <span className="text-[11px] font-medium text-slate-500">
                            Pusat Unit Produksi SMKN 1 Bantul
                        </span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden items-center gap-1 md:flex" aria-label="Navigasi BLUD">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                'rounded-md px-3.5 py-2 text-sm font-semibold transition-colors',
                                isActive(item.href)
                                    ? 'bg-blue-50 text-[#0033A0] font-bold'
                                    : 'text-slate-600 hover:bg-slate-50 hover:text-[#0033A0]',
                            )}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <div className="ml-2 pl-3 border-l border-slate-200">
                        <Link href="/">
                            <Button variant="outline" size="sm" className="gap-1.5 text-xs font-bold text-slate-700 hover:text-[#0033A0] hover:border-[#0033A0]">
                                <ArrowLeft className="h-3.5 w-3.5" />
                                Web Sekolah
                            </Button>
                        </Link>
                    </div>
                </nav>

                {/* Mobile hamburger */}
                <div className="flex items-center gap-2 md:hidden">
                    <Link href="/">
                        <Button variant="outline" size="sm" className="text-xs px-2.5 py-1">
                            Web Sekolah
                        </Button>
                    </Link>
                    <button
                        type="button"
                        className="rounded-lg p-2 text-slate-700 hover:bg-slate-100"
                        onClick={() => setOpen((v) => !v)}
                        aria-expanded={open}
                        aria-label="Buka menu navigasi"
                    >
                        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {open && (
                <nav className="border-t border-slate-200 bg-white px-4 py-3 md:hidden shadow-lg">
                    <div className="flex flex-col gap-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    'rounded-lg px-3.5 py-2.5 text-sm font-semibold',
                                    isActive(item.href)
                                        ? 'bg-blue-50 text-[#0033A0] font-bold'
                                        : 'text-slate-700 hover:bg-slate-50',
                                )}
                                onClick={() => setOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Link href="/" onClick={() => setOpen(false)} className="mt-2">
                            <Button variant="outline" className="w-full gap-2">
                                <ArrowLeft className="h-4 w-4" />
                                Kembali ke Website Utama Sekolah
                            </Button>
                        </Link>
                    </div>
                </nav>
            )}
        </header>
    );
}
