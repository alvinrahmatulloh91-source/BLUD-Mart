import { SchoolLayout } from '@/Components/SchoolLayout';
import { Button } from '@/Components/ui/button';
import { Card, CardContent } from '@/Components/ui/card';
import { Badge } from '@/Components/ui/badge';
import {
    achievements,
    alumniProfiles,
    newsArticles,
    partners,
    programs,
    schoolIdentity,
} from '@/data/school';
import type { UnitData } from '@/types/Unit';
import { Link } from '@inertiajs/react';
import {
    ArrowRight,
    Award,
    BookOpen,
    BriefcaseBusiness,
    Building2,
    Calendar,
    CheckCircle2,
    Compass,
    ExternalLink,
    GraduationCap,
    HeartHandshake,
    Sparkles,
    TrendingUp,
    Users,
} from 'lucide-react';

export default function SchoolIndex({ units }: { units: UnitData[] }) {
    const featuredUnits = units.slice(0, 3);
    const primaryNews = newsArticles.find((n) => n.isPrimary) || newsArticles[0];
    const secondaryNews = newsArticles.filter((n) => n.id !== primaryNews.id);

    return (
        <SchoolLayout
            title="SMK Negeri 1 Bantul — Sekolah Vokasi Berkarakter & Unggul"
            description="Website Resmi SMK Negeri 1 Bantul. Membangun kompetensi vokasi, karakter, karya nyata, dan kesiapan siswa memasuki dunia usaha serta industri."
        >
            {/* ========================================================================= */}
            {/* 1. HERO SECTION                                                          */}
            {/* ========================================================================= */}
            <section className="relative overflow-hidden bg-gradient-to-b from-[#001b54] to-[#00236c] text-white">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
                <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-12 lg:px-8 lg:py-24">
                    {/* Left: Headline & School Identity */}
                    <div className="lg:col-span-7 space-y-6">
                        <div className="inline-flex items-center gap-2 rounded-full border border-blue-300/30 bg-blue-500/10 px-3.5 py-1.5 text-xs font-semibold text-blue-200">
                            <span className="h-2 w-2 rounded-full bg-[#F7941D]"></span>
                            <span>Pendidikan Vokasi Unggulan · Bantul, D.I. Yogyakarta</span>
                        </div>

                        <div className="space-y-3">
                            <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white">
                                SMK NEGERI 1 BANTUL
                            </h1>
                            <p className="text-xl sm:text-2xl font-medium text-orange-200/90 leading-snug">
                                Membangun Kompetensi, Karakter, dan Kesiapan Berkarya
                            </p>
                        </div>

                        <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-blue-100/90 font-normal">
                            Menyelenggarakan pendidikan kejuruan terakreditasi A dengan 7 program keahlian unggulan yang terintegrasi langsung dengan standar Dunia Usaha dan Dunia Industri (DUDI) serta ekosistem kewirausahaan nyata.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-2">
                            <a href="#profil-sekolah">
                                <Button
                                    size="lg"
                                    className="w-full sm:w-auto gap-2 bg-white text-[#001b54] hover:bg-blue-50 font-bold px-7 h-12 shadow-md hover:shadow-lg transition"
                                >
                                    <span>Jelajahi Sekolah</span>
                                    <ArrowRight className="h-4 w-4" />
                                </Button>
                            </a>
                            <Link href="/blud">
                                <Button
                                    size="lg"
                                    className="w-full sm:w-auto gap-2 bg-[#F7941D] text-white hover:bg-[#d8770e] font-bold px-7 h-12 shadow-md hover:shadow-lg transition"
                                >
                                    <span>Skansaba BLUD-Mart</span>
                                    <ArrowRight className="h-4 w-4" />
                                </Button>
                            </Link>
                        </div>

                        {/* Quick Stats Banner */}
                        <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/15">
                            <div>
                                <p className="text-2xl sm:text-3xl font-extrabold text-[#F7941D]">7</p>
                                <p className="text-xs text-blue-200 mt-0.5">Program Keahlian</p>
                            </div>
                            <div>
                                <p className="text-2xl sm:text-3xl font-extrabold text-white">A</p>
                                <p className="text-xs text-blue-200 mt-0.5">Akreditasi Unggul</p>
                            </div>
                            <div>
                                <p className="text-2xl sm:text-3xl font-extrabold text-[#F7941D]">12+</p>
                                <p className="text-xs text-blue-200 mt-0.5">Unit Produksi BLUD</p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Authentic School Image & Badge */}
                    <div className="lg:col-span-5 relative">
                        <div className="relative mx-auto max-w-md lg:max-w-none overflow-hidden rounded-2xl border-2 border-white/20 shadow-2xl bg-white/5 backdrop-blur-xs">
                            <img
                                src="/images/school/front_view.jpg"
                                alt="Gedung Utama SMK Negeri 1 Bantul"
                                className="w-full h-72 sm:h-96 object-cover object-center transform transition duration-500 hover:scale-105"
                                width={800}
                                height={600}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                            <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                                <div className="flex items-center gap-2 mb-1">
                                    <Building2 className="h-4 w-4 text-[#F7941D]" />
                                    <span className="text-xs font-bold uppercase tracking-wider text-orange-200">
                                        Kampus SMKN 1 Bantul
                                    </span>
                                </div>
                                <p className="text-sm font-semibold">
                                    Jl. Parangtritis Km. 11, Sabdodadi, Bantul, D.I. Yogyakarta
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================================================================= */}
            {/* 2. PROFIL SEKOLAH SECTION                                                */}
            {/* ========================================================================= */}
            <section id="profil-sekolah" className="py-16 sm:py-20 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-12 lg:grid-cols-12 items-center">
                        {/* Sambutan Kepala Sekolah & Foto */}
                        <div className="lg:col-span-5">
                            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-50">
                                <img
                                    src="/images/school/kepsek.jpeg"
                                    alt="Kepala SMK Negeri 1 Bantul"
                                    className="w-full h-80 sm:h-96 object-cover object-top"
                                    loading="lazy"
                                />
                                <div className="p-5 bg-white border-t border-slate-100">
                                    <p className="text-base font-bold text-slate-900">{schoolIdentity.headmaster.name}</p>
                                    <p className="text-xs font-semibold text-[#0033A0]">{schoolIdentity.headmaster.role}</p>
                                </div>
                            </div>
                        </div>

                        {/* Profil Text & Keunggulan */}
                        <div className="lg:col-span-7 space-y-6">
                            <div>
                                <span className="text-xs font-bold uppercase tracking-widest text-[#F7941D]">
                                    Profil Sekolah
                                </span>
                                <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                                    Belajar Kejuruan Terapan yang Dekat dengan Kebutuhan Riil
                                </h2>
                            </div>

                            <p className="text-base leading-relaxed text-slate-600">
                                SMK Negeri 1 Bantul (SKANSABA) merupakan institusi pendidikan kejuruan terkemuka di Kabupaten Bantul, Daerah Istimewa Yogyakarta. Sejak berdiri, sekolah ini berdedikasi menghasilkan lulusan yang berakhlak mulia, kompeten di bidangnya, inovatif, serta siap terserap ke dunia kerja maupun berwirausaha mandiri.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-4 pt-2">
                                <div className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50/80 p-4">
                                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[#0033A0] mt-0.5" />
                                    <div>
                                        <h3 className="text-sm font-bold text-slate-900">Kurikulum Selaras Industri</h3>
                                        <p className="text-xs text-slate-600 mt-1">
                                            Penyelarasan kompetensi secara berkala bersama asosiasi profesi dan mitra industri strategis.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50/80 p-4">
                                    <TrendingUp className="h-5 w-5 shrink-0 text-[#F7941D] mt-0.5" />
                                    <div>
                                        <h3 className="text-sm font-bold text-slate-900">Teaching Factory & BLUD</h3>
                                        <p className="text-xs text-slate-600 mt-1">
                                            Model pembelajaran berbasis produksi dan layanan nyata melalui unit bisnis sekolah.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-2">
                                <Link
                                    href="/profil"
                                    className="inline-flex items-center gap-2 font-bold text-[#0033A0] hover:text-[#00236c] group"
                                >
                                    <span>Pelajari Profil & Sejarah Selengkapnya</span>
                                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================================================================= */}
            {/* 3. PROGRAM KEAHLIAN / JURUSAN                                            */}
            {/* ========================================================================= */}
            <section className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200/80">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
                        <div>
                            <span className="text-xs font-bold uppercase tracking-widest text-[#F7941D]">
                                Konsentrasi Keahlian
                            </span>
                            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                                7 Program Keahlian Unggulan
                            </h2>
                            <p className="mt-2 text-sm text-slate-600 max-w-2xl">
                                Dirancang untuk membekali peserta didik dengan keahlian teknis modern dan sertifikasi kompetensi kejuruan.
                            </p>
                        </div>
                        <Link
                            href="/program-keahlian"
                            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0033A0] hover:underline"
                        >
                            <span>Lihat Semua Kurikulum Jurusan</span>
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {programs.map((program) => (
                            <Card
                                key={program.code}
                                className="border border-slate-200/90 bg-white hover:border-[#0033A0]/40 hover:shadow-md transition-all rounded-xl"
                            >
                                <CardContent className="p-6 flex flex-col h-full">
                                    <div className="flex items-center justify-between gap-2 mb-3">
                                        <span className="rounded-md bg-blue-50 px-2.5 py-1 text-xs font-black tracking-wide text-[#0033A0] border border-blue-200/60">
                                            {program.code}
                                        </span>
                                        <BookOpen className="h-4 w-4 text-slate-400" />
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900">{program.name}</h3>
                                    <p className="mt-2 text-xs leading-relaxed text-slate-600 flex-1">
                                        {program.description}
                                    </p>
                                    <div className="mt-4 pt-3 border-t border-slate-100">
                                        <p className="text-[11px] font-semibold text-slate-500">
                                            Fokus: <span className="text-slate-800">{program.focus}</span>
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========================================================================= */}
            {/* 4. LULUSAN TERBAIK                                                       */}
            {/* ========================================================================= */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <span className="text-xs font-bold uppercase tracking-widest text-[#F7941D]">
                            Alumni & Jejak Langkah
                        </span>
                        <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                            Lulusan Terbaik
                        </h2>
                        <p className="mt-3 text-sm text-slate-600">
                            Bukti nyata dedikasi dan kesiapan lulusan SMKN 1 Bantul dalam menorehkan prestasi dan berkarya di panggung profesional.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        {alumniProfiles.map((alumni) => (
                            <div
                                key={alumni.name}
                                className="rounded-xl border border-slate-200 bg-white p-6 shadow-xs flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-[#0033A0]">
                                            <GraduationCap className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 text-base">{alumni.name}</h3>
                                            <p className="text-xs text-slate-500">
                                                Alumni {alumni.program} · Lulus {alumni.graduationYear}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="rounded-lg bg-slate-50 p-3.5 border border-slate-100">
                                        <p className="text-xs font-semibold text-[#0033A0]">Pencapaian:</p>
                                        <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                                            {alumni.achievement}
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500">
                                    Peran Saat Ini: <strong className="text-slate-800">{alumni.currentRole}</strong>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========================================================================= */}
            {/* 5. PRESTASI                                                              */}
            {/* ========================================================================= */}
            <section className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200/80">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
                        <div>
                            <span className="text-xs font-bold uppercase tracking-widest text-[#F7941D]">
                                Capaian & Rekam Jejak
                            </span>
                            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                                Prestasi Siswa & Sekolah
                            </h2>
                            <p className="mt-2 text-sm text-slate-600">
                                Torehan prestasi membanggakan di tingkat regional, provinsi, hingga panggung nasional.
                            </p>
                        </div>
                        <Link
                            href="/prestasi"
                            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0033A0] hover:underline"
                        >
                            <span>Lihat Seluruh Arsip Prestasi</span>
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        {achievements.slice(0, 3).map((item) => (
                            <div
                                key={item.title}
                                className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition hover:shadow-md"
                            >
                                {item.image && (
                                    <div className="h-44 overflow-hidden bg-slate-100">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                            loading="lazy"
                                        />
                                    </div>
                                )}
                                <div className="p-5">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Award className="h-4 w-4 text-[#F7941D]" />
                                        <span className="text-xs font-bold text-[#0033A0]">{item.category}</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                                    <p className="mt-1 text-xs text-slate-500 font-medium">{item.event}</p>
                                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                                        <span>Peraih: <strong>{item.student}</strong></span>
                                        <span className="font-semibold text-slate-400">{item.year}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========================================================================= */}
            {/* 6. KERJA SAMA INDUSTRI                                                   */}
            {/* ========================================================================= */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <span className="text-xs font-bold uppercase tracking-widest text-[#F7941D]">
                            Kemitraan Strategis DUDI
                        </span>
                        <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                            Kerja Sama Industri & Dunia Usaha
                        </h2>
                        <p className="mt-3 text-sm text-slate-600">
                            Kolaborasi aktif bersama dunia usaha, industri, dan perguruan tinggi untuk sinkronisasi kurikulum, magang PKL, serta rekrutmen kerja lulusan.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                        {partners.slice(0, 12).map((partner) => (
                            <div
                                key={partner.name}
                                className="flex flex-col items-center justify-center rounded-xl border border-slate-200 bg-white p-4 text-center transition hover:border-[#0033A0]/30 hover:shadow-xs"
                            >
                                <div className="flex h-14 w-full items-center justify-center mb-2">
                                    {partner.logo ? (
                                        <img
                                            src={partner.logo}
                                            alt={partner.name}
                                            className="max-h-12 max-w-[90%] object-contain"
                                            loading="lazy"
                                        />
                                    ) : (
                                        <HeartHandshake className="h-8 w-8 text-slate-400" />
                                    )}
                                </div>
                                <strong className="text-xs text-slate-800 line-clamp-1">{partner.name}</strong>
                                <span className="text-[10px] text-slate-500 line-clamp-1 mt-0.5">{partner.field}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========================================================================= */}
            {/* 7 & 8. PKL & BKK CAREER CENTER + PPDB (DUAL SECTION CARD)               */}
            {/* ========================================================================= */}
            <section className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200/80">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-6 md:grid-cols-2">
                        {/* Section 7: PKL & Career Center (BKK) */}
                        <div className="rounded-2xl border border-slate-200 bg-white p-8 flex flex-col justify-between shadow-xs">
                            <div>
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#0033A0] mb-5">
                                    <BriefcaseBusiness className="h-6 w-6" />
                                </div>
                                <span className="text-xs font-bold uppercase tracking-widest text-[#0033A0]">
                                    Kesiapan Kerja
                                </span>
                                <h3 className="mt-2 text-2xl font-bold text-slate-900">
                                    PKL & Career Center (BKK)
                                </h3>
                                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                                    Bursa Kerja Khusus (BKK) SMKN 1 Bantul memfasilitasi program Praktik Kerja Lapangan (PKL), uji kompetensi industri, pembinaan soft skills, serta penyaluran kerja langsung bersama puluhan mitra DUDI terpercaya.
                                </p>
                            </div>
                            <div className="mt-8 pt-4 border-t border-slate-100">
                                <Link href="/bkk">
                                    <Button className="w-full sm:w-auto gap-2 bg-[#0033A0] text-white hover:bg-[#00236c]">
                                        <span>Selengkapnya Mengenai BKK</span>
                                        <ArrowRight className="h-4 w-4" />
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        {/* Section 8: PPDB */}
                        <div className="rounded-2xl border border-orange-200 bg-white p-8 flex flex-col justify-between shadow-xs">
                            <div>
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-[#F7941D] mb-5">
                                    <GraduationCap className="h-6 w-6" />
                                </div>
                                <span className="text-xs font-bold uppercase tracking-widest text-[#F7941D]">
                                    Penerimaan Siswa Baru
                                </span>
                                <h3 className="mt-2 text-2xl font-bold text-slate-900">
                                    Informasi PPDB / SPMB
                                </h3>
                                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                                    Informasi resmi alur pendaftaran, persyaratan calon peserta didik baru, jadwal seleksi, kuota konsentrasi keahlian, dan pengumuman hasil seleksi Penerimaan Peserta Didik Baru SMKN 1 Bantul.
                                </p>
                            </div>
                            <div className="mt-8 pt-4 border-t border-slate-100">
                                <Link href="/ppdb">
                                    <Button className="w-full sm:w-auto gap-2 bg-[#F7941D] text-white hover:bg-[#d8770e]">
                                        <span>Informasi PPDB Lengkap</span>
                                        <ArrowRight className="h-4 w-4" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================================================================= */}
            {/* 9. PRODUK UNGGULAN SEKOLAH / BLUD (PREVIEW)                               */}
            {/* ========================================================================= */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
                        <div>
                            <span className="text-xs font-bold uppercase tracking-widest text-[#F7941D]">
                                Badan Layanan Umum Daerah
                            </span>
                            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                                Produk Unggulan & Unit Produksi (BLUD)
                            </h2>
                            <p className="mt-2 text-sm text-slate-600 max-w-2xl">
                                Unit Produksi (UP) sekolah dikelola sebagai sarana Teaching Factory dan layanan profesional bagi masyarakat.
                            </p>
                        </div>
                        <Link href="/blud/units">
                            <Button className="gap-2 bg-[#0033A0] text-white hover:bg-[#00236c]">
                                <span>Jelajahi Semua Unit</span>
                                <ArrowRight className="h-4 w-4" />
                            </Button>
                        </Link>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {featuredUnits.map((unit) => (
                            <div
                                key={unit.id}
                                className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-xs hover:border-[#0033A0]/30 hover:shadow-md transition"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#0033A0]">
                                        {unit.logo ? (
                                            <img
                                                src={`/storage/${unit.logo}`}
                                                alt={`Logo ${unit.name}`}
                                                className="h-full w-full object-contain p-1"
                                                loading="lazy"
                                            />
                                        ) : (
                                            <Building2 className="h-6 w-6" />
                                        )}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 text-base">{unit.name}</h3>
                                        <Badge variant="outline" className="text-[10px] text-[#0033A0] bg-blue-50/50 mt-1">
                                            {unit.category}
                                        </Badge>
                                    </div>
                                </div>
                                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed flex-1">
                                    {unit.description || 'Unit Produksi SMKN 1 Bantul. Informasi profil dan layanan lebih lanjut akan segera diperbarui.'}
                                </p>
                                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                                    <span>Status Website:</span>
                                    {unit.website_url ? (
                                        <span className="font-semibold text-emerald-700">Tersedia ↗</span>
                                    ) : (
                                        <span className="font-medium text-amber-700">Segera Hadir</span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========================================================================= */}
            {/* 10. KARYA SISWA                                                          */}
            {/* ========================================================================= */}
            <section className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200/80">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="rounded-2xl bg-gradient-to-r from-[#001b54] to-[#002b85] p-8 sm:p-12 text-white shadow-xl">
                        <div className="grid gap-8 lg:grid-cols-12 items-center">
                            <div className="lg:col-span-8 space-y-4">
                                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-orange-200">
                                    <Sparkles className="h-3.5 w-3.5 text-[#F7941D]" />
                                    <span>Apresiasi Inovasi & Pembelajaran</span>
                                </div>
                                <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                                    Karya Siswa SMKN 1 Bantul
                                </h2>
                                <p className="text-sm sm:text-base leading-relaxed text-blue-100/90 max-w-2xl">
                                    Ruang pamer karya dan proyek terapan yang lahir dari proses pembelajaran kejuruan: mulai dari desain grafis, aplikasi piranti lunak, media digital, hingga perancangan model bisnis ritel.
                                </p>
                            </div>
                            <div className="lg:col-span-4 flex lg:justify-end">
                                <Link href="/karya-siswa">
                                    <Button
                                        size="lg"
                                        className="w-full sm:w-auto gap-2 bg-[#F7941D] text-white hover:bg-[#d8770e] font-bold px-6 shadow-md"
                                    >
                                        <span>Lihat Karya Siswa</span>
                                        <ArrowRight className="h-4 w-4" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================================================================= */}
            {/* 11. BERITA / INFORMASI                                                   */}
            {/* ========================================================================= */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
                        <div>
                            <span className="text-xs font-bold uppercase tracking-widest text-[#F7941D]">
                                Publikasi & Agenda
                            </span>
                            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                                Berita & Informasi Sekolah
                            </h2>
                            <p className="mt-2 text-sm text-slate-600">
                                Informasi teraktual mengenai kegiatan sekolah, pengumuman, dan prestasi civitas akademika.
                            </p>
                        </div>
                        <Link
                            href="/informasi"
                            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0033A0] hover:underline"
                        >
                            <span>Lihat Semua Berita</span>
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-12 items-start">
                        {/* 1 Artikel Utama */}
                        <article className="lg:col-span-7 rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs hover:shadow-md transition">
                            <div className="h-64 sm:h-80 overflow-hidden bg-slate-100">
                                <img
                                    src={primaryNews.image}
                                    alt={primaryNews.title}
                                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                                    loading="lazy"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-3 text-xs text-slate-500 mb-2">
                                    <Badge className="bg-blue-50 text-[#0033A0] hover:bg-blue-100 border-none font-semibold">
                                        {primaryNews.category}
                                    </Badge>
                                    <span className="flex items-center gap-1 text-slate-400">
                                        <Calendar className="h-3 w-3" />
                                        {primaryNews.date}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mt-2 leading-snug">
                                    {primaryNews.title}
                                </h3>
                                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                                    {primaryNews.excerpt}
                                </p>
                            </div>
                        </article>

                        {/* Side Articles */}
                        <div className="lg:col-span-5 space-y-4">
                            {secondaryNews.map((article) => (
                                <article
                                    key={article.id}
                                    className="flex gap-4 p-4 rounded-xl border border-slate-200 bg-white hover:border-[#0033A0]/30 transition shadow-xs"
                                >
                                    <div className="h-24 w-28 shrink-0 overflow-hidden rounded-lg bg-slate-100">
                                        <img
                                            src={article.image}
                                            alt={article.title}
                                            className="h-full w-full object-cover"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="flex flex-col justify-between flex-1">
                                        <div>
                                            <span className="text-[10px] font-bold text-[#F7941D] uppercase tracking-wide">
                                                {article.category}
                                            </span>
                                            <h4 className="text-sm font-bold text-slate-900 line-clamp-2 mt-1">
                                                {article.title}
                                            </h4>
                                        </div>
                                        <span className="text-[11px] text-slate-400 mt-2 flex items-center gap-1">
                                            <Calendar className="h-3 w-3" />
                                            {article.date}
                                        </span>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================================================================= */}
            {/* 12. CALL TO ACTION (CTA) SECTION                                         */}
            {/* ========================================================================= */}
            <section className="py-16 sm:py-20 bg-slate-900 text-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
                    <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                        Siap Menjadi Bagian dari Ekosistem SMKN 1 Bantul?
                    </h2>
                    <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-300 leading-relaxed">
                        Bergabunglah bersama ribuan siswa dan mitra industri untuk menciptakan masa depan vokasi yang unggul, berdaya saing, dan berkarakter.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                        <Link href="/ppdb">
                            <Button
                                size="lg"
                                className="w-full sm:w-auto gap-2 bg-[#F7941D] text-white hover:bg-[#d8770e] font-bold px-8 h-12 shadow-lg"
                            >
                                <span>Informasi Pendaftaran PPDB</span>
                                <ArrowRight className="h-4 w-4" />
                            </Button>
                        </Link>
                        <Link href="/blud">
                            <Button
                                size="lg"
                                variant="outline"
                                className="w-full sm:w-auto gap-2 border-white/30 text-white hover:bg-white/10 font-bold px-8 h-12"
                            >
                                <span>Kunjungi Skansaba BLUD-Mart</span>
                                <ExternalLink className="h-4 w-4" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
            {/* 13. FOOTER is rendered automatically by SchoolLayout */}
        </SchoolLayout>
    );
}
