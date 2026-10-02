import { SchoolLayout } from '@/Components/SchoolLayout';
import { programs } from '@/data/school';
import { Link } from '@inertiajs/react';
import { ArrowLeft, BookOpen, Briefcase, CheckCircle2, GraduationCap } from 'lucide-react';

export default function ProgramsPage() {
    return (
        <SchoolLayout
            title="Program Keahlian — SMK Negeri 1 Bantul"
            description="Informasi 7 Program Keahlian unggulan di SMK Negeri 1 Bantul: AKL, LPS, MPLB, PM, DKV, RPL, dan TKJ."
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
                        Kurikulum Vokasi Terpadu
                    </p>
                    <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                        Program Keahlian
                    </h1>
                    <p className="text-sm sm:text-base text-blue-100 max-w-2xl">
                        Mempersiapkan lulusan yang kompeten, adaptif terhadap kemajuan teknologi, dan siap terjun langsung ke dunia kerja maupun pendidikan lanjutan.
                    </p>
                </div>
            </header>

            {/* Programs List */}
            <section className="py-14 sm:py-18 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {programs.map((program) => (
                            <div
                                key={program.code}
                                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-7 shadow-xs hover:border-[#0033A0]/40 hover:shadow-md transition duration-200"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="rounded-lg bg-blue-50 px-3 py-1 text-xs font-black tracking-wider text-[#0033A0] border border-blue-200/60">
                                            {program.code}
                                        </span>
                                        <BookOpen className="h-5 w-5 text-slate-400" />
                                    </div>
                                    <h2 className="text-xl font-bold text-slate-900 leading-snug">
                                        {program.name}
                                    </h2>
                                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                                        {program.description}
                                    </p>
                                </div>

                                <div className="mt-6 pt-5 border-t border-slate-100 space-y-2">
                                    <p className="text-xs font-bold text-slate-700">Fokus Pembelajaran:</p>
                                    <p className="text-xs text-[#0033A0] font-semibold bg-blue-50/70 p-2.5 rounded-lg border border-blue-100">
                                        {program.focus}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </SchoolLayout>
    );
}
