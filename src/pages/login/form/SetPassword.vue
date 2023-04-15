<template>
  <div class="reset-password">
    <h1 class="modal__title">Введите новый пароль</h1>

    <password-input label="Введите новый пароль" :inputData="{ component: 'setPassword', inputName: 'newPassword' }" />
    <password-input label="Потвердите новый пароль"
      :inputData="{ component: 'setPassword', inputName: 'confirmPassword' }" />

    <q-btn label="Сохранить" class="q-pa-sm q-mt-md" type="button" color="primary" style="width: 100%;"
      @click="$emit('toLogin')" />
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue'
import PasswordInput from 'src/components/input/PasswordInput.vue'

defineEmits(['toResetMode'])
</script>
