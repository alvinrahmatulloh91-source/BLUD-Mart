import { SiteFooter } from '@/Components/SiteFooter';
import { SiteNavbar } from '@/Components/SiteNavbar';
import { Head } from '@inertiajs/react';
import type { ReactNode } from 'react';

interface PublicLayoutProps {
    title: string;
    description?: string;
    children: ReactNode;
}

export function PublicLayout({ title, description, children }: PublicLayoutProps) {
    return (
        <div className="flex min-h-screen flex-col bg-gray-50">
            <Head title={title}>
                <meta name="description" content={description ?? 'Portal terintegrasi Unit Produksi SMKN 1 Bantul.'} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description ?? 'Portal terintegrasi Unit Produksi SMKN 1 Bantul.'} />
                <meta property="og:type" content="website" />
                <link rel="canonical" href={`${window.location.origin}${window.location.pathname}`} />
            </Head>
            <SiteNavbar />
            <main className="flex-1">{children}</main>
            <SiteFooter />
        </div>
    );
}
