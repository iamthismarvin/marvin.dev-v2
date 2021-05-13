<template>
  <nav class="flex flex-col h-screen items-center justify-center text-white w-screen">
    <div class="absolute bg-gray-900 h-full opacity-80 w-full" @click="closeMenu()"></div>
    <div
      class="bg-pink-700 flex flex-col items-center justify-center h-5/6 lg:h-4/6 rounded shadow-lg w-5/6 lg:w-4/6 z-50"
    >
      <ul class="text-center">
        <li
          v-for="section in sections"
          :key="section.index"
          @click="scrollTo(section)"
          class="cursor-pointer text-4xl mb-4"
        >
          {{ section }}
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import scrollOptions from '@/assets/scripts/scrollOptions';
import sections from '@/assets/scripts/sections';
import Vue from 'vue';
import { mapActions } from 'vuex';

export default Vue.extend({
  name: 'Menu',
  computed: {
    sections() {
      return sections;
    },
  },
  methods: {
    ...mapActions({
      SET_MENU_STATE: 'menu/SET_MENU_STATE',
    }),
    closeMenu() {
      this.SET_MENU_STATE(false);
    },
    scrollTo(section: string) {
      this.closeMenu();
      this.$scrollTo(`#${section}`, 750, scrollOptions);
    },
  },
  mounted() {
    window.addEventListener('keyup', event => {
      if (event.key === 'Escape') {
        this.closeMenu();
      }
    });
  },
});
</script>
