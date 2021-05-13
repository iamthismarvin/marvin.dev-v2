<template>
  <section class="projects p-4 text-center text-white">
    <h1>Projects</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, at ipsa tempore quos eaque
      voluptatum impedit corrupti eligendi perspiciatis pariatur qui necessitatibus repudiandae
      repellendus dolore iste minus dolorum fugit vero?
    </p>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Projects',
});
</script>
<style lang="scss" scoped>
.projects {
  background-color: #db2777;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='72' viewBox='0 0 36 72'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23d12270' fill-opacity='1'%3E%3Cpath d='M2 6h12L8 18 2 6zm18 36h12l-6 12-6-12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
</style>
