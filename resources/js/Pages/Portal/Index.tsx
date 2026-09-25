import { PublicLayout } from '@/Components/PublicLayout';
import { UnitGrid } from '@/Components/UnitGrid';
import type { UnitData } from '@/Components/UnitCard';

interface PortalProps {
    units: UnitData[];
}

export default function PortalIndex({ units }: PortalProps) {
    return (
        <PublicLayout
            title="Semua Unit — Skansaba BLUD-Mart"
            description="Temukan berbagai Unit Produksi SMKN 1 Bantul dalam satu portal."
        >
            <section className="py-12 lg:py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Semua Unit
                        </h1>
                        <p className="mt-3 text-base text-gray-600 sm:text-lg">
                            Temukan berbagai Unit Produksi SMKN 1 Bantul dalam satu portal.
                        </p>
                    </div>

                    <div className="mt-10">
                        <UnitGrid units={units} />
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
