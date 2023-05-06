<template>
  <q-layout>
    <q-page class="q-pa-md main__container">
      <h1 class="text-h5 text-weight-bold">{{ $t('siteSettings.title') }}</h1>
      <EditSocialsDialog />
      <EditContactsDialog />
      <q-card flat style="border-radius: 12px;">
        <q-card-section>
          <q-card-section class="row" v-if="siteSettingsStore.siteInfo">
            <div class="column">
              <h2 class="text-h6">{{ $t('siteSettings.subTitles.siteLangs') }}</h2>

              <q-list>
                <q-item tag="label">
                  <q-item-section style="margin-right: 200px;">
                    <q-item-label>{{ $t('siteSettings.langs.ru') }}</q-item-label>
                  </q-item-section>
                  <q-item-section avatar>
                    <q-toggle v-model="siteSettingsStore.langStatus.lang_ru"
                      @click="siteLangUpdate('ru', siteSettingsStore.langStatus.lang_ru)" />
                  </q-item-section>
                </q-item>

                <q-item tag="label">
                  <q-item-section style="margin-right: 200px;">
                    <q-item-label>{{ $t('siteSettings.langs.uz') }}</q-item-label>
                  </q-item-section>
                  <q-item-section avatar>
                    <q-toggle v-model="siteSettingsStore.langStatus.lang_uz"
                      @click="siteLangUpdate('uz', siteSettingsStore.langStatus.lang_uz)" />
                  </q-item-section>
                </q-item>

                <q-item tag="label">
                  <q-item-section style="margin-right: 200px;">
                    <q-item-label>{{ $t('siteSettings.langs.en') }}</q-item-label>
                  </q-item-section>
                  <q-item-section avatar>
                    <q-toggle v-model="siteSettingsStore.langStatus.lang_en"
                      @click="siteLangUpdate('en', siteSettingsStore.langStatus.lang_en)" />
                  </q-item-section>
                </q-item>
              </q-list>
            </div>

            <div class="column items-center justify-center" style="margin-top: 8px;">
              <h2 class="text-h6">{{ $t('siteSettings.subTitles.defaultLang') }}</h2>
              <q-checkbox v-model="defaultLang.ru" style="margin-bottom: 16px;" @click="toggleLang(['uz', 'en'], 'ru')" />
              <q-checkbox v-model="defaultLang.uz" style="margin-bottom: 16px;" @click="toggleLang(['ru', 'en'], 'uz')" />
              <q-checkbox v-model="defaultLang.en" style="margin-bottom: 16px;" @click="toggleLang(['ru', 'uz'], 'en')" />
            </div>
          </q-card-section>
          <q-separator />

          <q-card-section class="column" v-if="siteSettingsStore.siteInfo">
            <div class="row items-center">
              <h2 class="text-h6">{{ $t('siteSettings.subTitles.contactInfo') }}</h2>
              <q-space></q-space>
              <q-btn icon="edit" flat color="primary" dense style="height: 35px;" @click="openDialog('contacts')" />
            </div>
            <div class="column">
              <q-list class="row">
                <q-item style="width: 350px;" class="column q-mb-md">
                  <q-item-label style="font-size: 16px;" class="q-mb-sm text-primary text-bold">{{
                    $t('siteSettings.address') }}</q-item-label>
                  <q-item-label caption style="font-size: 14px;">{{ siteSettingsStore.siteInfo[`address_${getLocale()}`]
                  }}</q-item-label>
                </q-item>

                <q-item style="width: 350px;" class="column q-mb-md">
                  <q-item-label style="font-size: 16px;" class="q-mb-sm text-primary text-bold">E-mail</q-item-label>
                  <q-item-label caption style="font-size: 14px;">{{ siteSettingsStore.siteInfo.email }}</q-item-label>
                </q-item>
              </q-list>

              <q-list class="row">
                <q-item style="width: 350px;" class="column q-mb-md">
                  <q-item-label style="font-size: 16px;" class="q-mb-sm text-primary text-bold">{{
                    $t('siteSettings.phone') }}</q-item-label>
                  <q-item-label caption style="font-size: 14px;"> {{ siteSettingsStore.siteInfo.phone
                  }}</q-item-label>
                </q-item>

                <q-item style="width: 350px;" class="column q-mb-md">
                  <q-item-label style="font-size: 16px;" class="q-mb-sm text-primary text-bold">{{
                    $t('siteSettings.schedule') }}</q-item-label>
                  <q-item-label caption style="font-size: 14px;">{{ siteSettingsStore.siteInfo[`work_${getLocale()}`]
                  }}</q-item-label>
                </q-item>
              </q-list>
            </div>
          </q-card-section>
          <q-separator />
          <q-card-section class="column">
            <div class="row items-center">
              <h2 class="text-h6">{{ $t('siteSettings.subTitles.socials') }}</h2>
              <q-space></q-space>
              <q-btn icon="edit" flat color="primary" dense style="height: 35px;" @click="openDialog('socials')" />
            </div>
            <div class="column">
              <q-list class="socials-list">
                <q-item v-if="siteSettingsStore.socialNetworks" style="width: 350px;" class="column q-mb-md"
                  v-for="item in siteSettingsStore.socialNetworks" :key="item.id">
                  <q-item-label style="font-size: 16px;" class="q-mb-sm text-primary text-bold">{{ item.name
                  }}</q-item-label>
                  <q-item-label caption style="font-size: 14px;"> {{ item.link }} </q-item-label>
                </q-item>
              </q-list>
            </div>
          </q-card-section>
        </q-card-section>
      </q-card>
    </q-page>
  </q-layout>
