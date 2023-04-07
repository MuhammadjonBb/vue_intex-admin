<template>
  <div class="">
    <h1 class="modal__title">Сброс пароля</h1>
    <p class="q-mx-auto q-mb-md text-center " style="max-width: 85%;">
      Для сброса пароля на ваш номер телефона придет SMS-сообщение, через которое вы сможете обновить пароль.
    </p>
    <label for="tel" class="font-weight-medium text-subtitle1 q-mb-md " style="display: block;">
      Номер телефона
      <q-input id="tel" borderless v-model="tel" placeholder="+998 (90) 123 45 67" class="q-px-md border-reset q-mt-sm"
        mask="+998 (##) ###-##-##" fill-mask>
        <template #prepend>
          <q-img src="/src/assets/uzb-svg.svg" width="22px" height="15px" />
        </template>
      </q-input>
    </label>
    <q-btn label="Отправить СМС" class="reset__sms q-pa-sm q-mt-md" color="primary" style="width: 100%;" type="button"
      @click="$emit('toSmsMode')" />
  </div>
</template>

<script setup lang="ts">
import { defineEmits, ref, Ref } from 'vue'

const tel: Ref<string> = ref('')

defineEmits(['toSmsMode'])
</script>
