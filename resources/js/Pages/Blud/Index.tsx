import { PublicLayout } from '@/Components/PublicLayout';
import { UnitCard } from '@/Components/UnitCard';
import { Button } from '@/Components/ui/button';
import type { UnitData } from '@/types/Unit';
import { Link } from '@inertiajs/react';
import {
    ArrowRight,
    Building2,
    CheckCircle,
    Compass,
    ExternalLink,
    GraduationCap,
    Network,
    ShoppingBag,
    Sparkles,
} from 'lucide-react';

export default function BludIndex({ units }: { units: UnitData[] }) {
    const previewUnits = units.slice(0, 6);

    return (
        <PublicLayout
            title="Skansaba BLUD-Mart — Portal Unit Produksi SMKN 1 Bantul"
            description="Portal resmi penghubung dan direktori seluruh Unit Produksi SMK Negeri 1 Bantul dalam tata kelola Badan Layanan Umum Daerah (BLUD)."
        >
            {/* Header Hero BLUD */}
            <section className="relative overflow-hidden bg-gradient-to-b from-[#001b54] to-[#002b85] text-white py-16 sm:py-20 lg:py-24">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
                    <div className="inline-flex items-center gap-2 rounded-full border border-orange-300/30 bg-orange-500/10 px-4 py-1.5 text-xs font-bold text-orange-300 uppercase tracking-widest">
                        <Sparkles className="h-3.5 w-3.5" />
                        <span>Ekosistem Vokasi & Kewirausahaan Sekolah</span>
                    </div>

                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white">
                        SKANSABA BLUD-MART
                    </h1>

                    <p className="text-xl sm:text-2xl font-semibold text-orange-200/90 max-w-3xl mx-auto">
                        Portal Unit Produksi SMKN 1 Bantul
                    </p>

                    <p className="max-w-2xl mx-auto text-sm sm:text-base leading-relaxed text-blue-100/90">
                        Pusat direktori resmi yang memperkenalkan dan menghubungkan seluruh Unit Produksi SMK Negeri 1 Bantul kepada masyarakat, mitra industri, dan konsumen luas.
                    </p>

                    {/* CTA menuju semua unit */}
                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/blud/units">
                            <Button
                                size="lg"
                                className="w-full sm:w-auto gap-2 bg-[#F7941D] text-white hover:bg-[#d8770e] font-bold px-8 h-12 shadow-lg"
                            >
                                <span>Semua Unit Produksi</span>
                                <ArrowRight className="h-4 w-4" />
                            </Button>
                        </Link>
                        <Link href="/karya-siswa">
                            <Button
                                size="lg"
                                variant="outline"
                                className="w-full sm:w-auto gap-2 border-white/30 text-white hover:bg-white/10 font-bold px-6 h-12"
                            >
                                <span>Lihat Karya Siswa</span>
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Tujuan Portal & Pilar BLUD */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <span className="text-xs font-bold uppercase tracking-widest text-[#0033A0]">
                            Tujuan & Fungsi Portal
                        </span>
                        <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900">
                            Satu Pintu Menuju Unit Bisnis Sekolah
                        </h2>
                        <p className="mt-3 text-sm text-slate-600">
                            BLUD-Mart bertindak sebagai hub direktori terpusat untuk seluruh unit usaha dan jasa kejuruan di lingkungan SMKN 1 Bantul.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-xs hover:border-[#0033A0]/30 transition">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#0033A0] mb-4">
                                <Network className="h-6 w-6" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900">Direktori Terpadu</h3>
                            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
                                Seluruh Unit Produksi terdata lengkap mulai dari kategori digital printing, kuliner (Remen Coffee, Cafetaria), perbankan mitra, hingga jasa kreatif.
                            </p>
                        </div>

                        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-xs hover:border-[#0033A0]/30 transition">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-[#F7941D] mb-4">
                                <GraduationCap className="h-6 w-6" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900">Teaching Factory Riil</h3>
                            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
                                Setiap unit produksi menjadi wahana belajar langsung bagi peserta didik untuk mempraktikkan keterampilan kejuruan sesuai dinamika pasar sebenarnya.
                            </p>
                        </div>

                        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-xs hover:border-[#0033A0]/30 transition">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#0033A0] mb-4">
                                <ExternalLink className="h-6 w-6" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900">Hub Tautan Eksternal</h3>
                            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
                                Portal mengarahkan pengguna secara langsung ke website resmi masing-masing unit tanpa transaksi atau checkout di portal sekolah.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Preview Unit Produksi */}
            <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200/80">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
                        <div>
                            <span className="text-xs font-bold uppercase tracking-widest text-[#F7941D]">
                                Preview Direktori
                            </span>
                            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900">
                                Unit Produksi Pilihan
                            </h2>
                            <p className="mt-2 text-sm text-slate-600">
                                Beberapa Unit Produksi aktif di lingkungan SMKN 1 Bantul.
                            </p>
                        </div>
                        <Link href="/blud/units">
                            <Button className="gap-2 bg-[#0033A0] text-white hover:bg-[#00236c]">
                                <span>Lihat Semua Unit ({units.length})</span>
                                <ArrowRight className="h-4 w-4" />
                            </Button>
                        </Link>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {previewUnits.map((unit) => (
                            <UnitCard key={unit.id} unit={unit} />
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <Link href="/blud/units">
                            <Button
                                size="lg"
                                className="gap-2 bg-[#0033A0] text-white hover:bg-[#00236c] font-bold px-8 shadow-sm"
                            >
                                <span>Buka Direktori Seluruh Unit Produksi</span>
                                <ArrowRight className="h-4 w-4" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
