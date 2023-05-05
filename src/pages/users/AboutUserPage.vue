<template>
  <q-layout>
    <q-page class="q-pa-md main__container">
      <UserDialog label="Изменить" :modal-name="'edit'" />
      <q-card class="row q-pa-lg no-wrap" flat v-if="user">
        <q-card-section class="column items-center justify-center" style="width: 30%;">
          <q-avatar class="text-grey-7" color="grey-4" icon="person" size="170px"></q-avatar>
          <div class="text-medium q-mt-md text-h6">{{ user.first_name }} {{ user.last_name }}</div>
        </q-card-section>
        <q-card-section class="full-width">
          <div class="row items-center">
            <h3 class="text-h6">{{ $t('users.info') }}</h3>
            <q-space />
            <q-btn flat class="bg-white" color="primary" :label="$t('btn.edit')" no-caps @click="onEditClick" />
          </div>
          <div class="column q-pa-md" style="border: 1px solid #f2f2f2; border-radius: 10px;">
            <q-list class="row">
              <q-item style="width: 350px;" class="column q-mb-md">
                <q-item-label style="font-size: 16px;" class="q-mb-sm text-medium">{{ $t('phoneInput.name')
                }}</q-item-label>
                <q-item-label class="q-pl-md q-pt-md">{{ user.phone }}</q-item-label>
              </q-item>

              <q-item style="width: 350px;" class="column q-mb-md">
                <q-item-label style="font-size: 16px;" class="q-mb-sm text-medium">E-mail</q-item-label>
                <q-item-label class="q-pl-md q-pt-md">{{ user.email }}</q-item-label>
              </q-item>
            </q-list>

            <q-list class="row">
              <q-item style="width: 350px;" class="column q-mb-md">
                <q-item-label style="font-size: 16px;" class="q-mb-sm text-medium">{{ $t('users.table.tableHead.birthday')
                }}</q-item-label>
                <q-item-label class="q-pl-md q-pt-md">{{ user.birth_date }} </q-item-label>
              </q-item>

              <q-item style="width: 350px;" class="column q-mb-md">
                <q-item-label style="font-size: 16px;" class="q-mb-sm text-medium">{{
                  $t('users.table.tableHead.registerDate') }}</q-item-label>
                <q-item-label class="q-pl-md q-pt-md">{{ beautifyDate(user.created_at)[0] }}</q-item-label>
              </q-item>
            </q-list>
            <q-list class="row">
              <q-item style="width: 350px;" class="column q-mb-md">
                <q-item-label style="font-size: 16px;" class="q-mb-sm text-medium">{{ $t('users.table.tableHead.status')
                }}</q-item-label>
                <q-item-label class="q-pl-md q-pt-md">{{ user.status }}</q-item-label>
              </q-item>

              <q-item style="width: 350px;" class="column q-mb-md">
                <q-item-label style="font-size: 16px;" class="q-mb-sm text-medium">{{ $t('users.table.tableHead.role')
                }}</q-item-label>
                <q-item-label class="q-pl-md q-pt-md">{{ returnRole(user.role) }}</q-item-label>
              </q-item>
            </q-list>
          </div>
        </q-card-section>
      </q-card>
    </q-page>
  </q-layout>
</template>

<script setup lang="ts">
import UserDialog from 'src/pages/users/UsersModal.vue'
import { onMounted, ref } from 'vue'
import { useModalStore } from 'src/stores/moduls/modal';
import { useUsersStore } from 'src/stores/moduls/users';
import { useRoute } from 'vue-router';
import beautifyDate from 'src/helpers/beautifyDate';


const route = useRoute()
const user = ref(null)
const modalStore = useModalStore()
const usersStore = useUsersStore()
function onEditClick() {
  modalStore.modal.users.edit = true
}

function getUserInfo() {
  return usersStore.users.result.find((user: any) => user.id == route.params.id)
}
onMounted(() => {
  user.value = getUserInfo()
})

function returnRole(str: string): string | void {
  if (str === 'super_admin') {
    return 'Супер Админ'
  } else if (str === 'user') {
    return 'Пользователь'
  } else if (str === 'admin') {
    return 'Админ'
  }
}
</script>
