<script lang="ts" setup>
import { ref, computed, reactive, onMounted } from 'vue'
import DefaultInput from 'components/input/DefaultInput.vue'
import {useListStore} from "stores/moduls/products/list";

const store = useListStore()
const tab = ref('uz')
const locales = [
  {name: 'Pусский язык', code: 'ru-RU'},
  {name: 'Узбекский язык', code: 'uz' },
  {name: 'Engilish', code: 'en-US'}
]
let attributeRender = reactive(<any>[])
const attribute=reactive({})
function atributeUbdate() {
  console.log(store.attribut, attributeRender.length <= 0,'atributeRender')
  if (attributeRender.length <= 0) {
    attributeRender.push(store.attribut)
  }
  else {

    const existingObj = attributeRender.find(obj => obj.id === store.attribut.id);

    if (!existingObj) {
      attributeRender.push(store.attribut)
    }
}
}

function handleDrop(event: object | any) {
  store.setImages(event)
}

function useCycle<T>(list: T[], index: number) {
  const i = ref(0)

  function next() {
    i.value === list.length - 1 ? i.value = 0 : i.value++
  }

  const current = computed(() => locales[i.value])
  return {
    next,
    current
  }
}

const { next } = useCycle(locales, 0)

onMounted(() => {
  store.getAttributes()
  store.getCategories()
})
</script>
<template>
  <div class="header__title">
    Добавить продукт
  </div>
  <q-card class=" q-ma-md q-pa-lg card " flat>
    <div class=" text-center q-ml-md q-pt-md card__lang">
      <q-tabs v-model="tab" active-class="text-black" align="left" class="text-grey card__tabs" dense
        indicator-color="blue" >
        <q-tab name="ru" no-caps style="font-size: 12px">Pусский язык</q-tab>
        <q-tab name="uz" no-caps style="font-size: 12px">Узбекский язык</q-tab>
        <q-tab name="en" no-caps style="font-size: 12px">Engilish</q-tab>
      </q-tabs>
    </div>
    <q-card-section class="q-py-none" horizontal>
      <q-card-section class="q-py-none q-mr-none card__section__one">
        <h6 class="card__title ">{{ $t('product.productCreate.title') }}</h6>
        <default-input :input-data="{ component: 'productCreate', inputName: `name_${tab}` }"
                        label="Название продукта"
                       placeholder="Каркасный басейн Intex прямоуголь.."
                       name="name" type="text" />
        <div class="flex justify-between items-center card__title ">
          <span class="text-weight-bold text-h6">Atribute</span>
          <span class="text-weight-medium text-blue-4 text-subtitle1 cursor-pointer" @click="store.attributDialog=true">
            <q-icon color="blue-4" class="q-mr-sm" size="20px"  name="add"/>Добавить атрибуть
          </span>
        </div>

          <q-dialog   v-model="store.attributDialog">
            <q-card class="card__dialog">
              <q-card-section>
                <div class="row items-center no-wrap">
                  <div class="col">
                    <div class="text-h6" style="font-weight: 800;">Добавить атрибут </div>
                  </div>

                  <div class="col-auto">
                    <q-btn color="grey-7" round flat icon="close" @click="store.attributDialog=false"/>
                  </div>
                </div>
              </q-card-section>
              <q-card-section class="q-pt-none">
                <div class="q-pb-sm">Тип атрибуты</div>
                <q-select v-model="store.attribut" @update:model-value="atributeUbdate" :options="store.attributes" outlined style="max-width: 300px" >
                  <template v-slot:option="scope">
                    <q-item style="max-width: 200px;" v-bind="scope.itemProps" v-on="scope.itemEvents">
                      <q-item-section>
                        <q-item-label>{{ scope.opt[`attribute_${tab}`] }}</q-item-label>
                      </q-item-section>
                    </q-item>
                  </template>
                  <template v-slot:selected-item="scope">
                    <q-item v-bind="scope.itemProps" v-on="scope.itemEvents">
                      <q-item-section>
                        <q-item-label>{{ scope.opt[`attribute_${tab}`] }}</q-item-label>
                      </q-item-section>
                    </q-item>
                  </template>
                </q-select>
              </q-card-section>
              <q-card-actions align="right">
                <div class="row q-mt-md no-wrap  q-mx-auto" style="width: 60%;gap: 20px;">
                  <q-btn color="indigo-10" flat label="Отменить" v-close-popup style="border-radius: 12px;"
                         class="full-width q-py-sm bg-grey-2  q-px-xl q-mr-md" no-caps />
                  <q-btn color="white" flat label="Добавить" style="border-radius: 12px;"
                         @click="store.postList()"
                         class="full-width q-py-sm  q-px-xl bg-indigo-10" no-caps />
                </div>
              </q-card-actions>
            </q-card>
          </q-dialog>

        <default-input :input-data="{ component: 'productCreate', inputName: `price` }"
                       placeholder="0"
                       label="Цена" name="prise"
          type="text" />
        <default-input :input-data="{ component: 'productCreate', inputName: `price` }"
                       placeholder="0"
                       label="Кол-во" name="count"
                       type="text" />
        <span class="text-weight-medium q-my-sm" style="display: block;">Категория</span>

