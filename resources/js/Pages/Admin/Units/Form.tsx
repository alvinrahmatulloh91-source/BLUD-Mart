import { AdminLayout } from '@/Layouts/AdminLayout';
import { Alert } from '@/Components/ui/alert';
import { Button } from '@/Components/ui/button';
import { Input, Label, Textarea } from '@/Components/ui/input';
import { useForm } from '@inertiajs/react';
import { Save } from 'lucide-react';

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
}

interface FormProps {
    unit: AdminUnit | null;
}

interface Errors {
    [key: string]: string;
}

export default function AdminUnitForm({ unit }: FormProps) {
    const isEdit = Boolean(unit);

    const { data, setData, post, processing, errors } = useForm<{
        name: string;
        slug: string;
        category: string;
        description: string;
        website_url: string;
        is_active: boolean;
        logo: File | null;
        cover_image: File | null;
        remove_logo: boolean;
        remove_cover_image: boolean;
        _method?: string;
    }>({
        name: unit?.name ?? '',
        slug: unit?.slug ?? '',
        category: unit?.category ?? '',
        description: unit?.description ?? '',
        website_url: unit?.website_url ?? '',
        is_active: unit?.is_active ?? true,
        logo: null,
        cover_image: null,
        remove_logo: false,
        remove_cover_image: false,
        ...(isEdit ? { _method: 'put' } : {}),
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isEdit) {
            post(route('admin.units.update', unit!.id), { forceFormData: true });
        } else {
            post(route('admin.units.store'));
        }
    };

    return (
        <AdminLayout title={`${isEdit ? 'Edit' : 'Tambah'} Unit — Admin`}>
            <div className="mx-auto max-w-3xl">
                <h1 className="text-2xl font-bold text-gray-900">
                    {isEdit ? `Edit Unit: ${unit!.name}` : 'Tambah Unit Baru'}
                </h1>
                <p className="mt-1 text-sm text-gray-500">
                    {isEdit
                        ? 'Perbarui data unit pada portal Skansaba BLUD-Mart.'
                        : 'Tambahkan Unit Produksi baru ke portal.'}
                </p>

                <form onSubmit={submit} className="mt-8 space-y-6" encType="multipart/form-data">
                    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                        {/* Nama */}
                        <div>
                            <Label htmlFor="name">
                                Nama Unit <span className="text-red-500">*</span>
                            </Label>
                            <Input
                                id="name"
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                required
                            />
                            {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
                        </div>

                        {/* Slug */}
                        <div className="mt-4">
                            <Label htmlFor="slug">Slug (opsional)</Label>
                            <Input
                                id="slug"
                                value={data.slug}
                                onChange={(e) => setData('slug', e.target.value)}
                                placeholder="otomatis dari nama bila kosong"
                            />
                            {errors.slug && <p className="mt-1 text-xs text-red-600">{errors.slug}</p>}
                        </div>

                        {/* Kategori */}
                        <div className="mt-4">
                            <Label htmlFor="category">
                                Kategori <span className="text-red-500">*</span>
                            </Label>
                            <Input
                                id="category"
                                value={data.category}
                                onChange={(e) => setData('category', e.target.value)}
                                required
                                placeholder="cth: Digital Printing / Produksi"
                            />
                            {errors.category && (
                                <p className="mt-1 text-xs text-red-600">{errors.category}</p>
                            )}
                        </div>

                        {/* Deskripsi */}
                        <div className="mt-4">
                            <Label htmlFor="description">Deskripsi Singkat</Label>
                            <Textarea
                                id="description"
                                value={data.description}
                                onChange={(e) => setData('description', e.target.value)}
                                rows={4}
                            />
                            {errors.description && (
                                <p className="mt-1 text-xs text-red-600">{errors.description}</p>
                            )}
                        </div>
                    </div>

                    {/* Website & status */}
                    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                        <div>
                            <Label htmlFor="website_url">URL Website Unit</Label>
                            <Input
                                id="website_url"
                                type="url"
                                value={data.website_url}
                                onChange={(e) => setData('website_url', e.target.value)}
                                placeholder="https:// (isi bila website unit sudah tersedia)"
                            />
                            <p className="mt-1 text-xs text-gray-400">
                                Jika kosong, portal menampilkan "Website unit segera tersedia".
                            </p>
                            {errors.website_url && (
                                <p className="mt-1 text-xs text-red-600">{errors.website_url}</p>
                            )}
                        </div>

                        <div className="mt-4 flex items-center gap-2">
                            <input
                                id="is_active"
                                type="checkbox"
                                checked={data.is_active}
                                onChange={(e) => setData('is_active', e.target.checked)}
                                className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                            />
                            <Label htmlFor="is_active" className="mb-0">
                                Unit aktif (tampil di portal)
                            </Label>
                        </div>
                    </div>

                    {/* Media */}
                    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                        <div>
                            <Label htmlFor="logo">Logo Unit</Label>
                            {unit?.logo && !data.remove_logo && (
                                <div className="mb-2 flex items-center gap-3">
                                    <img
                                        src={`/storage/${unit.logo}`}
                                        alt={`Logo ${unit.name}`}
                                        className="h-12 w-12 rounded-lg border border-gray-100 object-contain p-1"
                                    />
                                    <label className="flex items-center gap-1.5 text-xs text-red-600">
                                        <input
                                            type="checkbox"
                                            checked={data.remove_logo}
                                            onChange={(e) => setData('remove_logo', e.target.checked)}
                                            className="h-3.5 w-3.5 rounded border-gray-300"
                                        />
                                        Hapus logo
                                    </label>
                                </div>
                            )}
                            <Input
                                id="logo"
                                type="file"
                                accept="image/png,image/jpeg,image/webp,image/svg+xml"
                                onChange={(e) => setData('logo', e.target.files?.[0] ?? null)}
                            />
                            {errors.logo && <p className="mt-1 text-xs text-red-600">{errors.logo}</p>}
                        </div>

                        <div className="mt-4">
                            <Label htmlFor="cover_image">Gambar Sampul</Label>
                            {unit?.cover_image && !data.remove_cover_image && (
                                <div className="mb-2 flex items-center gap-3">
                                    <img
                                        src={`/storage/${unit.cover_image}`}
                                        alt={`Sampul ${unit.name}`}
                                        className="h-12 w-20 rounded-lg border border-gray-100 object-cover"
                                    />
                                    <label className="flex items-center gap-1.5 text-xs text-red-600">
                                        <input
                                            type="checkbox"
                                            checked={data.remove_cover_image}
                                            onChange={(e) =>
                                                setData('remove_cover_image', e.target.checked)
                                            }
                                            className="h-3.5 w-3.5 rounded border-gray-300"
                                        />
                                        Hapus sampul
                                    </label>
                                </div>
                            )}
                            <Input
                                id="cover_image"
                                type="file"
                                accept="image/png,image/jpeg,image/webp"
                                onChange={(e) => setData('cover_image', e.target.files?.[0] ?? null)}
                            />
                            {errors.cover_image && (
                                <p className="mt-1 text-xs text-red-600">{errors.cover_image}</p>
                            )}
                        </div>
                    </div>

                    {Object.keys(errors).length > 0 && (
                        <Alert variant="destructive">
                            Periksa kembali isian formulir — ada data yang belum valid.
                        </Alert>
                    )}

                    <div className="flex items-center justify-end gap-3">
                        <a href={route('admin.units.index')}>
                            <Button variant="outline" type="button">
                                Batal
                            </Button>
                        </a>
                        <Button type="submit" disabled={processing} className="gap-2">
                            <Save className="h-4 w-4" aria-hidden="true" />
                            {processing ? 'Menyimpan...' : isEdit ? 'Simpan Perubahan' : 'Tambah Unit'}
                        </Button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}
