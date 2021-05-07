<template>
  <div>
    <transition name="fade">
      <Terminal class="fixed inset-x-0 mx-auto top-5 transition-all" v-if="isTerminalActive" />
    </transition>
    <button
      class="bg-gray-900 hover:bg-gray-800 bottom-4 fixed p-3 right-4 rounded-full text-green-500 transition-all outline-none"
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
    <main>
      <slot />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Default',
  data: () => ({
    isTerminalActive: false,
  }),
  components: {
    Terminal: () => import('@/components/Terminal.vue'),
  },
  methods: {
    toggleTerminal() {
      this.isTerminalActive = !this.isTerminalActive;
    },
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
