import { SchoolLayout } from '@/Components/SchoolLayout';
import { achievements } from '@/data/school';
import { Link } from '@inertiajs/react';
import { ArrowLeft, Award, Trophy, UserCheck } from 'lucide-react';

export default function AchievementsPage() {
    return (
        <SchoolLayout
            title="Prestasi — SMK Negeri 1 Bantul"
            description="Daftar prestasi dan penghargaan siswa-siswi SMK Negeri 1 Bantul di tingkat kabupaten, provinsi, hingga nasional."
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
                        Tradisi Juara & Keunggulan Vokasi
                    </p>
                    <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                        Prestasi Siswa & Lembaga
                    </h1>
                    <p className="text-sm sm:text-base text-blue-100 max-w-2xl">
                        Apresiasi atas kerja keras, dedikasi, dan pencapaian gemilang siswa-siswi SMK Negeri 1 Bantul di berbagai ajang bergengsi.
                    </p>
                </div>
            </header>

            {/* Achievements Grid */}
            <section className="py-14 sm:py-18 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {achievements.map((item) => (
                            <article
                                key={item.title}
                                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-[#0033A0]/30 hover:shadow-md transition"
                            >
                                {item.image && (
                                    <div className="h-48 overflow-hidden bg-slate-100">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                            loading="lazy"
                                        />
                                    </div>
                                )}
                                <div className="flex flex-1 flex-col p-6">
                                    <div className="flex items-center gap-2 text-xs font-bold text-[#F7941D] mb-2">
                                        <Trophy className="h-4 w-4" />
                                        <span>{item.category}</span>
                                    </div>
                                    <h2 className="text-xl font-bold text-slate-900 leading-snug">
                                        {item.title}
                                    </h2>
                                    <p className="mt-2 text-xs font-semibold text-[#0033A0]">
                                        {item.event}
                                    </p>
                                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                                        <span className="flex items-center gap-1.5">
                                            <UserCheck className="h-4 w-4 text-slate-400" />
                                            <span><strong>{item.student}</strong></span>
                                        </span>
                                        <span className="font-bold text-slate-400">{item.year}</span>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </SchoolLayout>
    );
}
