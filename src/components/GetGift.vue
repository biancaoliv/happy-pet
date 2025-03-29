<template>
  <section class="py-18">
    <div
      class="container mx-auto max-w-3xl px-4 text-center bg-purple-500 py-18 rounded-xl"
    >
      <h1 class="text-3xl md:text-4xl font-bold text-white max-w-2xl mx-auto">
        Get special gift!
      </h1>
      <p class="py-4 text-white max-w-xl mx-auto ">
        Adopt a four-legged friend and receive a special gift as a symbol of your gesture of love and compassion!
      </p>
      <BaseButton
        bgColor="bg-white"
        hoverColor="hover:bg-purple-400"
        textColor="text-purple-500"
        fontBold="font-medium"
      >
        <div class="flex items-center gap-2">
          <span>Contact Us</span>
        </div>
      </BaseButton>
    </div>
  </section>
</template>

<script setup>
import BaseButton from "../components/BaseButton.vue";
</script>

<style></style>
