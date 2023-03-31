<template>
  <div class="confirm-sms">
    <h1 class="modal__title">Введите SMS-код</h1>
    <p class="q-mx-auto q-mb-md text-center" style="max-width: 85%;">
      Введите SMS-код, полученный на ваш номер телефона {{ 'PHONE NUMBER' }}
    </p>
    <div class="confirm-sms__input-group row ">
      <q-input outlined v-model="smsInputs[0]" class="confirm-sms__input" mask="#" @keyup="focusNext($event, 1)"
        ref="input1" />
      <q-input outlined v-model="smsInputs[1]" class="confirm-sms__input" mask="#" @keyup="focusNext($event, 2)"
        ref="input2" />
      <q-input outlined v-model="smsInputs[2]" class="confirm-sms__input" mask="#" @keyup="focusNext($event, 3)"
        ref="input3" />
      <q-input outlined v-model="smsInputs[3]" class="confirm-sms__input" mask="#" @keyup="focusNext($event, 4)"
        ref="input4" />
      <q-input outlined v-model="smsInputs[4]" class="confirm-sms__input" mask="#" @keyup="focusNext($event, 5)"
        ref="input5" />
      <q-input outlined v-model="smsInputs[5]" class="confirm-sms__input" mask="#" @keyup="focusNext($event, 6)"
        ref="input6" />
    </div>
    <q-btn label="Отправить СМС заново" flat color="accent" class=" q-ml-auto q-mb-sm float-right" type="button"></q-btn>
    <q-btn label="Потвердить" class="q-pa-sm q-mt-md" color="primary" style="width: 100%;" type="button"
      @click="$emit('toResetPasswordMode')" />
  </div>
</template>

<script setup>
import { defineEmits, ref } from 'vue'

defineEmits(['toResetPasswordMode'])

const smsInputs = ref(['', '', '', '', '', ''])
const input1 = ref(null)
const input2 = ref(null)
const input3 = ref(null)
const input4 = ref(null)
const input5 = ref(null)
const input6 = ref(null)

// eslint-disable-next-line space-before-function-paren
function focusNext(e, inputTndex) {
  const isNumber = /^\d+$/.test(Number(e.key))
  if (isNumber) {
    switch (inputTndex) {
      case 1:
        input2.value.focus()
        break
      case 2:
        input3.value.focus()
        break
      case 3:
        input4.value.focus()
        break
      case 4:
        input5.value.focus()
        break
      case 5:
        input6.value.focus()
        break
    }
  }
}
</script>
