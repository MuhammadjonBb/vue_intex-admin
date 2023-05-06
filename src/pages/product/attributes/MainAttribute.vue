<script lang="ts" setup>
import SearchFilterCreatePanel from "components/SearchFilterCreatePanel.vue";
import TableAttribute from "./TableAttribute.vue";
import { onMounted} from "vue";
import {useAboutStore} from "stores/moduls/products/attribute";

const store = useAboutStore()

onMounted(() => {
  store.getAtributes()
  console.log( 'Attribute',store.listData)
})
</script>

<template>
  <div class="q-px-md q-mb-sm main__container">
    <div class="text-h5 text-weight-bold q-my-md">
      Атрибуты
    </div>
    <SearchFilterCreatePanel :dynamicRoute="'/product/attributes/create'" :isModal="false" />

    <TableAttribute />
  </div>
</template>
<style scoped lang="scss"></style>
