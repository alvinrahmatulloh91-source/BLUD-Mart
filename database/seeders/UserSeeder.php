<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        User::updateOrCreate(
            ['email' => 'admin@smkn1bantul.sch.id'],
            [
                'name' => 'Admin Skansaba BLUD-Mart',
                'password' => Hash::make('password'),
                'is_admin' => true,
            ]
        );
    }
}
