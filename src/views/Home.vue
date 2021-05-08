<template>
  <div class="home">
    <Hero id="Home" title="Front-End Web Developer" />
    <div id="Stack" class="p-4">
      <h1>Hello! I am Marvin.</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem earum illum
        inventore commodi minus quae officia velit, quidem voluptate officiis perspiciatis atque
        aspernatur eius laborum asperiores voluptatem, nobis quisquam adipisci.
      </p>
    </div>
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
  },
});
</script>
