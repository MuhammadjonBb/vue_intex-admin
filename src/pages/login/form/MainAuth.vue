<template>
  <div class="auth">
    <h1 class="modal__title">Авторизоваться</h1>
    <DefaultInput :rules="[(v: any) => !!v || $t('validation.required')]" name="name" v-model:text="form.email"
      label="Email" placeholder="Введите ваш email" type="text" />
    <PhoneInput :rules="[(v: any) => !!v || $t('validation.required')]" v-model:text="form.phone" />
    <password-input label="Введите пароль" v-model:text="form.password" />

    <div class="row" style="justify-content: space-between;">
      <q-checkbox v-model="isRememberCheck" label="Запомнить меня" />
      <q-btn label="Забыли пароль?" flat color="accent" type="button" @click="$emit('toResetMode')"></q-btn>
    </div>
    <q-btn label="Войти" class="q-pa-sm q-mt-md" style="width: 100%;" @click="login()" color="primary" type="button" />
  </div>
</template>

<script setup lang="ts">
import DefaultInput from 'src/components/input/DefaultInput.vue'
import PasswordInput from 'src/components/input/PasswordInput.vue'
import { useAuthStore } from 'src/stores/moduls/auth'
import { ref, Ref, defineEmits } from 'vue'
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router'
import PhoneInput from 'src/components/input/PhoneInput.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const router = useRouter()
const $q = useQuasar()

const store = useAuthStore()
const isRememberCheck: Ref<boolean> = ref(false)
defineEmits(['toResetMode'])

const form = ref({
  email: '',
  password: '',
  phone: '',
})

function login() {
  store.login(form.value).then(() => {
    $q.notify({
      group: false,
      type: 'positive',
      message: t('notification.user.authorized'),
      position: 'top-right',
    })
    router.push('/')
    form.value.email = ''
    form.value.password = ''
  }).catch(() => {
    $q.notify({
      group: false,
      type: 'negative',
      message: t('notification.user.authErr'),
      position: 'top-right',
    })
  })
}
</script>
