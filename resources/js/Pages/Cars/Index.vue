<script setup>
import { Head, Link } from '@inertiajs/vue3';
import Navbar from "@/Components/Navbar.vue";
import BottomLayout from "@/Layouts/BottomLayout.vue";
import CarCard from "@/Components/CarCard.vue";
defineProps({
    canLogin: {
        type: Boolean,
    },
    canRegister: {
        type: Boolean,
    },
    laravelVersion: {
        type: String,
        required: true,
    },
    phpVersion: {
        type: String,
        required: true,
    },
    cars: {
        type: Array,
        required: true,
    }
});

function handleImageError() {
    document.getElementById('screenshot-container')?.classList.add('!hidden');
    document.getElementById('docs-card')?.classList.add('!row-span-1');
    document.getElementById('docs-card-content')?.classList.add('!flex-row');
    document.getElementById('background')?.classList.add('!hidden');
}
</script>

<template>
    <Head>
        <title>See our Luxury Cars. Audi, BMW, Lamborghini & Roll Royce to name just a few | Luxuria Auto</title>
        <meta name="description" content="See Luxuria Auto’s collection of luxury and prestige cars. All cars are detailed to the highest standard and we offer industry beating warranties and help with insurance. ">
    </Head>
    <div class="bg-black text-white/50">
        <img id="background" class="absolute -left-20 top-0 max-w-[877px]" src="/bg-2.svg" />
        <div class="relative min-h-screen flex flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
            <div class="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                <header class="grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3">
                    <div class="flex lg:justify-left lg:col-span-1">
                        <a href="/">
                            <img id="background" class="max-w-[100px] lg:max-w-[200px]" src="/luxuria_logo_text_white.png" />
                        </a>
                    </div>

                    <navbar></navbar>
                </header>


                <main>
                    <div class="relative bg-black rounded-lg overflow-hidden mt-10 p-10">
                        <h2 class="text-5xl text-white font-bold text-center lg:text-left">
                            Curated Selection
                        </h2>
                        <p class="mt-5 text-gray-400 text-2xl">
                            Discover our curated selection of luxury cars, featuring the finest brands, impeccable craftsmanship, and unparalleled performance for discerning drivers.
                        </p>
                    </div>

                    <div class="mt-2 grid grid-cols-1 lg:grid-cols-3 gap-5 mb-10">
                        <template v-for="car in cars"
                                  v-key="car.id">
                            <car-card :id="car.id"
                                      :car="car"
                                      :description="car.description"
                                      :description2="car.description2"
                                      :price="car.price_human"
                                      :year="car.year"
                                      :engine="car.engine_size"
                            >
                            </car-card>
                        </template>
                    </div>
                </main>

            </div>

            <bottom-layout></bottom-layout>
        </div>

    </div>
</template>
