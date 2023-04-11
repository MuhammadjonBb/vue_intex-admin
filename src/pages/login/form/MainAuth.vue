<template>
  <div class="auth">
    <h1 class="modal__title">Авторизоваться</h1>
    <DefaultInput name="name" label="Имя" v-model="form.name" placeholder="Введите ваше имя" type="text"
      @input="onNameInput" />

    <password-input label="Введите пароль" @input="onPasswordInput" v-model="form.password" />

    <div class="row" style="justify-content: space-between;">
      <q-checkbox v-model="isRememberCheck" label="Запомнить меня" />
      <q-btn label="Забыли пароль?" flat color="accent" type="button" @click="$emit('toResetMode')"></q-btn>
    </div>
    <q-btn label="Войти" class="q-pa-sm q-mt-md" style="width: 100%;" color="primary" type="submit" />
  </div>
</template>

<script setup lang="ts">
import DefaultInput from 'src/components/input/DefaultInput.vue'
import PasswordInput from 'src/components/input/PasswordInput.vue'
import { ref, Ref, defineEmits } from 'vue'

interface IForm {
  name: string
  password: string
}

const form: Ref<IForm> = ref({
  name: '',
  password: ''
})

const isRememberCheck: Ref<boolean> = ref(false)

defineEmits(['toResetMode'])

// eslint-disable-next-line space-before-function-paren
function onNameInput(e: { target: { value: string } }) {
  form.value.name = e.target.value
}

// eslint-disable-next-line space-before-function-paren
function onPasswordInput(e: { target: { value: string } }) {
  form.value.password = e.target.value
}
</script>
