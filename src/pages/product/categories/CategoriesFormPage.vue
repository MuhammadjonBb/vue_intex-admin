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
                  <DefaultInput :rules="[(v: any) => !!v || 'Обязательное поле']" name="ruName"
                    :inputData="{ component: 'categoriesForm', inputName: 'ruName' }" label="Название категорию"
                    placeholder="Введите название категорию" />

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
                  <DefaultInput :rules="[(v: any) => !!v || 'Обязательное поле']" name="enName"
                    :inputData="{ component: 'categoriesForm', inputName: 'enName' }" label="Название категорию"
                    placeholder="Введите название категорию" />

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
                  <DefaultInput :rules="[(v: any) => !!v || 'Обязательное поле']" name="uzName"
                    :inputData="{ component: 'categoriesForm', inputName: 'uzName' }" label="Название категорию"
                    placeholder="Введите название категорию" />

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
            <q-btn @click="save" color="white" flat label="Сохранить" style="border-radius: 12px;"
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
import { useCategoriesStore } from 'src/stores/moduls/products/categories'
import { useInputStore } from 'src/stores/moduls/input';
import { useQuasar } from 'quasar';

interface ISubcategoriesArr {
  ru: string[],
  uz: string[],
  en: string[]
}

const $q = useQuasar()
const categoriesStore = useCategoriesStore()
const inputStore = useInputStore()
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
  if (subCategoryInputValue.value.trim() !== '') {
    subCategoriesArr.value[lang].push(value.trim())
    subCategoryInputValue.value = ''
  }
}

function setVisibleSubcategoryInput(lang: string) {
  isSubcategoryVisible.value[lang] = true
}

function setInvisibleSubcategoryInput(lang: string) {
  if (subCategoryInputValue.value.trim() === '') {
    isSubcategoryVisible.value[lang] = false
  }
}

function save() {
  if (subCategoriesArr.value.ru.length === subCategoriesArr.value.uz.length && subCategoriesArr.value.ru.length === subCategoriesArr.value.en.length) {
    let data = [
      {
        category_ru: inputStore.input.categoriesForm.ruName,
        category_uz: inputStore.input.categoriesForm.uzName,
        category_en: inputStore.input.categoriesForm.enName
      },
      ...convertToObj()
    ]
    // if (subCategoriesArr.value.ru.length > 0) {
    //   data = [Object.assign(data[0], ...convertToObj())]
    // }
    categoriesStore.postCategory(data).then(() => {
      clearValues()

      $q.notify({
        message: 'Категория успешно сохранена',
        color: 'positive'
      })
    })
  } else {
    $q.notify({
      message: 'Количество значений в подкатегориях должно совпадать с количеством значений в других подкатегориях',
      color: 'negative',
      position: 'top-right'
    })
  }
}

function convertToObj() {
  const result = []
  for (let i = 0; i < subCategoriesArr.value.ru.length; i++) {
    result.push({
      category_ru: subCategoriesArr.value.ru[i],
      category_uz: subCategoriesArr.value.uz[i],
      category_en: subCategoriesArr.value.en[i]
    })
  }
  return result
}

function clearValues() {
  inputStore.input.categoriesForm.ruName = ''
  inputStore.input.categoriesForm.uzName = ''
  inputStore.input.categoriesForm.enName = ''
  subCategoriesArr.value = {
    ru: [],
    uz: [],
    en: []
  }
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
