<template>
  <div class="auth">
    <h1 class="modal__title">Авторизоваться</h1>

    <label for="name" class="font-weight-medium text-subtitle1 q-mb-md " style="display: block;">
      Имя
      <q-input id="name" outlined v-model="form.name" placeholder="Введите ваше имя" class="q-mt-sm" />
    </label>

    <label for="password" class="font-weight-medium text-subtitle1 q-mb-md " style="display: block;">
      Пароль
      <q-input placeholder="Введите ваш пароль" id="password" v-model="form.password" outlined
        :type="isPwd ? 'password' : 'text'" class="q-mt-sm">
        <template v-slot:append>
          <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
        </template>
      </q-input>
    </label>

    <div class="row" style="justify-content: space-between;">
      <q-checkbox v-model="isRememberCheck" label="Запомнить меня" />
      <q-btn label="Забыли пароль?" flat color="accent" type="button" @click="$emit('toResetMode')"></q-btn>
    </div>
    <q-btn label="Войти" class="q-pa-sm q-mt-md" style="width: 100%;" color="primary" type="submit" />
  </div>
</template>

<script setup lang="ts">
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
const isPwd: Ref<boolean> = ref(true)
defineEmits(['toResetMode'])
</script>
