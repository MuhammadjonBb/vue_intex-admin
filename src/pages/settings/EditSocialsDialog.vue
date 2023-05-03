<template>
  <q-dialog v-model="modalStore.modal.settings.socials" persistent>
    <q-card style="min-width: 700px;border-radius: 16px;" class="q-pa-md">
      <q-card-section class="row items-center">
        <div class="text-h6 font-weight-bold">Изменить информацию</div>
        <q-space />
        <q-btn v-close-popup icon="close" text-color="primary" flat class="bg-grey-3"
          style="width: 32px;height: 32px; border-radius: 8px;" size="13px" @click="modalStore.closeModal()" />
      </q-card-section>

      <q-card-section class="q-pt-none column">
        <q-list class="column no-wrap">

          <q-item class="column q-pa-none q-mt-lg" v-for="item in socialList" :key="item.id">
            <label :for="item.name" class="font-weight-medium q-mb-md full-width" style="display: block;">
              {{ item.name }}
              <q-input :id="item.name" borderless v-model="item.link" class="q-mt-sm border-reset q-px-md" />
            </label>
            <q-btn flat icon="remove" label="Удалить социальную сеть" no-caps
              @click="siteSettingsStore.deleteSocialNetwork(item.id)"
              style="align-self: start; font-size: 14px; margin-top: -10px;" class="" color="negative" />
          </q-item>

          <q-item class="column q-pa-none q-mt-lg" v-for="(item, index) in createdNetworks.items.length" :key="index">
            <label style="width: 15%;" class="column full-width q-mb-md">
              Тип социальный сеть
              <q-select dropdown-icon="expand_more" class="q-mt-sm q-px-md border-reset q-py-xs" dense borderless
                v-model="createdNetworks.items[index].name" :options="createdNetworks.options" />
            </label>

            <label class="font-weight-medium q-mb-md full-width" style="display: block;">
              Линк
              <q-input placeholder="Введите ссылку на социальную сеть" borderless
                v-model="createdNetworks.items[index].link" class="q-mt-sm border-reset q-px-md" />
            </label>
          </q-item>


        </q-list>
        <q-separator class="q-mt-lg" />

        <q-btn flat icon="add" label="Добавить социальную сеть" no-caps style="align-self: start; font-size: 14px;"
          class="q-mt-lg" color="primary" @click="createNetwork" />
        <div class="row q-mt-lg">
          <q-space />
          <q-btn @click="modalStore.closeModal()" v-close-popup color="indigo-10" flat label="Отменить"
            style="border-radius: 12px;" class="q-py-sm bg-grey-2  q-px-xl q-mr-md" no-caps />
          <q-btn @click="save()" v-close-popup color="white" flat label="Сохранить" style="border-radius: 12px;"
            class="q-py-sm  q-px-xl bg-indigo-10" no-caps />
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { Ref, onMounted, ref, watch, } from 'vue'
import { useModalStore } from 'src/stores/moduls/modal'
import { useSiteSettingsStore } from 'src/stores/moduls/siteSettings'

const siteSettingsStore = useSiteSettingsStore()
const modalStore = useModalStore()
const socialList: any = ref([])
const createdNetworks: any = ref({
  amount: 0,
  items: [],
  options: ['Twitter', 'Instagram', 'Facebook', 'LinkedIn'],
  inputValue: ''
})

function createNetwork() {
  createdNetworks.value.items.push({
    name: '',
    link: ''
  })
}

watch(() => siteSettingsStore.socialNetworks, () => {
  socialList.value = JSON.parse(JSON.stringify(siteSettingsStore.socialNetworks))
})

function save() {
  socialList.value.forEach((el: any) => {
    if (el?.link !== siteSettingsStore.socialNetworks.find((item: any) => item.id === el.id)?.link) {
      siteSettingsStore.updateSocialNetwork([el])
    }
  });

  if (createdNetworks.value.items.length > 0) {
    createdNetworks.value.items.forEach((el: any) => {
      siteSettingsStore.createSocialNetwork(el).then(() => {
        createdNetworks.value.items = []
      })
    })
  }
}

</script>
