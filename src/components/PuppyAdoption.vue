<template>
  <main class="container mx-auto flex flex-col lg:flex-row items-center p-6 ">
    <section class="flex flex-col md:flex-row lg:flex-row md:gap-8 gap-y-4 flex-2 ">
      <div class="w-full p-4 bg-pink-300 rounded-lg   duration-300 ease-in hover:scale-110">
        <div class="flex flex-col items-center py-8 ">
          <img
            class="w-42 h-auto mb-3"
            src="../assets/hamster.png"
            alt="hamster"
          />
          <h5 class="mb-1 text-xl font-medium py-2">Hamster</h5>
          <OhVueIcon
            name="bi-arrow-right-circle-fill"
            class="size-12 text-white"
            aria-label="Arrow icon indicating to continue"
          />
        </div>
      </div>
      <div class="w-full  p-4 bg-purple-300 rounded-lg duration-300 ease-in hover:scale-110">
        <div class="flex flex-col items-center py-8">
          <img
            class="w-42 h-auto mb-3"
            src="../assets/cat.png"
            alt="puppy cat"
          />
          <h5 class="mb-1 text-xl font-medium py-2">Kitten</h5>
          <OhVueIcon
            name="bi-arrow-right-circle-fill"
            class="size-12 text-white"
            aria-label="Arrow icon indicating to continue"
          />
        </div>
      </div>
      <div class="w-full  p-4 bg-blue-200 rounded-lg duration-300 ease-in hover:scale-110">
        <div class="flex flex-col items-center py-8">
          <img
            class="w-42 h-auto mb-3"
            src="../assets/dog-puppy.png"
            alt="puppy dog"
          />
          <h5 class="mb-1 text-xl font-medium py-2">Puppy Dog</h5>
          <OhVueIcon
            name="bi-arrow-right-circle-fill"
            class="size-12 text-white"
            aria-label="Arrow icon indicating to continue"
          />
        </div>
      </div>
    </section>

    <section class="text-center lg:text-left max-w-md order-first lg:order-none p-12 ">
      <h1 class="text-4xl font-bold text-gray-800">Find Your Puppy</h1>
      <p class="text-gray-600 mt-2">
        We offer a wide variety of adorable dogs ready to find loving homes. If you're looking for a loyal and fun-loving friend, this is the place for you!
      </p>
      <div class="gap-2 mt-4">
        <BaseButton
          bgColor="bg-purple-300"
          hoverColor="hover:bg-purple-400"
          textColor="text-white"
          fontBold="font-regular"
        >
          <div class="flex items-center gap-2">View Detail</div>
        </BaseButton>
        <button
          class="px-6 py-2 text-gray-800 rounded-lg hover:bg-gray-200 transition"
        >
          Learn More
        </button>
      </div>
    </section>
  </main>
</template>

<script setup>
import BaseButton from "./BaseButton.vue";
import { addIcons } from "oh-vue-icons";
import { OhVueIcon } from "oh-vue-icons";
import { BiArrowRightCircleFill } from "oh-vue-icons/icons";
addIcons(BiArrowRightCircleFill);
</script>

<style></style>
