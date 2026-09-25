import { Button } from '@/Components/ui/button';
import { Head, Link, router, usePage } from '@inertiajs/react';
import { ExternalLink, LayoutDashboard, LogOut } from 'lucide-react';
import type { ReactNode } from 'react';

interface AdminLayoutProps {
    title: string;
    children: ReactNode;
}

export function AdminLayout({ title, children }: AdminLayoutProps) {
    const { auth } = usePage<{ auth: { user: { name: string } | null } }>().props;

    const logout = () => router.post('/admin/logout');

    return (
        <div className="flex min-h-screen flex-col bg-gray-50">
            <Head title={title} />

            <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-3">
                        <Link href="/admin/units" className="flex items-center gap-2">
                            <LayoutDashboard className="h-5 w-5 text-primary-600" aria-hidden="true" />
                            <span className="font-bold text-primary-900">
                                Admin Skansaba BLUD-Mart
                            </span>
                        </Link>
                    </div>

                    <div className="flex items-center gap-2">
                        <a
                            href="/"
                            className="hidden items-center gap-1.5 text-sm text-gray-500 hover:text-primary-700 sm:inline-flex"
                        >
                            Lihat Portal
                            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                        </a>
                        <span className="text-sm text-gray-600">{auth?.user?.name}</span>
                        <Button variant="outline" size="sm" onClick={logout} className="gap-1.5">
                            <LogOut className="h-4 w-4" aria-hidden="true" />
                            Keluar
                        </Button>
                    </div>
                </div>
            </header>

            <main className="flex-1">
                <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">{children}</div>
            </main>
        </div>
    );
}
