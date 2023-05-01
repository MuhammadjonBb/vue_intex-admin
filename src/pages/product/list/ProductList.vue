<script lang="ts" setup>
import { onMounted } from 'vue'
import SearchFilterCreatePanel from "components/SearchFilterCreatePanel.vue";
import ListTable from "./ListTable.vue";
import { useListStore } from "stores/moduls/products/list";
const store = useListStore()
onMounted(() => {
  store.getList()
})
</script>

<template>
  <div class="q-px-md q-mb-sm main__container">
    <div class="text-h5 text-weight-bold q-my-md">
      sdfsdf
    </div>
    <SearchFilterCreatePanel :dynamicRoute="'create'" :isModal="false" />
    <ListTable />
  </div>
</template>
