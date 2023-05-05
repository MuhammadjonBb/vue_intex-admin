<template>
  <q-layout>
    <q-page class="q-pa-md main__container">
      <UserDialog label="Изменить" :modal-name="'edit'" />
      <q-card class="row q-pa-lg no-wrap" flat>
        <q-card-section class="column items-center justify-center" style="width: 30%;">
          <q-avatar class="text-grey-7" color="grey-4" icon="person" size="170px"></q-avatar>
          <div class="text-medium q-mt-md text-h6">Абдулла Убайдуллаев</div>
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
                <q-item-label class="q-pl-md q-pt-md">(90) 123 45 67</q-item-label>
              </q-item>

              <q-item style="width: 350px;" class="column q-mb-md">
                <q-item-label style="font-size: 16px;" class="q-mb-sm text-medium">E-mail</q-item-label>
                <q-item-label class="q-pl-md q-pt-md">Ubaydulla@abdullayev.gmail.com</q-item-label>
              </q-item>
            </q-list>

            <q-list class="row">
              <q-item style="width: 350px;" class="column q-mb-md">
                <q-item-label style="font-size: 16px;" class="q-mb-sm text-medium">{{ $t('users.table.tableHead.birthday')
                }}</q-item-label>
                <q-item-label class="q-pl-md q-pt-md">28.09.2002 </q-item-label>
              </q-item>

              <q-item style="width: 350px;" class="column q-mb-md">
                <q-item-label style="font-size: 16px;" class="q-mb-sm text-medium">{{
                  $t('users.table.tableHead.registerDate') }}</q-item-label>
                <q-item-label class="q-pl-md q-pt-md">28.09.2002</q-item-label>
              </q-item>
            </q-list>
            <q-list class="row">
              <q-item style="width: 350px;" class="column q-mb-md">
                <q-item-label style="font-size: 16px;" class="q-mb-sm text-medium">{{ $t('users.table.tableHead.status')
                }}</q-item-label>
                <q-item-label class="q-pl-md q-pt-md">Актив</q-item-label>
              </q-item>

              <q-item style="width: 350px;" class="column q-mb-md">
                <q-item-label style="font-size: 16px;" class="q-mb-sm text-medium">{{ $t('users.table.tableHead.role')
                }}</q-item-label>
                <q-item-label class="q-pl-md q-pt-md">Админ</q-item-label>
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
import { ref } from 'vue'
import { useModalStore } from 'src/stores/moduls/modal';

const modalStore = useModalStore()

function onEditClick() {
  modalStore.modal.users.edit = true
}
</script>
