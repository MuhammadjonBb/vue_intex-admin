<template>
  <q-layout>
    <q-page>
      <OrdersTable :data="fakeData" />
    </q-page>
  </q-layout>
</template>

<script setup lang="ts">
import OrdersTable from 'src/components/OrdersTable.vue'
import fakeData from 'src/helpers/orderData'
</script>
