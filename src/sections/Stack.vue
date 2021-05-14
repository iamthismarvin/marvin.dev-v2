<template>
  <section class="stack bg-blue-200 p-6 text-center text-white">
    <h1 class="mb-2">Stack</h1>
    <div class="flex flex-col md:flex-row flex-wrap justify-evenly">
      <Card class="stack__card" title="Current Stack">
        <TechItem
          v-for="item in stack.tech"
          :key="item.id"
          :icon="item.icon"
          :name="item.name"
          :url="item.url"
          class="mb-2"
        />
      </Card>
      <Card class="stack__card" title="Tools & OS">
        <TechItem
          v-for="item in stack.tools"
          :key="item.id"
          :icon="item.icon"
          :name="item.name"
          :url="item.url"
          class="mb-2"
        />
      </Card>
      <Card class="stack__card" title="Familiar w/">
        <TechItem
          v-for="item in stack.familiar"
          :key="item.id"
          :icon="item.icon"
          :name="item.name"
          :url="item.url"
          class="mb-2"
        />
      </Card>
      <Card class="stack__card" title="Additional Experience">
        <ul>
          <li
            v-for="item in stack.additional_experience"
            :key="item.index"
            class="font-bold font-heading list-disc m-3 text-left"
          >
            {{ item }}
          </li>
        </ul>
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
        { icon: 'html5', name: 'HTML 5', url: 'https://en.wikipedia.org/wiki/HTML' },
        { icon: 'css3', name: 'CSS 3', url: 'https://en.wikipedia.org/wiki/CSS' },
        { icon: 'javascript', name: 'JavaScript', url: 'https://en.wikipedia.org/wiki/JavaScript' },
        { icon: 'typescript', name: 'TypeScript', url: 'https://www.typescriptlang.org/' },
        { icon: 'vue-dot-js', name: 'Vue.JS', url: 'https://vuejs.org/' },
        { icon: 'sass', name: 'Sass', url: 'https://sass-lang.com/' },
        { icon: 'tailwindcss', name: 'Tailwind CSS', url: 'https://tailwindcss.com/' },
      ],
      tools: [
        {
          icon: 'visualstudiocode',
          name: 'Visual Studio Code',
          url: 'https://code.visualstudio.com/',
        },
        { icon: 'git', name: 'Git', url: 'https://git-scm.com/' },
        { icon: 'eslint', name: 'ESLint', url: 'https://eslint.org/' },
        { icon: 'prettier', name: 'Prettier', url: 'https://prettier.io/' },
        {
          icon: 'affinitydesigner',
          name: 'Affinity Designer',
          url: 'https://affinity.serif.com/en-gb/designer/',
        },
        {
          icon: 'affinityphoto',
          name: 'Affinity Photo',
          url: 'https://affinity.serif.com/en-gb/photo/',
        },
        {
          icon: 'manjaro',
          name: 'Manjaro',
          url: 'https://manjaro.org/',
        },
        {
          icon: 'windows',
          name: 'Windows',
          url: 'https://en.wikipedia.org/wiki/Microsoft_Windows',
        },
      ],
      familiar: [
        {
          icon: 'laravel',
          name: 'Laravel',
          url: 'https://laravel.com/',
        },
        { icon: 'netlify', name: 'Netlify', url: 'https://www.netlify.com/' },
        {
          icon: 'electron',
          name: 'Electron',
          url: 'https://www.electronjs.org/',
        },
        {
          icon: 'postgresql',
          name: 'PostgreSQL',
          url: 'https://www.postgresql.org/',
        },
        {
          icon: 'node-dot-js',
          name: 'Node.js',
          url: 'https://nodejs.org/en/',
        },
      ],
      additional_experience: [
        'Project Management',
        'Agile Software Development',
        'BEM: Block Element Modifier Methodology',
        'Data Modeling',
        'IndexedDB',
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
  background-color: #29343d;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='72' viewBox='0 0 36 72'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%231a242c' fill-opacity='1'%3E%3Cpath d='M2 6h12L8 18 2 6zm18 36h12l-6 12-6-12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");

  &__card {
    @apply w-full md:w-80 my-2;
  }
}
</style>
