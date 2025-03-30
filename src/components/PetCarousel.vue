<template>
  <div class="flex justify-center items-center pt-16 w-full mx-auto md:px-16 lg:px-4 xl:px-[120px] 2xl:px-[300px] 2xl:max-w">
    <swiper class="mx-auto"
      :modules="[Navigation, Pagination, Autoplay]"
      :space-between="true"
      :loop="true"
      :grab-cursor="true"
      :pagination="{ clickable: true, dynamicBullets: true }"
      :navigation="true"
      :autoplay="{ 
        delay: 3000, 
        disableOnInteraction: false 
      }"
      :breakpoints="{
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1280: { slidesPerView: 3 }
      }"
    >
      <swiper-slide>
        <img src="../assets/pug.jpg" alt="Pug dog" class="w-80 h-80 rounded-3xl mx-auto"/>
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/husky.jpg" alt="Husky dog ​​breed" class="w-80 h-80 rounded-3xl mx-auto"/>
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/gato-laranja.jpg" alt="Orange cat" class="w-80 h-80 rounded-3xl mx-auto"/>
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/pincher.jpg" alt="Pinscher dog breed" class="w-80 h-80 rounded-3xl mx-auto"/>
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/gato-cinza.jpg" alt="Gray cat" class="w-80 h-80 rounded-3xl mx-auto"/>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; 
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
</script>

<style>
.swiper-button-next,
.swiper-button-prev {
  color: #0c0c0c;
  width: 10px;
  height: 50px;
}

.swiper-pagination-bullet {
  background-color: #fefdff !important; 
}
</style>
