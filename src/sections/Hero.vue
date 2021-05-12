<template>
  <div :class="['bg-blue-50 flex flex-col h-screen justify-center items-center px-4']">
    <div>
      <p class="font-heading font-bold text-4xl md:text-6xl lg:text-7xl">Hello!</p>
      <p class="font-heading font-bold text-6xl md:text-8xl lg:text-9xl text-brand-green">
        I'm Marvin
      </p>
      <p class="text-3xl md:text-4xl text-right">Front-End Web Developer</p>
    </div>
    <a
      href="mailto:hello@marvin.dev"
      rel="noopener noreferrer"
      class="bg-pink-600 mt-8 p-3 text-white rounded shadow-md"
    >
      Let's work together!
    </a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Hero',
});
</script>
