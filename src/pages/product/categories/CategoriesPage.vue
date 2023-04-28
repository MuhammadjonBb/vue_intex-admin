<template>
  <q-layout>
    <q-page class="q-pa-md main__container">
      <h1 class="text-h5 text-weight-bold">Категории</h1>

      <SearchFilterCreatePanel :dynamicRoute="'categories/add'" :isModal="false" />

      <CategoriesTable v-if="store.categories" :data="store.categories" class="q-mt-md" />
    </q-page>
  </q-layout>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import SearchFilterCreatePanel from 'src/components/SearchFilterCreatePanel.vue'
import CategoriesTable from 'src/pages/product/categories/CategoriesTable.vue'
import { useCategoriesStore } from 'stores/moduls/products/categories'

const store = useCategoriesStore()

onMounted(() => {
  store.getCategories()
})
</script>