</template>
<style>
.socials-list {
  display: grid;
  grid-template-columns: 350px 350px;
  grid-auto-rows: 90px;
}
</style>
<script setup lang="ts">
import { Ref, onMounted, ref, watch } from 'vue'
import EditSocialsDialog from 'src/pages/settings/EditSocialsDialog.vue'
import EditContactsDialog from 'src/pages/settings/EditContactsDialog.vue'
import { useModalStore } from 'src/stores/moduls/modal';
import { useSiteSettingsStore } from 'src/stores/moduls/siteSettings'
import { useI18n } from 'vue-i18n'
import { Notify } from 'quasar'

function getLocale() {
  const { locale } = useI18n()
  return locale.value.slice(0, -3)
}
const { t } = useI18n()
const modalStore = useModalStore()
const siteSettingsStore = useSiteSettingsStore()
const defaultLang: any = ref({
  ru: false,
  uz: false,
  en: false,
})

onMounted(() => {
  siteSettingsStore.getSiteInfo().then(() => {
    siteSettingsStore.langStatus.lang_ru = siteSettingsStore.siteInfo.lang_ru
    siteSettingsStore.langStatus.lang_uz = siteSettingsStore.siteInfo.lang_uz
    siteSettingsStore.langStatus.lang_en = siteSettingsStore.siteInfo.lang_en

    islangDefault(siteSettingsStore.siteInfo.default_lang)
  })

  getSocialNetworks()
})

function toggleLang([key1, key2]: [string, string], upadeLang: string): void {
  updateDefaultLang(upadeLang)
  defaultLang.value[key1] = false
  defaultLang.value[key2] = false
}

function islangDefault(key: string): void {
  defaultLang.value[key] = true
}

function openDialog(dialog: string): void {
  if (dialog === 'contacts') {
    modalStore.modal.settings.contacts = true
  } else if (dialog === 'socials') {
    modalStore.modal.settings.socials = true
  }
}

function getSocialNetworks() {
  siteSettingsStore.getSocialNetworks()
    .catch(() => {
      Notify.create({
        message: t('notification.siteSettings.socials.getError'),
        color: 'negative',
        position: 'top-right',
        group: false
      })
    })
}

function siteLangUpdate(name: string, status: string): void {
  siteSettingsStore.siteLangUpdate(name, status).then(() => {
    Notify.create({
      message: t('notification.siteSettings.siteLang.updated'),
      color: 'positive',
      position: 'top-right',
      group: false
    })
  }).catch(() => {
    Notify.create({
      message: t('notification.siteSettings.siteLang.updateError'),
      color: 'negative',
      position: 'top-right',
      group: false
    })
  })
}

function updateDefaultLang(lang: string) {
  siteSettingsStore.updateDefaultLang(lang).then(() => {
    Notify.create({
      message: t('notification.siteSettings.defaultLang.updated'),
      color: 'positive',
      position: 'top-right',
      group: false
    })
  }).catch(() => {
    Notify.create({
      message: t('notification.siteSettings.defaultLang.updateError'),
      color: 'negative',
      position: 'top-right',
      group: false
    })
  })
}
</script>
