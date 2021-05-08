<template>
  <div class="terminal text-white w-11/12 lg:w-1/2">
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
        <p class="mr-2 font-bold text-green-500">[m]</p>
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

export default Vue.extend({
  name: 'Terminal',
  data: () => ({
    entries: [],
    input: '',
  }),
  methods: {
    parseCommand() {
      const result = parser(this.input);
      this.entries.push(this.input);
      switch (result[0]) {
        case 'CLEAR':
          this.entries = [];
          break;
        case 'CD':
          this.$scrollTo(`#${result[1]}`, 750, {
            easing: 'ease-in-out',
            lazy: false,
            offset: 0,
            force: true,
            cancelable: false,
            x: false,
            y: true,
          });
          this.entries.push(result[2]);
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
