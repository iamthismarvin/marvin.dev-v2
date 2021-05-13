<template>
  <div>
    <transition name="fade">
      <Terminal class="fixed inset-x-0 mx-auto top-5 transition-all z-40" v-if="isTerminalActive" />
    </transition>
    <transition name="fade">
      <Menu class="fixed z-30" v-if="isMenuActive" />
    </transition>
    <Navigation class="absolute" />
    <div
      class="bg-gray-900 bottom-3 flex flex-col fixed p-2 right-0 rounded-l text-brand-green z-50"
    >
      <Button
        icon="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        :action="toggleTerminal"
      />
      <Button icon="M4 6h16M4 12h16M4 18h16" :action="toggleMenu" class="mt-2" />
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
    Button: () => import('@/components/Button.vue'),
    Menu: () => import('@/components/Menu.vue'),
    Navigation: () => import('@/components/Navigation.vue'),
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
