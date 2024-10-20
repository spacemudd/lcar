<script setup>
import { Head, Link } from '@inertiajs/vue3';
import {ref} from 'vue';
import Navbar from "@/Components/Navbar.vue";
import BottomLayout from "@/Layouts/BottomLayout.vue";
import CarCard from "@/Components/CarCard.vue";
import ReadMoreComponent from "@/Components/ReadMoreComponent.vue";
import CarGallery from "@/Components/CarGallery.vue";
const isOpened = ref(false);

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
    },
    car: {
        type: Object,
        required: true,
    },
});

function handleImageError() {
    document.getElementById('screenshot-container')?.classList.add('!hidden');
    document.getElementById('docs-card')?.classList.add('!row-span-1');
    document.getElementById('docs-card-content')?.classList.add('!flex-row');
    document.getElementById('background')?.classList.add('!hidden');
}
</script>

<template>
    <Head title="Cars " />
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


                    <nav v-if="canLogin" class="-mx-3 flex flex-1 justify-end">
                        <Link
                            v-if="$page.props.auth.user"
                            :href="route('dashboard')"
                            class="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                        >
                            Dashboard
                        </Link>

                        <template v-else>
                            <Link
                                :href="route('login')"
                                class="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                            >
                                Log in
                            </Link>

                            <Link
                                v-if="canRegister"
                                :href="route('register')"
                                class="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                            >
                                Register
                            </Link>
                        </template>
                    </nav>
                </header>


                <main>
                    <div class="relative bg-black rounded-lg overflow-hidden mt-10 p-5">
                        <h2 class="text-5xl text-white font-bold text-center lg:text-left">
                            {{ car.at_data.data.vehicle.make }} {{ car.at_data.data.vehicle.model }}
                        </h2>
                        <p class="text-4xl text-white pb-5" v-if="car.at_data.data">{{ car.at_data.data.adverts.retailAdverts.attentionGrabber }}</p>
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">

                            <div>
                                <car-gallery :gallery-data="car.media"></car-gallery>
                            </div>

                            <div>
                                <div class="grid grid-cols-1 lg:grid-cols-3 mt-5 gap-5">
                                    <div v-for="(property, index) in {Price: car.price_human, Mileage: car.mileage, Fuel: car.fuel_type, Registration: car.registration, Owners:car.owners, 'Emission Class': car.emission_class}"
                                         class="bg-white text-black p-2 border-2 border-yellow-500 text-sm">
                                        <div class="flex justify-between">
                                            <p>{{ index }}</p>
                                            <p>{{ property }}</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="mt-10">
                                    <a class="flex gap-2 text-white border border-white p-2 hover:bg-white hover:text-black"
                                       :href="route('appointments.create')">
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                            </svg>
                                        </span>
                                        <span>
                                            Book an appointment
                                        </span>
                                    </a>
                                </div>

                                <div class="mt-10">
                                    <read-more-component v-if="car.description" :full-text="car.description"></read-more-component>
                                    <read-more-component v-else :full-text="car.description2"></read-more-component>
                                </div>

                                <div class="mt-10 text-white">
                                    <p><b>List of features:</b></p>

                                    <ul class="list-disc px-5 pt-2">
                                        <li v-for="feature in car.at_data.data.features.slice(0, 4)">
                                            {{ feature.name }}
                                        </li>
                                    </ul>

                                    <VueSidePanel
                                        v-model="isOpened"
                                        lock-scroll
                                        width="600px"
                                    >
                                        <div class="p-10 bg-gray-200">
                                            <p><b>List of features:</b></p>
                                            <ul class="list-disc px-5 pt-5">
                                                <li v-for="feature in car.at_data.data.features">
                                                    {{ feature.name }}
                                                </li>
                                            </ul>
                                        </div>
                                    </VueSidePanel>
                                    <p class="text-yellow-400 underline cursor-pointer" @click="isOpened = true">View all features...</p>

                                </div>

                            </div>
                        </div>

                        <div class="mt-5 block lg:hidden text-white">
                            <p v-if="car.description" v-html="car.description"></p>
                            <p v-if="car.description2" v-html="car.description2"></p>
                        </div>

                    </div>


                </main>

            </div>
        </div>

        <bottom-layout></bottom-layout>


    </div>
</template>
