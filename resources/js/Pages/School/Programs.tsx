import { SchoolContentPage } from '@/Components/SchoolContentPage';
import { programs } from '@/data/school';

export default function ProgramsPage() {
    return <SchoolContentPage title="Program Keahlian" description="Daftar program keahlian SMK Negeri 1 Bantul dan gambaran ringkas setiap bidang.">
        <div className="mb-8 max-w-2xl"><h2 className="text-2xl font-bold">Belajar sesuai bidang keahlian</h2><p className="mt-3 leading-7 text-slate-600">Daftar berikut berasal dari konten program yang tersedia di source project.</p></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{programs.map(program=><article key={program.code} className="rounded-xl border border-slate-200 p-6"><span className="rounded-md bg-blue-50 px-2.5 py-1 text-xs font-bold text-primary-800">{program.code}</span><h2 className="mt-4 text-lg font-bold">{program.name}</h2><p className="mt-2 text-sm leading-6 text-slate-600">{program.description}</p></article>)}</div>
    </SchoolContentPage>;
}
