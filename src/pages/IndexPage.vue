<template>
  <q-page class="flex">
    <div class="px-10 py-10 flex flex-col gap-6">
      <p class="text-h4 roboto">Thanks for trying My ADHD Reader!</p>
      <div class="flex gap-3 items-center">
        <p class="text-xl roboto">Visit us at</p>
        <a
          href="https://github.com/mattkloz/MyADHDReader"
          target="_blank"
          class="flex border rounded border-gray-400 px-3 py-2 gap-3 w-32 items-center text-gray-900 hover:bg-gray-100 hover:text-gray-600 transition-colors duration-200 ease-in-out hover:drop-shadow-md"
        >
          <i class="lab la-github text-2xl"></i>
          <p class="text-xl">GitHub</p>
        </a>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  setup() {
    return {};
  },
});
</script>
