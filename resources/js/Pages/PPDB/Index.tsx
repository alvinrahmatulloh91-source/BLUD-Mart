import { SchoolLayout } from '@/Components/SchoolLayout';
import { Button } from '@/Components/ui/button';
import { Link } from '@inertiajs/react';
import {
    ArrowLeft,
    CheckCircle2,
    Clock,
    ExternalLink,
    FileText,
    GraduationCap,
    HelpCircle,
    Info,
} from 'lucide-react';

export default function PPDBIndex() {
    return (
        <SchoolLayout
            title="Informasi PPDB / SPMB — SMK Negeri 1 Bantul"
            description="Informasi resmi Penerimaan Peserta Didik Baru (PPDB / SPMB) SMK Negeri 1 Bantul tahun ajaran berjalan."
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
                        Penerimaan Peserta Didik Baru
                    </p>
                    <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                        Informasi PPDB & SPMB
                    </h1>
                    <p className="text-sm sm:text-base text-blue-100 max-w-2xl">
                        Akses cepat menuju alur, persyaratan, dan kanal resmi pendaftaran calon peserta didik baru SMK Negeri 1 Bantul.
                    </p>
                </div>
            </header>

            {/* Content */}
            <section className="py-14 sm:py-18 bg-white">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-10">
                    {/* Official Portal Notice */}
                    <div className="rounded-2xl border border-blue-200 bg-blue-50/60 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xs">
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-[#0033A0]">
                                <GraduationCap className="h-6 w-6" />
                                <span className="font-bold text-base">Portal Resmi PPDB DIY</span>
                            </div>
                            <p className="text-xs sm:text-sm text-slate-600 max-w-lg leading-relaxed">
                                Pendaftaran peserta didik baru jenjang SMK Negeri di D.I. Yogyakarta dilaksanakan secara terpusat melalui portal SPMB / PPDB Online Dinas Pendidikan, Pemuda, dan Olahraga D.I. Yogyakarta.
                            </p>
                        </div>
                        <a
                            href="https://spmb.jogjaprov.go.id"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="shrink-0 w-full sm:w-auto"
                        >
                            <Button className="w-full gap-2 bg-[#0033A0] text-white hover:bg-[#00236c] font-bold shadow-sm">
                                <span>Kunjungi Portal SPMB DIY</span>
                                <ExternalLink className="h-4 w-4" />
                            </Button>
                        </a>
                    </div>

                    {/* Alur Informasi Singkat */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-slate-900">Jalur Penerimaan</h2>
                        <div className="grid gap-4 sm:grid-cols-3">
                            <div className="rounded-xl border border-slate-200 p-5 bg-white">
                                <span className="text-xs font-bold text-[#0033A0] uppercase">Jalur 01</span>
                                <h3 className="font-bold text-slate-900 mt-2">Jalur Zonasi / Domisili</h3>
                                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                                    Diperuntukkan bagi calon peserta didik yang berdomisili di dalam wilayah zonasi yang telah ditetapkan dinas.
                                </p>
                            </div>
                            <div className="rounded-xl border border-slate-200 p-5 bg-white">
                                <span className="text-xs font-bold text-[#F7941D] uppercase">Jalur 02</span>
                                <h3 className="font-bold text-slate-900 mt-2">Jalur Prestasi</h3>
                                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                                    Berdasarkan nilai gabungan ASPD dan sertifikat kejuaraan akademik maupun non-akademik berjenjang.
                                </p>
                            </div>
                            <div className="rounded-xl border border-slate-200 p-5 bg-white">
                                <span className="text-xs font-bold text-emerald-700 uppercase">Jalur 03</span>
                                <h3 className="font-bold text-slate-900 mt-2">Jalur Afirmasi & PTO</h3>
                                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                                    Bagi keluarga pemegang kartu bantuan sosial resmi serta perpindahan tugas orang tua/wali.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Persyaratan Umum */}
                    <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 sm:p-8 space-y-4">
                        <h3 className="text-lg font-bold text-slate-900">Persyaratan Umum Pendaftaran</h3>
                        <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                            <li className="flex items-start gap-2.5">
                                <CheckCircle2 className="h-4 w-4 text-[#0033A0] shrink-0 mt-0.5" />
                                <span>Telah lulus SMP/MTs/sederajat dan memiliki ijazah atau surat keterangan lulus (SKL).</span>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <CheckCircle2 className="h-4 w-4 text-[#0033A0] shrink-0 mt-0.5" />
                                <span>Berusia maksimal 21 tahun pada saat awal tahun pelajaran baru.</span>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <CheckCircle2 className="h-4 w-4 text-[#0033A0] shrink-0 mt-0.5" />
                                <span>Memiliki Kartu Keluarga (KK) dan dokumen administrasi kependudukan yang sah.</span>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <CheckCircle2 className="h-4 w-4 text-[#0033A0] shrink-0 mt-0.5" />
                                <span>Memenuhi syarat khusus kesehatan fisik/buta warna untuk konsentrasi keahlian tertentu jika dipersyaratkan.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Layanan Informasi Sekolah */}
                    <div className="rounded-xl border border-slate-200 p-6 bg-white flex items-center justify-between gap-4">
                        <div>
                            <h4 className="font-bold text-slate-900 text-sm">Butuh Bantuan atau Konsultasi Jurusan?</h4>
                            <p className="text-xs text-slate-500 mt-1">
                                Layanan posko informasi PPDB bertempat di kampus SMKN 1 Bantul selama jam kerja.
                            </p>
                        </div>
                        <Link href="/profil">
                            <Button variant="outline" size="sm" className="shrink-0 text-xs font-semibold">
                                Hubungi Sekolah
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </SchoolLayout>
    );
}
