<template>
  <nav class="fixed top-0 left-0 w-full bg-white shadow-md z-50 p-4">
    <div class="container mx-auto flex justify-between items-center">
      <h1 class="text-black text-xl font-bold hover:text-purple-400">
        Happy Pet
      </h1>
      <ul class="hidden md:flex space-x-6">
        <li>
          <router-link
            to="/"
            @click.native="scrollToHero"
            class="text-black hover:text-purple-400"
            >Home</router-link
          >
        </li>
        <li>
          <a href="#colllection" class="text-black hover:text-purple-400"
            >Collection</a
          >
        </li>
        <li>
          <a href="#allpet" class="text-black hover:text-purple-400">All Pet</a>
        </li>
        <li>
          <router-link to="/contact" class="text-black hover:text-purple-400"
            >Contact</router-link
          >
        </li>
      </ul>
      <BaseButton
        bgColor="bg-black"
        hoverColor="hover:bg-purple-400"
        textColor="text-white"
        class="duration-300 ease-in hover:scale-110"
        >login</BaseButton
      >
      <div class="md:hidden flex items-center">
        <button @click="toggleMenu" class="text-black hover:text-purple-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>

    <div
      :class="{ block: isMenuOpen, hidden: !isMenuOpen }"
      class="md:hidden bg-white p-4 space-y-4 absolute top-16 left-0 w-full z-10"
    >
      <ul class="space-y-6">
        <li>
          <router-link to="/" class="text-black hover:text-purple-400"
            >Home</router-link
          >
        </li>
        <li>
          <router-link to="/collection" class="text-black hover:text-purple-400"
            >Collection</router-link
          >
        </li>
        <li>
          <router-link to="/" class="text-black hover:text-purple-400"
            >All Pet</router-link
          >
        </li>
        <li>
          <router-link to="/" class="text-black hover:text-purple-400"
            >Contact</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import BaseButton from "./BaseButton.vue";
import { useRouter } from "vue-router";

const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
const scrollToHero = () => {
  // Rolar suavemente até o topo da HeroPage
  const heroSection = document.getElementById("hero");
  if (heroSection) {
    window.scrollTo({
      top: heroSection.offsetTop,
      behavior: "smooth",
    });
  }
};
</script>
