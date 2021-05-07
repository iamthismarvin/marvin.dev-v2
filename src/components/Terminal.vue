<template>
  <div class="terminal text-white w-11/12 lg:w-1/2">
    <div class="bg-gray-800 py-1 px-2 rounded-t">Terminal</div>
    <div
      class="terminal__body bg-gray-900 flex flex-col h-36 py-1 px-2 overflow-y-scroll"
      ref="terminal"
    >
      <p class="text-gray-500">Enter 'help' to list commands available.</p>
      <p v-for="entry in entries" :key="entry">{{ entry }}</p>
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

export default Vue.extend({
  name: 'Terminal',
  data: () => ({
    entries: [],
    input: '',
  }),
  methods: {
    parseCommand() {
      this.entries.push(this.input);
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
