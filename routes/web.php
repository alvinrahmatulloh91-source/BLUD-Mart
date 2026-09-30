<?php

use App\Http\Controllers\Admin\UnitController as AdminUnitController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\LandingController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes — Skansaba BLUD-Mart
|--------------------------------------------------------------------------
|
| Landing page sekolah + Portal pusat Unit Produksi.
|
*/

// ==================== LANDING / PUBLIK ====================

Route::get('/', [LandingController::class, 'index'])->name('home');
Route::get('/semua-unit', [LandingController::class, 'units'])->name('units.index');
Route::get('/tentang-blud', [LandingController::class, 'about'])->name('about');
Route::get('/karya-siswa', [LandingController::class, 'studentWorks'])->name('student-works');
Route::get('/sitemap.xml', function () {
    $urls = collect(['/', '/semua-unit', '/tentang-blud', '/karya-siswa'])
        ->map(fn (string $path) => '<url><loc>'.e(url($path)).'</loc></url>')
        ->implode('');

    return response('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'.$urls.'</urlset>')
        ->header('Content-Type', 'application/xml; charset=UTF-8');
})->name('sitemap');

// ==================== AUTH ADMIN ====================

Route::middleware('guest')->group(function () {
    Route::get('/admin/login', [AuthenticatedSessionController::class, 'create'])->name('login');
    Route::post('/admin/login', [AuthenticatedSessionController::class, 'store'])
        ->middleware('throttle:6,1')
        ->name('login.attempt');
});

Route::middleware('auth')->group(function () {
    Route::post('/admin/logout', [AuthenticatedSessionController::class, 'destroy'])->name('logout');

    // ==================== ADMIN: KELOLA UNIT ====================
    Route::prefix('admin')->name('admin.')->middleware('can:manage-units')->group(function () {
        Route::post('units/reorder', [AdminUnitController::class, 'reorder'])->name('units.reorder');
        Route::resource('units', AdminUnitController::class)
            ->only(['index', 'create', 'store', 'edit', 'update', 'destroy']);
    });
});
