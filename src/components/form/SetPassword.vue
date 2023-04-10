<template>
  <div class="reset-password">
    <h1 class="modal__title">Введите новый пароль</h1>

    <password-input label="Введите новый пароль" @input="onNewPasswordInput" v-model="newPassword.new" />
    <password-input label="Потвердите новый пароль" @input="onConfirmPasswordInput" v-model="newPassword.confirm" />

    <q-btn label="Сохранить" class="q-pa-sm q-mt-md" type="button" color="primary" style="width: 100%;"
      @click="$emit('toLogin')" />
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue'
import PasswordInput from 'src/components/input/PasswordInput.vue'

const newPassword = ref({
  new: '',
  confirm: ''
})

defineEmits(['toResetMode'])

// eslint-disable-next-line space-before-function-paren
function onNewPasswordInput(e: { target: { value: string } }) {
  newPassword.value.new = e.target.value
}

// eslint-disable-next-line space-before-function-paren
function onConfirmPasswordInput(e: { target: { value: string } }) {
  newPassword.value.confirm = e.target.value
}
</script>
