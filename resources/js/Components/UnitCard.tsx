import { Badge } from '@/Components/ui/badge';
import { Button } from '@/Components/ui/button';
import { Card, CardContent } from '@/Components/ui/card';
import type { UnitData } from '@/types/Unit';
import { Building2, Clock, ExternalLink } from 'lucide-react';

interface UnitCardProps {
    unit: UnitData;
}

/**
 * Card Unit Produksi untuk portal dan landing page.
 * Menampilkan: logo, nama, kategori, deskripsi, status website, dan tombol website.
 * Jika website_url NULL => "Website Segera Hadir" dengan button disabled.
 * Jika website_url terisi => "Masuk ke Website Unit ↗" (eksternal, target="_blank", rel="noopener noreferrer").
 * TIDAK ADA route internal atau halaman detail unit.
 */
export function UnitCard({ unit }: UnitCardProps) {
    const hasWebsite = Boolean(unit.website_url && unit.website_url.trim().length > 0);

    return (
        <Card className="group flex h-full flex-col border border-slate-200/90 bg-white transition-all duration-200 hover:border-[#0033A0]/30 hover:shadow-md rounded-xl overflow-hidden">
            <CardContent className="flex flex-1 flex-col p-6">
                {/* Header Card: Logo & Category */}
                <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl border border-slate-100 bg-blue-50/60 p-2 text-[#0033A0] shadow-xs">
                        {unit.logo ? (
                            <img
                                src={`/storage/${unit.logo}`}
                                alt={`Logo ${unit.name}`}
                                loading="lazy"
                                className="h-full w-full object-contain"
                            />
                        ) : (
                            <Building2 className="h-7 w-7 text-[#0033A0]" aria-hidden="true" />
                        )}
                    </div>
                    <Badge variant="outline" className="border-blue-200 bg-blue-50 text-[#0033A0] text-xs font-semibold py-1 px-2.5">
                        {unit.category}
                    </Badge>
                </div>

                {/* Nama Unit */}
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0033A0] transition-colors leading-snug">
                    {unit.name}
                </h3>

                {/* Deskripsi */}
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-600">
                    {unit.description || 'Unit Produksi SMKN 1 Bantul. Informasi profil dan layanan lebih lanjut akan segera diperbarui.'}
                </p>

                {/* Status Website Indicator */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-medium">
                    {hasWebsite ? (
                        <span className="flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                            <span className="h-2 w-2 rounded-full bg-emerald-600 animate-pulse"></span>
                            Website Tersedia
                        </span>
                    ) : (
                        <span className="flex items-center gap-1.5 text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full">
                            <Clock className="h-3 w-3" />
                            Website Segera Hadir
                        </span>
                    )}
                </div>

                {/* Tombol Masuk ke Website Unit (HANYA eksternal jika URL tersedia) */}
                <div className="mt-auto pt-5">
                    {hasWebsite ? (
                        <a
                            href={unit.website_url!}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full"
                        >
                            <Button className="w-full gap-2 bg-[#0033A0] text-white hover:bg-[#00236c] font-semibold text-sm shadow-sm transition">
                                <span>Masuk ke Website Unit</span>
                                <ExternalLink className="h-4 w-4" />
                            </Button>
                        </a>
                    ) : (
                        <Button
                            variant="outline"
                            disabled
                            className="w-full gap-1.5 border-slate-200 bg-slate-50 text-slate-400 cursor-not-allowed text-sm"
                        >
                            <span>Website Segera Hadir</span>
                            <Clock className="h-3.5 w-3.5" />
                        </Button>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
