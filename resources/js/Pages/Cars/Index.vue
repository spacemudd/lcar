<script setup>
import { Head, Link } from '@inertiajs/vue3';
import Navbar from "@/Components/Navbar.vue";
import BottomLayout from "@/Layouts/BottomLayout.vue";
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
});

function handleImageError() {
    document.getElementById('screenshot-container')?.classList.add('!hidden');
    document.getElementById('docs-card')?.classList.add('!row-span-1');
    document.getElementById('docs-card-content')?.classList.add('!flex-row');
    document.getElementById('background')?.classList.add('!hidden');
}
</script>

<template>
    <Head title="Welcome" />
    <div class="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
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
                    <div class="relative bg-black rounded-lg overflow-hidden mt-10 p-2">
                        <h2 class="text-5xl text-white font-bold text-center lg:text-left">
                            Curated Selection
                        </h2>
                        <p class="mt-5 text-2xl">
                            Discover our curated selection of luxury cars, featuring the finest brands, impeccable craftsmanship, and unparalleled performance for discerning drivers.
                        </p>
                    </div>

                    <div class="mt-2 grid grid-cols-1 lg:grid-cols-3 gap-5">
                        <div class="border border-yellow-600 p-5 rounded bg-white text-black">
                            <h2 class="text-3xl text-black">Aston Martin DB11</h2>
                            <p>4.0 V8 Auto Euro 6 (s/s) 2dr</p>
                            <img class="mt-2 border-2 border-black" src="/car_images/aston.jpg" alt="">
                            <p class="text-right">£68,995</p>
                            <hr>
                            <table class="w-full">
                                <tbody>
                                <tr>
                                    <td>Year</td>
                                    <td class="text-right">2017</td>
                                </tr>
                                <tr>
                                    <td>Engine</td>
                                    <td class="text-right">4.0L</td>
                                </tr>
                                </tbody>
                            </table>
                            <div class="mt-2 flex justify-between">
                                <a target="_blank" class="text-blue-800" href="https://www.autotrader.co.uk/car-details/202407021353234">
                                    View on AutoTrader
                                </a>
                                <a target="_blank" class="border px-2 hover:bg-blue-800 hover:text-white border-blue-800 text-blue-800" :href="route('appointments.create')">
                                    Book an appointment
                                </a>
                            </div>
                        </div>
                        <div class="border border-yellow-600 p-5 rounded bg-white text-black">
                            <h2 class="text-3xl text-black">Land Rover Range Rover</h2>
                            <p>3.0 SD V6 Vogue Auto 4WD Euro 6 (s/s) 5dr</p>
                            <img class="mt-2 border-2 border-black" src="/car_images/range.png" alt="">
                            <p class="text-right">£33,995</p>
                            <hr>
                            <table class="w-full">
                                <tbody>
                                <tr>
                                    <td>Year</td>
                                    <td class="text-right">2019</td>
                                </tr>
                                <tr>
                                    <td>Engine</td>
                                    <td class="text-right">3.0L</td>
                                </tr>
                                </tbody>
                            </table>
                            <div class="mt-2 flex justify-between">
                                <a target="_blank" class="text-blue-800" href="https://www.autotrader.co.uk/car-details/202407171883708">
                                    View on AutoTrader
                                </a>
                                <a class="border px-2 hover:bg-blue-800 hover:text-white border-blue-800 text-blue-800" :href="route('appointments.create')">
                                    Book an appointment
                                </a>
                            </div>
                        </div>
                    </div>
                </main>

            </div>
            <bottom-layout></bottom-layout>
        </div>


    </div>
</template>
