<?php

namespace Database\Seeders;

use App\Models\Unit;
use Illuminate\Database\Seeder;

/**
 * Data Unit Produksi SMKN 1 Bantul.
 *
 * Sumber: data unit yang sudah tersedia dalam project
 * (diwariskan dari platform sebelumnya). Jangan mengarang unit baru.
 */
class UnitSeeder extends Seeder
{
    public function run(): void
    {
        $units = [
            [
                'name' => 'K-Tuba Digital Printing',
                'slug' => 'k-tuba-digital-printing',
                'category' => 'Digital Printing / Produksi',
                'description' => 'Layanan digital printing profesional untuk kebutuhan sekolah dan umum. Banner, poster, brosur, dan berbagai media cetak lainnya.',
                'sort_order' => 1,
            ],
            [
                'name' => 'Solusi Sistem Digital (SSD)',
                'slug' => 'solusi-sistem-digital',
                'category' => 'Pengembangan Perangkat Lunak',
                'description' => 'Pengembangan perangkat lunak dan sistem informasi. Website, aplikasi, dan solusi digital untuk berbagai kebutuhan.',
                'sort_order' => 2,
            ],
            [
                'name' => 'Jari Manis',
                'slug' => 'jari-manis',
                'category' => 'Kreatif & Desain',
                'description' => 'Unit produksi kreatif dengan fokus pada karya seni dan desain.',
                'sort_order' => 3,
            ],
            [
                'name' => 'Skansaba IT Solution',
                'slug' => 'skansaba-it-solution',
                'category' => 'IT & Digital Service',
                'description' => 'Layanan IT dan digital service. Pembuatan website, sistem informasi, konsultasi IT, dan solusi digital.',
                'sort_order' => 4,
            ],
            [
                'name' => 'LKM Mitra Siswa Abadi',
                'slug' => 'lkm-mitra-siswa-abadi',
                'category' => 'Keuangan & Perbankan',
                'description' => 'Lembaga Keuangan Mikro untuk siswa. Layanan keuangan dan pembiayaan untuk kebutuhan produktif.',
                'sort_order' => 5,
            ],
            [
                'name' => 'SKANSABA STORE',
                'slug' => 'skansaba-store',
                'category' => 'Retail & Merchandise',
                'description' => 'Toko merchandise dan produk kreatif sekolah. Produk non-makanan, atribut sekolah, dan produk kreatif siswa.',
                'sort_order' => 6,
            ],
        ];

        foreach ($units as $unit) {
            Unit::updateOrCreate(
                ['slug' => $unit['slug']],
                $unit + ['is_active' => true, 'website_url' => null]
            );
        }
    }
}
