<?php

namespace App\Http\Controllers;

use App\Models\Unit;
use Inertia\Inertia;
use Inertia\Response;

/**
 * Controller untuk halaman publik:
 * landing page, portal semua unit, tentang BLUD, dan karya siswa.
 */
class LandingController extends Controller
{
    /**
     * Data unit untuk card portal. Query efisien (single query).
     * website_url NULL => frontend menampilkan "Website unit segera tersedia".
     */
    private function getUnits()
    {
        return Unit::query()
            ->active()
            ->ordered()
            ->get([
                'id',
                'name',
                'slug',
                'category',
                'description',
                'logo',
                'cover_image',
                'website_url',
                'sort_order',
            ]);
    }

    public function index(): Response
    {
        return Inertia::render('Landing/Index', [
            'units' => $this->getUnits(),
        ]);
    }

    public function units(): Response
    {
        return Inertia::render('Portal/Index', [
            'units' => $this->getUnits(),
        ]);
    }

    public function about(): Response
    {
        return Inertia::render('About/Index', [
            'units' => $this->getUnits(),
        ]);
    }

    public function studentWorks(): Response
    {
        return Inertia::render('StudentWorks/Index');
    }
}
