<script lang="ts" setup>
// eslint-disable-next-line
import SearchFilterCreatePanel from "components/SearchFilterCreatePanel.vue";
// eslint-disable-next-line
import ProductTable from "./ListTable.vue";
</script>

<template>
  <div class="q-px-md q-mb-sm main__container">
    <div class="text-h5 text-weight-bold q-my-md">
      Список продуктов
    </div>
    <SearchFilterCreatePanel :dinamicRoute="'create'" />
    <ProductTable />
  </div>
</template>
