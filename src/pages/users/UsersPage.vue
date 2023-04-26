<template>
  <q-layout>
    <q-page class="q-pa-md main__container">
      <h1 class="text-h5 text-weight-bold">Пользователи</h1>
      <SearchFilterCreatePanel class="q-mb-md" :dynamic-route="{ component: 'users', modalName: 'create' }"
        :is-modal="true" />
      <UsersTable :data="usersStore.users" v-if="usersStore.users" @on-edit="onEdit" />
      <UserDialog label="Добавить пользователя" :modal-name="'create'" :id="editId" />
      <UserDialog label="Изменить" :modal-name="'edit'" :id="editId" />
    </q-page>
  </q-layout>
</template>

<script setup lang="ts">
import SearchFilterCreatePanel from 'src/components/SearchFilterCreatePanel.vue'
import UsersTable from 'src/pages/users/UsersTable.vue'
import UserDialog from 'src/pages/users/UsersModal.vue'
import { useUsersStore } from 'src/stores/moduls/users'
import { ref } from 'vue';

const usersStore = useUsersStore()

usersStore.getUsers()

const editId = ref()


function onEdit(id: number) {
  editId.value = id
}
</script>
