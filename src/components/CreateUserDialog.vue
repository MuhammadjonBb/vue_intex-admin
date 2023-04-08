<template>
  <q-dialog v-model="prompt" persistent>
    <q-card style="min-width: 730px;border-radius: 16px;" class="q-pa-md">
      <q-card-section>
        <div class="text-h6 font-weight-bold">Добавить пользоватея</div>
      </q-card-section>

      <q-card-section class="q-pt-none column">
        <div class="full-width q-mb-lg">
          <q-uploader accept="image/*" url="http://localhost:9005/users/upload" class="row" style="box-shadow: none;">

            <template #header="scope">
              <div class="bg-white column jusify-start">
                <span class="q-mb-md text-dark">Загрузите аватар</span>
                <q-btn v-model="profileImg" type="a" @click="scope.pickFiles" flat no-caps text-color="blue-12"
                  style="background: rgba(55, 125, 255, 0.1); border-radius: 12px;">
                  <q-uploader-add-trigger />
                  <q-icon name="add_photo_alternate" class="q-mr-sm" />
                  Загрузить фото
                </q-btn>
              </div>
            </template>

            <template #list="scope">
              <q-img :src="scope.files[0]?.__img?.src" alt="Profile image" style="height: 100%;width: 100%;" />
              <q-img v-if="!scope.files.length" type="a" @click="scope.pickFiles" src="/src/assets/uploadIcon.svg"
                class="upload-preview" />
            </template>
          </q-uploader>

        </div>
        <div class="row no-wrap" style="gap:20px;">
          <label for="name" class="font-weight-medium q-mb-md full-width" style="display: block;">
            Имя
            <q-input id="name" borderless v-model="dialog.name" placeholder="Введите ваше имя"
              class="q-mt-sm border-reset q-px-md" />
          </label>
          <label for="surname" class="font-weight-medium q-mb-md full-width" style="display: block;">
            Фамилия
            <q-input id="surname" borderless v-model="dialog.surname" placeholder="Введите ваше имя"
              class="q-mt-sm border-reset q-px-md" />
          </label>
        </div>

        <div class="row no-wrap" style="gap:20px;">
          <label for="tel" class="font-weight-medium full-width q-mb-md " style="display: block;">
            Номер телефона
            <q-input id="tel" borderless v-model="dialog.phone" placeholder="+998 (90) 123 45 67"
              class="q-mt-sm border-reset q-px-md" mask="+998 (##) ###-##-##" fill-mask>
              <template #prepend>
                <q-img src="/src/assets/uzb-svg.svg" width="22px" height="15px" />
              </template>
            </q-input>
          </label>

          <label for="birth" class="font-weight-medium q-mb-md full-width" style="display: block;">
            Дата рождение
            <q-input id="birth" type="date" borderless v-model="dialog.surname" placeholder="Введите ваше имя"
              class="q-mt-sm border-reset q-px-md" />
          </label>
        </div>
        <div class="row no-wrap" style="gap: 20px;">
          <label for="status" class="full-width">
            Статус
            <q-select dropdown-icon="expand_more" id="status" class="q-mt-md q-px-md border-reset q-py-xs full-width"
              dense borderless v-model="select.status" :options="statusArr" />
          </label>

          <label for="status" class="full-width">
            Роль Ползователя
            <q-select dropdown-icon="expand_more" id="status" class="q-mt-md q-px-md border-reset q-py-xs full-width"
              dense borderless v-model="select.role" :options="roleArr" />
          </label>
        </div>
        <div class="row no-wrap" style="gap: 20px;">
          <label for="password" class="font-weight-medium text-subtitle1 q-mb-md full-width" style="display: block;">
            Новый пароль
            <q-input placeholder="Введите новый пароль" id="password" v-model="newPassword.new" borderless
              :type="isPwd1 ? 'password' : 'text'" class="q-mt-sm border-reset q-px-md">
              <template v-slot:append>
                <q-icon :name="isPwd1 ? 'visibility_off' : 'visibility'" class="cursor-pointer"
                  @click="isPwd1 = !isPwd1" />
              </template>
            </q-input>
          </label>

          <label for="password" class="font-weight-medium text-subtitle1 q-mb-md full-width" style="display: block;">
            Потвердить новый пароль
            <q-input placeholder="Введите новый пароль" id="password" v-model="newPassword.confirm" borderless
              :type="isPwd2 ? 'password' : 'text'" class="q-mt-sm border-reset q-px-md">
              <template v-slot:append>
                <q-icon :name="isPwd2 ? 'visibility_off' : 'visibility'" class="cursor-pointer"
                  @click="isPwd2 = !isPwd2" />
              </template>
            </q-input>
          </label>
        </div>

        <div class="row q-mt-lg no-wrap" style="gap: 20px;">
          <q-btn v-close-popup color="indigo-10" flat label="Отменить" style="border-radius: 12px;"
            class="full-width q-py-sm bg-grey-2  q-px-xl q-mr-md" no-caps />
          <q-btn v-close-popup color="white" flat label="Сохранить" style="border-radius: 12px;"
            class="full-width q-py-sm  q-px-xl bg-indigo-10" no-caps />
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<style lang="scss">
.q-uploader {
  display: flex;
  width: 100% !important;
  margin-left: 0 !important;
  margin-right: 0 !important;
  flex-direction: row-reverse !important;
  gap: 20px;
}

.q-uploader__header {
  display: flex;
  width: 100% !important;
  margin-left: 0 !important;
  margin-right: 0 !important;
  background-color: white;
}

.q-uploader__list {
  width: 210px !important;
  margin-left: 0 !important;
  margin-right: 0 !important;
  padding: 0;
  border-radius: 12px;
  display: flex;
  width: 397px;
  height: 160px;
  align-self: stretch;
  border: 1px dashed #CDCDCD;
}

.upload-preview {
  position: absolute;
  width: 137px;
  height: 85px;
  left: 10px;
  top: 25%;
}
</style>
<script setup lang="ts">
import { ref, Ref } from 'vue'

const prompt = ref(true)
const statusArr = ['Актив', 'Не актив', 'Удален']
const roleArr = ['Админ', 'Супер Админ']
const profileImg = ref()

const dialog = ref({
  name: '',
  surname: '',
  phone: ''
})

const newPassword = ref({
  new: '',
  confirm: ''
})

const isPwd1: Ref<boolean> = ref(true)
const isPwd2: Ref<boolean> = ref(true)

const select = ref({
  status: statusArr[0],
  role: roleArr[0]
})
</script>
