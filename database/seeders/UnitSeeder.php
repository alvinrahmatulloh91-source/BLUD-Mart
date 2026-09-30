<?php

namespace Database\Seeders;

use App\Models\Unit;
use Illuminate\Database\Seeder;

/** Seed only the Unit Produksi names supplied in the project brief. */
class UnitSeeder extends Seeder
{
    public function run(): void
    {
        $names = [
            ['K-Tuba Digital Printing', 'Digital Printing / Produksi'],
            ['Remen Coffee', 'Makanan & Minuman'],
            ['Skansaba.dev', 'Unit Produksi'],
            ['Agen Laku BPD DIY', 'Unit Produksi'],
            ['LKM Mitra Siswa Abadi', 'Unit Produksi'],
            ['SPOIN', 'Unit Produksi'],
            ['Kunjungan Sekolah', 'Unit Produksi'],
            ['Sewa Aset', 'Unit Produksi'],
            ['NetWare', 'Unit Produksi'],
            ['IMAGO CREATIVE', 'Unit Produksi'],
            ['Cafetaria', 'Makanan & Minuman'],
            ['Skansaba Store', 'Unit Produksi'],
        ];

        $slugs = [];

        foreach ($names as $index => [$name, $category]) {
            $slug = str($name)->slug()->toString();
            $slugs[] = $slug;

            Unit::updateOrCreate(
                ['slug' => $slug],
                [
                    'name' => $name,
                    'category' => $category,
                    'description' => null,
                    'logo' => null,
                    'website_url' => null,
                    'is_active' => true,
                    'sort_order' => $index + 1,
                ],
            );
        }

        // Keep old records out of the central portal without deleting stored data.
        Unit::query()->whereNotIn('slug', $slugs)->update(['is_active' => false]);
    }
}
