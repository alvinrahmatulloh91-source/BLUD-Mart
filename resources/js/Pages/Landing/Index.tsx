import { PublicLayout } from '@/Components/PublicLayout';
import { UnitGrid } from '@/Components/UnitGrid';
import { Button } from '@/Components/ui/button';
import { Badge } from '@/Components/ui/badge';
import { Card, CardContent } from '@/Components/ui/card';
import { ArrowRight, Building2, GraduationCap, HandCoins, LayoutGrid } from 'lucide-react';
import type { UnitData } from '@/types/Unit';

interface LandingProps {
    units: UnitData[];
}

export default function Landing({ units }: LandingProps) {
    return (
        <PublicLayout
            title="Beranda — Skansaba BLUD-Mart"
            description="Portal terintegrasi Unit Produksi SMKN 1 Bantul. Temukan seluruh Unit Produksi dalam satu portal digital BLUD."
        >
            {/* ==================== HERO ==================== */}
            <section className="relative overflow-hidden border-b border-gray-200 bg-white">
                {/* Aksen dekoratif halus */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary-50 blur-3xl"
                />
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-accent-50 blur-3xl"
                />

                <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
                    <div className="mx-auto max-w-3xl text-center">
                        <Badge className="mb-6">Portal Digital BLUD SMKN 1 Bantul</Badge>

                        <h1 className="text-4xl font-extrabold tracking-tight text-primary-900 sm:text-5xl lg:text-6xl">
                            Skansaba BLUD-Mart
                        </h1>

                        <p className="mt-4 text-lg font-medium text-primary-600 sm:text-xl">
                            Portal terintegrasi Unit Produksi SMKN 1 Bantul
                        </p>

                        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
                            Skansaba BLUD-Mart adalah portal digital yang memusatkan informasi
                            seluruh Unit Produksi SMK Negeri 1 Bantul dalam satu tempat —
                            sebagai penghubung antara sekolah, unit produksi, dan masyarakat.
                        </p>

                        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                            <a href="/semua-unit" className="w-full sm:w-auto">
                                <Button size="lg" className="w-full gap-2 sm:w-auto">
                                    Lihat Semua Unit
                                    <ArrowRight className="h-4 w-4" />
                                </Button>
                            </a>
                            <a href="/tentang-blud" className="w-full sm:w-auto">
                                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                                    Tentang BLUD
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==================== UNIT PRODUKSI (SECTION UTAMA) ==================== */}
            <section className="py-16 lg:py-24" id="unit-produksi">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                            Portal Unit Produksi
                        </h2>
                        <p className="mt-4 text-base text-gray-600">
                            Seluruh Unit Produksi SMKN 1 Bantul terintegrasi dalam satu portal.
                            Pilih unit untuk masuk ke website resminya.
                        </p>
                    </div>

                    <div className="mt-12">
                        <UnitGrid units={units} />
                    </div>

                    <div className="mt-10 text-center">
                        <a href="/semua-unit">
                            <Button variant="outline" className="gap-2">
                                Lihat semua di Portal Unit
                                <ArrowRight className="h-4 w-4" />
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            {/* ==================== TENTANG SINGKAT ==================== */}
            <section className="border-t border-gray-200 bg-white py-16 lg:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-6 md:grid-cols-3">
                        <Card>
                            <CardContent className="p-6">
                                <LayoutGrid className="h-10 w-10 text-primary-500" aria-hidden="true" />
                                <h3 className="mt-4 text-lg font-semibold">Satu Portal Terpadu</h3>
                                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                                    Seluruh Unit Produksi terhubung dalam satu portal resmi
                                    SMKN 1 Bantul.
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-6">
                                <GraduationCap className="h-10 w-10 text-primary-500" aria-hidden="true" />
                                <h3 className="mt-4 text-lg font-semibold">Wadah Karya Siswa</h3>
                                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                                    Mendukung pembelajaran berbasis praktik dan pengembangan
                                    kreativitas siswa.
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-6">
                                <HandCoins className="h-10 w-10 text-primary-500" aria-hidden="true" />
                                <h3 className="mt-4 text-lg font-semibold">Pengelolaan BLUD</h3>
                                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                                    Bagian dari upaya kemandirian layanan sekolah melalui
                                    BLUD yang tertata.
                                </p>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="mt-10 flex justify-center">
                        <a href="/tentang-blud">
                            <Button variant="ghost" className="gap-2 text-primary-700">
                                Pelajari lebih lanjut tentang BLUD
                                <Building2 className="h-4 w-4" />
                            </Button>
                        </a>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
