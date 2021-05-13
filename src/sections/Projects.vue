<template>
  <section class="projects p-4 text-center text-white">
    <h1>Projects</h1>
    <div v-for="project in projects" :key="project.index" class="my-4">
      <h4>{{ project.name }}</h4>
      <p>
        Repository:
        <a :href="project.repository" target="_blank" rel="noopener noreferrer">{{
          project.name
        }}</a>
      </p>
      <p v-if="project.demo">
        Demo:
        <a :href="project.demo" target="_blank" rel="noopener noreferrer">{{ project.name }}</a>
      </p>
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
        repository: 'https://github.com/iamthismarvin/craftsmith',
        demo: 'https://craftsmith.netlify.app',
      },
      {
        name: 'Rodee-20',
        repository: 'https://github.com/iamthismarvin/rodee-20',
      },
      {
        name: 'marvin.dev',
        repository: 'https://github.com/iamthismarvin/marvin.dev-v2',
      },
    ],
  }),
});
</script>
<style lang="scss" scoped>
.projects {
  background-color: #db2777;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='72' viewBox='0 0 36 72'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23d12270' fill-opacity='1'%3E%3Cpath d='M2 6h12L8 18 2 6zm18 36h12l-6 12-6-12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
</style>
