<template>
  <q-layout>
    <q-page class="q-pa-md main__container">
      <h1 class="text-h5 text-weight-bold">Пользователи</h1>
      <SearchFilterCreatePanel class="q-mb-md" :dynamic-route="{ component: 'users', modalName: 'create' }"
        :is-modal="true" />
      <UsersTable :data="usersData" />
      <UserDialog label="Добавить пользователя" :modal-name="'create'" />
      <UserDialog label="Изменить" :modal-name="'edit'" />
    </q-page>
  </q-layout>
</template>

<script setup lang="ts">
import SearchFilterCreatePanel from 'src/components/SearchFilterCreatePanel.vue'
import UsersTable from 'src/pages/users/UsersTable.vue'
import UserDialog from 'src/pages/users/UsersModal.vue'
import usersData from 'src/helpers/usersData'

</script>
