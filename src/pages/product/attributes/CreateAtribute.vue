<script lang="ts" setup>
import { ref, reactive } from 'vue'
import DefaultInput from 'components/input/DefaultInput.vue'
import { useAboutStore } from "stores/moduls/products/attribute";
import { useInputStore } from "stores/moduls/input";
import { storeToRefs } from "pinia";

const lang = ref({
  ru: false,
  uz: false,
  en: false
})
const inputStore = useInputStore()
const isToggled = ref(null);
const selectedOption = ref('')
const store = useAboutStore()
const { toggle } = storeToRefs(store)
const createAttribute = reactive({
  name_uz: '',
  name_ru: '',
  name_en: ''
})

function addAttribute() {
  store.toggle.about_uz.resetValidation()

  console.log(isToggled)
}
</script>
<template>
  <div class="header__title">
    Добавить aтрибуты {{ `${store.toggle.about_uz}` }}
  </div>
  <q-card flat class=" q-ma-md card__attribute q-pa-md">
    <div class="toggle-container">
      <div class="expansion__header " @click="lang.ru = !lang.ru">
        <span class="expansion__title">Ruscha</span>
        <div>
          <q-img :class="lang.ru ? 'rotateActive' : ' noActive'" class="q-mr-sm" src="../../../assets/Vector.svg"
            width="20px"></q-img>
        </div>
      </div>

      <div v-if="lang.ru" class="content">
        <div class="input__group">
          <div class="input__name">
            <default-input :input-data="{ component: 'attributesAdd', inputName: 'nameRu', ref: 'refNameRu' }"
              :label="'Значение атрибута'" :rules="[val => !!val || 'Field is required']"
              placeholder="Введите значение атрибута" />
          </div>
          <div class="input__dropdown">
            <span class="text-weight-bold">Тип ввода</span>
            <q-select outlined :ref="toggle.about_uz" class="q-pt-sm"
              :options="['Range', 'Dropdown', 'Checkbox', 'Radio button']" label="Введите значение атрибута"
              :rules="[val => !!val || 'Field is required']" id="select" v-model="selectedOption" />

          </div>
        </div>

        <div class="iput__name q-pt-sm">
          <default-input :input-data="{ component: 'attributesAdd', inputName: 'valueRu' }" :label="'Значение атрибута'"
            placeholder="Введите значение атрибута" />
        </div>
      </div>
    </div>
    <div class="toggle-container">
      <div class="expansion__header " @click="lang.en = !lang.en">
        <span class="expansion__title">Engilish</span>
        <div>
          <q-img :class="lang.en ? 'rotateActive' : ' noActive'" class="q-mr-sm" src="../../../assets/Vector.svg"
            width="20px"></q-img>
        </div>
      </div>

      <div v-if="lang.en" class="content">
        <div class="input__group">
          <div class="input__name">
            <default-input :input-data="{ component: 'attributesAdd', inputName: 'nameEn' }" :label="'Название атрибута'"
              placeholder="Введите значение атрибута" />
          </div>
          <div class="input__dropdown">
            <label for="select">Тип ввода</label>

            <q-select outlined class="q-pt-sm" :options="['Range', 'Dropdown', 'Checkbox', 'Radio button']"
              label="Введите значение атрибута" :rules="[val => !!val || 'Field is required']" id="select"
              v-model="selectedOption" />
          </div>
        </div>

        <div class="iput__name q-pt-sm">
          <default-input :input-data="{ component: 'attributesAdd', inputName: 'valueEn' }" :label="'Значение атрибута'"
            placeholder="Введите значение атрибута" />
        </div>
      </div>
    </div>
    <div class="toggle-container">
      <div class="expansion__header " @click="lang.uz = !lang.uz">
        <span class="expansion__title">O'zbekcha</span>
        <div>
          <q-img :class="lang.uz ? 'rotateActive' : ' noActive'" class="q-mr-sm" src="../../../assets/Vector.svg"
            width="20px"></q-img>
        </div>
      </div>

      <div v-if="lang.uz" class="content">
        <div class="input__group">
          <div class="input__name q-pt-sm">
            <default-input :input-data="{ component: 'attributesAdd', inputName: 'nameUz' }" :label="'Название атрибута'"
              placeholder="Введите значение атрибута" />
          </div>
          <div class="input__dropdown">
            <label for="select">Тип ввода</label>

            <q-select outlined class="q-pt-sm" :options="['Range', 'Dropdown', 'Checkbox', 'Radio button']"
              label="Введите значение атрибута" :rules="[val => !!val || 'Field is required']" id="select"
              v-model="selectedOption" />
          </div>
        </div>

        <div class="iput__name q-pt-sm">
          <default-input :input-data="{ component: 'attributesAdd', inputName: 'valueUz' }" :label="'Значение атрибута'"
            placeholder="Введите значение атрибута" />
        </div>
      </div>
    </div>
    <q-card-actions align="center" class="row no-wrap q-mx-auto" style="gap: 20px; max-width: 50%;">
      <q-btn color="indigo-10" flat @click="addAttribute" label="Отменить" style="border-radius: 12px;"
        class="full-width q-py-sm bg-grey-2  q-px-xl q-mr-md" no-caps />
      <q-btn color="white" flat label="Сохранить" style="border-radius: 12px;"
        @click="store.postAttribute(selectedOption)" class="full-width q-py-sm  q-px-xl bg-indigo-10" no-caps />
    </q-card-actions>
  </q-card>
</template>

<style lang="scss" scoped>
.card__attribute {
  border-radius: 10px;
  box-sizing: border-box;
}

.header__title {
  margin: 30px 0px 20px 30px;
  font-size: 24px;
  font-weight: bold;

}

.expansion__title {
  font-size: 18px;
  font-weight: 900;
  display: flex;
  margin-left: 10px;
  color: #2B3D90;
}

.toggle-container {
  margin: 20px 0;
}

.expansion__header {
  display: flex;
  justify-content: space-between;
}

.rotateActive {
  transform: rotate(180deg);
  transition: all 0.3s ease-in-out;
}

.noActive {
  transform: rotate(0deg);
  transition: all 0.3s ease-in-out;
}

.input {
  &__label {
    font-size: 14px;
    position: absolute;
    top: 50%;
    left: 5%;
    color: grey;
  }

  &__group {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50%;
  }

  &__name {
    width: 48%;
    display: flex;
    flex-direction: column;
    padding-right: 2%;
  }

  &__dropdown {
    width: 48%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: relative;
  }
}

.content {
  padding: 20px;
  margin-top: 10px;
}

.dropdown {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

#select {
  padding: 1rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  border: 1px solid #ccc;
}
</style>
