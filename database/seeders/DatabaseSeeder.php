<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Admin user',
            'email' => 'admin@luxuria-auto.co.uk',
            'password' => bcrypt('luxuria@123'),
        ]);

        // $this->call(CarsSeeder::class);
    }
}
