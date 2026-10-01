<?php

namespace Tests\Feature;

use App\Models\Unit;
use Database\Seeders\UnitSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class LandingPageTest extends TestCase
{
    use RefreshDatabase;

    public function test_landing_page_bisa_diakses(): void
    {
        $response = $this->get('/');

        $response->assertOk();
        $response->assertInertia(fn ($page) => $page
            ->component('School/Index')
            ->has('units')
        );
    }

    public function test_landing_page_menampilkan_unit_aktif(): void
    {
        $unit = Unit::factory()->create([
            'name' => 'K-Tuba Digital Printing',
            'is_active' => true,
            'website_url' => null,
        ]);

        Unit::factory()->create(['name' => 'Unit Nonaktif', 'is_active' => false]);

        $response = $this->get('/');

        $response->assertOk();
        $response->assertInertia(fn ($page) => $page
            ->component('School/Index')
            ->has('units', 1)
            ->where('units.0.name', 'K-Tuba Digital Printing')
            ->where('units.0.website_url', null)
        );
    }

    public function test_halaman_blud_bisa_diakses(): void
    {
        $response = $this->get('/blud');

        $response->assertOk();
        $response->assertInertia(fn ($page) => $page->component('Blud/Index'));
    }

    public function test_halaman_informasi_sekolah_bisa_diakses(): void
    {
        $this->get('/profil')->assertOk()->assertInertia(fn ($page) => $page->component('School/Profile'));
        $this->get('/program-keahlian')->assertOk()->assertInertia(fn ($page) => $page->component('School/Programs'));
        $this->get('/informasi')->assertOk()->assertInertia(fn ($page) => $page->component('School/Information'));
        $this->get('/prestasi')->assertOk()->assertInertia(fn ($page) => $page->component('School/Achievements'));
    }

    public function test_direktori_semua_unit_bisa_diakses(): void
    {
        Unit::factory()->count(3)->create();

        $response = $this->get('/blud/units');

        $response->assertOk();
        $response->assertInertia(fn ($page) => $page
            ->component('Units/Index')
            ->has('units', 3)
        );
    }

    public function test_halaman_tentang_blud_bisa_diakses(): void
    {
        $response = $this->get('/tentang-blud');

        $response->assertOk();
        $response->assertInertia(fn ($page) => $page
            ->component('About/Index')
        );
    }

    public function test_halaman_karya_siswa_bisa_diakses(): void
    {
        $response = $this->get('/karya-siswa');

        $response->assertOk();
        $response->assertInertia(fn ($page) => $page
            ->component('StudentWorks/Index')
        );
    }

    public function test_halaman_ppdb_dan_bkk_bisa_diakses(): void
    {
        $this->get('/ppdb')->assertOk()->assertInertia(fn ($page) => $page->component('PPDB/Index'));
        $this->get('/bkk')->assertOk()->assertInertia(fn ($page) => $page->component('Career/Index'));
    }

    public function test_route_seo_bisa_diakses(): void
    {
        $this->get('/sitemap.xml')->assertOk()->assertHeader('content-type', 'application/xml; charset=UTF-8');
        $this->get('/robots.txt')->assertOk()->assertSee('/sitemap.xml');
    }

    public function test_unit_lama_tetap_ada_dan_url_yang_diisi_admin_tidak_dikosongkan_seeder(): void
    {
        $existing = Unit::factory()->create([
            'name' => 'Unit Arsip',
            'slug' => 'unit-arsip',
            'website_url' => 'https://unit.example',
            'is_active' => true,
        ]);

        $this->seed(UnitSeeder::class);

        $this->assertDatabaseHas('units', ['id' => $existing->id, 'website_url' => 'https://unit.example', 'is_active' => true]);
    }
}
