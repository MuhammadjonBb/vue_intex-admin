<template>
  <q-layout view="lHh Lpr lFf" style="background-color: #f2f2f2;">
    <q-drawer show-if-above>
      <AppAside />
    </q-drawer>
    <div>
      <AppHeader />
      <q-page-container>
        <router-view></router-view>
      </q-page-container>
    </div>
  </q-layout>
</template>

<script setup>
import AppHeader from 'src/components/AppHeader.vue'
import AppAside from 'src/components/AppAside.vue'
</script>
