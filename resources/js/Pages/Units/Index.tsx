import { PublicLayout } from '@/Components/PublicLayout';
import { UnitGrid } from '@/Components/UnitGrid';
import { Button } from '@/Components/ui/button';
import type { UnitData } from '@/types/Unit';
import { Link } from '@inertiajs/react';
import { ArrowLeft, Building2, Filter, Search } from 'lucide-react';
import { useMemo, useState } from 'react';

export default function UnitsIndex({ units }: { units: UnitData[] }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string>('Semua');

    // Extract unique categories
    const categories = useMemo(() => {
        const set = new Set<string>();
        units.forEach((u) => {
            if (u.category) set.add(u.category);
        });
        return ['Semua', ...Array.from(set)];
    }, [units]);

    // Filter units based on search query and category
    const filteredUnits = useMemo(() => {
        return units.filter((u) => {
            const matchesQuery =
                u.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                (u.description && u.description.toLowerCase().includes(searchQuery.toLowerCase()));
            const matchesCategory =
                selectedCategory === 'Semua' || u.category === selectedCategory;
            return matchesQuery && matchesCategory;
        });
    }, [units, searchQuery, selectedCategory]);

    return (
        <PublicLayout
            title="Direktori Seluruh Unit Produksi — Skansaba BLUD-Mart"
            description="Daftar lengkap seluruh Unit Produksi SMKN 1 Bantul. Akses informasi dasar dan tautan langsung menuju website eksternal masing-masing unit."
        >
            {/* Header Directory */}
            <section className="bg-gradient-to-b from-[#001b54] to-[#00236c] text-white py-12 sm:py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4">
                    <Link
                        href="/blud"
                        className="inline-flex items-center gap-2 text-xs sm:text-sm text-blue-200 hover:text-white transition group"
                    >
                        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                        <span>Kembali ke Beranda BLUD-Mart</span>
                    </Link>

                    <div className="pt-2">
                        <span className="text-xs font-bold uppercase tracking-widest text-[#F7941D]">
                            Portal Hub & Direktori
                        </span>
                        <h1 className="mt-1 text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
                            Seluruh Unit Produksi (BLUD)
                        </h1>
                        <p className="mt-2 text-sm sm:text-base text-blue-100/90 max-w-3xl leading-relaxed">
                            Jelajahi seluruh Unit Produksi yang dikembangkan oleh civitas akademika SMK Negeri 1 Bantul. Setiap unit dikelola secara mandiri dan dapat diakses melalui tautan website resmi eksternal masing-masing.
                        </p>
                    </div>
                </div>
            </section>

            {/* Directory Controls & Grid */}
            <section className="py-12 sm:py-16 bg-slate-50 min-h-[500px]">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
                    {/* Filter & Search Bar */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                        {/* Search Input */}
                        <div className="relative w-full md:w-80">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Cari nama atau deskripsi unit..."
                                className="w-full pl-9 pr-4 py-2 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0033A0]/30 focus:border-[#0033A0]"
                            />
                        </div>

                        {/* Category Badges */}
                        <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
                            <span className="text-xs font-semibold text-slate-500 mr-1 hidden sm:inline">Kategori:</span>
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    type="button"
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition ${
                                        selectedCategory === cat
                                            ? 'bg-[#0033A0] text-white shadow-xs'
                                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                    }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Result Count */}
                    <div className="flex items-center justify-between text-xs text-slate-500 px-1">
                        <span>Menampilkan <strong>{filteredUnits.length}</strong> Unit Produksi</span>
                        {searchQuery && (
                            <button
                                onClick={() => { setSearchQuery(''); setSelectedCategory('Semua'); }}
                                className="text-[#0033A0] hover:underline"
                            >
                                Reset Pencarian
                            </button>
                        )}
                    </div>

                    {/* 3 Col Desktop, 2 Col Tablet, 1 Col Mobile Grid */}
                    <UnitGrid units={filteredUnits} />
                </div>
            </section>
        </PublicLayout>
    );
}
