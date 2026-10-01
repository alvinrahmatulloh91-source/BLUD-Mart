import { SchoolContentPage } from '@/Components/SchoolContentPage';
import { Image as ImageIcon } from 'lucide-react';

export default function InformationPage() {
    const items = ['Informasi kegiatan sekolah', 'Pengumuman sekolah', 'Cerita pembelajaran siswa'];
    return <SchoolContentPage title="Berita & Informasi" description="Kabar dan informasi SMK Negeri 1 Bantul.">
        <div className="grid gap-5 lg:grid-cols-[1.2fr_.8fr]"><article className="overflow-hidden rounded-xl border border-slate-200"><div className="flex min-h-56 items-center justify-center bg-slate-100 text-center text-slate-500"><div><ImageIcon className="mx-auto h-9 w-9"/><p className="mt-2 text-sm">Foto artikel akan ditambahkan</p></div></div><div className="p-6"><span className="text-xs font-bold uppercase tracking-wide text-accent-600">Placeholder · berita utama</span><h2 className="mt-2 text-xl font-bold">Berita sekolah akan ditampilkan di sini</h2><p className="mt-2 text-sm leading-6 text-slate-600">Ringkasan dan tanggal publikasi akan diisi setelah data resmi tersedia.</p></div></article><div className="grid gap-4">{items.map(item=><article key={item} className="rounded-xl border border-slate-200 p-5"><span className="text-xs font-bold uppercase tracking-wide text-accent-600">Placeholder · informasi</span><h2 className="mt-2 font-bold">{item}</h2><p className="mt-1 text-sm text-slate-500">Konten dan tanggal publikasi belum tersedia.</p></article>)}</div></div>
    </SchoolContentPage>;
}
