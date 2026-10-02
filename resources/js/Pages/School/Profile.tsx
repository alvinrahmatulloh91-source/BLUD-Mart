import { SchoolLayout } from '@/Components/SchoolLayout';
import { schoolIdentity } from '@/data/school';
import { Link } from '@inertiajs/react';
import {
    ArrowLeft,
    Award,
    Building2,
    CheckCircle2,
    Compass,
    GraduationCap,
    Mail,
    MapPin,
    Phone,
    ShieldCheck,
} from 'lucide-react';

export default function ProfilePage() {
    return (
        <SchoolLayout
            title="Profil Sekolah — SMK Negeri 1 Bantul"
            description="Profil resmi, visi, misi, pimpinan, dan sarana prasarana pendidikan kejuruan SMK Negeri 1 Bantul, D.I. Yogyakarta."
        >
            {/* Header Page */}
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
                        Identitas & Tata Kelola
                    </p>
                    <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                        Profil SMK Negeri 1 Bantul
                    </h1>
                    <p className="text-sm sm:text-base text-blue-100 max-w-2xl">
                        Mengenal lebih dekat sejarah, visi, misi, dan komitmen SMKN 1 Bantul dalam menyelenggarakan pendidikan vokasi berkualitas unggul.
                    </p>
                </div>
            </header>

            {/* Main Content */}
            <section className="py-14 sm:py-18 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
                    {/* Sambutan Kepala Sekolah */}
                    <div className="grid gap-10 lg:grid-cols-12 items-center">
                        <div className="lg:col-span-5">
                            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-md bg-slate-50">
                                <img
                                    src={schoolIdentity.headmaster.photo}
                                    alt={schoolIdentity.headmaster.name}
                                    className="w-full h-80 sm:h-96 object-cover object-top"
                                    loading="lazy"
                                />
                                <div className="p-5 bg-white border-t border-slate-100">
                                    <h3 className="font-bold text-slate-900 text-base">{schoolIdentity.headmaster.name}</h3>
                                    <p className="text-xs font-semibold text-[#0033A0]">{schoolIdentity.headmaster.role}</p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-7 space-y-5">
                            <span className="text-xs font-bold uppercase tracking-widest text-[#F7941D]">
                                Sambutan Pimpinan
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                                Mewujudkan Generasi Vokasi yang Unggul, Berkarakter, dan Berdaya Saing Global
                            </h2>
                            <blockquote className="p-4 border-l-4 border-[#0033A0] bg-blue-50/50 rounded-r-xl text-slate-700 italic text-sm sm:text-base leading-relaxed">
                                &ldquo;{schoolIdentity.headmaster.welcomeMessage}&rdquo;
                            </blockquote>
                            <p className="text-sm leading-relaxed text-slate-600">
                                SMK Negeri 1 Bantul memadukan pendidikan karakter yang berakar pada nilai-nilai luhur budaya dengan penguasaan teknologi terdepan. Kami senantiasa mendorong siswa untuk tidak hanya menjadi pencari kerja, tetapi juga pencipta peluang kerja melalui penguatan jiwa kewirausahaan berbasis Teaching Factory.
                            </p>
                        </div>
                    </div>

                    {/* Visi & Misi */}
                    <div className="grid gap-8 md:grid-cols-2">
                        <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-8 shadow-xs">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#0033A0] mb-4">
                                <Compass className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Visi Sekolah</h3>
                            <p className="text-sm leading-relaxed text-slate-700 font-medium">
                                &ldquo;Terwujudnya SMK Negeri 1 Bantul sebagai lembaga pendidikan kejuruan yang unggul, berakhlak mulia, berwawasan lingkungan, dan berdaya saing di tingkat global.&rdquo;
                            </p>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-8 shadow-xs">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-[#F7941D] mb-4">
                                <ShieldCheck className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Misi Sekolah</h3>
                            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="h-4 w-4 text-[#0033A0] shrink-0 mt-0.5" />
                                    <span>Menanamkan keimanan, ketakwaan, dan budi pekerti luhur bagi seluruh civitas akademika.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="h-4 w-4 text-[#0033A0] shrink-0 mt-0.5" />
                                    <span>Menyelenggarakan pembelajaran berbasis kompetensi standar dunia usaha dan industri.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="h-4 w-4 text-[#0033A0] shrink-0 mt-0.5" />
                                    <span>Mengembangkan ekosistem kewirausahaan dan Teaching Factory melalui Badan Layanan Umum Daerah (BLUD).</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="h-4 w-4 text-[#0033A0] shrink-0 mt-0.5" />
                                    <span>Mewujudkan lingkungan sekolah yang bersih, sehat, asri, dan berwawasan adiwiyata.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Informasi Resmi & Kontak */}
                    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-xs">
                        <h3 className="text-lg font-bold text-slate-900 mb-6">Informasi Resmi Lembaga</h3>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 text-xs sm:text-sm">
                            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                                <p className="text-slate-400 font-medium">NPSN</p>
                                <p className="text-slate-900 font-bold text-base mt-1">{schoolIdentity.npsn}</p>
                            </div>
                            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                                <p className="text-slate-400 font-medium">Status Akreditasi</p>
                                <p className="text-[#0033A0] font-bold text-base mt-1">{schoolIdentity.accreditation}</p>
                            </div>
                            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                                <p className="text-slate-400 font-medium">Telepon</p>
                                <p className="text-slate-900 font-bold text-base mt-1">{schoolIdentity.phone}</p>
                            </div>
                            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                                <p className="text-slate-400 font-medium">Email Resmi</p>
                                <p className="text-slate-900 font-bold text-base mt-1 truncate">{schoolIdentity.email}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </SchoolLayout>
    );
}
