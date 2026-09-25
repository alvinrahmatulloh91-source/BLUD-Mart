<?php

namespace Tests\Feature;

use App\Models\Unit;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class AdminUnitTest extends TestCase
{
    use RefreshDatabase;

    private User $admin;

    protected function setUp(): void
    {
        parent::setUp();

        $this->admin = User::factory()->create(['is_admin' => true]);
    }

    public function test_tamu_diarahkan_ke_login(): void
    {
        $response = $this->get('/admin/units');

        $response->assertRedirect('/admin/login');
    }

    public function test_user_bukan_admin_dilarang(): void
    {
        $user = User::factory()->create(['is_admin' => false]);

        $response = $this->actingAs($user)->get('/admin/units');

        $response->assertForbidden();
    }

    public function test_admin_bisa_melihat_daftar_unit(): void
    {
        Unit::factory()->count(2)->create();

        $response = $this->actingAs($this->admin)->get('/admin/units');

        $response->assertOk();
        $response->assertInertia(fn ($page) => $page
            ->component('Admin/Units/Index')
            ->has('units', 2)
        );
    }

    public function test_admin_bisa_menambah_unit(): void
    {
        $response = $this->actingAs($this->admin)->post('/admin/units', [
            'name' => 'Unit Uji Coba',
            'category' => 'Kreatif & Desain',
            'description' => 'Unit percobaan untuk test.',
            'website_url' => null,
            'is_active' => '1',
        ]);

        $response->assertRedirect('/admin/units');

        $this->assertDatabaseHas('units', [
            'name' => 'Unit Uji Coba',
            'slug' => 'unit-uji-coba',
            'category' => 'Kreatif & Desain',
            'is_active' => true,
        ]);
    }

    public function test_validasi_nama_dan_kategori_wajib(): void
    {
        $response = $this->actingAs($this->admin)->post('/admin/units', [
            'name' => '',
            'category' => '',
        ]);

        $response->assertSessionHasErrors(['name', 'category']);
        $this->assertDatabaseCount('units', 0);
    }

    public function test_admin_bisa_mengubah_unit_dan_mengisi_website_url(): void
    {
        $unit = Unit::factory()->create(['website_url' => null]);

        $response = $this->actingAs($this->admin)->put("/admin/units/{$unit->id}", [
            'name' => $unit->name,
            'slug' => $unit->slug,
            'category' => $unit->category,
            'description' => 'Deskripsi baru',
            'website_url' => 'https://ktuba.smkn1bantul.sch.id',
            'is_active' => '1',
        ]);

        $response->assertRedirect('/admin/units');

        $this->assertDatabaseHas('units', [
            'id' => $unit->id,
            'website_url' => 'https://ktuba.smkn1bantul.sch.id',
            'description' => 'Deskripsi baru',
        ]);
    }

    public function test_admin_bisa_menghapus_unit(): void
    {
        $unit = Unit::factory()->create();

        $response = $this->actingAs($this->admin)->delete("/admin/units/{$unit->id}");

        $response->assertRedirect('/admin/units');
        $this->assertDatabaseMissing('units', ['id' => $unit->id]);
    }

    public function test_admin_bisa_mengatur_urutan_unit(): void
    {
        $unitA = Unit::factory()->create(['sort_order' => 1]);
        $unitB = Unit::factory()->create(['sort_order' => 2]);

        $response = $this->actingAs($this->admin)->post('/admin/units/reorder', [
            'ids' => [$unitB->id, $unitA->id],
        ]);

        $response->assertRedirect();

        $this->assertDatabaseHas('units', ['id' => $unitB->id, 'sort_order' => 1]);
        $this->assertDatabaseHas('units', ['id' => $unitA->id, 'sort_order' => 2]);
    }
}
