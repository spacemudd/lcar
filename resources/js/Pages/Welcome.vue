<script setup>
import { Head, Link } from '@inertiajs/vue3';
import EventRecord from "@/Components/EventRecord.vue";
import NewsletterSignup from "@/Components/NewsletterSignup.vue";
import ContactUs from "@/Components/ContactUs.vue";
import Navbar from "@/Components/Navbar.vue";
import CarCard from "@/Components/CarCard.vue";
import FeaturedCarsSlider from "@/Components/FeaturedCarsSlider.vue";
import FeaturedCarsCarousel from "@/Components/FeaturedCarsCarousel.vue";

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
        required: false,
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
    <Head title="Welcome" />
    <div class="bg-black text-white/50">
        <!--<img id="background" class="absolute -left-20 top-0 max-w-[877px]" src="https://laravel.com/assets/img/welcome/background.svg" />-->
        <img id="background" class="absolute -left-20 top-0 max-w-[877px]" src="/bg-2.svg" />
        <div class="relative min-h-screen flex flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
            <div class="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                <header class="grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3">
                    <div class="flex lg:justify-left lg:col-span-1">
                        <a href="/">
                            <!--<img id="background" class="max-w-[150px] lg:max-w-[200px]" src="/luxuria_logo_text_white.png" />-->
                            <img id="background" class="max-w-[150px] lg:max-w-[200px]" src="/whitelogocropped.png" />
                        </a>
                    </div>
                    <navbar></navbar>
                </header>

                <div class="flex gap-10 justify-center lg:justify-end">
                    <a target="_blank" href="https://x.com/luxuria_auto1"><img src="/x.svg" class="w-10 border-2 border-white p-2" alt=""></a>
                    <a target="_blank" href="https://www.facebook.com/profile.php?id=61559406996757"><img src="/fb.svg" class="w-10" alt=""></a>
                    <a target="_blank" href="https://www.instagram.com/Luxuria_uk"><img src="/instagram.svg" class="w-10 border-2 border-white p-2" alt=""></a>
                    <a target="_blank" href="https://www.tiktok.com/Luxuria_uk"><img src="/tiktok.svg" class="w-10 border-2 border-white p-2" alt=""></a>
                </div>
                <div>
                    <p class="text-center lg:text-right text-white text-2xl mt-3"><a href="tel:+441524488800">+44 1524 488800</a></p>
                    <p class="text-center lg:text-right text-white text-2xl mt-3"><a href="mailto:info@luxuria-auto.co.uk">info@luxuria-auto.co.uk</a></p>
                </div>

                <main>
                    <!-- a black bg header with an image of car -->

                    <featured-cars-carousel class="mt-5" :cars="cars"></featured-cars-carousel>

                    <!--<featured-cars-slider class="mt-20" :cars="cars"></featured-cars-slider>-->

                    <div class="relative bg-black rounded-lg overflow-hidden mt-10">
                        <div class="relative z-10 px-6 py-12 text-white">
                            <h1 class="text-7xl font-bold opacity-100">Your gateway to luxury.</h1>
                            <p class="ml-2 mt-10">
                                Offering an exclusive selection of the finest brands, including Porsche, Mercedes, Lamborghini, Bentley, Ferrari, and
                                Rolls-Royce, each representing the pinnacle of elegance and performance.
                            </p>
                            <div class="flex flex-col lg:flex-row gap-2 mt-10">
                                <!--<div>-->
                                <!--    <a target="_blank" href="https://www.instagram.com/Luxuria_uk" class="hover:bg-yellow-800 hover:text-white bg-yellow-600 text-black px-2 rounded text-bold text-2xl">-->
                                <!--        Visit us today-->
                                <!--    </a>-->
                                <!--</div>-->
                                <div>
                                    <a :href="route('cars.index')" class="hover:bg-yellow-800 hover:text-white bg-yellow-600 text-black px-2 rounded text-bold text-2xl">
                                        Browse latest collection
                                    </a>
                                </div>
                            </div>

                            <!--<p class="mt-10">* Open from Monday to Fri 9AM to 6PM</p>-->
                            <p class="mt-10">* For more information on what we offer our clients contact us on: <a class="bg-black" href="tel:+441524488800">+44 1524 488800</a></p>
                            <p>* For immediate requests, please reach us at <a class="bg-black" href="mailto:info@luxuria-auto.co.uk">info@luxuria-auto.co.uk</a></p>
                        </div>
                        <div class="absolute inset-0 bg-black bg-opacity-50" />
                        <!-- autplay  a video -->
                        <!--/5309354-hd_1920_1080_25fps.mp4-->
                        <video
                            src="/luxuria_1.mp4"
                            autoplay
                            loop
                            muted
                            playsinline
                            class="absolute inset-0 object-cover w-full h-full transition duration-300 opacity-50"
                        />
                    </div>

                    <div class="mt-20">
                        <h2 class="text-5xl text-white font-bold text-center lg:text-left">Bespoke Services</h2>

                        <div class="grid sm:grid-cols-1 lg:grid-cols-4 gap-6 mt-5 text-center">
                            <div class="text-black bg-gray-200 p-5 rounded">
                                <img width="30px" class="m-auto block" src="/vehicle.png" alt="">
                                <h2 class="font-bold text-2xl">Vehicle Sales</h2>
                                <p>Offering an elite collection of luxury, sports and supercars, both modern and classic.</p>
                            </div>
                            <div class="text-black bg-gray-200 p-5 rounded">
                                <img width="30px" class="m-auto block" src="/sourcing.png" alt="">
                                <h2 class="font-bold text-2xl">Sourcing</h2>
                                <p>Expert service for sourcing rare and exclusive luxury cars globally.</p>
                            </div>
                            <div class="text-black bg-gray-200 p-5 rounded">
                                <img width="30px" class="m-auto block" src="/concierge.png" alt="">
                                <h2 class="font-bold text-2xl">Consignment services</h2>
                                <p>Professional service for sale or return of high-end luxury cars.</p>
                            </div>
                            <div class="text-black bg-gray-200 p-5 rounded">
                                <img width="30px" class="m-auto block" src="/trailer.png">
                                <h2 class="font-bold text-2xl">Collection & Return</h2>
                                <p>Exclusive service for luxury car collection and return with precision.</p>
                            </div>
                        </div>
                    </div>

                </main>
            </div>
        </div>

        <div>
            <div class="flex flex-col items-center justify-center px-6">
                <h2 class="text-6xl mt-10 uppercase text-white text-center">
                    Sign up for our newsletter
                </h2>
                <h3 class="text-4xl text-white mt-2">See our latest cars as they arrive</h3>
                <!-- signup to newsletter button -->
                <div class="mt-5">
                    <newsletter-signup></newsletter-signup>
                </div>

            </div>
        </div>

        <div class="relative w-full bg-white py-10 mt-20">
            <div class="flex flex-col items-center justify-center text-black">
                <div class="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                    <h2 class="text-5xl mt-10 text-center lg:text-left">Newly listed</h2>

                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5">
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
                </div>
            </div>
        </div>

        <div class="relative w-full bg-white py-10">
            <div class="flex flex-col items-center justify-center text-white py-10"
                 style="background-image: url('/car_images/corvette.jpg');background-size: cover;background-position: center">
                <div class="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                    <h2 class="text-5xl mt-10 text-center lg:text-left">Take a forward step now.</h2>
                    <p class="mt-2 text-3xl text-center lg:text-left">Enjoy a carefully handpicked collection from the Luxuria World.</p>
                    <div class="flex justify-center lg:justify-start mt-5">
                        <a :href="route('cars.index')" class="hover:bg-yellow-800 hover:text-white bg-yellow-600 text-black px-2 rounded text-bold text-2xl">
                            Browse latest collection
                        </a>
                    </div>
                    <div class="mt-5 flex-row lg:flex gap-10 justify-center">
                        <!--<a href="#">-->
                        <!--    <div class="bg-white text-black flex justify-center items-center align-bottom my-5"-->
                        <!--         style="background-image:url('/car_images/garage.jpg');background-size: cover;background-position: center"-->
                        <!--    >-->
                        <!--        <div class="p-20">-->
                        <!--            <h2 class="bg-black text-white px-2">Wallpapers</h2>-->
                        <!--        </div>-->
                        <!--    </div>-->
                        <!--</a>-->

                        <div class="relative bg-black rounded-lg overflow-hidden">
                            <video
                                src="/car_images/ghost.mp4"
                                autoplay
                                loop
                                muted
                                playsinline
                                height="300"
                                class=""
                            />
                        </div>
                        <!--<a href="#">-->
                        <!--    <div class="bg-white text-black flex justify-center items-center align-bottom my-5"-->
                        <!--         style="background-image:url('/car_images/range.png');background-size: cover;background-position: center"-->
                        <!--    >-->
                        <!--        <div class="p-20">-->
                        <!--            <h2 class="bg-black text-white px-2">Showroom</h2>-->
                        <!--        </div>-->
                        <!--    </div>-->
                        <!--</a>-->
                    </div>
                </div>
            </div>
        </div>

        <contact-us></contact-us>

        <footer class="p-10 lg:p-20 text-xs text-white/70" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'">
            <div class="flex gap-20 justify-center">
                <div>
                    <h3 class="font-bold">Navigation</h3>
                    <ul class="list-disc">
                        <li class="ml-3 mt-1"><a :href="route('home')">Home</a></li>
                        <li class="ml-3 mt-1"><a :href="route('cars.index')">Cars</a></li>
                        <li class="ml-3 mt-1"><a :href="route('sell-your-car.index')">Sell Your Car</a></li>
                        <li class="ml-3 mt-1"><a :href="route('about.index')">About</a></li>
                        <li class="ml-3 mt-1"><a :href="route('testimonials.index')">Testimonials</a></li>
                        <li class="ml-3 mt-1"><a :href="route('financing.index')">Financing</a></li>
                        <li class="ml-3 mt-1"><a :href="route('appointments.create')">Appointment</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="font-bold">Headquarter</h3>
                    <img src="/luxuria_logo_text_white.png" class="my-2" style="max-width:100px" alt="">
                    <p>Unit 5a Keer Park, Carnforth, Lancashire</p>
                    <p>+44 1524 488800</p>
                    <p>info@luxuria-auto.co.uk</p>
                </div>
            </div>
            <p class="mt-10 text-center">Copyright © Luxuria 2024.</p>
        </footer>
    </div>
</template>
