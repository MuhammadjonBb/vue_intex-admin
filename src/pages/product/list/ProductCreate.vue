<script lang="ts" setup>
import { ref, computed, reactive } from 'vue'
import DefaultInput from 'components/input/DefaultInput.vue'

const tab = ref('en-US')
const locales = [
  {
    name: 'Pусский язык',
    code: 'ru-RU'
  },
  { name: 'Узбекский язык', code: 'uz' },
  {
    name: 'Engilish', code: 'en-US'
  }
]
const code = ref('')
const images = reactive<object[]>([])

function handleDrop(event: object | any) {
  const files = event.dataTransfer.files
  console.log(files.length)
  for (let i = 0; i < files.length; i++) {
    if (images.length >= 4) return
    if (images.length === 0) {
      const path = URL.createObjectURL(files[i])
      images.push({ name: files[i].name, link: path })
    }
    else {
      for (let j = 0; j < images.length; j++) {
        if (images[j].name === files[i].name) continue
        else {
          const path = URL.createObjectURL(files[i])
          images.push({ name: files[i].name, link: path })
        }
      }
    }
  }

}

const category = ref({
  ru: '',
  uz: '',
  en: ''
})


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

const { next, current } = useCycle(locales, 0)
const editor = ref('What you see is <b>what</b> you get.')
const img = ref<String>('')
</script>
<template>
  <div class="header__title">
    Добавить продукт
  </div>
  <q-card class=" q-ma-md q-pa-lg card " flat>
    <div class=" text-center q-ml-md q-pt-md card__lang">
      <q-tabs v-model="tab" active-class="text-black" align="left" class="text-grey card__tabs" dense
        indicator-color="blue" @update:model-value="$i18n.locale = tab">
        <q-tab name="ru-RU" no-caps style="font-size: 12px">Pусский язык</q-tab>
        <q-tab name="uz-UZ" no-caps style="font-size: 12px">Узбекский язык</q-tab>
        <q-tab name="en-US" no-caps style="font-size: 12px">Engilish</q-tab>
      </q-tabs>
    </div>
    <q-card-section class="q-py-none" horizontal>
      <q-card-section class="q-py-none q-mr-none card__section__one">
        <h6 class="card__title ">{{ $t('product.productCreate.title') }}</h6>
        <default-input :input-data="{ component: 'productCreate', inputName: 'name' }" v-model="img"
          label="Название продукта" name="twitter" type="text" />
        <default-input :input-data="{ component: 'productCreate', inputName: 'price' }" label="Цена" name="twitter"
          type="text" />
        <span class="text-weight-medium q-my-sm" style="display: block;">Категория</span>

        <q-select v-model="category.ru" :options="['Категория 1', 'Категория 2', 'Категория 3']" behavior="menu"
          borderless menu-anchor="top start" class="input q-px-md"
          style="border: 1px solid #e5e5e5; border-radius: 12px;" />

        <default-input :input-data="{ component: 'productCreate', inputName: 'discount' }" label="Скидка" name="twitter"
          type="text" />
      </q-card-section>
      <q-card-section class=" q-pb-none q-mt-md card__section__two">
        <p class=" text-weight-bold">Описание</p>
        <q-editor v-model="editor" :toolbar="[
          ['bold', 'italic', 'strike', 'underline', 'left', 'center', 'right', 'link'],
        ]" height="140px" max-height="140px" min-height="5rem" style="border-radius: 10px;" />
        <p class="text-weight-bold title">Картинка</p>
        <div class="card__img">
          <div class="dropzone" @drop.prevent="handleDrop" @dragover.prevent>
            <div class="img__container">
              <q-img alt="img" class="img__main" height="68px" src="/src/assets/upload_img.png" width="68px" />
              <span class="q-mt-sm">Загрузите изображения продукта</span>
            </div>
          </div>
          <div class="row flex flex-left q-mb-sm">
            <div class="flex flex-center q-mb-sm  card__uploud__img " v-for="object in images" :key="object.link">
              <q-img :src="`${object.link}`" alt="img" fit="cover" width="100%" height="100%" class="q-ma-sm"
                style="border-radius: 15px">
                <div class="absolute-top icon__card">
                  <div class="icon__item">
                    <q-img name="delete" class="icon__upload" src="/src/assets/fi_upload-cloud.png" />
                  </div>
                  <div class="icon__item">
                    <q-img name="delete" class="icon__upload" src="/src/assets/trash.png"
                      @click="images.splice(images.indexOf(object), 1)" />
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

.card {
  border-radius: 10px;

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
    width: 70%;
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
