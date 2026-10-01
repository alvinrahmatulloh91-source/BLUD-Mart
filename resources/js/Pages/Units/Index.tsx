import { PublicLayout } from '@/Components/PublicLayout';
import { UnitGrid } from '@/Components/UnitGrid';
import type { UnitData } from '@/types/Unit';
import { ArrowLeft } from 'lucide-react';
import { Link } from '@inertiajs/react';

export default function UnitsIndex({ units }: { units: UnitData[] }) {
    return <PublicLayout title="Semua Unit Produksi — Skansaba BLUD-Mart" description="Direktori pusat Unit Produksi SMKN 1 Bantul beserta informasi dasar dan tautan website eksternalnya.">
        <section className="bg-primary-950 text-white"><div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8"><Link href="/blud" className="inline-flex items-center gap-2 text-sm text-blue-100 hover:text-white"><ArrowLeft className="h-4 w-4"/> Kembali ke BLUD-Mart</Link><p className="mt-8 text-xs font-bold uppercase tracking-[.18em] text-orange-300">Portal Unit Produksi</p><h1 className="mt-2 text-4xl font-bold tracking-tight">Semua Unit</h1><p className="mt-3 max-w-2xl text-blue-100">Pilih unit untuk melihat website eksternalnya jika tersedia. Unit tanpa tautan ditandai “Website Segera Hadir”.</p></div></section>
        <section className="py-12 sm:py-16"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><UnitGrid units={units}/></div></section>
    </PublicLayout>;
}
