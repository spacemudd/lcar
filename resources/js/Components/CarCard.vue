<script>
export default {
    props: [
        'id',
        'car',
        'description',
        'description2',
        'price',
        'year',
        'engine',
    ]
}
</script>

<template>
    <div class="border border-yellow-600 p-5 rounded bg-white text-black">
        <template v-if="car.at_data">
            <template v-if="car.at_data.data">
                <p class="text-2xl text-black">{{ year }}</p>
                <a :href="route('cars.show', car.id)">
                    <h2 class="text-2xl text-black"><b>{{ car.at_data.data.vehicle.make }} {{ car.at_data.data.vehicle.model }}</b></h2>
                    <p class="text-2xl text-black">{{ car.at_data.data.adverts.retailAdverts.attentionGrabber }}</p>
                </a>
            </template>
        </template>

        <template v-if="car.media">
            <div
                class="bg-cover bg-center py-1 block mt-5"
                 :style="'height:300px;background-image: url(' + route('media.show', car.media[0].id) + ');'"
            >
            </div>
        </template>
        <template v-else>
            <img class="mt-2 border-2 border-black w-full"
                 src="/not_available.svg"
                 alt="" />
        </template>


        <p class="text-right">{{ price }}</p>
        <hr>
        <table class="w-full">
            <tbody>
            <tr>
                <td>Year</td>
                <td class="text-right">{{ year }}</td>
            </tr>
            <tr>
                <td>Engine</td>
                <td class="text-right">{{ engine }}</td>
            </tr>
            </tbody>
        </table>
        <div class="mt-2 flex gap-2 text-center lg:text-left justify-between">
            <a class="border px-2 hover:bg-black hover:text-white border-black font-bold transition duration-300" :href="route('cars.show', car.id)">
                More Information
            </a>
            <a class="border px-2 hover:bg-black hover:text-white border-black font-bold transition duration-300" :href="route('appointments.create', {car_id: car.id})">
                Book an appointment
            </a>
        </div>
    </div>
</template>
