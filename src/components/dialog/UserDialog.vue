<template>
  <!-- eslint-disable-next-line vue/no-mutating-props -->
  <q-dialog :="promptVal" persistent v-model="_promptVal">
    <q-card style="min-width: 730px;border-radius: 16px;" class="q-pa-md">
      <q-card-section class="row items-center">
        <div class="text-h6 font-weight-bold">{{ label }}</div>
        <q-space />
        <q-btn v-close-popup icon="close" text-color="primary" flat class="bg-grey-3"
          style="width: 32px;height: 32px; border-radius: 8px;" size="13px" @click="$emit('onCLoseModal')" />
      </q-card-section>

      <q-card-section class="q-pt-none column">
        <div class="full-width q-mb-lg">
          <q-uploader accept="image/*" url="http://localhost:9005/users/upload" class="row" style="box-shadow: none;">

            <template #header="scope">
              <div class="bg-white column" style="justify-content: center;">
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
              <q-img :src="scope.files[0]?.__img?.src" alt="Profile image"
                :style="`${!scope.files.length ? 'border: 1px dashed #CDCDCD;' : ''}`" class="upload-img" />
              <q-img v-if="!scope.files.length" type="a" @click="scope.pickFiles" src="/src/assets/uploadIcon.svg"
                class="upload-preview" />
            </template>
          </q-uploader>

        </div>
        <div class="row no-wrap" style="gap:20px;">
          <DefaultInput name="name" label="Имя" v-model="dialog.name" placeholder="Введите ваше имя" type="text"
            @input="onNameInput" />
          <DefaultInput name="surname" label="Фамилия" v-model="dialog.surname" placeholder="Введите вашу фамилию"
            type="text" @input="onSurnameInput" />
        </div>

        <div class="row no-wrap" style="gap:20px;">
          <PhoneInput v-model="dialog.phone" @input="onPhoneInput" />
          <DefaultInput name="birth" label="Дата рождения" v-model="dialog.birth" type="date" placeholder=""
            @input="onBirthInput" />
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
          <password-input class="full-width" label="Введите новый пароль" @input="onNewPasswordInput"
            v-model="newPassword.new" />
          <password-input class="full-width" label="Потвердите новый пароль" @input="onConfirmPasswordInput"
            v-model="newPassword.confirm" />
        </div>

        <q-card-actions class="row q-mt-lg no-wrap" style="gap: 20px;">
          <q-btn v-close-popup @click="$emit('onCloseModal')" color="indigo-10" flat label="Отменить"
            style="border-radius: 12px;" class="full-width q-py-sm bg-grey-2  q-px-xl q-mr-md" no-caps />
          <q-btn v-close-popup @click="$emit('onCloseModal')" color="white" flat label="Сохранить"
            style="border-radius: 12px;" class="full-width q-py-sm  q-px-xl bg-indigo-10" no-caps />
        </q-card-actions>
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
  display: flex;
  width: 397px;
  height: 160px;
  align-self: stretch;
}

.upload-preview {
  position: absolute;
  width: 137px;
  height: 85px;
  left: 10px;
  top: 25%;
}

.upload-img {
  height: 100%;
  border-radius: 12px;
  width: 100%;
  border-radius: 12px;
}
</style>
<script setup lang="ts">
import { ref, watch } from 'vue'
import DefaultInput from 'src/components/input/DefaultInput.vue'
import PhoneInput from 'src/components/input/PhoneInput.vue'
import PasswordInput from 'src/components/input/PasswordInput.vue'

const statusArr = ['Актив', 'Не актив', 'Удален']
const roleArr = ['Админ', 'Супер Админ']
const profileImg = ref()

const props = defineProps(['label', 'promptVal'])
const _promptVal = ref(false)

const dialog = ref({
  name: '',
  surname: '',
  phone: '',
  birth: ''
})

const newPassword = ref({
  new: '',
  confirm: ''
})
const select = ref({
  status: statusArr[0],
  role: roleArr[0]
})

// eslint-disable-next-line space-before-function-paren
function onNameInput(e: { target: { value: string } }) {
  dialog.value.name = e.target.value
}
// eslint-disable-next-line space-before-function-paren
function onSurnameInput(e: { target: { value: string } }) {
  dialog.value.surname = e.target.value
}
// eslint-disable-next-line space-before-function-paren
function onPhoneInput(e: { target: { value: string } }) {
  dialog.value.phone = e.target.value
}
// eslint-disable-next-line space-before-function-paren
function onBirthInput(e: { target: { value: string } }) {
  dialog.value.birth = e.target.value
}
// eslint-disable-next-line space-before-function-paren
function onNewPasswordInput(e: { target: { value: string } }) {
  newPassword.value.new = e.target.value
}
// eslint-disable-next-line space-before-function-paren
function onConfirmPasswordInput(e: { target: { value: string } }) {
  newPassword.value.confirm = e.target.value
}

watch(props, () => {
  _promptVal.value = props.promptVal
})
</script>
