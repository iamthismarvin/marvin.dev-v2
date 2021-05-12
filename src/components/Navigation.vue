<template>
  <nav class="flex justify-between items-start p-6 top-0 w-full">
    <img src="@/assets/images/logo.svg" alt="logo" class="h-8" />
    <a href="https://github.com/iamthismarvin" target="_blank" ref="noopener noreferrer">
      <img src="@/assets/images/icons/github.svg" alt="github" class="h-8" />
    </a>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Navigation',
});
</script>

<style lang="scss" scoped></style>
