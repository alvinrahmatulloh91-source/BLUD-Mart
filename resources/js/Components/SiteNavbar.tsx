import { Button } from '@/Components/ui/button';
import { cn } from '@/lib/utils';
import { Link, usePage } from '@inertiajs/react';
import { ExternalLink, Menu, X } from 'lucide-react';
import { useState, type ReactNode } from 'react';

const navItems = [
    { label: 'Beranda BLUD', href: '/' },
    { label: 'Semua Unit', href: '/semua-unit' },
    { label: 'Karya Siswa', href: '/karya-siswa' },
    { label: 'Tentang BLUD', href: '/tentang-blud' },
];

export function SiteNavbar() {
    const [open, setOpen] = useState(false);
    const { url } = usePage();
    const { auth } = usePage().props;

    const isActive = (href: string) =>
        href === '/' ? url === '/' : url.startsWith(href);

    return (
        <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo + identitas */}
                <Link href="/" className="flex items-center gap-3">
                    <img
                        src="/images/logo-skansaba.svg"
                        alt="Logo SMKN 1 Bantul"
                        className="h-10 w-10 rounded-lg"
                    />
                    <span className="flex flex-col leading-tight">
                        <span className="text-base font-bold text-primary-900">
                            SKANSABA BLUD-MART
                        </span>
                        <span className="text-xs text-gray-500">
                            Portal Digital BLUD SMKN 1 Bantul
                        </span>
                    </span>
                </Link>

                {/* Menu desktop */}
                <nav className="hidden items-center gap-1 md:flex" aria-label="Navigasi utama">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                'rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                                isActive(item.href)
                                    ? 'bg-primary-50 text-primary-700'
                                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900',
                            )}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <a
                        href="https://smkn1bantul.sch.id/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-2"
                    >
                        <Button size="sm" className="gap-1.5">
                            Web SMKN 1 Bantul
                            <ExternalLink className="h-3.5 w-3.5" />
                        </Button>
                    </a>
                </nav>

                {/* Hamburger mobile */}
                <button
                    type="button"
                    className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 md:hidden"
                    onClick={() => setOpen((v) => !v)}
                    aria-expanded={open}
                    aria-label="Buka menu navigasi"
                >
                    {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Menu mobile */}
            {open && (
                <nav
                    className="border-t border-gray-200 bg-white px-4 py-3 md:hidden"
                    aria-label="Navigasi mobile"
                >
                    <div className="flex flex-col gap-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    'rounded-lg px-3 py-2.5 text-sm font-medium',
                                    isActive(item.href)
                                        ? 'bg-primary-50 text-primary-700'
                                        : 'text-gray-600 hover:bg-gray-100',
                                )}
                                onClick={() => setOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <a
                            href="https://smkn1bantul.sch.id/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2"
                        >
                            <Button className="w-full gap-1.5">
                                Web SMKN 1 Bantul
                                <ExternalLink className="h-4 w-4" />
                            </Button>
                        </a>
                    </div>
                </nav>
            )}
        </header>
    );
}
