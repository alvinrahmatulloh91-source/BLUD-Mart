<?php

namespace Tests\Feature;

use App\Models\Unit;
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
            ->component('Landing/Index')
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
            ->component('Landing/Index')
            ->has('units', 1)
            ->where('units.0.name', 'K-Tuba Digital Printing')
            ->where('units.0.website_url', null)
        );
    }

    public function test_halaman_semua_unit_bisa_diakses(): void
    {
        Unit::factory()->count(3)->create();

        $response = $this->get('/semua-unit');

        $response->assertOk();
        $response->assertInertia(fn ($page) => $page
            ->component('Portal/Index')
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
}
