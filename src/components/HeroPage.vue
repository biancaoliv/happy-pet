<template>
  <main id="hero">
    <section class="py-8 pt-26">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-5xl md:text-6xl font-bold max-w-2xl mx-auto">
          The best place to get your favorite pet without any doubt
        </h1>
      </div>
    </section>

    <section>
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-lg text-gray-600 max-w-lg mx-auto">
          Discover an incredible selection of pets waiting for you. Connect with your future friend!
        </h1>
      </div>
    </section>
    <div class="flex justify-center mt-5">
      <BaseButton
        bgColor="bg-purple-300"
        hoverColor="hover:bg-purple-400"
        textColor="text-black"
        fontBold="font-bold"
      >
        <div class="flex items-center gap-2">
          <span>Get Started Now</span>
          <OhVueIcon name="co-arrow-circle-right" class="size-8" />
        </div>
      </BaseButton>
    </div>
  </main>
</template>

<script setup>
import BaseButton from "./BaseButton.vue";
import { CoArrowCircleRight } from "oh-vue-icons/icons";
import { addIcons } from "oh-vue-icons";
import { OhVueIcon } from "oh-vue-icons";
addIcons(CoArrowCircleRight);
</script>
