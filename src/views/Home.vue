<template>
  <div class="home">
    <Hero id="Home" title="Front-End Web Developer" />
    <div id="Contact" class="p-4">
      <h1>Hello! I am Marvin.</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem earum illum
        inventore commodi minus quae officia velit, quidem voluptate officiis perspiciatis atque
        aspernatur eius laborum asperiores voluptatem, nobis quisquam adipisci.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Home',
  metaInfo: {
    title: 'Home',
  },
  components: {
    Hero: () => import('@/components/Hero.vue'),
  },
});
</script>
