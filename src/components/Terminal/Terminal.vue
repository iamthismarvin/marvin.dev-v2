<template>
  <div class="terminal shadow-xl text-white w-11/12 lg:w-1/2">
    <div class="bg-gray-800 py-1 px-2 rounded-t">Terminal</div>
    <div
      class="terminal__body bg-gray-900 flex flex-col h-36 py-1 px-2 overflow-y-scroll"
      ref="terminal"
    >
      <p class="text-gray-500">Enter 'help' to list commands available.</p>
      <p v-for="entry in entries" :key="entry.id">{{ entry }}</p>
    </div>
    <div class="bg-gray-900 border-gray-700 border-t py-1 px-2 rounded-b">
      <div class="flex">
        <p class="mr-2 font-bold text-brand-green">[m]</p>
        <form class="w-full" @submit.prevent="parseCommand">
          <input
            class="terminal__cursor bg-transparent w-full"
            v-model="input"
            ref="terminalInput"
          />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import parser from '@/components/Terminal/scripts/parser';
import scrollOptions from '@/assets/scripts/scrollOptions';
import { mapActions } from 'vuex';

export default Vue.extend({
  name: 'Terminal',
  data: () => ({
    entries: [],
    input: '',
  }),
  methods: {
    ...mapActions({
      SET_TERMINAL_STATE: 'terminal/SET_TERMINAL_STATE',
    }),
    parseCommand() {
      const result = parser(this.input);
      this.entries.push(this.input);
      switch (result[0]) {
        case 'CD':
          this.$scrollTo(`#${result[1]}`, 750, scrollOptions);
          this.entries.push(result[2]);
          break;
        case 'CLEAR':
          this.entries = [];
          break;
        case 'EXIT':
          this.SET_TERMINAL_STATE(false);
          break;
        case 'HELP':
          result.shift();
          result.forEach(line => this.entries.push(line));
          break;
        default:
          this.entries.push(result);
          break;
      }
      this.input = '';
    },
    scrollToBottom() {
      const { terminal } = this.$refs;
      terminal.scrollTop = terminal.scrollHeight;
    },
  },
  mounted() {
    this.scrollToBottom();
    this.$refs.terminalInput.focus();
  },
  updated() {
    this.scrollToBottom();
  },
});
</script>

<style lang="scss" scoped>
.terminal {
  &__body {
    scrollbar-color: #1f2937 #111827;
    scrollbar-width: thin;
  }

  &__cursor {
    outline: none;
  }
}
</style>
