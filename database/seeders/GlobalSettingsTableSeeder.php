<?php

namespace Database\Seeders;

use App\Models\GlobalSetting;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class GlobalSettingsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        GlobalSetting::create([
            'key' => 'home_title',
            'value' => 'Prestige & Luxury Cars For Sale, UK’s No1 Luxury Dealer | Luxuria Auto',
        ]);
        GlobalSetting::create([
            'key' => 'home_description',
            'value' => 'Luxuria Auto: Dealers in Prestige & Luxury Cars. Based In Lancashire, North West. We Go The Extra Mile. We Offer Comprehensive Help With Luxury Car Insurance, Tracking & The Best Car Warranties Available.',
        ]);

        GlobalSetting::create([
            'key' => 'cars_title',
            'value' => 'Prestige & Luxury Cars For Sale, UK’s No1 Luxury Dealer | Luxuria Auto',
        ]);
        GlobalSetting::create([
            'key' => 'cars_description',
            'value' => 'Offering a unique selection of luxury cars for sale, Luxuria Auto is the UK’s No1 luxury car dealer. We offer a range of luxury cars for sale, including Aston Martin, Bentley, Ferrari, Lamborghini, Maserati, McLaren, Mercedes, Porsche and Rolls Royce.',
        ]);


        GlobalSetting::create([
            'key' => 'sell_your_car_title',
            'value' => 'Prestige & Luxury Cars For Sale, UK’s No1 Luxury Dealer | Luxuria Auto',
        ]);
        GlobalSetting::create([
            'key' => 'sell_your_car_description',
            'value' => 'Offering a unique selection of luxury cars for sale, Luxuria Auto is the UK’s No1 luxury car dealer. We offer a range of luxury cars for sale, including Aston Martin, Bentley, Ferrari, Lamborghini, Maserati, McLaren, Mercedes, Porsche and Rolls Royce.',
        ]);

        GlobalSetting::create([
            'key' => 'about_title',
            'value' => 'Prestige & Luxury Cars For Sale, UK’s No1 Luxury Dealer | Luxuria Auto',
        ]);
        GlobalSetting::create([
            'key' => 'about_description',
            'value' => 'Offering a unique selection of luxury cars for sale, Luxuria Auto is the UK’s No1 luxury car dealer. We offer a range of luxury cars for sale, including Aston Martin, Bentley, Ferrari, Lamborghini, Maserati, McLaren, Mercedes, Porsche and Rolls Royce.',
        ]);

        GlobalSetting::create([
            'key' => 'finance_title',
            'value' => 'Prestige & Luxury Cars For Sale, UK’s No1 Luxury Dealer | Luxuria Auto',
        ]);
        GlobalSetting::create([
            'key' => 'finance_description',
            'value' => 'Offering a unique selection of luxury cars for sale, Luxuria Auto is the UK’s No1 luxury car dealer. We offer a range of luxury cars for sale, including Aston Martin, Bentley, Ferrari, Lamborghini, Maserati, McLaren, Mercedes, Porsche and Rolls Royce.',
        ]);

        GlobalSetting::create([
            'key' => 'appointment_title',
            'value' => 'Prestige & Luxury Cars For Sale, UK’s No1 Luxury Dealer | Luxuria Auto',
        ]);
        GlobalSetting::create([
            'key' => 'appointment_description',
            'value' => 'Offering a unique selection of luxury cars for sale, Luxuria Auto is the UK’s No1 luxury car dealer. We offer a range of luxury cars for sale, including Aston Martin, Bentley, Ferrari, Lamborghini, Maserati, McLaren, Mercedes, Porsche and Rolls Royce.',
        ]);
    }
}
