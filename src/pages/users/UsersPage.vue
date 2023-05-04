<template>
  <q-layout>
    <q-page class="q-pa-md main__container">
      <h1 class="text-h5 text-weight-bold">{{ $t('users.title') }}</h1>
      <SearchFilterCreatePanel class="q-mb-md" :dynamic-route="{ component: 'users', modalName: 'create' }"
        :is-modal="true" />
      <UsersTable :data="usersStore.users" v-if="usersStore.users" @on-edit="onEdit" />
      <UserModal :label="$t('users.modal.addTitle')" :modal-name="'create'" :user-data="editData" />
      <UserModal :label="$t('users.modal.editTitle')" :modal-name="'edit'" :user-data="editData" />
    </q-page>
  </q-layout>
</template>

<script setup lang="ts">
import SearchFilterCreatePanel from 'src/components/SearchFilterCreatePanel.vue'
import UsersTable from 'src/pages/users/UsersTable.vue'
import UserModal from 'src/pages/users/UsersModal.vue'
import { useUsersStore } from 'src/stores/moduls/users'
import { reactive, ref } from 'vue';

const usersStore = useUsersStore()

usersStore.getUsers()

const editData = ref(null)


function onEdit(data: any) {
  editData.value = data
}
</script>
