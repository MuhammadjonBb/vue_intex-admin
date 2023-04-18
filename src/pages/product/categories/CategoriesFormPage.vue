<template>
  <q-layout>
    <q-page class="q-pa-md main__container">
      <h1 class="text-h5 text-weight-bold">{{ $route.path.includes('add') ? 'Добавить' : 'Изменить' }} категорию</h1>

      <q-card flat>
        <q-card-section>
          <q-list>
            <q-expansion-item class="q-mb-md" expand-separator :disable-hover="true" label="Русский"
              header-style="color: #2B3D90" header-class="text-bold text-h6 item-no-hover" default-opened>
              <q-card>
                <q-card-section class="row no-wrap" style="gap: 20px;">
                  <DefaultInput name="ruName" :inputData="{ component: 'categoriesAdd', inputName: 'ruName' }"
                    label="Название категорию" placeholder="Введите название категорию" />

                  <div style="min-width: 65%;" @mouseover="setVisibleSubcategoryInput('ru')"
                    @mouseleave="setInvisibleSubcategoryInput('ru')">
                    Под категория
                    <div class="full-width q-px-sm subcategory-wrapper">

                      <q-chip v-for="(item, index) in subCategoriesArr.ru" :key="index"
                        style="margin-top: 12px; background-color: #9CDAFF;" square text-color="dark"
                        class="justify-center" removable v-model="subCategoriesArr.ru[subCategoriesArr.ru.indexOf(item)]"
                        icon-remove="close">
                        {{ item }}
                      </q-chip>

                      <q-input v-show="isSubcategoryVisible.ru" placeholder="Введите название под категории" borderless
                        dense style="padding-top: 2px;" class="q-mt-xs subcategory-input full-width"
                        v-model="subCategoryInputValue" @keydown.enter="addSubCategory(subCategoryInputValue, 'ru')" />
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </q-expansion-item>
            <q-expansion-item class="q-mb-md" expand-separator :disable-hover="true" label="English"
              header-style="color: #2B3D90" header-class="text-bold text-h6 item-no-hover" default-opened>
              <q-card>
                <q-card-section class="row no-wrap" style="gap: 20px;">
                  <DefaultInput name="enName" :inputData="{ component: 'categoriesAdd', inputName: 'enName' }"
                    label="Название категорию" placeholder="Введите название категорию" />

                  <div style="min-width: 65%;" @mouseover="setVisibleSubcategoryInput('en')"
                    @mouseleave="setInvisibleSubcategoryInput('en')">
                    Под категория
                    <div class="full-width q-px-sm subcategory-wrapper">

                      <q-chip v-for="(item, index) in subCategoriesArr.en" :key="index"
                        style="margin-top: 12px; background-color: #9CDAFF;" square text-color="dark"
                        class="justify-center" removable v-model="subCategoriesArr.en[subCategoriesArr.en.indexOf(item)]"
                        icon-remove="close">
                        {{ item }}
                      </q-chip>

                      <q-input v-show="isSubcategoryVisible.en" placeholder="Введите название под категории" borderless
                        dense style="padding-top: 2px;" class="q-mt-xs subcategory-input full-width"
                        v-model="subCategoryInputValue" @keydown.enter="addSubCategory(subCategoryInputValue, 'en')" />
                    </div>

                  </div>
                </q-card-section>
              </q-card>
            </q-expansion-item>
            <q-expansion-item class="q-mb-md" expand-separator :disable-hover="true" label="O’zbekcha"
              header-style="color: #2B3D90" header-class="text-bold text-h6 item-no-hover" default-opened>
              <q-card>
                <q-card-section class="row no-wrap" style="gap: 20px;">
                  <DefaultInput name="uzName" :inputData="{ component: 'categoriesAdd', inputName: 'ruName' }"
                    label="Название категорию" placeholder="Введите название категорию" />

                  <div style="min-width: 65%;" @mouseover="setVisibleSubcategoryInput('uz')"
                    @mouseleave="setInvisibleSubcategoryInput('uz')">
                    Под категория
                    <div class="full-width q-px-sm subcategory-wrapper">

                      <q-chip v-for="(item, index) in subCategoriesArr.uz" :key="index"
                        style="margin-top: 12px; background-color: #9CDAFF;" square text-color="dark"
                        class="justify-center" removable v-model="subCategoriesArr.uz[subCategoriesArr.uz.indexOf(item)]"
                        icon-remove="close">
                        {{ item }}
                      </q-chip>

                      <q-input v-show="isSubcategoryVisible.uz" placeholder="Введите название под категории" borderless
                        dense style="padding-top: 2px;" class="q-mt-xs subcategory-input full-width"
                        v-model="subCategoryInputValue" @keydown.enter="addSubCategory(subCategoryInputValue, 'uz')" />
                    </div>
                  </div>

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
import { Ref, ref } from 'vue';
import DefaultInput from 'src/components/input/DefaultInput.vue'


const subCategoriesArr: any = ref({
  ru: [],
  uz: [],
  en: []
})

const isSubcategoryVisible: any = ref({
  uz: false,
  en: false,
  ru: false
})

const subCategoryInputValue = ref('')

function addSubCategory(value: string, lang: string) {
  subCategoriesArr.value[lang].push(value.trim())
  subCategoryInputValue.value = ''
}

function setVisibleSubcategoryInput(lang: string) {
  isSubcategoryVisible.value[lang] = true
}

function setInvisibleSubcategoryInput(lang: string) {
  isSubcategoryVisible.value[lang] = false
}
</script>


<style lang="scss">
.q-item.item-no-hover:hover .q-focus-helper {
  background: white !important;
}

.subcategory-input {
  padding: 0 10px;
}

.subcategory-wrapper {
  margin-top: 8px;
  border: 1px solid #E3E5E5;
  height: 60px;
  margin-top: 8px;
  padding: 3px 20px 6px 20px;
  display: flex;
  align-self: center;
  border-radius: 12px;
}
</style>
