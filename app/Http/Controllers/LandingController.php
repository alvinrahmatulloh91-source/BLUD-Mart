<?php

namespace App\Http\Controllers;

use App\Models\Unit;
use Illuminate\Http\Response as HttpResponse;
use Inertia\Inertia;
use Inertia\Response;

class LandingController extends Controller
{
    private function getUnits()
    {
        return Unit::query()->active()->ordered()->get([
            'id', 'name', 'slug', 'category', 'description', 'logo', 'website_url', 'sort_order',
        ]);
    }

    public function index(): Response
    {
        return Inertia::render('School/Index', ['units' => $this->getUnits()]);
    }

    public function profile(): Response
    {
        return Inertia::render('School/Profile');
    }

    public function programs(): Response
    {
        return Inertia::render('School/Programs');
    }

    public function information(): Response
    {
        return Inertia::render('School/Information');
    }

    public function achievements(): Response
    {
        return Inertia::render('School/Achievements');
    }

    public function blud(): Response
    {
        return Inertia::render('Blud/Index', ['units' => $this->getUnits()]);
    }

    public function units(): Response
    {
        return Inertia::render('Units/Index', ['units' => $this->getUnits()]);
    }

    public function about(): Response
    {
        return Inertia::render('About/Index');
    }

    public function studentWorks(): Response
    {
        return Inertia::render('StudentWorks/Index');
    }

    public function ppdb(): Response
    {
        return Inertia::render('PPDB/Index');
    }

    public function career(): Response
    {
        return Inertia::render('Career/Index');
    }

    public function sitemap(): HttpResponse
    {
        $urls = collect(['/', '/profil', '/program-keahlian', '/informasi', '/prestasi', '/blud', '/blud/units', '/tentang-blud', '/karya-siswa', '/ppdb', '/bkk'])
            ->map(fn (string $path) => '<url><loc>'.e(url($path)).'</loc></url>')->implode('');

        return response('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'.$urls.'</urlset>')
            ->header('Content-Type', 'application/xml; charset=UTF-8');
    }

    public function robots(): HttpResponse
    {
        return response("User-agent: *\nAllow: /\nSitemap: ".url('/sitemap.xml')."\n")
            ->header('Content-Type', 'text/plain; charset=UTF-8');
    }
}
