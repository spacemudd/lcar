<script>
export default {
    props: [
        'cars'
    ],
    data() {
        return {
            //
        }
    },
    mounted() {
        //
    },
    methods: {
        //
    }
}
</script>

<style lang="css">
.car-slider {
    max-width:150px;
    height: 300px;
}
.car-slider:hover {
    max-width:500px;
}
</style>

<template>
    <div class="flex gap-5 justify-center cars-slider-container">
        <a v-for="car in cars" :href="route('cars.show', car.id)" class="flex-1 car-slider transition-all duration-500 ease-in-out">
            <div
                class="w-full h-full bg-cover bg-center py-1"
                 :style="'background-image: url(' + route('media.show', car.media[0].id) + ');'"
            >
                <p class="ml-2 mt-2 mr-2 text-white"><span class="bg-black">{{ car.at_data.data.adverts.retailAdverts.attentionGrabber }}</span></p>
                <p class="ml-2 mt-2 mr-2 text-white"><span class="bg-black p-1">{{ car.price_human }}</span></p>
            </div>
        </a>
    </div>
    <div class="text-center mt-2">
            <a class="text-yellow-400" :href="route('cars.index')">Browse collection &#x2192;</a>
        </div>
</template>
