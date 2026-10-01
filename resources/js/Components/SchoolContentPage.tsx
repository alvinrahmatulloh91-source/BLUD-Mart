import { SchoolLayout } from '@/Components/SchoolLayout';
import { ArrowLeft } from 'lucide-react';
import { Link } from '@inertiajs/react';
import type { ReactNode } from 'react';

export function SchoolContentPage({ title, description, children }: { title: string; description: string; children: ReactNode }) {
    return <SchoolLayout title={`${title} — SMK Negeri 1 Bantul`} description={description}>
        <header className="bg-primary-950 text-white"><div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8"><Link href="/" className="inline-flex items-center gap-2 text-sm text-blue-100 hover:text-white"><ArrowLeft className="h-4 w-4"/> Beranda</Link><p className="mt-7 text-sm font-semibold uppercase tracking-widest text-orange-300">SMK Negeri 1 Bantul</p><h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1><p className="mt-3 max-w-2xl leading-7 text-blue-100">{description}</p></div></header>
        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">{children}</section>
    </SchoolLayout>;
}
