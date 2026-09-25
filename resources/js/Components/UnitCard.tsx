import { Badge } from '@/Components/ui/badge';
import { Button } from '@/Components/ui/button';
import { Card, CardContent } from '@/Components/ui/card';
import { ExternalLink, Package, Clock } from 'lucide-react';
import { Building2 } from 'lucide-react';

export interface UnitData {
    id: number;
    name: string;
    slug: string;
    category: string;
    description: string | null;
    logo: string | null;
    cover_image: string | null;
    website_url: string | null;
}

interface UnitCardProps {
    unit: UnitData;
}

/**
 * Card Unit Produksi untuk portal.
 * website_url NULL => tombol disabled dengan teks "Website unit segera tersedia".
 */
export function UnitCard({ unit }: UnitCardProps) {
    const hasWebsite = Boolean(unit.website_url);

    return (
        <Card className="group flex h-full flex-col transition-shadow hover:shadow-md">
            <CardContent className="flex flex-1 flex-col p-6">
                {/* Logo / ikon */}
                <div className="mb-4 flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl border border-gray-100 bg-gray-50">
                    {unit.logo ? (
                        <img
                            src={`/storage/${unit.logo}`}
                            alt={`Logo ${unit.name}`}
                            loading="lazy"
                            className="h-full w-full object-contain p-1.5"
                        />
                    ) : (
                        <Building2 className="h-7 w-7 text-primary-400" aria-hidden="true" />
                    )}
                </div>

                <Badge className="mb-3 self-start">{unit.category}</Badge>

                <h3 className="text-lg font-semibold text-gray-900">{unit.name}</h3>

                {unit.description && (
                    <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-gray-500">
                        {unit.description}
                    </p>
                )}

                {/* Status website */}
                <p className="mt-3 flex items-center gap-1.5 text-xs text-gray-400">
                    {hasWebsite ? (
                        <>
                            <ExternalLink className="h-3.5 w-3.5" />
                            Website tersedia
                        </>
                    ) : (
                        <>
                            <Clock className="h-3.5 w-3.5" />
                            Website unit segera tersedia
                        </>
                    )}
                </p>

                {/* Tombol aksi */}
                <div className="mt-auto pt-5">
                    {hasWebsite ? (
                        <a href={unit.website_url ?? '#'} target="_blank" rel="noopener noreferrer">
                            <Button className="w-full gap-1.5">
                                Masuk ke Website Unit
                                <ExternalLink className="h-4 w-4" />
                            </Button>
                        </a>
                    ) : (
                        <Button variant="outline" disabled className="w-full gap-1.5">
                            Masuk ke Website Unit
                            <ExternalLink className="h-4 w-4" />
                        </Button>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
