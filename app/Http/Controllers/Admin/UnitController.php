<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreUnitRequest;
use App\Http\Requests\UpdateUnitRequest;
use App\Models\Unit;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

/**
 * Admin sederhana untuk mengelola data portal:
 * tambah/edit/hapus unit, logo, kategori, deskripsi,
 * status aktif, website_url, dan urutan tampil.
 */
class UnitController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Admin/Units/Index', [
            'units' => Unit::query()
                ->ordered()
                ->get([
                    'id', 'name', 'slug', 'category', 'description',
                    'logo', 'cover_image', 'website_url', 'is_active', 'sort_order',
                ]),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Admin/Units/Form', ['unit' => null]);
    }

    public function store(StoreUnitRequest $request): RedirectResponse
    {
        $data = $request->validated();
        $data['slug'] = $request->filled('slug') ? Str::slug($request->input('slug')) : Str::slug($request->input('name'));
        $data['logo'] = $this->storeImage($request, 'logo');
        $data['cover_image'] = $this->storeImage($request, 'cover_image');
        $data['is_active'] = $request->boolean('is_active');

        Unit::create($data);

        return redirect()->route('admin.units.index')->with('success', 'Unit berhasil ditambahkan.');
    }

    public function edit(Unit $unit): Response
    {
        return Inertia::render('Admin/Units/Form', ['unit' => $unit]);
    }

    public function update(UpdateUnitRequest $request, Unit $unit): RedirectResponse
    {
        $data = $request->validated();

        if ($request->filled('slug')) {
            $data['slug'] = Str::slug($request->input('slug'));
        }

        if ($request->boolean('remove_logo')) {
            $this->deleteImage($unit->logo);
            $data['logo'] = null;
        } elseif ($newLogo = $this->storeImage($request, 'logo')) {
            $this->deleteImage($unit->logo);
            $data['logo'] = $newLogo;
        }

        if ($request->boolean('remove_cover_image')) {
            $this->deleteImage($unit->cover_image);
            $data['cover_image'] = null;
        } elseif ($newCover = $this->storeImage($request, 'cover_image')) {
            $this->deleteImage($unit->cover_image);
            $data['cover_image'] = $newCover;
        }

        $data['is_active'] = $request->boolean('is_active');

        $unit->update($data);

        return redirect()->route('admin.units.index')->with('success', 'Unit berhasil diperbarui.');
    }

    public function destroy(Unit $unit): RedirectResponse
    {
        $this->deleteImage($unit->logo);
        $this->deleteImage($unit->cover_image);
        $unit->delete();

        return redirect()->route('admin.units.index')->with('success', 'Unit berhasil dihapus.');
    }

    /**
     * Reorder sederhana berdasarkan array ID berurutan.
     */
    public function reorder(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'ids' => ['required', 'array'],
            'ids.*' => ['integer', 'exists:units,id'],
        ]);

        DB::transaction(function () use ($validated) {
            foreach ($validated['ids'] as $index => $id) {
                Unit::where('id', $id)->update(['sort_order' => $index + 1]);
            }
        });

        return back()->with('success', 'Urutan unit berhasil diperbarui.');
    }

    private function storeImage(Request $request, string $field): ?string
    {
        if (! $request->hasFile($field)) {
            return null;
        }

        $path = $request->file($field)->store('units', 'public');

        return $path;
    }

    private function deleteImage(?string $path): void
    {
        if (filled($path) && Storage::disk('public')->exists($path)) {
            Storage::disk('public')->delete($path);
        }
    }
}
