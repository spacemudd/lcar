<script setup>
import { Head, Link } from '@inertiajs/vue3';
import { useForm } from '@inertiajs/vue3';
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
    car: {
        type: Array,
        required: false,
    },
    cars: {
        type: Array,
        required: false,
    }
});

const form = useForm({
    name: '',
    email: '',
    phone: '',
    message: '',
});

const submitForm = () => {
    form.post(route('appointments.store'), {
        preserveScroll: true,
        onSuccess: () => {
            form.reset();
        },
    });
};


function handleImageError() {
    document.getElementById('screenshot-container')?.classList.add('!hidden');
    document.getElementById('docs-card')?.classList.add('!row-span-1');
    document.getElementById('docs-card-content')?.classList.add('!flex-row');
    document.getElementById('background')?.classList.add('!hidden');
}
</script>

<template>
    <Head>
        <title>Want to look at our superior cars? Book an appointment and get one to one personal service. | Luxuria Auto</title>
        <meta name="description" content="Luxuria Auto, Dealers in Prestige &amp; Luxury Cars. Based In Lancashire, North West. We Go The Extra Mile. We Offer Comprehensive Help With Luxury Car Insurance, Tracking  & The Best Car Warranties Available.">
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
                    <div class="relative bg-black rounded-lg overflow-hidden mt-10 p-10">
                        <h2 class="text-5xl text-white font-bold lg:text-left">
                            Request an appointment
                        </h2>
                        <p class="mt-5 text-2xl">
                            As one of the UK’s leading supercar dealerships we are able to offer unique market insights and expert advice on the specs of the latest and rarest performance cars in the world.
                        </p>

                        <!-- Appointment request form -->
                        <div class="mt-10">
                            <form method="post" @submit.prevent="submitForm">
                                <div class="grid grid-cols-1 gap-5">
                                    <div v-if="car">
                                        <label for="name" class="block text-sm font-medium text-white">Car you are interested in?</label>
                                        <select disabled class="text-black w-full rounded-lg mt-2">
                                            <option selected :value="car.id">{{ car.year }} - {{ car.at_make }} - {{ car.at_model }}</option>
                                        </select>
                                    </div>
                                    <div v-else>
                                        <label for="name" class="block text-sm font-medium text-white">Car you are interested in?</label>
                                        <select class="text-black w-full rounded-lg mt-2" autofocus>
                                            <option value=""></option>
                                            <option v-for="car in cars" :value="car.id">{{ car.year }} - {{ car.at_make }} - {{ car.at_model }}</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label for="name" class="block text-sm font-medium text-white">Name</label>
                                        <input type="text" v-model="form.name" name="name" id="name" class="mt-1 block w-full rounded-md bg-white text-black" required>
                                    </div>

                                    <div>
                                        <label for="email" class="block text-sm font-medium text-white">Email</label>
                                        <input type="email" v-model="form.email" name="email" id="email" class="mt-1 block w-full rounded-md bg-white text-black" required>
                                    </div>

                                    <div>
                                        <label for="phone" class="block text-sm font-medium text-white">Phone</label>
                                        <input type="tel" v-model="form.phone" name="phone" id="phone" class="mt-1 block w-full rounded-md bg-white text-black" required>
                                    </div>

                                    <div>
                                        <button class="hover:bg-yellow-800 hover:text-white bg-yellow-600 text-black px-2 rounded text-bold text-2xl">
                                            Send message
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>


                    </div>
                </main>

            </div>
        </div>

        <bottom-layout>
        </bottom-layout>
    </div>
</template>
