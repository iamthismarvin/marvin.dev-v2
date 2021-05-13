<template>
  <header :class="['hero bg-blue-50 flex flex-col h-screen justify-center items-center px-4']">
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
  </header>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Hero',
});
</script>

<style lang="scss" scoped>
.hero {
  background-color: #eff6ff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='72' viewBox='0 0 36 72'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23dfe1e4' fill-opacity='0.4'%3E%3Cpath d='M2 6h12L8 18 2 6zm18 36h12l-6 12-6-12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
</style>
