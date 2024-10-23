<?php

namespace App\Http\Controllers;

use App\Models\Car;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AppointmentsController extends Controller
{
    public function create(Request $request)
    {
        if ($request->has('car_id')) {
            $car = Car::published()->findOrFail($request->car_id);
        }

        return Inertia::render('Appointments/Create', [
            'car' => $car ?? null,
            'cars' => Car::latest()->published()->get(),
        ]);
    }

    public function store()
    {
        return redirect()->route('appointments.success');
    }

    public function success()
    {
        return Inertia::render('Appointments/Success');
    }
}
