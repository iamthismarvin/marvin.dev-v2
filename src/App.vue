<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',
  metaInfo: {
    title: 'Marvin Parada',
    titleTemplate: `%s - Marvin Parada | Front-end Web Developer`,
    meta: [
      { name: 'description', content: 'Front-end Web Developer' },
      {
        name: 'keywords',
        content:
          'web, developer, development, front, end, frontend, front-end, marvin.dev, marvin, dev',
      },
    ],
  },
});
</script>
