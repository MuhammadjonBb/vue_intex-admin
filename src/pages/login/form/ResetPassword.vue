<template>
  <div class="">
    <h1 class="modal__title">Сброс пароля</h1>
    <p class="q-mx-auto q-mb-md text-center " style="max-width: 85%;">
      Для сброса пароля на ваш номер телефона придет SMS-сообщение, через которое вы сможете обновить пароль.
    </p>
    <PhoneInput :rules="[(v: any) => !!v || $t('validation.required')]" v-model:text="phone" />
    <q-btn label="Отправить СМС" class="reset__sms q-pa-sm q-mt-md" color="primary" style="width: 100%;" type="button"
      @click="$emit('toSmsMode')" />
  </div>
</template>

<script setup lang="ts">
import PhoneInput from 'src/components/input/PhoneInput.vue'
import { defineEmits, ref, Ref } from 'vue'

const phone = ref('')
defineEmits(['toSmsMode'])
</script>
