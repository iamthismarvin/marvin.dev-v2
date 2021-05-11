<template>
  <footer
    class="bg-gray-900 flex flex-col md:flex-row justify-center md:justify-around items-start md:items-center p-4 text-white h-screen"
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

<style lang="scss" scoped></style>
