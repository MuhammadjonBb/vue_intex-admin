<template>
  <q-layout>
    <q-page class="q-pa-md main__container">
      <h1 class="text-h5 text-weight-bold">{{ $t('orders.title') }}</h1>
      <SearchFilterCreatePanel class="q-mb-md" :dynamic-route="'create'" :is-modal="false" />

      <OrdersTable v-if="ordersStore.orders" :data="ordersStore.orders" />
    </q-page>
  </q-layout>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import OrdersTable from 'src/pages/orders/OrdersTable.vue'
import SearchFilterCreatePanel from 'src/components/SearchFilterCreatePanel.vue'
import { useOrdersStore } from 'src/stores/moduls/orders'

const ordersStore = useOrdersStore()

onMounted(() => {
  ordersStore.getProducts()
  ordersStore.getOrders()
})

</script>
