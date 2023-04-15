<script lang="ts" setup>
import {ref } from 'vue'
import DefaultInput from 'components/input/DefaultInput.vue'

const lang = ref({
  ru: false,
  uz: false,
  en: false
})
const isToggled = ref(false);
const selectedOption = ref('')
</script>
<template>
  <div class="header__title">
    Добавить aтрибуты
  </div>
  <q-card class=" q-ma-md card__attribute q-pa-sm">
    <div class="toggle-container">
      <div class="expansion__header " @click="lang.ru = !lang.ru">
        <span class="expansion__title">Ruscha</span>
        <div>
          <q-img :class="lang.ru?'rotateActive':' noActive'" class="q-mr-sm" src="/src/assets/Vector.svg"
                 width="20px"></q-img>
        </div>
      </div>

      <div v-if="lang.ru" class="content">
        <div class="input__group">
          <div  class="input__name">
            <default-input :label="'Название атрибута'" placeholder="Введите название атрибута" />
          </div>
          <div  class="input__dropdown">
            <label for="select">Тип ввода</label>
            <div :class="!selectedOption?'input__label':'hidden'">Введите значение атрибута</div>
            <select id="select" v-model="selectedOption">
              <option  >Num</option>
              <option  >Num</option>
              <option  >Num</option>
            </select>
          </div>
        </div>

        <div  class="iput__name q-pt-sm">
          <default-input :label="'Значение атрибута'" placeholder="Введите значение атрибута" />
        </div>
      </div>
    </div>
    <div class="toggle-container">
      <div class="expansion__header " @click="lang.en = !lang.en">
        <span class="expansion__title">Engilish</span>
        <div>
          <q-img :class="lang.en?'rotateActive':' noActive'" class="q-mr-sm" src="/src/assets/Vector.svg"
                 width="20px"></q-img>
        </div>
      </div>

      <div v-if="lang.en" class="content">
        <div class="input__group">
          <div  class="input__name">
            <default-input :label="'Название атрибута'" placeholder="Введите значение атрибута" />
          </div>
          <div  class="input__dropdown">
            <label for="select">Тип ввода</label>
            <div :class="!selectedOption?'input__label':'hidden'">Введите значение атрибута</div>
            <select id="select" v-model="selectedOption">
              <option  >Num</option>
              <option  >Num</option>
              <option  >Num</option>
            </select>
          </div>
        </div>

        <div  class="iput__name q-pt-sm">
          <default-input :label="'Значение атрибута'" placeholder="Введите значение атрибута" />
        </div>
      </div>
    </div>
    <div class="toggle-container">
      <div class="expansion__header " @click="lang.uz = !lang.uz">
        <span class="expansion__title">O'zbekcha</span>
        <div>
          <q-img :class="lang.uz?'rotateActive':' noActive'" class="q-mr-sm" src="/src/assets/Vector.svg"
                 width="20px"></q-img>
        </div>
      </div>

      <div v-if="lang.uz" class="content">
        <div class="input__group">
          <div  class="input__name q-pt-sm">
            <default-input :label="'Название атрибута'" placeholder="Введите значение атрибута" />
          </div>
          <div  class="input__dropdown">
            <label for="select">Тип ввода</label>
            <div :class="!selectedOption?'input__label':'hidden'">Введите значение атрибута</div>
            <select id="select" v-model="selectedOption">
              <option value="num"  >Num</option>
              <option  >Num</option>
              <option  >Num</option>
            </select>
          </div>
        </div>

        <div  class="iput__name q-pt-sm">
          <default-input :label="'Значение атрибута'" placeholder="Введите значение атрибута" />
        </div>
      </div>
    </div>
    <q-card-actions align="center">
      <q-btn color="grey" text-color="black" padding="5px 80px" label="Отменить" />
      <q-btn color="deep-purple-10"  padding="5px 80px" label="Добавить" />
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
  font-size: 16px;
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
.input{
  &__label{
    font-size: 14px;
    position: absolute;
    top: 50%;
    left: 5%;
    color: grey;
  }
  &__group{
    display: flex;
    justify-content: space-between;
    width: 50%;
  }
  &__name{
    width: 48%;
    display: flex;
    flex-direction: column;
    padding-right: 2%;
  }
  &__dropdown{
    width: 48%;
    display: flex;
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
