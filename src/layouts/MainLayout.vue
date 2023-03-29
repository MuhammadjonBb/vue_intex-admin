<template>
  <div class="row wrapper">
    <AppAside />
    <AppHeader />
  </div>
</template>

<style lang="scss">
.wrapper {
  width: 1480px;
  padding: 0 20px;
  margin: 0 auto;
}
</style>

<script setup>
import AppHeader from 'src/components/AppHeader.vue'
import AppAside from 'src/components/AppAside.vue'
</script>
