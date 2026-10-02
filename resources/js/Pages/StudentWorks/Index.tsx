import { SchoolLayout } from '@/Components/SchoolLayout';
import { Badge } from '@/Components/ui/badge';
import { studentWorksData } from '@/data/school';
import { Link } from '@inertiajs/react';
import { ArrowLeft, BookOpen, Layers, Lightbulb, Palette, Sparkles } from 'lucide-react';

export default function StudentWorksIndex() {
    return (
        <SchoolLayout
            title="Karya Siswa — SMK Negeri 1 Bantul"
            description="Galeri apresiasi proyek dan karya inovatif hasil pembelajaran siswa-siswi SMK Negeri 1 Bantul di berbagai program keahlian."
        >
            {/* Header */}
            <header className="bg-gradient-to-b from-[#001b54] to-[#00236c] text-white py-12 sm:py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-3">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-xs sm:text-sm text-blue-200 hover:text-white transition group"
                    >
                        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                        <span>Kembali ke Beranda</span>
                    </Link>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#F7941D]">
                        Apresiasi Pembelajaran Praktik
                    </p>
                    <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                        Karya Siswa SMKN 1 Bantul
                    </h1>
                    <p className="text-sm sm:text-base text-blue-100 max-w-2xl">
                        Eksplorasi portofolio non-komersial yang menggambarkan penerapan teori kejuruan ke dalam produk dan proyek nyata.
                    </p>
                </div>
            </header>

            {/* Showcase Grid */}
            <section className="py-14 sm:py-18 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {studentWorksData.map((work) => (
                            <div
                                key={work.title}
                                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-7 shadow-xs hover:border-[#0033A0]/30 hover:shadow-md transition"
                            >
                                <div>
                                    <div className="flex items-center gap-2 text-[#0033A0] mb-3">
                                        <Lightbulb className="h-4 w-4 text-[#F7941D]" />
                                        <span className="text-xs font-bold">{work.program}</span>
                                    </div>
                                    <h2 className="text-lg font-bold text-slate-900 leading-snug">
                                        {work.title}
                                    </h2>
                                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                                        {work.description}
                                    </p>
                                </div>

                                <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                                    {work.tags.map((tag) => (
                                        <Badge
                                            key={tag}
                                            variant="secondary"
                                            className="text-[10px] font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 border-none"
                                        >
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </SchoolLayout>
    );
}
