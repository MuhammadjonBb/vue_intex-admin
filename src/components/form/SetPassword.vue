<template>
  <div class="reset-password">
    <h1 class="modal__title">Введите новый пароль</h1>

    <label for="password" class="font-weight-medium text-subtitle1 q-mb-md " style="display: block;">
      Новый пароль
      <q-input placeholder="Введите новый пароль" id="password" v-model="newPassword.new" outlined
        :type="isPwd1 ? 'password' : 'text'" class="q-mt-sm">
        <template v-slot:append>
          <q-icon :name="isPwd1 ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd1 = !isPwd1" />
        </template>
      </q-input>
    </label>

    <label for="password" class="font-weight-medium text-subtitle1 q-mb-md " style="display: block;">
      Потвердить новый пароль
      <q-input placeholder="Введите новый пароль" id="password" v-model="newPassword.confirm" outlined
        :type="isPwd2 ? 'password' : 'text'" class="q-mt-sm">
        <template v-slot:append>
          <q-icon :name="isPwd2 ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd2 = !isPwd2" />
        </template>
      </q-input>
    </label>
    <q-btn label="Сохранить" class="q-pa-sm q-mt-md" type="button" color="primary" style="width: 100%;"
      @click="$emit('toLogin')" />
  </div>
</template>

<script setup lang="ts">
import { ref, Ref, defineEmits } from 'vue'

const newPassword = {
  new: '',
  confirm: ''
}
const isPwd1: Ref<boolean> = ref(true)
const isPwd2: Ref<boolean> = ref(true)

defineEmits(['toResetMode'])
</script>
