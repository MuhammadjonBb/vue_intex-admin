<template>
  <q-layout>
    <q-page class="q-pa-md main__container">
      <h1 class="text-h5 text-weight-bold">Заказы</h1>

      <OrdersTable :data="fakeData" />
    </q-page>
  </q-layout>
</template>

<script setup lang="ts">
import OrdersTable from 'src/components/table/OrdersTable.vue'
import fakeData from 'src/helpers/orderData'
</script>
