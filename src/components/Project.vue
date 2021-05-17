<template>
  <div class="project bg-blue-50 rounded shadow-xl text-gray-700">
    <img
      :src="require(`@/assets/images/projects/${thumbnail}`)"
      :alt="name"
      class="h-48 lg:h-64 object-cover rounded-t w-full"
    />
    <div class="p-4">
      <h3 class="border-pink-700 mb-4 pb-2 text-center">{{ name }}</h3>
      <ul class="flex flex-wrap mb-2">
        <li
          v-for="tag in tags"
          :key="tag.index"
          class="bg-brand-green font-bold mb-1 mr-1 p-1 rounded text-white"
        >
          {{ tag }}
        </li>
      </ul>
      <p>{{ description }}</p>
    </div>
    <div class="flex justify-between rounded-b">
      <a
        :href="repositoryUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="project__link border-r"
      >
        <img src="@/assets/images/icons/github.svg" alt="github" class="h-8" />
      </a>
      <a
        v-if="demoUrl"
        :href="demoUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="project__link font-heading font-bold"
        >Demo</a
      >
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Project',
  props: {
    name: { type: String, required: true },
    thumbnail: { type: String, required: true },
    tags: { type: Array, required: true },
    description: { type: String, required: true },
    repositoryUrl: { type: String, required: true },
    demoUrl: { type: String, required: false },
  },
});
</script>

<style lang="scss" scoped>
.project {
  h3 {
    border-bottom-width: 3px;
  }

  &__link {
    @apply hover:bg-gray-200 border-gray-200 border-t flex h-12 items-center justify-center rounded-b w-full;
  }
}
</style>
