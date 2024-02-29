<template>
  <div class="flex flex-col gap-6 px-10 py-10 roboto bg-gray-200 min-h-screen">
    <div
      class="flex gap-4 border-b items-center pb-4 mb-3 border-b border-gray-400"
    >
      <img src="../assets/icon-128x128.png" alt="Vue logo" class="h-12 w-12" />
      <p class="text-4xl dosis">MyADHDReader Options</p>
    </div>
    <div class="flex flex-col w-full">
      <div class="flex gap-3 items-center">
        <p class="text-lg w-52">Paragraph Font Size</p>
        <div class="flex relative h-full">
          <input
            type="text"
            id="paragraphFontSize"
            :value="styleOptions.paragraphFontSize"
            class="border rounded px-2 py-2 border-gray-500 w-44 h-10"
            @change="
              if ($event.target.value < 1) {
                hasError('paragraphFontSize', true);
              } else {
                hasError('paragraphFontSize', false);
                styleOptions.paragraphFontSize = $event.target.value;
              }
            "
          />

          <span
            class="absolute top-0 right-0 h-10 flex flex-col border-l border-gray-300 items-center justify-center w-12"
          >
            <p class="font-bold text-sky-700">rem</p>
          </span>
          <p
            id="paragraphFontSizeError"
            class="text-red-600 italic invisible absolute -bottom-5 left-0"
          >
            The minimum value is 1
          </p>
        </div>
      </div>
    </div>

    <div class="flex gap-3 items-center">
      <p class="text-lg w-52">Paragraph Letter Spacing</p>
      <div class="flex relative h-full">
        <input
          type="text"
          :value="styleOptions.paragraphLetterSpacing"
          class="border rounded px-2 py-2 border-gray-500 w-44 h-10"
          @change="
            if ($event.target.value < 1) {
              hasError('paragraphLetterSpacing', true);
            } else {
              hasError('paragraphLetterSpacing', false);
              styleOptions.paragraphLetterSpacing = $event.target.value;
            }
          "
        />
        <span
          class="absolute top-0 right-0 h-10 flex flex-col border-l border-gray-300 items-center justify-center w-12"
        >
          <p class="font-bold text-sky-700">px</p>
        </span>
        <p
          id="paragraphLetterSpacingError"
          class="text-red-600 italic invisible absolute -bottom-5 left-0"
        >
          The minimum value is 1
        </p>
      </div>
    </div>
    <div class="flex gap-3 items-center">
      <p class="text-lg w-52">Paragraph Line Height</p>
      <div class="flex relative h-full">
        <input
          type="text"
          :value="styleOptions.paragraphLineHeight"
          class="border rounded px-2 py-2 border-gray-500 w-44 h-10"
          :class="{ 'border-red-500': styleOptions.paragraphLineHeight < 1 }"
          @change="
            if ($event.target.value < 1) {
              hasError('paragraphLineHeight', true);
            } else {
              hasError('paragraphLineHeight', false);
              styleOptions.paragraphLineHeight = $event.target.value;
            }
          "
        />
        <span
          class="absolute top-0 right-0 h-10 flex flex-col border-l border-gray-300 items-center justify-center w-12"
        >
          <p class="font-bold text-sky-700">rem</p>
        </span>
        <p
          id="paragraphLineHeightError"
          class="text-red-600 italic invisible absolute -bottom-5 left-0"
        >
          The minimum value is 1
        </p>
      </div>
    </div>
    <div class="flex gap-3 items-center">
      <p class="text-lg w-52">Paragraph Font Weight</p>
      <select
        class="border border-gray-500 text-gray-900 rounded focus:ring-blue-500 focus:border-blue-500 w-44 h-10 px-2"
        :value="styleOptions.paragraphFontWeight"
        @change="
          styleOptions.paragraphFontWeight = parseInt($event.target.value)
        "
      >
        <option value="900">900</option>
        <option value="800">800</option>
        <option value="700">700</option>
        <option value="600">600</option>
        <option value="500">500</option>
        <option value="400">400</option>
        <option value="300">300</option>
        <option value="200">200</option>
        <option value="100">100</option>
      </select>
    </div>
    <div class="flex gap-3 items-center">
      <p class="text-lg w-52">Reader Font Weight</p>
      <select
        class="border border-gray-500 text-gray-900 rounded focus:ring-blue-500 focus:border-blue-500 w-44 h-10 px-2"
        :value="styleOptions.readerFontWeight"
        @change="styleOptions.readerFontWeight = parseInt($event.target.value)"
      >
        <option value="900">900</option>
        <option value="800">800</option>
        <option value="700">700</option>
        <option value="600">600</option>
        <option value="500">500</option>
        <option value="400">400</option>
        <option value="300">300</option>
        <option value="200">200</option>
        <option value="100">100</option>
      </select>
    </div>
    <div class="flex justify-center" v-if="showSaveButton">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded flex gap-3 items-center"
        @click="applyStyleUpdates()"
      >
        <i class="las la-save text-xl"></i>
        <p class="text-lg">save</p>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { LocalStorage } from 'quasar';
import { IStyleOptions } from '../components/models';

export default defineComponent({
  name: 'OptionsPage',

  data() {
    return {
      styleOptions: {} as IStyleOptions,
      showSaveButton: false,
    };
  },

  created() {
    const baseStyleOptions = {
      paragraphFontSize: 1.15,
      paragraphLetterSpacing: 1.3,
      paragraphLineHeight: 2.5,
      paragraphFontWeight: 300,
      readerFontWeight: 700,
    } as IStyleOptions;
    const checkStyles = LocalStorage.has('styleOptions');
    if (checkStyles) {
      try {
        this.styleOptions = LocalStorage.getItem(
          'styleOptions'
        ) as IStyleOptions;
      } catch (error) {
        console.error('Error getting style options from local storage', error);
      }
    } else {
      try {
        this.styleOptions = baseStyleOptions;
        LocalStorage.set('styleOptions', this.styleOptions);
      } catch (error) {
        console.error('Error setting style options in local storage', error);
      }
    }
  },

  methods: {
    hasError(target: string, show: boolean) {
      const errorTarget = document.getElementById(`${target}Error`);
      if (errorTarget && show) {
        errorTarget.classList.remove('invisible');
      } else if (errorTarget && !show) {
        errorTarget.classList.add('invisible');
      }
    },
    async applyStyleUpdates() {
      try {
        LocalStorage.set('styleOptions', this.styleOptions);
        this.$q.bex.send('setStyles', this.styleOptions);
        this.showSaveButton = false;
      } catch (error) {
        console.error('Error setting style options in local storage', error);
      }
    },
  },
  watch: {
    styleOptions: {
      handler(newValue, oldValue) {
        if (oldValue.paragraphFontSize) {
          this.showSaveButton = true;
        }
      },
      deep: true,
    },
  },
});
</script>
