<template>
  <q-table table-style="max-width:1130px;" table-class="q-mx-md" :pagination="
    {
      rowsPerPage: 10,
    }" table-header-style="font-weight: 500;font-size: 14px;" :rows="data.data" row-key="id" square
    v-model:selected="selected" selection="multiple" :columns="[
      {
        name: 'id',
        label: '№ Заказа',
        field: row => `#${row.id}`,
        sortable: true,
        headerClasses: 'bg-grey-1',
        align: 'left'
      },
      {
        name: 'client',
        label: 'Имя клиента',
        field: 'client',
        sortable: true,
        headerClasses: 'bg-grey-1',
        align: 'left'
      },
      {
        name: 'phone',
        label: 'Tелефон',
        field: 'phone',
        headerClasses: 'bg-grey-1',
        align: 'left'
      },
      {
        name: 'address',
        label: 'Адрес',
        field: 'address',
        headerClasses: 'bg-grey-1',
        align: 'left'
      },
      {
        name: 'goods',
        label: 'Товары',
        field: 'goods',
        headerClasses: 'bg-grey-1',
        align: 'left'
      },
      {
        name: 'cost',
        label: 'Обшая цена',
        field: 'cost',
        headerClasses: 'bg-grey-1',
        align: 'left'
      },
      {
        name: 'date',
        label: 'Время заказа',
        field: 'date',
        headerClasses: 'bg-grey-1',
        align: 'left'
      },
      {
        name: 'staus',
        label: 'Статус',
        field: 'staus',
        headerClasses: 'bg-grey-1',
        align: 'left'
      }

    ]"></q-table>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const selected = ref()
const props = defineProps(['data'])
console.log(props.data)
</script>
