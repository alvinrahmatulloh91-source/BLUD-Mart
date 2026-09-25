import { PublicLayout } from '@/Components/PublicLayout';
import { UnitGrid } from '@/Components/UnitGrid';
import { Card, CardContent } from '@/Components/ui/card';
import { CheckCircle2, Landmark, Network, Target } from 'lucide-react';
import type { UnitData } from '@/Components/UnitCard';

interface AboutProps {
    units: UnitData[];
}

export default function AboutIndex({ units }: AboutProps) {
    return (
        <PublicLayout
            title="Tentang BLUD — Skansaba BLUD-Mart"
            description="Pengenalan BLUD (Badan Layanan Umum Daerah) dan tujuan portal Skansaba BLUD-Mart."
        >
            {/* Pengenalan BLUD */}
            <section className="py-12 lg:py-16">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Tentang BLUD
                    </h1>

                    <p className="mt-6 text-base leading-relaxed text-gray-600 sm:text-lg">
                        <strong>BLUD (Badan Layanan Umum Daerah)</strong> adalah pola pengelolaan
                        keuangan sekolah yang memberikan fleksibilitas dalam mengelola sumber
                        daya untuk meningkatkan kualitas layanan pendidikan. Melalui BLUD,
                        SMK Negeri 1 Bantul mengembangkan Unit Produksi sebagai sarana
                        pembelajaran berbasis praktik sekaligus layanan kepada masyarakat.
                    </p>

                    <div className="mt-10 grid gap-6 md:grid-cols-3">
                        <Card>
                            <CardContent className="p-6">
                                <Landmark className="h-10 w-10 text-primary-500" aria-hidden="true" />
                                <h2 className="mt-4 text-lg font-semibold">Apa itu BLUD?</h2>
                                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                                    Pola pengelolaan keuangan daerah yang diterapkan pada
                                    unit kerja pemerintah, termasuk satuan pendidikan,
                                    untuk layanan yang lebih baik.
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-6">
                                <Target className="h-10 w-10 text-primary-500" aria-hidden="true" />
                                <h2 className="mt-4 text-lg font-semibold">Tujuan Portal</h2>
                                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                                    Memusatkan informasi seluruh Unit Produksi sehingga mudah
                                    diakses oleh siswa, guru, dan masyarakat.
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-6">
                                <Network className="h-10 w-10 text-primary-500" aria-hidden="true" />
                                <h2 className="mt-4 text-lg font-semibold">Peran Unit Produksi</h2>
                                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                                    Ujung tombak implementasi BLUD di sekolah — wadah siswa
                                    belajar mengelola layanan dan produk secara nyata.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Prinsip portal */}
            <section className="border-t border-gray-200 bg-white py-12 lg:py-16">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900">
                        Prinsip Skansaba BLUD-Mart
                    </h2>
                    <ul className="mt-6 space-y-3">
                        {[
                            'Satu website utama + satu portal terintegrasi untuk seluruh Unit Produksi.',
                            'Portal menjadi pusat informasi dan penghubung menuju website masing-masing unit.',
                            'Setiap Unit Produksi mengembangkan website sendiri secara bertahap.',
                            'Transparan, informatif, dan mendukung pembelajaran berbasis praktik.',
                        ].map((item) => (
                            <li key={item} className="flex items-start gap-3 text-gray-600">
                                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary-500" aria-hidden="true" />
                                <span className="text-sm leading-relaxed sm:text-base">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Daftar unit */}
            <section className="py-12 lg:py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900">Unit Produksi BLUD</h2>
                    <p className="mt-2 text-gray-600">
                        Unit Produksi yang saat ini tergabung dalam portal.
                    </p>
                    <div className="mt-8">
                        <UnitGrid units={units} />
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