<!--        <q-select v-model="store.category"-->
<!--                  label="Категория"-->
<!--                  :options="store.categories" behavior="menu"-->
<!--                  borderless menu-anchor="top start" class="input q-px-md"-->
<!--                  style="border: 1px solid #e5e5e5; border-radius: 12px;" >-->
<!--          <template v-slot:option="scope">-->
<!--            <q-item style="max-width: 200px;" v-bind="scope.itemProps" v-on="scope.itemEvents">-->
<!--              <q-item-section>-->
<!--                <q-item-label>{{ scope.opt[`category_${tab}`] }}</q-item-label>-->
<!--              </q-item-section>-->
<!--            </q-item>-->
<!--          </template>-->
<!--          <template v-slot:selected-item="scope">-->
<!--            <q-item v-bind="scope.itemProps" v-on="scope.itemEvents">-->
<!--              <q-item-section>-->
<!--                <q-item-label>{{ scope.opt[`category_${tab}`] }}</q-item-label>-->
<!--              </q-item-section>-->
<!--            </q-item>-->
<!--          </template>-->
<!--        </q-select>-->

        <default-input :input-data="{ component: 'productCreate', inputName: 'discount_price',placeholder: 'Скидка' }"
                       label="Скидка" placeholder= 'Скидка' name="discount_price"
          type="text" />
      </q-card-section>
      <q-card-section class=" q-pb-none q-mt-md card__section__two">
        <q-input v-for="(item, index) in attributeRender"
                       :key="index"
                       v-model="attribute[`about_${tab}_${index}`]"
                 :label="item[`attribute_${tab}`]"
                        />
        <p class=" text-weight-bold">Описание</p>
        <q-editor v-model="store.about[`about_${tab}`]"
                  :toolbar="[['bold', 'italic', 'strike', 'underline', 'left', 'center', 'right', 'link'],]"
                  height="140px"
                  max-height="140px"
                  placeholder="Введите Описание продукта"
                  min-height="5rem" style="border-radius: 10px;" />
        <p class="text-weight-bold title">Картинка</p>
        <div class="card__img">
          <div class="dropzone" @drop.prevent="handleDrop" @dragover.prevent>
            <div class="img__container">
              <q-img alt="img" class="img__main" height="68px" src="/src/assets/upload_img.png" width="68px" />
              <span class="q-mt-sm">Загрузите изображения продукта</span>
            </div>
          </div>
          <div class="row flex flex-left q-mb-sm">
            <div class="flex flex-center q-mb-sm  card__uploud__img " v-for="object in store.images" :key="object.link">
              <q-img :src="`${object.link}`" alt="img" fit="cover" width="100%" height="100%" class="q-ma-sm"
                style="border-radius: 15px">
                <div class="absolute-top icon__card">
                  <div class="icon__item">
                    <q-img name="uploud" class="icon__upload"  src="/src/assets/fi_upload-cloud.png" />
                  </div>
                  <div class="icon__item">
                    <q-img name="delete" class="icon__upload" src="/src/assets/trash.png"
                      @click="store.images.splice(store.images.indexOf(object), 1)" />
                  </div>
                </div>
              </q-img>
            </div>
          </div>
        </div>
      </q-card-section>

    </q-card-section>
    <div class="row q-mt-lg no-wrap  q-mx-auto" style="width: 60%;gap: 20px;">
      <q-space />
      <q-btn color="indigo-10" flat label="Отменить" style="border-radius: 12px;"
        class="full-width q-py-sm bg-grey-2  q-px-xl q-mr-md" no-caps />
      <q-btn color="white" flat label="Сохранить" style="border-radius: 12px;"
        @click="store.postList()"
        class="full-width q-py-sm  q-px-xl bg-indigo-10" no-caps />
    </div>
  </q-card>
</template>


<style lang="scss">

.icon {
  &__card {
    width: 100%;
    display: flex;
    justify-content: right;
  }

  &__item {
    margin-right: 8px;
    margin-top: 8px;
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 8px;
  }

  &__upload {
    width: 18px;
    height: 18px;
    cursor: pointer;
  }

}

.title {
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 10px;
}

.dropzone {
  border: 1px dashed #ccc;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
}

.filed {
  width: 100%;
  height: 200px;
}
.q-card.card__dialog{
  border-radius: 15px;
}
.card {
  border-radius: 10px;

  .q-dialog__inner--minimized {
    border-radius: 30px;
  }
  &__dialog {
    width: 1000px;
  }
  &__uploud__img {
    width: 163px;
    height: 116px;
    border-radius: 20px;
  }

  .q-img__content>div {
    padding: 0;
    background: none;
  }

  .q-field--auto-height.q-field--dense .q-field__control,
  .q-field--auto-height.q-field--dense .q-field__native {
    min-height: 30px;
    padding-top: 10px;
  }

  .q-field--outlined .q-field__control:before {
    border: none;
  }

  .q-field--outlined .q-field__control {
    border-radius: 10px;
    border: 0.1px solid #cecece;
  }

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
    width: 73%;
  }

  &__section__one {
    width: 40%;

  }

  &__section__two {
    width: 60%;
  }

  .input {
    width: 100%;
    margin-bottom: 15px;

    &__name {
      border-radius: 40px;
    }

  }

  &__img {

    .q-field--auto-height,
    .q-field__control,
    .q-field--auto-height,
    .q-field__native {
      width: 100%;
      min-height: 138px !important;
      border-radius: 10px;
    }

    .img {
      &__container {
        width: 100%;
        height: fit-content;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      &__main {
        width: 68px;
        height: 68px;
      }
    }
  }
}

.header__title {
  margin: 30px 0px 20px 30px;
  font-size: 24px;
  font-weight: bold;
}
</style>
