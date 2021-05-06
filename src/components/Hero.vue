<template>
  <div
    :class="[
      'hero bg-green-500 fh-screen flex flex-col lg:flex-row  justify-center items-center px-4',
    ]"
  >
    <div :class="['hero__heading p-2 text-6xl md:text-8xl lg:text-9xl text-center']">
      {{ title }}
    </div>
    <Terminal />
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
  components: {
    Terminal: () => import('@/components/Terminal.vue'),
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
