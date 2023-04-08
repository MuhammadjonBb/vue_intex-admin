<template>
  <q-layout>
    <q-page class="q-pa-md main__container">
      <h1 class="text-h5 text-weight-bold">Пользователи</h1>

      <UsersTable :data="usersData" />
    </q-page>
  </q-layout>
</template>

<script setup lang="ts">
import UsersTable from 'src/components/table/UsersTable.vue'
import usersData from 'src/helpers/usersData'
</script>
