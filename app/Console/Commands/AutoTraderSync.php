<?php

namespace App\Console\Commands;

use App\Models\Car;
use App\Services\AutoTraderService;
use Illuminate\Console\Command;

class AutoTraderSync extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:auto-trader-sync';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';



    /**
     * Execute the console command.
     */
    public function handle()
    {
        $vehicles = app()->make(AutoTraderService::class)->stock();

        Car::truncate();

        foreach ($vehicles['results'] as $vehicle) {
            $current_images = 0;
            $limit = 2;

            $car = \App\Models\Car::create([
                'description' => $vehicle['adverts']['retailAdverts']['description'] ?? $vehicle['vehicle']['make'] .' '. $vehicle['vehicle']['model'],
                'description2' => $vehicle['adverts']['retailAdverts']['description2'] ?? $vehicle['vehicle']['derivative'],
                'long_description' => '',
                'year' => $vehicle['vehicle']['yearOfManufacture'],
                'engine_size' => $vehicle['vehicle']['badgeEngineSizeLitres'],
                'mileage' => $vehicle['vehicle']['odometerReadingMiles'],
                'price' => $vehicle['adverts']['retailAdverts']['totalPrice']['amountGBP'],
                'fuel_type' => $vehicle['vehicle']['fuelType'],
                'registration' => $vehicle['vehicle']['firstRegistrationDate'],
                'owners' => $vehicle['vehicle']['owners'],
                'emission_class' => $vehicle['vehicle']['emissionClass'],
                'at_stock_id' => $vehicle['metadata']['stockId'],
                'at_advertiserAdvert' => $vehicle['advertiser']['advertiserId'],
                'at_make' => $vehicle['vehicle']['make'],
                'at_model' => $vehicle['vehicle']['model'],
                'at_derivative' => $vehicle['vehicle']['derivative'],
                'at_description' => $vehicle['adverts']['retailAdverts']['description'],
                'at_description2' => $vehicle['adverts']['retailAdverts']['description2'],
                'at_published' => $vehicle['adverts']['retailAdverts']['autotraderAdvert']['status'],
                'at_total_price' => $vehicle['adverts']['retailAdverts']['totalPrice']['amountGBP'],
                'at_last_synced' => now(),
                'at_data' => $vehicle,
            ]);

            foreach ($vehicle['media']['images'] as $image) {
                //if ($current_images >= $limit) {
                //    continue;
                //}
                //$car->addMediaFromUrl($image['href'])->toMediaCollection('images');
                //++$current_images;
            }

            if ($vehicle['media']['video']['href']) {
                //$car->addMediaFromUrl($vehicle['media']['video']['href'])->toMediaCollection('videos');
            }

            $this->info('Added car: ' . $car->id . ' - ' . $car->description);
        }
    }
}
