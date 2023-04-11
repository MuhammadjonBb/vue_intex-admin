<template>
  <q-layout>
    <q-page class="q-pa-md main__container">
      <h1 class="text-h5 text-weight-bold">Заказы</h1>
      <SearchFilterCreatePanel class="q-mb-md" />

      <OrdersTable :data="fakeData" />
    </q-page>
  </q-layout>
</template>

<script setup lang="ts">
import OrdersTable from 'src/pages/orders/OrdersTable.vue'
import SearchFilterCreatePanel from 'src/components/SearchFilterCreatePanel.vue'
import fakeData from 'src/helpers/orderData'
</script>
