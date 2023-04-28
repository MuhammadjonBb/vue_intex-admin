<template>
  <!-- eslint-disable-next-line vue/no-mutating-props -->
  <q-dialog persistent v-model="modalStore.modal.users[props.modalName]">
    <q-card style="min-width: 730px;border-radius: 16px;" class="q-pa-md">
      <q-card-section class="row items-center">
        <div class="text-h6 font-weight-bold">{{ props.label }}</div>
        <q-space />
        <q-btn v-close-popup icon="close" text-color="primary" flat class="bg-grey-3"
          style="width: 32px;height: 32px; border-radius: 8px;" size="13px" @click="closeModal" />
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
        <div class="row no-wrap" style="gap:10px;">
          <DefaultInput :inputData="{ component: 'userDialog', inputName: 'name' }" name="name" label="Имя"
            placeholder="Введите ваше имя" type="text" />
          <DefaultInput :inputData="{ component: 'userDialog', inputName: 'surname' }" name="surname" label="Фамилия"
            placeholder="Введите вашу фамилию" type="text" />
          <DefaultInput :inputData="{ component: 'userDialog', inputName: 'email' }" name="email" label="Email"
            placeholder="Введите ваш email" type="text" />
        </div>

        <div class="row no-wrap" style="gap:20px;">
          <PhoneInput :inputData="{ component: 'userDialog', inputName: 'phone' }" />
          <DefaultInput :inputData="{ component: 'userDialog', inputName: 'birth' }" name="birth" label="Дата рождения"
            type="date" placeholder="" />
        </div>
        <div class="row no-wrap q-mb-md" style="gap: 20px;">
          <label for="status" class="full-width">
            Статус
            <q-select map-options emit-value dropdown-icon="expand_more" id="status"
              class="q-mt-md q-px-md border-reset q-py-xs full-width" dense borderless v-model="select.status"
              :options="statusArr" />
          </label>

          <label for="status" class="full-width">
            Роль Ползователя
            <q-select map-options emit-value dropdown-icon="expand_more" id="status"
              class="q-mt-md q-px-md border-reset q-py-xs full-width" dense borderless v-model="select.role"
              :options="roleArr" />
          </label>
        </div>
        <div class="row no-wrap" style="gap: 20px;">
          <password-input class="full-width" label="Введите новый пароль"
            :inputData="{ component: 'userDialog', inputName: 'newPassword' }" />
          <password-input class="full-width" label="Потвердите новый пароль"
            :inputData="{ component: 'userDialog', inputName: 'confirmPassword' }" />
        </div>

        <q-card-actions class="row q-mt-lg no-wrap" style="gap: 20px;">
          <q-btn @click="closeModal" color="indigo-10" flat label="Отменить" style="border-radius: 12px;"
            class="full-width q-py-sm bg-grey-2  q-px-xl q-mr-md" no-caps />
          <q-btn @click="save" color="white" flat label="Сохранить" style="border-radius: 12px;"
            class="full-width q-py-sm  q-px-xl bg-indigo-10" no-caps />
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
import { useModalStore } from 'src/stores/moduls/modal'
import { useInputStore } from 'src/stores/moduls/input'
import { useUsersStore } from 'src/stores/moduls/users'
import { getPrefix, removeCharacters } from 'src/helpers/formatPhoneNum'
import cutPhoneString from "src/helpers/cutPhoneString"

const usersStore = useUsersStore()
const inputStore = useInputStore()
const modalStore = useModalStore()

const statusArr = [
  { label: 'Активный', value: 'registered' },
  { label: 'Неактивный', value: 'not_registered' }
]
const roleArr = [
  { label: 'Админ', value: 'user' },
  { label: 'Супер админ', value: 'super_admin' },
]
const select = ref({
  status: statusArr[0].value,
  role: roleArr[0].value
})

const profileImg = ref()
const props = defineProps(['label', 'modalName', 'userData'])

watch(() => props.userData, () => {
  setInputValues()
})

if (props.modalName === 'edit') {
  inputStore.input.userDialog.name = props?.userData?.first_name
}

function save() {
  const data = ref({
    first_name: inputStore.input.userDialog.name,
    last_name: inputStore.input.userDialog.surname,
    password: inputStore.input.userDialog.newPassword,
    phone: getPrefix(inputStore.input.userDialog.phone) + removeCharacters(inputStore.input.userDialog.phone),
    birth_date: inputStore.input.userDialog.birth,
    user_image: 'image',
    email: inputStore.input.userDialog.email,
    is_active: true,
    gender: "male",
    ...select.value,
  })

  if (props.modalName === 'create') {
    usersStore.createUser(data.value).then(() => closeModal())
  } else if (props.modalName === 'edit') {
    const editObject = Object.assign(data.value, { id: props.userData.id })
    usersStore.editUser(editObject)
  }
}

function closeModal() {
  modalStore.closeModal()
  inputStore.input.userDialog.name = ''
  inputStore.input.userDialog.surname = ''
  inputStore.input.userDialog.phone = ''
  inputStore.input.userDialog.email = ''
  inputStore.input.userDialog.birth = ''
  inputStore.input.userDialog.newPassword = ''
  inputStore.input.userDialog.confirmPassword = ''
}

function setInputValues() {
  inputStore.input.userDialog.name = props?.userData?.first_name
  inputStore.input.userDialog.surname = props?.userData?.last_name
  inputStore.input.userDialog.email = props?.userData?.email
  inputStore.input.userDialog.phone = cutPhoneString(props?.userData?.phone)
}
</script>
