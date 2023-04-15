<template>
  <q-layout>
    <q-page class="q-pa-md main__container">
      <h1 class="text-h5 text-weight-bold">Добавить категорию</h1>

      <q-card flat>
        <q-card-section>
          <q-list>
            <q-expansion-item class="q-mb-md" expand-separator :disable-hover="true" label="Русский"
              header-style="color: #2B3D90" header-class="text-bold text-h6 item-no-hover" default-opened>
              <q-card>
                <q-card-section class="row no-wrap" style="gap: 20px;">
                  <DefaultInput name="ruName" :inputData="{ component: 'categoriesAdd', inputName: 'ruName' }"
                    label="Название категорию" placeholder="Введите название категорию" />
                  <DefaultInput name="ruSubName" style="width: 120%"
                    :inputData="{ component: 'categoriesAdd', inputName: 'ruSubName' }" label="Под категория"
                    placeholder="Введите название под категорию" />
                </q-card-section>
              </q-card>
            </q-expansion-item>
            <q-expansion-item class="q-mb-md" expand-separator :disable-hover="true" label="English"
              header-style="color: #2B3D90" header-class="text-bold text-h6 item-no-hover" default-opened>
              <q-card>
                <q-card-section class="row no-wrap" style="gap: 20px;">
                  <DefaultInput name="enName" :inputData="{ component: 'categoriesAdd', inputName: 'enName' }"
                    label="Название категорию" placeholder="Введите название категорию" />
                  <DefaultInput name="enSubName" style="width: 120%"
                    :inputData="{ component: 'categoriesAdd', inputName: 'enSubName' }" label="Под категория"
                    placeholder="Введите название под категорию" />
                </q-card-section>
              </q-card>
            </q-expansion-item>
            <q-expansion-item class="q-mb-md" expand-separator :disable-hover="true" label="O’zbekcha"
              header-style="color: #2B3D90" header-class="text-bold text-h6 item-no-hover" default-opened>
              <q-card>
                <q-card-section class="row no-wrap" style="gap: 20px;">
                  <DefaultInput name="uzName" :inputData="{ component: 'categoriesAdd', inputName: 'ruName' }"
                    label="Название категорию" placeholder="Введите название категорию" />
                  <DefaultInput name="uzSubName" style="width: 120%"
                    :inputData="{ component: 'categoriesAdd', inputName: 'uzSubName' }" label="Под категория"
                    placeholder="Введите название под категорию" />
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </q-list>
          <div class="row q-mt-lg no-wrap  q-mx-auto" style="width: 60%;gap: 20px;">
            <q-space />
            <q-btn color="indigo-10" flat label="Отменить" style="border-radius: 12px;"
              class="full-width q-py-sm bg-grey-2  q-px-xl q-mr-md" no-caps />
            <q-btn color="white" flat label="Сохранить" style="border-radius: 12px;"
              class="full-width q-py-sm  q-px-xl bg-indigo-10" no-caps />
          </div>
        </q-card-section>
      </q-card>
    </q-page>
  </q-layout>
</template>

<script setup lang="ts">
import DefaultInput from 'src/components/input/DefaultInput.vue';
</script>

<style lang="scss">
.q-item.item-no-hover:hover .q-focus-helper {
  background: white !important;
}
</style>
