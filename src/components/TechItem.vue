<template>
  <a
    class="cursor-pointer flex h-10 items-center"
    :href="url"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img :src="require(`@/assets/images/icons/${icon}.svg`)" :alt="name" class="h-full mr-2" />
    <h6>{{ name }}</h6>
  </a>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TechItem',
  props: {
    icon: { type: String, required: true },
    name: { type: String, required: true },
    url: { type: String, required: true },
  },
});
</script>
