<template>
  <q-header class="header row justify-between bg-white fixed-top sticky" style="padding-bottom: 0;">
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
                  <img :src="`/src/assets/${(scope.index)}-lang.png`" alt="язык" style="width: 28px; height: 20px;"
                    class="q-mr-sm">
                  <span>{{ scope.opt }}</span>
                </q-item-section>
              </q-item>
            </template>
            <template v-slot:prepend>
              <img :src="`/src/assets/${options.indexOf(selectValue)}-lang.png`" alt="язык"
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
        <q-breadcrumbs-el icon="home"></q-breadcrumbs-el>
        <q-breadcrumbs-el>Продукты</q-breadcrumbs-el>
      </q-breadcrumbs>
    </q-toolbar>
  </q-header>
</template>

<script setup lang="ts">
import { ref, Ref } from 'vue'

const options: string[] = ['Ru', 'En', 'Uz']
const searchValue: Ref<string> = ref('')
const selectValue: Ref<string> = ref(options[0])
</script>

<style lang="scss">
@import "src/css/quasar.variables.scss";

.header {
  padding: 20px 30px;
}
</style>
