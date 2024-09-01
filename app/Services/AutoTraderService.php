<?php

namespace App\Services;

use App\Models\Car;
use Olsgreen\AutoTrader\Client;

class AutoTraderService
{
    private $client;
    private $advertiser_id;

    public function __construct()
    {
        $key = config('autotrader.key');
        $secret = config('autotrader.secret');
        $this->advertiser_id = config('autotrader.advertiser_id');

        $api = new Client(['sandbox' => true]);
        $token = $api->authentication()->getAccessToken($key, $secret);

        // once you have your access token you can create client instances like:
        $this->client = new Client(['access_token' => $token, 'sandbox' => true]);
    }

    public function stock()
    {
        return $this->client->stock()->all($this->advertiser_id, 1, 50);
    }

    public function updateCarFromNotification($stock_id, $data)
    {
        $car = Car::where('at_stock_id', $stock_id)->first();

        $data = json_decode($data, true);
        $car->at_data = $data;

        //dd($data);

        $car->description = $data['data']['adverts']['retailAdverts']['description'] ?? $data['data']['vehicle']['make'] .' '. $data['data']['vehicle']['model'];
        $car->at_description = $data['data']['adverts']['retailAdverts']['description'] ?? $data['data']['vehicle']['make'] .' '. $data['data']['vehicle']['model'];

        $car->description2 = $data['data']['adverts']['retailAdverts']['description2'] ?? $data['data']['vehicle']['derivative'];
        $car->at_description2 = $data['data']['adverts']['retailAdverts']['description2'] ?? $data['data']['vehicle']['derivative'];

        $car->at_published = $data['data']['adverts']['retailAdverts']['autotraderAdvert']['status'] ?? 'NOT_PUBLISHED';

        $car->save();

        if (count($data['data']['media']['images'])) {
            foreach ($data['data']['media']['images'] as $image) {
                $car->addMediaFromUrl($image['href'])->toMediaCollection('images');
            }
        }

        if ($data['data']['media']['video']['href'] ?? null) {
            $car->addMediaFromUrl($data['data']['media']['video']['href'])->toMediaCollection('videos');
        }

        return response()->json([
            'success' => true,
        ]);
    }

    public function createNewCar($stock_id)
    {
        $vehicles = app()->make(AutoTraderService::class)->stock();

        foreach ($vehicles['results'] as $vehicle) {
            if ($stock_id != $vehicle['metadata']['stockId']) continue;

            $car = Car::create([
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
                $car->addMediaFromUrl($image['href'])->toMediaCollection('images');
                //++$current_images;
            }

            if ($vehicle['media']['video']['href']) {
                $car->addMediaFromUrl($vehicle['media']['video']['href'])->toMediaCollection('videos');
            }

            $this->info('Added car: ' . $car->id . ' - ' . $car->description);
        }

        return response()->json([
            'success' => true,
        ]);
    }
}
