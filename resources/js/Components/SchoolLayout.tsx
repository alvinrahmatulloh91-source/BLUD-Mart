import { SchoolNavbar } from '@/Components/SchoolNavbar';
import { Head, Link } from '@inertiajs/react';
import type { ReactNode } from 'react';

export function SchoolLayout({ title, description, children }: { title: string; description: string; children: ReactNode }) {
    return <div className="min-h-screen bg-white text-slate-900">
        <Head title={title}>
            <meta name="description" content={description} />
            <meta property="og:title" content={title} /><meta property="og:description" content={description} /><meta property="og:type" content="website" />
            <meta property="og:site_name" content="SMK Negeri 1 Bantul" /><meta property="og:url" content={`${window.location.origin}${window.location.pathname}`} /><meta name="twitter:card" content="summary" />
            <link rel="canonical" href={`${window.location.origin}${window.location.pathname}`} />
        </Head>
        <SchoolNavbar /><main>{children}</main>
        <footer className="bg-primary-950 text-white"><div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-2 lg:px-8">
            <div><p className="text-lg font-bold">SMK NEGERI 1 BANTUL</p><p className="mt-2 max-w-md text-sm leading-6 text-blue-100">Membangun kompetensi, karakter, dan kesiapan berkarya melalui pendidikan vokasi.</p><p className="mt-4 text-sm text-blue-200">Sabdodadi, Bantul, Daerah Istimewa Yogyakarta</p><p className="mt-4 text-xs text-blue-200">Lambang dan foto resmi sekolah akan ditambahkan setelah asset terverifikasi tersedia.</p></div>
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-blue-100 md:justify-end"><Link href="/">Beranda</Link><Link href="/profil">Profil</Link><Link href="/program-keahlian">Program Keahlian</Link><Link href="/informasi">Informasi</Link><Link href="/prestasi">Prestasi</Link><Link href="/ppdb">PPDB</Link><Link href="/bkk">BKK / Career Center</Link><Link href="/karya-siswa">Karya Siswa</Link><Link href="/blud">Skansaba BLUD-Mart</Link></div>
        </div><div className="border-t border-white/10 py-4 text-center text-xs text-blue-200">© {new Date().getFullYear()} SMK Negeri 1 Bantul</div></footer>
    </div>;
}
