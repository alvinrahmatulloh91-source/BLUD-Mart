import { SchoolContentPage } from '@/Components/SchoolContentPage';
import { achievements } from '@/data/school';
import { Award } from 'lucide-react';

export default function AchievementsPage() {
    return <SchoolContentPage title="Prestasi" description="Prestasi siswa SMK Negeri 1 Bantul yang tercatat dalam konten source project.">
        <p className="mb-8 max-w-2xl leading-7 text-slate-600">Capaian berikut tercatat pada materi proyek yang tersedia. Dokumentasi foto resmi belum tersedia.</p><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{achievements.map(item=><article key={item.title} className="rounded-xl border border-slate-200 p-6"><Award className="h-8 w-8 text-accent-600"/><p className="mt-5 text-xs font-bold uppercase tracking-wide text-primary-700">{item.event}</p><h2 className="mt-2 text-xl font-bold">{item.title}</h2><p className="mt-4 border-t border-slate-100 pt-4 text-sm text-slate-600">{item.student}</p><p className="mt-1 text-xs text-slate-500">{item.category} · {item.year}</p></article>)}</div>
    </SchoolContentPage>;
}
