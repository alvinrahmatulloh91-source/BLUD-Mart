<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Unit>
 */
class UnitFactory extends Factory
{
    public function definition(): array
    {
        $name = fake()->unique()->company();

        return [
            'name' => $name,
            'slug' => str($name)->slug()->append('-' . fake()->unique()->numberBetween(1, 999))->toString(),
            'category' => fake()->randomElement(['Digital Printing / Produksi', 'IT & Digital Service', 'Retail & Merchandise']),
            'description' => fake()->sentence(),
            'logo' => null,
            'cover_image' => null,
            'website_url' => null,
            'is_active' => true,
            'sort_order' => fake()->numberBetween(0, 100),
        ];
    }
}
