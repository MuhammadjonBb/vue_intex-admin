<script lang="ts" setup>
import { ref, computed, reactive, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import DefaultInput from 'components/input/DefaultInput.vue'
import { useListStore } from "stores/moduls/products/list";
import { api } from 'boot/axios'

const store = useListStore()
const route = <any>useRoute()
const router = useRouter()
const tab = ref('uz')
const locales = [
  { name: 'Pусский язык', code: 'ru-RU' },
  { name: 'Узбекский язык', code: 'uz' },
  { name: 'Engilish', code: 'en-US' }
]
let attributeRender = reactive<any>([])

console.log(route.path.slice(0, 15), 'route.path')
store.getListId(route.params.id)

async function attributeSelect(index: number) {
  if (Object.keys(store.attribute).length === 1) {
    console.log(store.attribute[`attribute_${index}`], 'store.attribute[`attribute_${index}`]')
    store.attribute_id = []
    store.attribute_id.push(store.attribute[`attribute_${index}`].attribute_id
    )
  } else {
    store.attribute_id = []
    for (let i = 0; i < Object.keys(store.attribute).length; i++) {
      console.log(store.attribute[`attribute_${i}`].id, 'id')
      store.attribute_id.push(store.attribute[`attribute_${i}`].attribute_id
      )
    }
  }
}

async function deleteImg(img: any) {
  await store.deleteImg(img)
}

async function atributeUbdate() {
  if (attributeRender.length <= 0) {

    attributeRender.push(store.attribut)
    await api.get(`attributes/${store.attribut.id}`).then((res: any) => {
      attributeRender[0].sub_atributes = res.data
    })
  } else {

    const existingObj = attributeRender.find((obj: any) => obj.id === store.attribut.id);
    if (!existingObj) {
      attributeRender.push(store.attribut)
      for (let i = 1; i < attributeRender.length; i++) {
        api.get(`attributes/${attributeRender[i].id}`).then((res: any) => {
          attributeRender[i].sub_atributes = res.data
        })
      }
    }
  }
}

async function handleDrop(event: object | any) {
  await store.setImages(event)
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
  store.getStatus()
  store.getImg()
})
</script>
<template>
  <div class="header__title">
    Добавить продукт
  </div>
  <q-card class=" q-ma-md q-pa-lg card " flat>
    <div class=" text-center q-ml-md q-pt-md card__lang">
      <q-tabs v-model="tab" active-class="text-black" align="left" class="text-grey card__tabs" dense
        indicator-color="blue">
        <q-tab name="ru" no-caps style="font-size: 12px">Pусский язык</q-tab>
        <q-tab name="uz" no-caps style="font-size: 12px">Узбекский язык</q-tab>
        <q-tab name="en" no-caps style="font-size: 12px">Engilish</q-tab>
      </q-tabs>
    </div>
    <q-card-section class="q-py-none" horizontal>
      <q-card-section class="q-py-none q-mr-none card__section__one">
        <h6 class="card__title ">{{ $t('product.productCreate.title') }}</h6>
        <default-input :input-data="{ component: 'productCreate', inputName: `name_${tab}` }"
          :rules="[val => !!val || $t('validation.required')]" label="Название продукта" name="name"
          placeholder="Каркасный басейн Intex прямоуголь.." type="text" />
        <div class="flex justify-between items-center card__title " v-if="route.path.split('/')[2] === 'create'">
          <span class="text-weight-bold text-h6">Atribute</span>
          <span class="text-weight-medium text-blue-4 text-subtitle1 cursor-pointer" @click="store.attributDialog = true">
            <q-icon class="q-mr-sm" color="blue-4" name="add" size="20px" />Добавить атрибуть
          </span>
        </div>

        <q-dialog v-model="store.attributDialog" v-if="route.path.split('/')[2] === 'create'">
          <q-card class="card__dialog">
            <q-card-section>
              <div class="row items-center no-wrap">
                <div class="col">
                  <div class="text-h6" style="font-weight: 800;">Добавить атрибут</div>
                </div>

                <div class="col-auto">
                  <q-btn color="grey-7" flat icon="close" round @click="store.attributDialog = false" />
                </div>
              </div>
            </q-card-section>
            <q-card-section class="q-pt-none">
              <div class="q-pb-sm">Тип атрибуты</div>
              <q-select v-model="store.attribut" :options="store.attributes"
                :rules="[val => !!val || $t('validation.required')]" dense outlined style="max-width: 300px"
                @update:model-value="atributeUbdate">
                <template v-slot:option="scope">
                  <q-item v-bind="scope.itemProps" v-on="scope.itemEvents">
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
                <q-btn v-close-popup class="full-width q-py-sm bg-grey-2  q-px-xl q-mr-md" color="indigo-10" flat
                  label="Отменить" no-caps style="border-radius: 12px;" />
                <q-btn class="full-width q-py-sm  q-px-xl bg-indigo-10" color="white" flat label="Добавить" no-caps
                  style="border-radius: 12px;" @click="store.postList(route.path.slice(0, 15))" />
              </div>
            </q-card-actions>
          </q-card>
        </q-dialog>

        <default-input :input-data="{ component: 'productCreate', inputName: `price` }" :label="'Цена'" :placeholder="0"
          :rules="[val => !!val || $t('validation.required'), val => /^\d+$/.test(val) || 'Input must contain only numeric characters']"
          name="prise" type="text" />
        <default-input :input-data="{ component: 'productCreate', inputName: 'discount_price', placeholder: 'Скидка' }"
          :placeholder='"Скидка"' :rules="[val => /^\d+$/.test(val) || 'Input must contain only numeric characters']"
          label="Скидка" name="discount_price" type="text" />
        <default-input :input-data="{ component: 'productCreate', inputName: `count` }" :placeholder="0"
          :rules="[val => !!val || $t('validation.required'), val => !!val || 'Can not be emty', val => /^\d+$/.test(val) || 'Input must contain only numeric characters']"
          label="Кол-во" name="count" type="text" />

        <span class="text-weight-medium q-my-sm" style="display: block;">Категория</span>

        <q-select v-model="store.category" :options="store.categories"
          :rules="[val => !!val || $t('validation.required'), val => !!val || $t('validation.required')]" behavior="menu"
          class="input" dense label="Категория" menu-anchor="top start" outlined>
          <template v-slot:option="scope">
            <q-item dense v-bind="scope.itemProps" v-on="scope.itemEvents">
              <q-item-section>
                <q-item-label>{{ scope.opt[`category_${tab}`] }}</q-item-label>
              </q-item-section>
            </q-item>
          </template>
          <template v-slot:selected-item="scope">
            <q-item dense v-bind="scope.itemProps" v-on="scope.itemEvents">
              <q-item-section>
                <q-item-label>{{ scope.opt[`category_${tab}`] }}</q-item-label>
              </q-item-section>
            </q-item>
          </template>
        </q-select>

      </q-card-section>
      <q-card-section class=" q-pb-none q-mt-md card__section__two">
        <q-select v-model="store.status" :options="store.statuses" :rules="[val => !!val || $t('validation.required')]"
          behavior="menu" class="input q-px-md" dense label="Status" menu-anchor="top start" outlined>
          <template v-slot:option="scope">
            <q-item dense v-bind="scope.itemProps" v-on="scope.itemEvents">
              <q-item-section>
                <q-item-label>{{ scope.opt[`status_${tab}`] }}</q-item-label>
              </q-item-section>
            </q-item>
          </template>
          <template v-slot:selected-item="scope">
            <q-item dense v-bind="scope.itemProps" v-on="scope.itemEvents">
              <q-item-section>
                <q-item-label>{{ scope.opt[`status_${tab}`] }}</q-item-label>
              </q-item-section>
            </q-item>
          </template>
        </q-select>
        <div v-for="(item, index) in attributeRender" :key="index" v-if="route.path.split('/')[2] === 'create'">
          <p class="text-capitalize text-weight-medium q-my-sm">
            {{ item[`attribute_${tab}`] }}</p>
          <q-select v-model="store.attribute[`attribute_${index}`]" :label="item[`attribute_${tab}`]"
            :options="item.sub_atributes" :rules="[val => !!val || 'Field is requiredss']" class="q-my-md" dense outlined
            @update:model-value="attributeSelect(index)">
            <template v-slot:option="scope">
              <q-item v-bind="scope.itemProps" v-on="scope.itemEvents">
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
        </div>

        <p class=" text-weight-bold">Описание</p>
        <q-editor v-model="store.about[`about_${tab}`]"
          :toolbar="[['bold', 'italic', 'strike', 'underline', 'left', 'center', 'right', 'link'],]" height="140px"
          max-height="140px" min-height="5rem" placeholder="Введите Описание продукта" style="border-radius: 10px;" />
        <p class="text-weight-bold title">Картинка</p>
        <div class="card__img">
          <div class="dropzone" @drop.prevent="handleDrop" @dragover.prevent>
            <div class="img__container" style="z-index: -1">
              <q-img alt="img" class="img__main" height="68px" src="../../../assets/upload_img.png" width="68px" />
              <span class="q-mt-sm">Загрузите изображения продукта</span>
            </div>
          </div>
          <div class="row flex flex-left q-mb-sm ">
            <div v-for="link in store.images" :key="link" class="flex flex-center q-mb-sm  card__uploud__img ">
              <q-img :src="`https://intex-shop-production.up.railway.app/${link}`" alt="img" class="q-ma-sm" fit="cover"
                height="100%" style="border-radius: 15px" width="100%">
                <div class="absolute-top icon__card">
                  <div class="icon__item">
                    <q-img class="icon__upload" name="uploud" src="../../../assets/fi_upload-cloud.png" />
                  </div>
                  <div class="icon__item">
                    <q-img class="icon__upload" name="delete" src="../../../assets/trash.png" @click="deleteImg(link)" />
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
      <q-btn class="full-width q-py-sm bg-grey-2  q-px-xl q-mr-md" color="indigo-10" flat label="Отменить" no-caps
        style="border-radius: 12px;" />
      <q-btn class="full-width q-py-sm  q-px-xl bg-indigo-10" color="white" flat label="Сохранить" no-caps
        style="border-radius: 12px;" @click="store.postList(route.path)" />
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

.q-card.card__dialog {
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
