<script setup>
import { Head, Link } from '@inertiajs/vue3';
import BottomLayout from "@/Layouts/BottomLayout.vue";
import Navbar from "@/Components/Navbar.vue";

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
    <Head>
        <title>Luxuria Auto is a highend buyer and seller of luxury cars | Luxuria Auto</title>
        <meta name="description" content="Based In Lancashire, North West. We Go The Extra Mile. We Offer Only The Finest Cars. Comprehensive Help With Luxury Car Insurance, Tracking &amp; The Best Car Warranties Available.">
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
            </div>

            <div class="relative w-full bg-white">
                <div class="flex flex-col items-center justify-center text-white py-10"
                     style="background-image: url('/car_images/corvette.jpg');background-size: cover;background-position: center">
                    <div class="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        <h2 class="text-5xl my-10 text-center lg:text-left">About</h2>
                        <p class="mt-2 text-3xl text-center lg:text-left">Enjoy an exquisite experience with Luxuria Auto.</p>
                    </div>
                </div>
            </div>

            <div class="relative w-full bg-white py-10">
                <div class="flex flex-col items-center justify-center text-black">
                    <div class="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        <div class="grid grid-cols-1 lg:grid-cols-5 gap-5">
                            <div class="col-span-3 flex justify-center items-center">
                                <img src="/car_images/carscollection.png" alt="">
                            </div>
                            <div class="col-span-2">
                                <h2 class="text-5xl mt-10 text-center lg:text-left">Experience True, Experienced, Luxury</h2>
                                <p class="mt-10 text-center lg:text-left">
                                    From the pinnacle of German engineering to the elegance of Italian design, from the
                                    timeless tradition of English craftsmanship to the bold spirit of American classics,
                                    we present an unparalleled selection for the discerning automobile connoisseur.
                                    Experience the luxury of exotic brands and an exquisite collection cars, all under one roof, crafted to captivate your senses and ignite your passion.
                                </p>
                            </div>
                        </div>


                        <div class="grid grid-cols-1 lg:grid-cols-5 gap-5 mt-10">
                            <div class="col-span-2">
                                <h2 class="text-5xl mt-10 text-center lg:text-left">
                                    Highly professional and passionate team
                                </h2>
                                <p class="mt-10 text-center lg:text-left">
                                    At Luxuria Auto, we prioritise our clients' needs and interests, ensuring they receive unparalleled attention and service. Our team of professionals is dedicated to providing an exceptional experience. Our exquisite collection of exotic vehicles invites you to select something unique and distinctive, perfectly suited to your style. Discover a world of luxury and excitement with our prestigious automotive showcase, one of the finest in the industry. Embark on your journey with us today.
                                </p>
                            </div>
                            <div class="col-span-3 flex justify-center items-center">
                                <img src="/car_images/detailing.jpg" alt="">
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <bottom-layout></bottom-layout>



        </div>

    </div>
</template>
