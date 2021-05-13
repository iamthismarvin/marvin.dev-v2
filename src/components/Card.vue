<template>
  <div class="card bg-blue-50 border-gray-700 p-4 rounded shadow-lg text-gray-700">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Card',
});
</script>

<style lang="scss" scoped>
.card {
  border-width: 6px;
}
</style>
