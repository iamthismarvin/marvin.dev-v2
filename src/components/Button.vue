<template>
  <button class="transition-all" @click="action">
    <svg
      class="h-8 w-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.25" :d="icon"></path>
    </svg>
  </button>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Button',
  props: {
    action: { type: Function, required: true },
    icon: { type: String, required: true },
  },
});
</script>

<style lang="scss" scoped>
button {
  outline: none;
}
</style>
