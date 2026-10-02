import { SchoolLayout } from '@/Components/SchoolLayout';
import { Button } from '@/Components/ui/button';
import { partners } from '@/data/school';
import { Link } from '@inertiajs/react';
import {
    ArrowLeft,
    BriefcaseBusiness,
    Building2,
    CheckCircle2,
    GraduationCap,
    Handshake,
    HeartHandshake,
    UsersRound,
} from 'lucide-react';

export default function CareerIndex() {
    return (
        <SchoolLayout
            title="PKL & Career Center / BKK — SMK Negeri 1 Bantul"
            description="Informasi program Praktik Kerja Lapangan (PKL), Bursa Kerja Khusus (BKK), dan kerja sama penempatan lulusan SMKN 1 Bantul."
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
                        Kesiapan Kerja & Hubungan Industri
                    </p>
                    <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                        PKL & Career Center (BKK)
                    </h1>
                    <p className="text-sm sm:text-base text-blue-100 max-w-2xl">
                        Mendukung kesiapan kerja peserta didik melalui pengalaman praktik nyata di industri dan fasilitasi rekrutmen alumni.
                    </p>
                </div>
            </header>

            {/* Core Pillars */}
            <section className="py-14 sm:py-18 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
                    <div className="grid gap-8 md:grid-cols-3">
                        <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-xs">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#0033A0] mb-4">
                                <BriefcaseBusiness className="h-6 w-6" />
                            </div>
                            <h2 className="text-xl font-bold text-slate-900">Praktik Kerja Lapangan (PKL)</h2>
                            <p className="mt-3 text-sm leading-relaxed text-slate-600">
                                Program wajib bagi siswa tingkat menengah untuk mengaplikasikan ilmu kejuruan secara langsung di industri mitra selama 3 hingga 6 bulan dengan pendampingan instruktur profesional.
                            </p>
                            <ul className="mt-4 space-y-2 text-xs text-slate-600 border-t border-slate-100 pt-4">
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 className="h-3.5 w-3.5 text-[#0033A0]" />
                                    <span>Penempatan sesuai kompetensi keahlian</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 className="h-3.5 w-3.5 text-[#0033A0]" />
                                    <span>Sertifikat pengalaman industri</span>
                                </li>
                            </ul>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-xs">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-[#F7941D] mb-4">
                                <UsersRound className="h-6 w-6" />
                            </div>
                            <h2 className="text-xl font-bold text-slate-900">Bursa Kerja Khusus (BKK)</h2>
                            <p className="mt-3 text-sm leading-relaxed text-slate-600">
                                Unit penempatan tenaga kerja resmi di bawah pengawasan Disnakertrans yang memfasilitasi temu bakat antara alumni dengan perusahaan yang membutuhkan tenaga kerja terampil siap pakai.
                            </p>
                            <ul className="mt-4 space-y-2 text-xs text-slate-600 border-t border-slate-100 pt-4">
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 className="h-3.5 w-3.5 text-[#F7941D]" />
                                    <span>Informasi lowongan kerja terverifikasi</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 className="h-3.5 w-3.5 text-[#F7941D]" />
                                    <span>Rekrutmen kampus terpadu (campus hiring)</span>
                                </li>
                            </ul>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-xs">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#0033A0] mb-4">
                                <Handshake className="h-6 w-6" />
                            </div>
                            <h2 className="text-xl font-bold text-slate-900">Pembinaan Karier & Soft Skills</h2>
                            <p className="mt-3 text-sm leading-relaxed text-slate-600">
                                Pembekalan etika kerja, budaya industri, pembuatan CV profesional, simulasi wawancara kerja, dan motivasi berwirausaha mandiri bagi siswa tingkat akhir.
                            </p>
                            <ul className="mt-4 space-y-2 text-xs text-slate-600 border-t border-slate-100 pt-4">
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 className="h-3.5 w-3.5 text-[#0033A0]" />
                                    <span>Workshop kesiapan dunia kerja</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 className="h-3.5 w-3.5 text-[#0033A0]" />
                                    <span>Konseling karier & studi lanjut</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Mitra Rekrutmen & Industri */}
                    <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-8">
                        <div className="text-center max-w-2xl mx-auto mb-8">
                            <h3 className="text-xl font-bold text-slate-900">Jejaring Mitra Industri & Rekrutmen</h3>
                            <p className="mt-2 text-xs sm:text-sm text-slate-600">
                                Berkolaborasi dengan industri terkemuka untuk memastikan keterserapan lulusan yang optimal.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                            {partners.map((partner) => (
                                <div
                                    key={partner.name}
                                    className="flex flex-col items-center justify-center rounded-xl border border-slate-200 bg-white p-3.5 text-center shadow-xs"
                                >
                                    {partner.logo ? (
                                        <img
                                            src={partner.logo}
                                            alt={partner.name}
                                            className="h-10 max-w-[85%] object-contain mb-2"
                                            loading="lazy"
                                        />
                                    ) : (
                                        <Building2 className="h-7 w-7 text-slate-400 mb-2" />
                                    )}
                                    <span className="text-[11px] font-bold text-slate-800 line-clamp-1">{partner.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </SchoolLayout>
    );
}
