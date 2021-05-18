<template>
  <section class="projects p-4 text-white">
    <h1 class="mb-4 text-center">Projects</h1>
    <div class="flex justify-center">
      <div class="flex flex-wrap justify-center">
        <Project
          v-for="project in projects"
          :key="project.index"
          class="mb-6 mx-3 max-w-sm"
          :name="project.name"
          :thumbnail="project.thumbnail"
          :tags="project.tags"
          :description="project.description"
          :repositoryUrl="project.repositoryUrl"
          :demoUrl="project.demoUrl"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Projects',
  data: () => ({
    projects: [
      {
        name: 'Craftsmith',
        thumbnail: 'craftsmith.png',
        tags: ['vue.js 3', 'typescript', 'tailwind', 'indexeddb', 'pwa'],
        description: 'A simple RPG game fully developed with front-end technology.',
        repositoryUrl: 'https://github.com/iamthismarvin/craftsmith',
        demoUrl: 'https://craftsmith.netlify.app',
      },
      {
        name: 'Rodee-20',
        thumbnail: 'rodee-20.png',
        tags: ['javascript', 'es6', 'discord.js'],
        description:
          'Rodee-20 is a Discord bot that helps you roll polyhedral dice by entering commands in the chat.',
        repositoryUrl: 'https://github.com/iamthismarvin/rodee-20',
      },
      {
        name: 'Marvin.DEV',
        thumbnail: 'marvin-dev.png',
        tags: ['vue.js', 'typescript', 'tailwind', 'pwa'],
        description: 'Personal website [marvin.dev] version 2.0!',
        repositoryUrl: 'https://github.com/iamthismarvin/marvin.dev-v2',
      },
    ],
  }),
  components: {
    Project: () => import('@/components/Project.vue'),
  },
});
</script>
<style lang="scss" scoped>
.projects {
  background-color: #db2777;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='72' viewBox='0 0 36 72'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23d12270' fill-opacity='1'%3E%3Cpath d='M2 6h12L8 18 2 6zm18 36h12l-6 12-6-12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
</style>
