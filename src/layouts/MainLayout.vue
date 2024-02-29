<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-slate-400 text-black">
      <q-toolbar class="pl-10">
        <q-avatar>
          <img src="../assets/icon-128x128.png" />
        </q-avatar>

        <q-toolbar-title class="dosis font-bold"
          >My ADHD Reader</q-toolbar-title
        >
        <q-btn
          flat
          color="grey-10"
          icon="settings"
          to="/options"
          target="_blank"
        />
      </q-toolbar>
    </q-header>

    <q-footer class="bg-slate-400 text-black">
      <q-toolbar>
        <q-toolbar-title class="text-center text-sm roboto"
          >&copy; {{ new Date().getFullYear() }} MyADHDReader</q-toolbar-title
        >
      </q-toolbar>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainLayout',

  setup() {
    return {};
  },
});
</script>

<style lang="scss"></style>
