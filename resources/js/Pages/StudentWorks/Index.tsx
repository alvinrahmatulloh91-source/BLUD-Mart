import { SchoolContentPage } from '@/Components/SchoolContentPage';
import { Palette } from 'lucide-react';

export default function StudentWorksIndex() {
    return (
        <SchoolContentPage title="Karya Siswa" description="Ruang apresiasi karya siswa SMK Negeri 1 Bantul.">
            <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 px-6 py-14 text-center"><Palette className="mx-auto h-10 w-10 text-primary-700" aria-hidden="true"/><h2 className="mt-5 text-xl font-bold text-slate-900">Galeri karya siswa segera hadir</h2><p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-600">Placeholder — karya, nama pembuat, dan dokumentasi akan ditambahkan setelah materi terverifikasi tersedia.</p></div>
        </SchoolContentPage>
    );
}
