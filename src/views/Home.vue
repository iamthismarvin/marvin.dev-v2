<template>
  <div class="home">
    <Hero id="Home" />
    <Stack id="Stack" />
    <Projects id="Projects" />
    <Contact id="Contact" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Home',
  components: {
    Contact: () => import('@/sections/Contact.vue'),
    Hero: () => import('@/sections/Hero.vue'),
    Projects: () => import('@/sections/Projects.vue'),
    Stack: () => import('@/sections/Stack.vue'),
  },
});
</script>
