<template>
  <main id="allpet">
    <section class="container mx-auto py-8 pt-18 px-4 sm:px-6 md:px-12 hidden">
      <header
        class="container text-center text-3xl sm:text-4xl md:text-5xl font-bold mx-auto"
      >
        <h1>Find out all category</h1>
      </header>
      <p
        class="text-center py-4 max-w-2xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl"
      >
      Discover a variety of pets waiting for a new home. Find the perfect companion for your home!
      </p>
    </section>

    <section
      class="container mx-auto grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-12 md:px-16 lg:px-4 xl:px-[120px] 2xl:px-[100px]"
    >
      <article
        class="flex flex-col items-center text-center px-12 py-12 sm:px-8 rounded-[150px] shadow-2xl  duration-300 ease-in hover:scale-110"
      >
        <div
          class="w-52 h-52 flex items-center justify-center rounded-full"
        >
          <img src="../assets/papagaio.png" alt="parrot bird" class="w-42 h-42"/>
        </div>
        <h3 class="font-bold pt-4">Birds</h3>
        <p class="pt-4 text-sm md:text-base lg:text-lg">
          Charming birds that bring joy and color to your day.
        </p>
      </article>

      <article
        class="flex flex-col items-center text-center px-12 py-12 sm:px-8 rounded-[150px] shadow-2xl  duration-300 ease-in hover:scale-110"
      >
        <div
          class="w-52 h-52 flex items-center justify-center rounded-full"
        >
          <img src="../assets/siames.png" alt="Siamese cat" class="w-42 h-42"/>
        </div>
        <h3 class="font-bold pt-4">Cats</h3>
        <p class="pt-4 text-sm md:text-base lg:text-lg">
          Cats are loyal and loving companions.
        </p>
      </article>

      <article
        class="flex flex-col items-center text-center px-12 py-12 sm:px-8 rounded-[150px] shadow-2xl  duration-300 ease-in hover:scale-110"
      >
        <div
          class="w-52 h-52 flex items-center justify-center rounded-full"
        >
          <img src="../assets/dog.png" alt="black and white dog" class="w-42 h-42"/>
        </div>
        <h3 class="font-bold pt-4">Dogs</h3>
        <p class="pt-4 text-sm md:text-base lg:text-lg">
          Dogs are known for their loyalty and unconditional love.
        </p>
      </article>

      <article
        class="flex flex-col items-center text-center px-12 py-12 sm:px-8 rounded-[150px] shadow-2xl  duration-300 ease-in hover:scale-110"
      >
        <div
          class="w-52 h-52 flex items-center justify-center rounded-full"
        >
          <img src="../assets/fish.png" alt="orange fish" class="w-42 h-42"/>
        </div>
        <h3 class="font-bold pt-4">Fish</h3>
        <p class="pt-4 text-sm md:text-base lg:text-lg">
          Fish bring serenity and beauty to their surroundings.
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
