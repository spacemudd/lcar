<?php

namespace App\Services;

use Olsgreen\AutoTrader\Client;

class AutoTraderService
{
    private $client;
    private $advertiser_id;

    public function __construct()
    {
        $key = env('AUTOTRADER_KEY');
        $secret = env('AUTOTRADER_SECRET');
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
}
