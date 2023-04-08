<template>
  <q-layout>
    <q-page class="q-pa-md main__container">
      <h1 class="text-h5 text-weight-bold">Пользователи</h1>
      <SearchFilterCreatePanel class="q-mb-md" @on-add-click="onAddClick" />
      <UsersTable :data="usersData" @on-edit-click="onEditClick" />
      <UserDialog label="Добавить пользователя" :prompt-val="createModal" @on-close-modal="onCloseModal" />
      <UserDialog label="Изменить" :prompt-val="editModal" @on-close-modal="onCloseModal" />
    </q-page>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SearchFilterCreatePanel from 'src/components/SearchFilterCreatePanel.vue'
import UsersTable from 'src/components/table/UsersTable.vue'
import UserDialog from 'src/components/UserDialog.vue'
import usersData from 'src/helpers/usersData'

const editModal = ref(false)
const createModal = ref(false)

// eslint-disable-next-line space-before-function-paren
function onEditClick() {
  editModal.value = true
}

// eslint-disable-next-line space-before-function-paren
function onAddClick() {
  createModal.value = true
}

// eslint-disable-next-line space-before-function-paren
function onCloseModal() {
  createModal.value = false
  editModal.value = false
}
</script>
