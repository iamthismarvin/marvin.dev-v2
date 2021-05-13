<template>
  <section class="stack bg-blue-200 p-4 text-center text-white">
    <h1 class="mb-2">Stack</h1>
    <div class="flex flex-col md:flex-row flex-wrap justify-evenly">
      <Card class="card">
        <h3>Tech</h3>
        <TechItem
          v-for="item in stack.tech"
          :key="item.id"
          :icon="item.icon"
          :name="item.name"
          :url="item.url"
          class="mb-2"
        />
      </Card>
      <Card class="card">
        <h3>Tools & OS</h3>
        <TechItem
          v-for="item in stack.tools"
          :key="item.id"
          :icon="item.icon"
          :name="item.name"
          :url="item.url"
        />
      </Card>
      <Card class="card">
        <h3>Familiar w/</h3>
        <TechItem
          v-for="item in stack.tools"
          :key="item.id"
          :icon="item.icon"
          :name="item.name"
          :url="item.url"
        />
      </Card>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Stack',
  data: () => ({
    stack: {
      tech: [
        { icon: 'html5', name: 'HTML 5', url: '#' },
        { icon: 'css3', name: 'CSS 3', url: '#' },
        { icon: 'javascript', name: 'JavaScript', url: '#' },
        { icon: 'typescript', name: 'TypeScript', url: 'https://www.typescriptlang.org/' },
        { icon: 'vue-dot-js', name: 'Vue.JS', url: 'https://vuejs.org/' },
        { icon: 'sass', name: 'Sass', url: 'https://sass-lang.com/' },
      ],
      tools: [
        { icon: 'git', name: 'Git', url: 'https://git-scm.com/' },
        { icon: 'eslint', name: 'ESLint', url: 'https://eslint.org/' },
      ],
    },
  }),
  components: {
    Card: () => import('@/components/Card.vue'),
    TechItem: () => import('@/components/TechItem.vue'),
  },
});
</script>

<style lang="scss" scoped>
.stack {
  background-color: #04a89c;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='72' viewBox='0 0 36 72'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%2304a197' fill-opacity='1'%3E%3Cpath d='M2 6h12L8 18 2 6zm18 36h12l-6 12-6-12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.card {
  @apply w-full md:w-72 my-2;
}
</style>
