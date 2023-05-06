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
                <span class="q-mb-md text-dark">{{ $t('users.modal.loadAvatar') }}</span>
                <q-btn v-model="profileImg" type="a" @click="scope.pickFiles" flat no-caps text-color="blue-12"
                  style="background: rgba(55, 125, 255, 0.1); border-radius: 12px;">
                  <q-uploader-add-trigger />
                  <q-icon name="add_photo_alternate" class="q-mr-sm" />
                  {{ $t('users.modal.loadPhoto') }}
                </q-btn>
              </div>
            </template>

            <template #list="scope">
              <q-img :src="scope.files[0]?.__img?.src" alt="Profile image"
                :style="`${!scope.files.length ? 'border: 1px dashed #CDCDCD;' : ''}`" class="upload-img" />
              <q-img v-if="!scope.files.length" type="a" @click="scope.pickFiles" src="/src/assets/uploadIcon.svg"
                class="upload-preview" />
              <span v-if="!scope.files.length" style="color: #04009A; position: absolute;top: 70%;left: 25%;">
                <q-icon name="upload"></q-icon>
                {{
                  $t('users.modal.load')
                }}</span>
            </template>
          </q-uploader>

        </div>
        <div class="row no-wrap" style="gap:10px;">
          <DefaultInput :rules="[(v: any) => !!v || $t('validation.required')]" v-model:text="form.name" name="name"
            :label="$t('users.modal.inputs.name')" :placeholder="$t('placeholder.name')" type="text" />
          <DefaultInput :rules="[(v: any) => !!v || $t('validation.required')]" v-model:text="form.surname" name="surname"
            :label="$t('users.modal.inputs.surname')" :placeholder="$t('placeholder.surname')" type="text" />
          <DefaultInput :rules="[(v: any) => !!v || $t('validation.required')]" v-model:text="form.email" name="email"
            label="Email" :placeholder="$t('placeholder.email')" type="text" />
        </div>

        <div class="row no-wrap" style="gap:20px;">
          <PhoneInput :rules="[(v: any) => !!v || $t('validation.required')]" v-model:text="form.phone" />
          <DefaultInput :rules="[(v: any) => !!v || $t('validation.required')]" v-model:text="form.birth" name="birth"
            :label="$t('users.modal.inputs.birthday')" type="date" placeholder="" />
        </div>
        <div class="row no-wrap q-mb-md" style="gap: 20px;">
          <label for="status" class="full-width">
            {{ $t('users.modal.inputs.status') }}
            <q-select map-options emit-value dropdown-icon="expand_more" id="status"
              class="q-mt-md q-px-md border-reset q-py-xs full-width" dense borderless v-model="select.status"
              :options="statusArr" />
          </label>

          <label for="status" class="full-width">
            {{ $t('users.modal.inputs.role') }}
            <q-select map-options emit-value dropdown-icon="expand_more" id="status"
              class="q-mt-md q-px-md border-reset q-py-xs full-width" dense borderless v-model="select.role"
              :options="roleArr" />
          </label>
        </div>
        <div class="row no-wrap" style="gap: 20px;">
          <password-input class="full-width" :label="$t('password.new')"
            :inputData="{ component: 'userDialog', inputName: 'newPassword' }" />
          <password-input class="full-width" :label="$t('password.confirm')"
            :inputData="{ component: 'userDialog', inputName: 'confirmPassword' }" />
        </div>

        <q-card-actions class="row q-mt-lg no-wrap" style="gap: 20px;">
          <q-btn @click="closeModal" color="indigo-10" flat :label="$t('btn.cancel')" style="border-radius: 12px;"
            class="full-width q-py-sm bg-grey-2  q-px-xl q-mr-md" no-caps />
          <q-btn @click="save" color="white" flat :label="$t('btn.save')" style="border-radius: 12px;"
            class="full-width q-py-sm  q-px-xl bg-indigo-10" no-caps />
        </q-card-actions>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import DefaultInput from 'src/components/input/DefaultInput.vue'
import PhoneInput from 'src/components/input/PhoneInput.vue'
import PasswordInput from 'src/components/input/PasswordInput.vue'
import { useModalStore } from 'src/stores/moduls/modal'
import { useInputStore } from 'src/stores/moduls/input'
import { Notify } from 'quasar'
import { useI18n } from 'vue-i18n'
import { useUsersStore } from 'src/stores/moduls/users'
import { getPrefix, removeCharacters } from 'src/helpers/formatPhoneNum'
import cutPhoneString from "src/helpers/cutPhoneString"

const { t } = useI18n()
const usersStore = useUsersStore()
const inputStore = useInputStore()
const modalStore = useModalStore()

const form = ref({
  name: '',
  surname: '',
  email: '',
  phone: '',
  birth: '',
  newPassword: '',
  confirmPassword: ''
})

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
  form.value.name = props?.userData?.first_name
}

function save() {
  const data = ref({
    first_name: form.value.name,
    last_name: form.value.surname,
    password: form.value.newPassword,
    phone: getPrefix(form.value.phone) + removeCharacters(form.value.phone),
    birth_date: form.value.birth,
    user_image: 'image',
    email: form.value.email,
    is_active: true,
    gender: "male",
    ...select.value,
  })

  if (props.modalName === 'create') {
    usersStore.createUser(data.value).then(() => {
      closeModal()
      Notify.create({
        color: 'positive',
        textColor: 'white',
        icon: 'done',
        message: t('notification.users.created'),
        position: 'top-right',
      })
    }).catch(() => {
      Notify.create({
        color: 'negative',
        textColor: 'white',
        icon: 'warning',
        position: 'top-right',
        message: t('notification.users.createError'),
      })
    })
  } else if (props.modalName === 'edit') {
    const editObject = Object.assign(data.value, { id: Number(props.userData.id) })
    usersStore.editUser(editObject).then(() => {
      Notify.create({
        color: 'positive',
        textColor: 'white',
        icon: 'done',
        message: t('notification.users.edited'),
        position: 'top-right',
      })
    }).catch(() => {
      Notify.create({
        color: 'negative',
        textColor: 'white',
        icon: 'warning',
        message: t('notification.users.editError'),
        position: 'top-right',
      })
    })
  }
}

function closeModal() {
  modalStore.closeModal()
  form.value.name = ''
  form.value.surname = ''
  form.value.phone = ''
  form.value.email = ''
  form.value.birth = ''
  form.value.newPassword = ''
  form.value.confirmPassword = ''
}

function setInputValues() {
  form.value.name = props?.userData?.first_name
  form.value.surname = props?.userData?.last_name
  form.value.email = props?.userData?.email
  form.value.phone = cutPhoneString(props?.userData?.phone)
}
</script>

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
  width: 60px;
  height: 60px;
  left: 30%;
  top: 25%;
}

.upload-img {
  height: 100%;
  border-radius: 12px;
  width: 100%;
  border-radius: 12px;
}
</style>
