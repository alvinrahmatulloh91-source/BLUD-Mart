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
        Route::resource('units', AdminUnitController::class)
            ->only(['index', 'create', 'store', 'edit', 'update', 'destroy']);
    });
});
