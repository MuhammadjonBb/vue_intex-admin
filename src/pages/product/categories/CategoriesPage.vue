<template>
  <q-layout>
    <q-page class="q-pa-md main__container">
      <h1 class="text-h5 text-weight-bold">Категории</h1>

      <SearchFilterCreatePanel />

      <CategoriesTable :data="categoriesData" class="q-mt-md" />
    </q-page>
  </q-layout>
</template>

<script setup lang="ts">
import SearchFilterCreatePanel from 'src/components/SearchFilterCreatePanel.vue'
import CategoriesTable from 'src/pages/product/categories/CategoriesTable.vue'
import categoriesData from 'src/helpers/categoriesData'

</script>
