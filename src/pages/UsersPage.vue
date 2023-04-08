<template>
  <q-layout>
    <q-page class="q-pa-md main__container">
      <h1 class="text-h5 text-weight-bold">Пользователи</h1>
      <SearchFilterCreatePanel class="q-mb-md" />
      <UsersTable :data="usersData" />
      <CreateUserDialog />
    </q-page>
  </q-layout>
</template>

<script setup lang="ts">
import SearchFilterCreatePanel from 'src/components/SearchFilterCreatePanel.vue'
import UsersTable from 'src/components/table/UsersTable.vue'
import CreateUserDialog from 'src/components/CreateUserDialog.vue'
import usersData from 'src/helpers/usersData'
</script>
