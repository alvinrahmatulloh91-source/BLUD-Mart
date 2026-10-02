import { SchoolLayout } from '@/Components/SchoolLayout';
import { Badge } from '@/Components/ui/badge';
import { newsArticles } from '@/data/school';
import { Link } from '@inertiajs/react';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';

export default function InformationPage() {
    return (
        <SchoolLayout
            title="Berita & Informasi — SMK Negeri 1 Bantul"
            description="Kabar terkini seputar kegiatan akademik, pengumuman resmi, dan prestasi civitas akademika SMK Negeri 1 Bantul."
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
                        Kanal Informasi Resmi
                    </p>
                    <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                        Berita & Informasi Sekolah
                    </h1>
                    <p className="text-sm sm:text-base text-blue-100 max-w-2xl">
                        Ikuti perkembangan terbaru, kegiatan kesiswaan, dan pengumuman resmi dari SMK Negeri 1 Bantul.
                    </p>
                </div>
            </header>

            {/* Articles List */}
            <section className="py-14 sm:py-18 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {newsArticles.map((article) => (
                            <article
                                key={article.id}
                                className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-[#0033A0]/30 hover:shadow-md transition"
                            >
                                <div className="h-52 overflow-hidden bg-slate-100">
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="flex flex-1 flex-col p-6">
                                    <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                                        <Badge className="bg-blue-50 text-[#0033A0] hover:bg-blue-100 border-none font-semibold">
                                            {article.category}
                                        </Badge>
                                        <span className="flex items-center gap-1 text-slate-400">
                                            <Calendar className="h-3 w-3" />
                                            {article.date}
                                        </span>
                                    </div>
                                    <h2 className="text-lg font-bold text-slate-900 leading-snug">
                                        {article.title}
                                    </h2>
                                    <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600 flex-1">
                                        {article.excerpt}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </SchoolLayout>
    );
}
