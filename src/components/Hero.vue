<template>
  <div
    :class="[
      'hero bg-green-500 fh-screen flex justify-center items-center text-center text-6xl md:text-8xl lg:text-9xl px-4',
    ]"
  >
    <div :class="['hero__heading p-2 ']">
      {{ title }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Hero',
  props: {
    title: {
      type: String,
      required: false,
      default: null,
    },
  },
});
</script>

<style lang="scss" scoped>
.hero {
  height: calc(100vh);

  &__heading {
    font-family: 'GeneralSans';
    font-weight: bold;
    max-width: 800px;
  }
}
</style>
