<template>
  <div>
    <transition name="fade" tag="">
      <Terminal class="fixed inset-x-0 mx-auto top-5 transition-all z-40" v-if="isTerminalActive" />
    </transition>
    <transition name="fade">
      <Menu class="fixed z-30" v-if="isMenuActive" />
    </transition>
    <div class="bottom-4 flex flex-col fixed right-4 z-50">
      <button
        class="bg-gray-900 hover:bg-gray-800 border-4 border-green-500 p-3 rounded-full text-green-500 transition-all outline-none"
        @click="toggleMenu"
      >
        <svg
          class="h-8 w-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
      <button
        class="bg-gray-900 hover:bg-gray-800 border-4 border-green-500 p-3 rounded-full text-green-500 transition-all outline-none mt-1"
        @click="toggleTerminal"
      >
        <svg
          class="h-8 w-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          ></path>
        </svg>
      </button>
    </div>
    <main>
      <slot />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex';

export default Vue.extend({
  name: 'Default',
  components: {
    Menu: () => import('@/components/Menu.vue'),
    Terminal: () => import('@/components/Terminal/Terminal.vue'),
  },
  computed: {
    ...mapGetters({
      isMenuActive: 'menu/isMenuActive',
      isTerminalActive: 'terminal/isTerminalActive',
    }),
  },
  methods: {
    ...mapActions({
      SET_MENU_STATE: 'menu/SET_MENU_STATE',
      SET_TERMINAL_STATE: 'terminal/SET_TERMINAL_STATE',
    }),
    toggleMenu() {
      this.SET_MENU_STATE(!this.isMenuActive);
    },
    toggleTerminal() {
      this.SET_TERMINAL_STATE(!this.isTerminalActive);
    },
  },
  mounted() {
    window.addEventListener('keyup', event => {
      if (event.ctrlKey && event.key === '`') {
        this.toggleTerminal();
      }
    });
  },
});
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
