<template>
  <q-dialog v-model="modalStore.modal.settings.contacts" persistent>
    <q-card style="min-width: 700px;border-radius: 16px;" class="q-pa-md">
      <q-card-section class="row items-center">
        <div class="text-h6 font-weight-bold">{{ $t('siteSettings.modal.title') }}</div>
        <q-space />
        <q-btn v-close-popup icon="close" text-color="primary" flat class="bg-grey-3"
          style="width: 32px;height: 32px; border-radius: 8px;" size="13px" @click="modalStore.closeModal" />
      </q-card-section>

      <q-card-section class="q-pt-none column text-primary">
        <q-tabs v-model="langTab">
          <q-tab name="uz" no-caps :label="$t('siteSettings.modal.contacts.lang.uz')" />
          <q-tab name="ru" no-caps :label="$t('siteSettings.modal.contacts.lang.ru')" />
          <q-tab name="en" no-caps :label="$t('siteSettings.modal.contacts.lang.en')" />
        </q-tabs>
      </q-card-section>

      <Transition name="slide-fade" mode="out-in">
        <q-card-section class="q-pt-none column" v-if="langTab === 'uz'">
          <DefaultInput :rules="[(v: any) => !!v || $t('validation.required')]" v-model:text="form.address_uz"
            name="address_uz" type="text" :label="$t('siteSettings.modal.contacts.address')" />
          <DefaultInput :rules="[(v: any) => !!v || $t('validation.required')]" v-model:text="form.work_uz" name="work_uz"
            type="text" :label="$t('siteSettings.modal.contacts.schedule')" />
        </q-card-section>

        <q-card-section class="q-pt-none column" v-else-if="langTab === 'ru'">
          <DefaultInput :rules="[(v: any) => !!v || $t('validation.required')]" v-model:text="form.address_ru"
            name="address_ru" type="text" :label="$t('siteSettings.modal.contacts.address')" />
          <DefaultInput :rules="[(v: any) => !!v || $t('validation.required')]" v-model:text="form.work_ru" name="work_ru"
            type="text" :label="$t('siteSettings.modal.contacts.schedule')" />
        </q-card-section>

        <q-card-section class="q-pt-none column" v-else>
          <DefaultInput :rules="[(v: any) => !!v || $t('validation.required')]" v-model:text="form.address_en"
            name="address_en" type="text" :label="$t('siteSettings.modal.contacts.address')" />
          <DefaultInput :rules="[(v: any) => !!v || $t('validation.required')]" v-model:text="form.work_en" name="work_en"
            type="text" :label="$t('siteSettings.modal.contacts.schedule')" />
        </q-card-section>
      </Transition>

      <q-separator class="q-mb-lg q-mt-xs"></q-separator>

      <q-card-section class="q-pt-none column">
        <div class="row no-wrap" style="gap: 20px;">
          <phone-input :rules="[(v: any) => !!v || $t('validation.required')]" v-model:text="form.phone"
            class="fullwdith" />
          <DefaultInput v-model:text="form.email" name="email" type="text" label="E-mail" />
        </div>


        <div class="row q-mt-lg no-wrap" style="gap: 20px">
          <q-space />
          <q-btn @click="modalStore.closeModal" v-close-popup color="indigo-10" flat :label="$t('btn.cancel')"
            style="border-radius: 12px;" class="q-py-sm full-width bg-grey-2  q-px-xl q-mr-md" no-caps />
          <q-btn @click="save" color="white" flat :label="$t('btn.save')" style="border-radius: 12px;"
            class="q-py-sm full-width  q-px-xl bg-indigo-10" no-caps />
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { Ref, onMounted, ref, watch } from 'vue'
import DefaultInput from 'src/components/input/DefaultInput.vue'
import PhoneInput from 'src/components/input/PhoneInput.vue'
import { useModalStore } from 'src/stores/moduls/modal'
import { useSiteSettingsStore } from 'src/stores/moduls/siteSettings'
import { Notify } from 'quasar'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const siteSettingsStore = useSiteSettingsStore()
const modalStore = useModalStore()
const form = ref({
  address_uz: '',
  work_uz: '',
  address_ru: '',
  work_ru: '',
  address_en: '',
  work_en: '',
  phone: '',
  email: ''
})
const langTab = ref('uz')
function save() {
  siteSettingsStore.updateSiteInfo(form.value).then(() => {
    modalStore.closeModal()
    Notify.create({
      message: t('notification.siteSettings.siteInfo.updated'),
      color: 'positive',
      position: 'top-right',
      group: false
    })
  }).catch(() => {
    Notify.create({
      message: t('notification.siteSettings.siteInfo.updateError'),
      color: 'negative',
      position: 'top-right',
      group: false
    })
  })
}

onMounted(() => {
  siteSettingsStore.getSiteInfo().then(() => {
    form.value = siteSettingsStore.siteInfo
  })
})
</script>

<style></style>
