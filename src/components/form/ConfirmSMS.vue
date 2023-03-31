<template>
  <div class="confirm-sms">
    <h1 class="modal__title">Введите SMS-код</h1>
    <p class="q-mx-auto q-mb-md text-center" style="max-width: 85%;">
      Введите SMS-код, полученный на ваш номер телефона {{ 'PHONE NUMBER' }}
    </p>
    <div class="confirm-sms__input-group row ">
      <q-input outlined v-model="smsInputs[0]" class="confirm-sms__input" mask="#" />
      <q-input outlined v-model="smsInputs[1]" class="confirm-sms__input" mask="#" />
      <q-input outlined v-model="smsInputs[2]" class="confirm-sms__input" mask="#" />
      <q-input outlined v-model="smsInputs[3]" class="confirm-sms__input" mask="#" />
      <q-input outlined v-model="smsInputs[4]" class="confirm-sms__input" mask="#" />
      <q-input outlined v-model="smsInputs[5]" class="confirm-sms__input" mask="#" />
    </div>
    <q-btn label="Отправить СМС заново" flat color="accent" class=" q-ml-auto q-mb-sm float-right" type="button"></q-btn>
    <q-btn label="Потвердить" class="q-pa-sm q-mt-md" color="primary" style="width: 100%;" type="button"
      @click="$emit('toResetPasswordMode')" />
  </div>
</template>

<script setup lang="ts">
import { defineEmits, ref, Ref } from 'vue'

const smsInputs: Ref<string[]> = ref(['', '', '', '', '', ''])

defineEmits(['toResetPasswordMode'])
</script>
