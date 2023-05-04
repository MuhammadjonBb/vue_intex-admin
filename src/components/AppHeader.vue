<template>
  <q-header class="header row justify-between bg-white fixed-top" style="padding-bottom: 0;">
    <div>
      <q-input borderless v-model="searchValue" class="bg-grey-2 q-px-md items-center column" style="border-radius: 12px;"
        dense placeholder="Поиск">

        <template #prepend>
          <q-icon name="search" color="primary"></q-icon>
        </template>
      </q-input>
    </div>
    <div>
      <q-list class="row">
        <q-item class="items-center" dense>
          <q-select dropdown-icon="expand_more" borderless class="bg-grey-2 q-px-md q-pb-xs" style="border-radius: 12px;"
            v-model="selectValue" :options="options" dense>

            <template #option="scope">
              <q-item class="row" v-bind="scope.itemProps">
                <q-item-section class="no-wrap items-center" style="flex-direction: row;">
                  <img :src="`/src/assets/lang/${(scope.index)}-lang.png`" alt="язык" style="width: 28px; height: 20px;"
                    class="q-mr-sm">
                  <span>{{ scope.opt }}</span>
                </q-item-section>
              </q-item>
            </template>

            <template v-slot:prepend>
              <img :src="`/src/assets/lang/${options.indexOf(selectValue)}-lang.png`" alt="язык"
                style="width: 28px;height: 20px;" class="q-mr-xs">
            </template>
          </q-select>
        </q-item>

        <q-item dense class="items-center">
          <q-chip class="justify-center items-center q-ma-none" color="grey-3"
            style="width:40px;padding: 21px; border-radius: 50%;">
            <q-icon name="notifications" color="grey-8" size="20px" />
          </q-chip>
        </q-item>

        <q-item dense class="items-center">
          <q-chip class="justify-center items-center q-ma-none" color="grey-3"
            style="width:40px;padding: 21px; border-radius: 50%;">
            <q-icon name="person" color="grey-8" size="20px" />
          </q-chip>
        </q-item>
      </q-list>
    </div>

    <q-toolbar dense class="text-grey-6 q-mt-md" style="border-top: 1px solid #6666661c;">
      <q-breadcrumbs>
        <q-breadcrumbs-el icon="home" />
        <q-breadcrumbs-el>{{ returnPageName($route.path) }}</q-breadcrumbs-el>
        <q-breadcrumbs-el v-if="isChildPage($route.path)">{{ returnPageChild($route.path)
        }}</q-breadcrumbs-el>
      </q-breadcrumbs>
    </q-toolbar>
  </q-header>
</template>

<script setup lang="ts">
import { ref, Ref, watch } from 'vue'
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n()

const route = useRoute()
const options: string[] = ['ru-RU', 'en-US', 'uz-UZ']
const selectValue: Ref<string> = ref(options[0])
const searchValue: Ref<string> = ref('')

watch(selectValue, (newVal) => {
  locale.value = newVal
})
function isChildPage(path: string): boolean {
  return (
    (/\/.+\/.+$/.test(path))
    && !(/\/product\/list$/.test(path))
    && !(/\/product\/categories$/.test(path))
    && !(/\/product\/attributes$/.test(path))
  )
}

function returnPageName(pagePath: string): string | void {
  if (pagePath.includes('categories')) return t('categories.title')
  else if (pagePath.includes('attributes')) return t('aside.items.attributes')
  else if (pagePath.includes('orders')) return t('orders.title')
  else if (pagePath.includes('users')) return t('users.title')
  else if (pagePath.includes('settings')) return t('siteSettings.title')
  else if (pagePath.includes('feedback')) return t('consultations.title')
  if (pagePath.includes('product')) return t('aside.items.products')
}

function returnPageChild(pagePath: string): string | void {
  if (pagePath.includes('categories/add')) return t('routes.addCategory')
  else if (pagePath.includes('attributes/create')) return t('routes.addAttribute')
  else if (pagePath.includes('orders/edit')) return '#' + (route.params.id) || t('routes.editOrder')
  else if (pagePath.includes('orders/create')) return t('routes.addOrder')
  else if (pagePath.includes('product/create')) return t('routes.addProduct')
}
</script>

<style lang="scss">
.header {
  padding: 20px 30px;
}
</style>

