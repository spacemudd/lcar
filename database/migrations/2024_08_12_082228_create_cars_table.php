<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('cars', function (Blueprint $table) {
            $table->id();
            $table->string('description');
            $table->string('description2');
            $table->text('long_description');
            $table->string('year');
            $table->string('engine_size');
            $table->string('mileage');
            $table->string('price');
            $table->string('fuel_type');
            $table->string('registration');
            $table->string('owners');
            $table->string('emission_class')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cars');
    }
};
