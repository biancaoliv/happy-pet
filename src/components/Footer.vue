<template>
  <footer class="py-6 px-8 bg-gray-100">
    <div class="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
      <p class="text-sm text-gray-600 mb-4 md:mb-0">
        © 2024 Happy Pet - Todos os direitos reservados.
      </p>

      <div class="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
        <a href="#" class="text-gray-600 hover:text-purple-500">Collection</a>
        <a href="#" class="text-gray-600 hover:text-purple-500">All Pet</a>
        <a href="#" class="text-gray-600 hover:text-purple-500">Privacy Policy</a>
        <a href="#" class="text-gray-600 hover:text-purple-500">Contact</a>

        <div class="flex space-x-4">
          <a href="#" class="text-purple-500 hover:text-purple-700">
            <OhVueIcon name="bi-facebook" class="size-5" />
          </a>
          <a href="#" class="text-purple-500 hover:text-purple-700">
            <OhVueIcon name="bi-twitter" class="size-5" />
          </a>
          <a href="#" class="text-purple-500 hover:text-purple-700">
            <OhVueIcon name="bi-linkedin" class="size-5" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { addIcons } from "oh-vue-icons";
import { OhVueIcon } from "oh-vue-icons";
import { BiFacebook, BiTwitter, BiLinkedin } from "oh-vue-icons/icons";

addIcons(BiFacebook, BiTwitter, BiLinkedin);
</script>
