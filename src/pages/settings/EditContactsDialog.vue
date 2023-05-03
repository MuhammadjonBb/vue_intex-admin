<template>
  <q-dialog v-model="modalStore.modal.settings.contacts" persistent>
    <q-card style="min-width: 700px;border-radius: 16px;" class="q-pa-md">
      <q-card-section class="row items-center">
        <div class="text-h6 font-weight-bold">Изменить информацию</div>
        <q-space />
        <q-btn v-close-popup icon="close" text-color="primary" flat class="bg-grey-3"
          style="width: 32px;height: 32px; border-radius: 8px;" size="13px" @click="modalStore.closeModal" />
      </q-card-section>

      <q-card-section class="q-pt-none column text-primary">
        <q-tabs v-model="langTab">
          <q-tab name="uz" no-caps label="Узбекский язык" />
          <q-tab name="ru" no-caps label="Русский язык" />
          <q-tab name="en" no-caps label="Английский язык" />
        </q-tabs>
      </q-card-section>

      <Transition name="slide-fade" mode="out-in">
        <q-card-section class="q-pt-none column" v-if="langTab === 'uz'">
          <DefaultInput :rules="[(v: any) => !!v || 'Обязательное поле']"
            :inputData="{ component: 'editContactsDialog', inputName: 'address_uz' }" name="address_uz" type="text"
            label="Адрес" />
          <DefaultInput :rules="[(v: any) => !!v || 'Обязательное поле']"
            :inputData="{ component: 'editContactsDialog', inputName: 'work_uz' }" name="work_uz" type="text"
            label="График работы" />
        </q-card-section>

        <q-card-section class="q-pt-none column" v-else-if="langTab === 'ru'">
          <DefaultInput :rules="[(v: any) => !!v || 'Обязательное поле']"
            :inputData="{ component: 'editContactsDialog', inputName: 'address_ru' }" name="address_ru" type="text"
            label="Адрес" />
          <DefaultInput :rules="[(v: any) => !!v || 'Обязательное поле']"
            :inputData="{ component: 'editContactsDialog', inputName: 'work_ru' }" name="work_ru" type="text"
            label="График работы" />
        </q-card-section>

        <q-card-section class="q-pt-none column" v-else>
          <DefaultInput :rules="[(v: any) => !!v || 'Обязательное поле']"
            :inputData="{ component: 'editContactsDialog', inputName: 'address_en' }" name="address_en" type="text"
            label="Адрес" />
          <DefaultInput :rules="[(v: any) => !!v || 'Обязательное поле']"
            :inputData="{ component: 'editContactsDialog', inputName: 'work_en' }" name="work_en" type="text"
            label="График работы" />
        </q-card-section>
      </Transition>

      <q-separator class="q-mb-lg q-mt-xs"></q-separator>

      <q-card-section class="q-pt-none column">
        <div class="row no-wrap" style="gap: 20px;">
          <phone-input :rules="[(v: any) => !!v || 'Обязательное поле']"
            :inputData="{ component: 'editContactsDialog', inputName: 'phone' }" class="fullwdith" />
          <DefaultInput :inputData="{ component: 'editContactsDialog', inputName: 'email' }" name="email" type="text"
            label="E-mail" />
        </div>


        <div class="row q-mt-lg no-wrap" style="gap: 20px">
          <q-space />
          <q-btn @click="modalStore.closeModal" v-close-popup color="indigo-10" flat label="Отменить"
            style="border-radius: 12px;" class="q-py-sm full-width bg-grey-2  q-px-xl q-mr-md" no-caps />
          <q-btn @click="save" color="white" flat label="Сохранить" style="border-radius: 12px;"
            class="q-py-sm full-width  q-px-xl bg-indigo-10" no-caps />
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { Ref, ref, watch } from 'vue'
import DefaultInput from 'src/components/input/DefaultInput.vue'
import PhoneInput from 'src/components/input/PhoneInput.vue'
import { useModalStore } from 'src/stores/moduls/modal'
import { useSiteSettingsStore } from 'src/stores/moduls/siteSettings'

const siteSettingsStore = useSiteSettingsStore()
const modalStore = useModalStore()

const langTab = ref('uz')
function save() {
  siteSettingsStore.updateSiteInfo().then(() => { modalStore.closeModal() })
}
</script>

<style></style>
