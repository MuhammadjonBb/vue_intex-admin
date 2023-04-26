<template>
  <q-dialog v-model="modalStore.modal.settings.contacts" persistent>
    <q-card style="min-width: 700px;border-radius: 16px;" class="q-pa-md">
      <q-card-section class="row items-center">
        <div class="text-h6 font-weight-bold">Изменить информацию</div>
        <q-space />
        <q-btn v-close-popup icon="close" text-color="primary" flat class="bg-grey-3"
          style="width: 32px;height: 32px; border-radius: 8px;" size="13px" @click="modalStore.closeModal" />
      </q-card-section>

      <q-card-section class="q-pt-none column">
        <DefaultInput :inputData="{ component: 'editContactsDialog', inputName: 'address' }" name="address" type="text"
          label="Адрес" />

        <div class="row no-wrap" style="gap: 20px;">
          <phone-input :inputData="{ component: 'editContactsDialog', inputName: 'phone' }" class="fullwdith" />
          <DefaultInput :inputData="{ component: 'editContactsDialog', inputName: 'email' }" name="email" type="text"
            label="E-mail" />
        </div>

        <DefaultInput :inputData="{ component: 'editContactsDialog', inputName: 'schedule' }" name="schedule" type="text"
          label="График работы" style="max-width: 50%;" />
        <div class="row q-mt-lg no-wrap" style="gap: 20px">
          <q-space />
          <q-btn @click="modalStore.closeModal" v-close-popup color="indigo-10" flat label="Отменить"
            style="border-radius: 12px;" class="q-py-sm full-width bg-grey-2  q-px-xl q-mr-md" no-caps />
          <q-btn @click="modalStore.closeModal" v-close-popup color="white" flat label="Сохранить"
            style="border-radius: 12px;" class="q-py-sm full-width  q-px-xl bg-indigo-10" no-caps />
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { Ref, ref, watch } from 'vue'
import DefaultInput from 'src/components/input/DefaultInput.vue'
import PhoneInput from 'src/components/input/PhoneInput.vue'
import { useModalStore } from 'src/stores/moduls/modal';
import { useInputStore } from 'src/stores/moduls/input';
import { useSiteSettingsStore } from 'src/stores/moduls/siteSettings';

const siteSettingsStore = useSiteSettingsStore()
const inputStore = useInputStore()
const modalStore = useModalStore()

</script>
