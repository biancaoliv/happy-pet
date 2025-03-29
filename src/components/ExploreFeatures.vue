<template>
  <main id="colllection">
    <section class="container mx-auto py-8 pt-18 px-4 sm:px-6 md:px-12">
      <header
        class="container text-center text-3xl sm:text-4xl md:text-5xl font-bold mx-auto"
      >
        <h1>Explore our Features</h1>
      </header>
      <p
        class="text-center py-4 max-w-2xl text-gray-600 mx-auto text-sm sm:text-base md:text-lg lg:text-xl"
      >
        Discover the features that make our service unique and exceptional for
        your pet. We offer the best for your pets!
      </p>
    </section>

    <section
      class="container mx-auto grid grid-cols-1 md:grid-cols-2 py-12 lg:grid-cols-4 gap-6 md:px-16 lg:px-4 xl:px-[120px] 2xl:px-[100px]"
    >
      <article
        class="flex flex-col items-center text-center px-4 py-6 sm:px-8 rounded-t-lg hover:text-white hover:bg-purple-400 duration-300 ease-in hover:scale-110"
      >
        <div
          class="w-14 h-14 flex items-center justify-center rounded-full bg-conic/decreasing from-violet-700 via-lime-300 to-violet-700"
        >
          <OhVueIcon name="co-animal" class="w-11 h-11 text-white" />
        </div>
        <h3 class="font-bold pt-4">Multi-Color Pet</h3>
        <p class="pt-4 text-sm md:text-base lg:text-lg">
          Diversity and beauty in every animal. We offer colorful and unique pet
          options that will make you fall in love.
        </p>
      </article>

      <article
        class="flex flex-col items-center text-center px-4 py-6 sm:px-8 rounded-t-lg hover:text-white hover:bg-purple-400 duration-300 ease-in hover:scale-110"
      >
        <div
          class="w-14 h-14 flex items-center justify-center rounded-full bg-pink-400"
        >
          <OhVueIcon name="co-dog" class="w-11 h-11 text-white" />
        </div>
        <h3 class="font-bold pt-4">Quality Pet</h3>
        <p class="pt-4 text-sm md:text-base lg:text-lg">
          Healthy and well-cared-for pets, with quality guarantees. Adopt the
          best for your home.
        </p>
      </article>

      <article
        class="flex flex-col items-center text-center px-4 py-6 sm:px-8 rounded-t-lg hover:text-white hover:bg-purple-400 duration-300 ease-in hover:scale-110"
      >
        <div
          class="w-14 h-14 flex items-center justify-center rounded-full bg-yellow-500"
        >
          <OhVueIcon
            name="la-notes-medical-solid"
            class="w-11 h-11 text-white"
          />
        </div>
        <h3 class="font-bold pt-4">Doctor Advise</h3>
        <p class="pt-4 text-sm md:text-base lg:text-lg">
          Get access to specialized veterinary consultations and tips to ensure
          your pet's health and well-being.
        </p>
      </article>

      <article
        class="flex flex-col items-center text-center px-4 py-6 sm:px-8 rounded-t-lg hover:text-white hover:bg-purple-400 duration-300 ease-in hover:scale-110"
      >
        <div
          class="w-14 h-14 flex items-center justify-center rounded-full bg-red-500"
        >
          <OhVueIcon name="co-home" class="w-11 h-11 text-white" />
        </div>
        <h3 class="font-bold pt-4">Home Delivery</h3>
        <p class="pt-4 text-sm md:text-base lg:text-lg">
          Convenience and agility in delivering your pet directly to your home.
        </p>
      </article>
    </section>
  </main>
</template>

<script setup>
import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  CoAnimal,
  CoDog,
  LaNotesMedicalSolid,
  CoHome,
} from "oh-vue-icons/icons";

addIcons(CoAnimal, CoDog, LaNotesMedicalSolid, CoHome);
</script>

<style></style>
