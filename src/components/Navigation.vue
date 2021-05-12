<template>
  <nav class="flex justify-between p-6 top-0 w-full">
    <img src="@/assets/images/logo.svg" alt="logo" class="h-8" />
    <div class="font-bold text-gray-700">
      <a href="#" class="mr-4">Projects</a>
      <a href="#">Terminal</a>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Navigation',
});
</script>

<style lang="scss" scoped></style>
