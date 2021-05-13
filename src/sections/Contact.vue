<template>
  <footer
    class="contact bg-gray-900 flex flex-col md:flex-row justify-center md:justify-around items-start md:items-center p-4 text-white h-screen"
  >
    <div>
      <h2>Links</h2>
      <p>
        <a href="https://github.com/iamthismarvin" target="_blank" rel="noopener noreferrer"
          >GitHub</a
        >
      </p>
      <p>
        <a href="https://codesandbox.io/u/iamthismarvin" target="_blank" rel="noopener noreferrer"
          >CodeSandbox</a
        >
      </p>
    </div>
    <div class="mt-4">
      <h2>Email</h2>
      <p><a href="mailto:hello@marvin.dev">hello@marvin.dev</a></p>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Contact',
});
</script>

<style lang="scss" scoped>
.contact {
  background-color: #111827;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='72' viewBox='0 0 36 72'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%230c111b' fill-opacity='1'%3E%3Cpath d='M2 6h12L8 18 2 6zm18 36h12l-6 12-6-12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
</style>
