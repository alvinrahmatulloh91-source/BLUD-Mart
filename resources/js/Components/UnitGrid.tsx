import { UnitCard, type UnitData } from '@/Components/UnitCard';

interface UnitGridProps {
    units: UnitData[];
}

/** Grid responsif: 3 kolom desktop, 2 tablet, 1 mobile. */
export function UnitGrid({ units }: UnitGridProps) {
    if (units.length === 0) {
        return (
            <div className="rounded-xl border border-dashed border-gray-300 bg-white p-12 text-center">
                <p className="text-gray-500">Belum ada Unit Produksi yang ditampilkan.</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {units.map((unit) => (
                <UnitCard key={unit.id} unit={unit} />
            ))}
        </div>
    );
}
