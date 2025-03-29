<template>
  <main>
    <section class="container mx-auto py-8 pt-24 px-4 sm:px-6 md:px-12">
      <header
        class="container text-center text-3xl sm:text-4xl md:text-5xl font-bold mx-auto"
      >
        <h1 class="lg:text-5xl text-4xl">Pet lovers words from our record</h1>
      </header>
      <p
        class="text-center py-4 max-w-2xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl "
      >
      Every pet we adopt becomes part of our family, bringing joy, comfort and true friendship. Our pets teach us the true meaning of loyalty and unconditional love.
      </p>
    </section>
    <section class="w-full max-w-4xl mx-auto p-6 bg-white rounded-lg flex flex-col lg:flex-row items-center gap-10">

      <div class="lg:w-2/2 w-md">
        <img
          src="../assets/human.jpg"
          alt="a man sitting with a dog"
          class="w-full rounded-lg"
        />
      </div>

      <div class="w-1/2 ">
        <div class="flex items-center gap-4 pt-4">
          <img
            :src="comments[currentIndex].img"
            alt="Avatar"
            class="w-12 h-12 rounded-full shadow-md"
          />
          <div>
            <h3 class="text-gray-800 font-semibold">
              {{ comments[currentIndex].author }}
            </h3>
            <p class="text-gray-500 text-sm">Pet Collector</p>
          </div>
        </div>
        <p class="text-gray-600 text-lg italic pt-4">
          "{{ comments[currentIndex].text }}"
        </p>

        <div class="flex mt-6 gap-4">
          <button @click="prevComment">
            <OhVueIcon
              name="bi-arrow-right-circle-fill"
              class="rotate-180 size-12 text-purple-300 hover:text-purple-500"
            />
          </button>
          <button @click="nextComment">
            <OhVueIcon
              name="bi-arrow-right-circle-fill"
              class="size-12 text-purple-300 hover:text-purple-500"
            />
          </button>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { addIcons } from "oh-vue-icons";
import { OhVueIcon } from "oh-vue-icons";
import { BiArrowRightCircleFill, BiPersonCircle } from "oh-vue-icons/icons";
import Akemi from "../assets/akemi.png";
import Gustavo from "../assets/gustavo.png";
import Igor from "../assets/igor.png";
import Luis from "../assets/luis.png";

addIcons(BiArrowRightCircleFill, BiPersonCircle);

export default {
  components: {
    OhVueIcon,
  },

  data() {
    return {
      currentIndex: 0,
      comments: [
        {
          text: "Azuki and Aiko are my greatest treasure. Happy Pet gave me the loves of my life!💕",
          author: "Akemi Nishida",
          img: Akemi,
        },
        {
          text: "I've always loved poodles, but Happy Pet made my love for them grow even more!",
          author: "Gustavo Noob",
          img: Gustavo,
        },
        {
          text: "Sherlock is the best dog I could ever have! He is amazing and thanks to Happy Pet he now has a happy life.",
          author: "Igor Doly",
          img: Igor,
        },
        {
          text: "Aslan is the best dog I could have! Thanks to Happy Pet, he now has a happy life",
          author: "Luis",
          img: Luis,
        },
      ],
    };
  },
  methods: {
    nextComment() {
      this.currentIndex = (this.currentIndex + 1) % this.comments.length;
    },
    prevComment() {
      this.currentIndex =
        (this.currentIndex - 1 + this.comments.length) % this.comments.length;
    },
  },
};
</script>
