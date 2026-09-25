import { PublicLayout } from '@/Components/PublicLayout';
import { Card, CardContent } from '@/Components/ui/card';
import { Palette, Sparkles } from 'lucide-react';

export default function StudentWorksIndex() {
    return (
        <PublicLayout
            title="Karya Siswa — Skansaba BLUD-Mart"
            description="Etalase informasi karya dan produk kreatif siswa SMKN 1 Bantul."
        >
            <section className="py-12 lg:py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Karya Siswa
                        </h1>
                        <p className="mt-3 text-base text-gray-600 sm:text-lg">
                            Etalase informasi karya dan produk kreatif siswa SMK Negeri 1 Bantul.
                        </p>
                    </div>

                    {/* Placeholder — struktur halaman saja, belum ada sistem marketplace */}
                    <div className="mt-10">
                        <Card className="border-dashed">
                            <CardContent className="flex flex-col items-center justify-center p-12 text-center">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-50">
                                    <Palette className="h-8 w-8 text-accent-500" aria-hidden="true" />
                                </div>
                                <h2 className="mt-6 text-lg font-semibold text-gray-900">
                                    Informasi segera hadir
                                </h2>
                                <p className="mt-2 max-w-md text-sm leading-relaxed text-gray-500">
                                    Etalase karya siswa sedang disiapkan. Pantau terus halaman
                                    ini untuk melihat karya dan produk kreatif dari seluruh
                                    Unit Produksi SMKN 1 Bantul.
                                </p>
                                <p className="mt-6 inline-flex items-center gap-1.5 text-xs font-medium text-accent-600">
                                    <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                                    Skansaba BLUD-Mart
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
