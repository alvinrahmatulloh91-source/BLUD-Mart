<?php

use App\Http\Controllers\Admin\UnitController as AdminUnitController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\LandingController;
use Illuminate\Support\Facades\Route;

Route::get('/', [LandingController::class, 'index'])->name('home');
Route::get('/profil', [LandingController::class, 'profile'])->name('school.profile');
Route::get('/program-keahlian', [LandingController::class, 'programs'])->name('school.programs');
Route::get('/informasi', [LandingController::class, 'information'])->name('school.information');
Route::get('/prestasi', [LandingController::class, 'achievements'])->name('school.achievements');
Route::get('/blud', [LandingController::class, 'blud'])->name('blud');
Route::get('/blud/units', [LandingController::class, 'units'])->name('units.index');
Route::get('/tentang-blud', [LandingController::class, 'about'])->name('about');
Route::get('/karya-siswa', [LandingController::class, 'studentWorks'])->name('student-works');
Route::get('/ppdb', [LandingController::class, 'ppdb'])->name('ppdb');
Route::get('/bkk', [LandingController::class, 'career'])->name('career');

Route::get('/sitemap.xml', [LandingController::class, 'sitemap'])->name('sitemap');
Route::get('/robots.txt', [LandingController::class, 'robots'])->name('robots');

Route::middleware('guest')->group(function () {
    Route::get('/admin/login', [AuthenticatedSessionController::class, 'create'])->name('login');
    Route::post('/admin/login', [AuthenticatedSessionController::class, 'store'])
        ->middleware('throttle:6,1')->name('login.attempt');
});

Route::middleware('auth')->group(function () {
    Route::post('/admin/logout', [AuthenticatedSessionController::class, 'destroy'])->name('logout');
    Route::prefix('admin')->name('admin.')->middleware('can:manage-units')->group(function () {
        Route::post('units/reorder', [AdminUnitController::class, 'reorder'])->name('units.reorder');
        Route::resource('units', AdminUnitController::class)
            ->only(['index', 'create', 'store', 'edit', 'update', 'destroy']);
    });
});
