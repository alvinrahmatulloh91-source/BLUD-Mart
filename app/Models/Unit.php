<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Unit extends Model
{
    /** @use HasFactory<\Database\Factories\UnitFactory> */
    use HasFactory;

    protected $fillable = [
        'name',
        'slug',
        'category',
        'description',
        'logo',
        'cover_image',
        'website_url',
        'is_active',
        'sort_order',
    ];

    protected $casts = [
        'is_active' => 'boolean',
    ];

    /**
     * Unit tampil di portal hanya jika aktif, diurutkan sesuai sort_order.
     */
    public function scopeOrdered($query)
    {
        return $query->orderBy('sort_order')->orderBy('name');
    }

    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    /**
     * Website URL hanya dipakai sebagai external link.
     * Jika belum ada, frontend menampilkan "Website unit segera tersedia".
     */
    public function hasWebsite(): bool
    {
        return filled($this->website_url);
    }
}
