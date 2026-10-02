import { UnitCard } from '@/Components/UnitCard';
import type { UnitData } from '@/types/Unit';

interface UnitGridProps {
    units: UnitData[];
}

/**
 * Grid responsif direktori Unit Produksi:
 * Desktop: 3 kolom (lg:grid-cols-3)
 * Tablet: 2 kolom (md:grid-cols-2)
 * Mobile: 1 kolom (grid-cols-1)
 */
export function UnitGrid({ units }: UnitGridProps) {
    if (units.length === 0) {
        return (
            <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50/50 p-12 text-center">
                <p className="text-slate-500 font-medium">Belum ada Unit Produksi yang terdaftar atau aktif.</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {units.map((unit) => (
                <UnitCard key={unit.id} unit={unit} />
            ))}
        </div>
    );
}
