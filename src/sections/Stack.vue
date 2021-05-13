<template>
  <section class="bg-blue-50 p-4">
    <h1>Stack</h1>
    <div>
      <h3>Tech</h3>
      <TechItem
        v-for="item in stack.tech"
        :key="item.id"
        :icon="item.icon"
        :name="item.name"
        :url="item.url"
      />
    </div>
    <div>
      <h3>Tools</h3>
      <TechItem
        v-for="item in stack.tools"
        :key="item.id"
        :icon="item.icon"
        :name="item.name"
        :url="item.url"
      />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Stack',
  data: () => ({
    stack: {
      tech: [{ icon: 'vue-dot-js', name: 'Vue.JS', url: 'https://vuejs.org/' }],
      tools: [
        { icon: 'git', name: 'Git', url: 'https://git-scm.com/' },
        { icon: 'eslint', name: 'ESLint', url: 'https://eslint.org/' },
      ],
    },
  }),
  components: {
    TechItem: () => import('@/components/TechItem.vue'),
  },
});
</script>
