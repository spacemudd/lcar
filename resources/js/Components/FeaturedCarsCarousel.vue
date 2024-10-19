<template>
  <swiper
    :spaceBetween="30"
    :effect="'fade'"
    :navigation="true"
    :height="500"
    :autoplay-delay="5000"
    :autoplay-disable-on-interaction="false"
    :autoplay-reverse-direction="true"
    :space-between="30"
    :loop="true"
    :allow-touch-move="false"
    :prevent-clicks="false"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="mySwiper"
  >
      <swiper-slide v-for="car in cars">
          <a :href="route('cars.show', car.id)">
                <div
                    class="w-full bg-cover bg-center py-1 rounded-lg"
                     :style="'height:500px;background-image: url(' + route('media.show', car.media[0].id) + ');'"
                >
                    <p class="m-10 font-bold text-white"><span class="text-5xl">{{ car.at_data.data.adverts.retailAdverts.attentionGrabber }}</span></p>
                    <p class="m-10 font-bold text-white"><span class="text-5xl">{{ car.price_human }}</span></p>
                </div>
            </a>
      </swiper-slide>
  </swiper>
</template>
<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/effect-fade';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';

  // import required modules
  import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';

  export default {
      props: ['cars'],
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [EffectFade, Navigation, Pagination, Autoplay],
      };
    },
  };
</script>
