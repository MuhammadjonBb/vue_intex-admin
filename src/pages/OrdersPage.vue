<template>
  <q-layout>
    <q-page-container>
      <q-page>
        <OrdersTable :data="fakeData" />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import OrdersTable from 'src/components/OrdersTable.vue'
import fakeData from 'src/helpers/orderData'
</script>
