<template>
  <q-card class="q-pa-md">
    <q-card-section horizontal>
      <q-card-section class=" flex justify-center items-center " horizontal>
        <q-btn size="10px" class="bg-blue flex justify-center items-center q-mr-md q-pa-sm btn" color="white">
          <img src="/src/assets/filter.svg" alt="filter_icon" sizes="10px" class="q-mr-sm">
          Фильтр
        </q-btn>
        <q-input model-value="" dense style="width: 200px" bg-color="grey-2" standout label="Поиск товара">
          <template v-slot:prepend>
            <q-icon name="search" />
          </template>
        </q-input>
      </q-card-section>
      <q-space />
      <div class="flex items-center">
        <span class="text-weight-bold q-mr-sm">Сортировка: </span>
        <q-select borderless v-model="model" dense :options="options" style="width: 200px;" bg-color="grey-2" standout
          label="Сортировка"></q-select>
      </div>
      <q-btn icon="add" size="sm" label="Добавить" color="blue" class="q-ml-md" @click="togleCreate()" />
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { ref, defineProps, watch } from 'vue'
import { useRouter } from 'vue-router'

const { dinamicRoute } = defineProps(['dinamicRoute'])
const router = useRouter()
const options = ['По названию', 'По цене', 'По возрастанию']
const model = ref('По названию')
const togleCreate = () => {
  router.push(`/product/${dinamicRoute}`)
}
watch(dinamicRoute, (newValue) => {
  console.log(newValue)
})

</script>
<style scoped lang="scss">
.btn {
  size: 10px;
}

.action__search {
  width: 100px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.main__container {
  margin: 0 auto;
  width: 97%;
}
</style>
