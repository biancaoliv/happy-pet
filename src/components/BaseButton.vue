<template>
  <button :class="[bgColor, hoverColor, textColor, fontBold, 'px-6 py-2 text-center text-base rounded-3xl transition duration-300']">
    <slot></slot> 
  </button>
</template>

<script setup>
defineProps({
  bgColor: String,     
  hoverColor: String,
  textColor: String,
  fontBold: String 
});
</script>


