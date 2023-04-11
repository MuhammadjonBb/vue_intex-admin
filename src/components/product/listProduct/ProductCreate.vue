<script setup lang="ts">
import { ref, computed } from 'vue'
const tab = ref('en-US')
const locales=[
  {
    name: 'Pусский язык',
    code: 'ru-RU'
},
  {name: 'Узбекский язык', code: 'uz'},
  {
    name: 'Engilish', code: 'en-EN' }
]

function useCycle<T>(list: T[], index: number) {
  const i = ref(0)

  function next() {
    if(i.value === list.length - 1) {
      i.value = 0
    }
    else {
      i.value++
    }
  }
  const current = computed(() => locales[i.value])
return {
  next,
  current
}
}
const { next, current } = useCycle(locales, 0)
const editor = ref('What you see is <b>what</b> you get.')
const  img = ref('')

</script>
<template>
  <div class="header__title">
    Добавить продукт
  </div>
    <q-card class=" q-ma-md card ">
      <div class=" text-center q-ml-md q-pt-sm card__lang">
        <q-tabs class="text-grey card__tabs" active-class="text-black" v-model="tab" align="left" @update:model-value="$i18n.locale=tab" dense indicator-color="blue">
          <q-tab name="ru-RU"  style="font-size: 12px" >Pусский язык</q-tab>
          <q-tab name="uz-UZ"  style="font-size: 12px">Узбекский язык</q-tab>
          <q-tab name="en-US"  style="font-size: 12px">Engilish</q-tab>
        </q-tabs>
      </div>
      <q-card-section class="q-py-none" horizontal>
        <q-card-section class="q-py-none q-mr-none card__section__one" >
          <h6 class="card__title ">{{$t('productCreate.title')}}</h6>
          <span class="text-weight-bold q-my-sm">Название продукта</span>
          <q-input class="input input__name"  standout="text-grey" dense outlined  label="Название" />
          <span class="text-weight-bold q-my-sm">Цена</span>
          <q-input class="input input__name"  standout="text-grey" dense outlined  label="Цена" />
          <span class="text-weight-bold q-my-sm">Категория</span>
          <q-select class="input input__name"  standout="text-grey" dense outlined  label="Категория" :options="['Категория 1', 'Категория 2', 'Категория 3']" />
          <span class="text-weight-bold q-my-sm">Скидка</span>
          <q-input class="input input__name"  standout="text-grey" dense outlined  label="Скидка" />
        </q-card-section>
        <q-card-section class="q-pb-none q-mt-md card__section__two">
          <span class="text-weight-bold q-my-sm">Описание</span>
          <q-editor :toolbar="[
        ['bold', 'italic', 'strike', 'underline','left', 'center', 'right','link'],
      ]"
                    v-model="editor" min-height="5rem" />
          <span class="text-weight-bold q-my-sm">Картинка</span>
          <div class="card__img">
            <q-file multiple v-model="img"  standout color="red" bg-color="white" outlined >
              <template v-slot:default>
                <div class="img__container">
                  <q-img class="img__main" src="/src/assets/uplod_img.png" alt="img" width="68px" height="68px"/>
                  <span>Загрузите изображения продукта</span>
                </div>
              </template>
              <template v-slot:file>
                <div >
                </div>
              </template>
            </q-file>
          </div>
        </q-card-section>
      </q-card-section>
  </q-card>
</template>



<style  lang="scss">

.filed {
  width: 100%;
  height: 200px;
}
.card {
  border-radius: 10px;
  &__title {
    font-size: 20px;
    font-weight: 600;
    margin-top: 20px;
    margin-bottom: 20px;
    color: #2B3D90;
  }
  &__lang {
    width: 43%;
  border-bottom: 1px solid #a6a6a6;
}
  &__tabs {
    width: 70%;
  }
  &__section__one {
    width: 40%;

  }
  &__section__two {
    width: 60%;
  }
  .input{
    width: 100%;
    margin-bottom: 15px;

    &__name{
      border-radius: 40px;
    }

  }
  &__img{
    .q-field--auto-height, .q-field__control, .q-field--auto-height, .q-field__native{
      width: 100%;
      min-height: 138px !important;
      border-radius: 10px;
    }
    .img{
      &__container{
        width: fit-content;
        height: fit-content;
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 15%;
        left: 45%;
      }
    &__main{
      width: 68px;
      height: 68px;
}
  }
  }
}
.header__title{
  margin:30px 0px 20px 30px;
  font-size: 24px;
  font-weight: bold;
}
</style>
