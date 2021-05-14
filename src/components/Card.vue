<template>
  <div class="card bg-blue-50 p-4 rounded self-start shadow-xl text-gray-700">
    <h3 v-if="title" class="border-pink-700 mb-4 pb-2">{{ title }}</h3>
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Card',
  props: {
    title: { type: String, required: false },
  },
});
</script>

<style lang="scss" scoped>
.card {
  h3 {
    border-bottom-width: 3px;
  }
}
</style>
