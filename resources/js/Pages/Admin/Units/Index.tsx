import { AdminLayout } from '@/Layouts/AdminLayout';
import { Alert } from '@/Components/ui/alert';
import { Badge } from '@/Components/ui/badge';
import { Button } from '@/Components/ui/button';
import { Card, CardContent } from '@/Components/ui/card';
import { router, usePage } from '@inertiajs/react';
import { ArrowDown, ArrowUp, Globe, Pencil, Plus, Trash2 } from 'lucide-react';

interface AdminUnit {
    id: number;
    name: string;
    slug: string;
    category: string;
    description: string | null;
    logo: string | null;
    cover_image: string | null;
    website_url: string | null;
    is_active: boolean;
    sort_order: number;
}

interface PageProps extends Record<string, unknown> {
    units: AdminUnit[];
    flash?: { success?: string };
}

export default function AdminUnitsIndex() {
    const { units, flash } = usePage<PageProps>().props;

    const toggleActive = (unit: AdminUnit) => {
        router.put(
            `/admin/units/${unit.id}`,
            {
                name: unit.name,
                slug: unit.slug,
                category: unit.category,
                description: unit.description ?? '',
                website_url: unit.website_url ?? '',
                is_active: !unit.is_active,
            },
            { preserveScroll: true },
        );
    };

    const move = (unit: AdminUnit, direction: 'up' | 'down') => {
        const index = units.findIndex((u) => u.id === unit.id);
        const targetIndex = direction === 'up' ? index - 1 : index + 1;
        if (targetIndex < 0 || targetIndex >= units.length) return;

        const ids = units.map((u) => u.id);
        [ids[index], ids[targetIndex]] = [ids[targetIndex], ids[index]];

        router.post('/admin/units/reorder', { ids }, { preserveScroll: true });
    };

    const destroy = (unit: AdminUnit) => {
        if (confirm(`Hapus unit "${unit.name}"? Tindakan ini tidak dapat dibatalkan.`)) {
            router.delete(`/admin/units/${unit.id}`, { preserveScroll: true });
        }
    };

    return (
        <AdminLayout title="Kelola Unit — Admin">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Kelola Unit Produksi</h1>
                    <p className="mt-1 text-sm text-gray-500">
                        Tambah, ubah, dan atur urutan Unit Produksi pada portal.
                    </p>
                </div>
                <a href="/admin/units/create">
                    <Button className="gap-2">
                        <Plus className="h-4 w-4" aria-hidden="true" />
                        Tambah Unit
                    </Button>
                </a>
            </div>

            {flash?.success && (
                <Alert variant="success" className="mt-4">
                    {flash.success}
                </Alert>
            )}

            <div className="mt-6 space-y-4">
                {units.length === 0 && (
                    <Card>
                        <CardContent className="p-10 text-center text-gray-500">
                            Belum ada unit. Klik "Tambah Unit" untuk memulai.
                        </CardContent>
                    </Card>
                )}

                {units.map((unit, index) => (
                    <Card key={unit.id}>
                        <CardContent className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center">
                            {/* Logo */}
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-gray-100 bg-gray-50">
                                {unit.logo ? (
                                    <img
                                        src={`/storage/${unit.logo}`}
                                        alt={`Logo ${unit.name}`}
                                        className="h-full w-full object-contain p-1"
                                    />
                                ) : (
                                    <span className="text-lg font-bold text-primary-400">
                                        {unit.name.charAt(0)}
                                    </span>
                                )}
                            </div>

                            {/* Info */}
                            <div className="min-w-0 flex-1">
                                <div className="flex flex-wrap items-center gap-2">
                                    <p className="font-semibold text-gray-900">{unit.name}</p>
                                    <Badge>{unit.category}</Badge>
                                    {!unit.is_active && (
                                        <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-500">
                                            Nonaktif
                                        </span>
                                    )}
                                    {unit.website_url && (
                                        <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-0.5 text-xs text-green-700">
                                            <Globe className="h-3 w-3" aria-hidden="true" />
                                            Website aktif
                                        </span>
                                    )}
                                </div>
                                <p className="mt-0.5 truncate text-xs text-gray-400">
                                    /{unit.slug} · urutan {unit.sort_order}
                                </p>
                            </div>

                            {/* Aksi */}
                            <div className="flex shrink-0 flex-wrap items-center gap-1.5">
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => move(unit, 'up')}
                                    disabled={index === 0}
                                    aria-label={`Naikkan ${unit.name}`}
                                >
                                    <ArrowUp className="h-4 w-4" aria-hidden="true" />
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => move(unit, 'down')}
                                    disabled={index === units.length - 1}
                                    aria-label={`Turunkan ${unit.name}`}
                                >
                                    <ArrowDown className="h-4 w-4" aria-hidden="true" />
                                </Button>
                                <a href={`/admin/units/${unit.id}/edit`}>
                                    <Button variant="outline" size="sm" className="gap-1.5">
                                        <Pencil className="h-3.5 w-3.5" aria-hidden="true" />
                                        Edit
                                    </Button>
                                </a>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => destroy(unit)}
                                    className="text-red-600 hover:bg-red-50"
                                    aria-label={`Hapus ${unit.name}`}
                                >
                                    <Trash2 className="h-4 w-4" aria-hidden="true" />
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </AdminLayout>
    );
}
