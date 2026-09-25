<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateUnitRequest extends FormRequest
{
    public function authorize(): bool
    {
        return (bool) $this->user()?->is_admin;
    }

    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:255'],
            'slug' => [
                'nullable', 'string', 'max:255', 'alpha_dash',
                Rule::unique('units', 'slug')->ignore($this->route('unit')),
            ],
            'category' => ['required', 'string', 'max:255'],
            'description' => ['nullable', 'string', 'max:2000'],
            'logo' => ['nullable', 'image', 'mimes:jpg,jpeg,png,webp,svg', 'max:2048'],
            'cover_image' => ['nullable', 'image', 'bail', 'mimes:jpg,jpeg,png,webp', 'max:4096'],
            'website_url' => ['nullable', 'url:http,https', 'max:255'],
            'is_active' => ['nullable', 'boolean'],
            'remove_logo' => ['nullable', 'boolean'],
            'remove_cover_image' => ['nullable', 'boolean'],
        ];
    }
}
