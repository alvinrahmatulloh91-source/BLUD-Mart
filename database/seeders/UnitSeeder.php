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

        foreach ($names as $index => [$name, $category]) {
            $slug = str($name)->slug()->toString();
            $description = $name === 'K-Tuba Digital Printing'
                ? 'Unit Produksi sekolah dalam kategori digital printing dan produksi. Informasi lebih lanjut akan diperbarui.'
                : 'Unit Produksi SMKN 1 Bantul pada kategori '.$category.'. Informasi lebih lanjut akan diperbarui.';

            $unit = Unit::firstOrCreate(
                ['slug' => $slug],
                [
                    'name' => $name,
                    'category' => $category,
                    'description' => $description,
                    'logo' => null,
                    'website_url' => null,
                    'is_active' => true,
                    'sort_order' => $index + 1,
                ],
            );

            if (blank($unit->description)) {
                $unit->update([
                    'description' => $description,
                ]);
            }
        }

        // Existing records outside this seed list remain intact and retain their status.
    }
}
