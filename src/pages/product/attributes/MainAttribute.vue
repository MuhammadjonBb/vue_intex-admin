<script lang="ts" setup>
// eslint-disable-next-line
import SearchFilterCreatePanel from "components/SearchFilterCreatePanel.vue";
// eslint-disable-next-line
import TableAttribute from "./TableAttribute.vue";
</script>

<template>
  <div class="q-px-md q-mb-sm main__container">
    <div class="text-h5 text-weight-bold q-my-md">
      Атрибуты
    </div>
    <SearchFilterCreatePanel :dynamicRoute="'attributes-create'" :isModal="false" />

    <TableAttribute />
  </div>
</template>
<style scoped lang="scss"></style>
