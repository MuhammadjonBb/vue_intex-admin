<template>
  <q-layout>
    <q-page class="q-pa-md main__container">
      <h1 class="text-h5 text-weight-bold">Настройки сайта</h1>
      <EditSocialsDialog />
      <EditContactsDialog />
      <q-card flat style="border-radius: 12px;">
        <q-card-section>
          <q-card-section class="row">
            <div class="column">
              <h2 class="text-h6">Языки сайта</h2>

              <q-list>
                <q-item tag="label">
                  <q-item-section class="" style="margin-right: 200px;">
                    <q-item-label>Pусский язык</q-item-label>
                  </q-item-section>
                  <q-item-section avatar>
                    <q-toggle v-model="lang.ru.enabled" />
                  </q-item-section>
                </q-item>

                <q-item tag="label">
                  <q-item-section class="" style="margin-right: 200px;">
                    <q-item-label>Узбекский язык</q-item-label>
                  </q-item-section>
                  <q-item-section avatar>
                    <q-toggle v-model="lang.uz.enabled" />
                  </q-item-section>
                </q-item>

                <q-item tag="label">
                  <q-item-section class="" style="margin-right: 200px;">
                    <q-item-label>Aнглийский язык</q-item-label>
                  </q-item-section>
                  <q-item-section avatar>
                    <q-toggle v-model="lang.en.enabled" />
                  </q-item-section>
                </q-item>
              </q-list>
            </div>

            <div class="column items-center justify-center" style="margin-top: 8px;">
              <h2 class="text-h6">Язык по умолчанию</h2>
              <q-checkbox v-model="lang.ru.default" class="" style="margin-bottom: 16px;" />
              <q-checkbox v-model="lang.uz.default" class="" style="margin-bottom: 16px;" />
              <q-checkbox v-model="lang.en.default" class="" style="margin-bottom: 16px;" />
            </div>
          </q-card-section>
          <q-separator />

          <q-card-section class="column">
            <div class="row items-center">
              <h2 class="text-h6">Контактная информация</h2>
              <q-space></q-space>
              <q-btn icon="edit" flat color="primary" dense style="height: 35px;" @click="onOpenDialog('contacts')" />
            </div>
            <div class="column">
              <q-list class="row">
                <q-item style="width: 350px;" class="column q-mb-md">
                  <q-item-label style="font-size: 16px;" class="q-mb-sm text-primary text-bold">Адрес</q-item-label>
                  <q-item-label caption style="font-size: 14px;">Улица Пахлавона Махмуда, Яшнабадский район, город
                    Ташкент</q-item-label>
                </q-item>

                <q-item style="width: 350px;" class="column q-mb-md">
                  <q-item-label style="font-size: 16px;" class="q-mb-sm text-primary text-bold">E-mail</q-item-label>
                  <q-item-label caption style="font-size: 14px;">Intex@gmail.com</q-item-label>
                </q-item>
              </q-list>

              <q-list class="row">
                <q-item style="width: 350px;" class="column q-mb-md">
                  <q-item-label style="font-size: 16px;" class="q-mb-sm text-primary text-bold">Номер
                    телефона</q-item-label>
                  <q-item-label caption style="font-size: 14px;">+998 (90) 128 81 82</q-item-label>
                </q-item>

                <q-item style="width: 350px;" class="column q-mb-md">
                  <q-item-label style="font-size: 16px;" class="q-mb-sm text-primary text-bold">График
                    работы</q-item-label>
                  <q-item-label caption style="font-size: 14px;">10:00 - 22:00 Без выходных</q-item-label>
                </q-item>
              </q-list>
            </div>
          </q-card-section>
          <q-separator />
          <q-card-section class="column">
            <div class="row items-center">
              <h2 class="text-h6">Cоциальные сети</h2>
              <q-space></q-space>
              <q-btn icon="edit" flat color="primary" dense style="height: 35px;" @click="onOpenDialog('socials')" />
            </div>
            <div class="column">
              <q-list class="row">
                <q-item style="width: 350px;" class="column q-mb-md">
                  <q-item-label style="font-size: 16px;" class="q-mb-sm text-primary text-bold">Instagram</q-item-label>
                  <q-item-label caption style="font-size: 14px;">intex-market</q-item-label>
                </q-item>

                <q-item style="width: 350px;" class="column q-mb-md">
                  <q-item-label style="font-size: 16px;" class="q-mb-sm text-primary text-bold">Facebook</q-item-label>
                  <q-item-label caption style="font-size: 14px;">intex-market</q-item-label>
                </q-item>
              </q-list>

              <q-list class="row">
                <q-item style="width: 350px;" class="column q-mb-md">
                  <q-item-label style="font-size: 16px;" class="q-mb-sm text-primary text-bold">Twitter</q-item-label>
                  <q-item-label caption style="font-size: 14px;">intex-market</q-item-label>
                </q-item>

                <q-item style="width: 350px;" class="column q-mb-md">
                  <q-item-label style="font-size: 16px;" class="q-mb-sm text-primary text-bold">Linkedin</q-item-label>
                  <q-item-label caption style="font-size: 14px;">intex-market</q-item-label>
                </q-item>
              </q-list>
            </div>
          </q-card-section>
        </q-card-section>
      </q-card>
    </q-page>
  </q-layout>
</template>

<script setup lang="ts">
import { Ref, ref } from 'vue'
import EditSocialsDialog from 'src/pages/settings/EditSocialsDialog.vue'
import EditContactsDialog from 'src/pages/settings/EditContactsDialog.vue'
import { useModalStore } from 'src/stores/moduls/modal';

interface ILang {
  ru: {
    enabled: boolean,
    default: boolean
  }
  uz: {
    enabled: boolean,
    default: boolean
  }
  en: {
    enabled: boolean,
    default: boolean
  }
}
const modalStore = useModalStore()
const lang: Ref<ILang> = ref({
  ru: {
    enabled: true,
    default: false
  },
  en: {
    enabled: true,
    default: false
  },
  uz: {
    enabled: true,
    default: true
  }
})

// eslint-disable-next-line space-before-function-paren
function onOpenDialog(dialog: string): void {
  if (dialog === 'contacts') {
    modalStore.modal.settings.contacts = true
  } else if (dialog === 'socials') {
    modalStore.modal.settings.socials = true
  }
}
</script>
