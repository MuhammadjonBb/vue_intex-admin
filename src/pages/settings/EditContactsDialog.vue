<template>
  <q-dialog :="promptVal" v-model="_promptVal" persistent>
    <q-card style="min-width: 700px;border-radius: 16px;" class="q-pa-md">
      <q-card-section class="row items-center">
        <div class="text-h6 font-weight-bold">Изменить информацию</div>
        <q-space />
        <q-btn v-close-popup icon="close" text-color="primary" flat class="bg-grey-3"
          style="width: 32px;height: 32px; border-radius: 8px;" size="13px" @click="$emit('onCLoseModal')" />
      </q-card-section>

      <q-card-section class="q-pt-none column">
        <default-input v-model="dialog.address" name="address" type="text" label="Адрес" @input="onAddressInput" />

        <div class="row no-wrap" style="gap: 20px;">
          <phone-input @input="onPhoneInput" v-model="dialog.phone" class="fullwdith" />
          <default-input v-model="dialog.email" name="email" type="text" label="E-mail" @input="onEmailInput" />
        </div>

        <default-input v-model="dialog.schedule" name="schedule" type="text" label="График работы"
          @input="onScheduleInput" style="max-width: 50%;" />
        <div class="row q-mt-lg no-wrap" style="gap: 20px">
          <q-space />
          <q-btn @click="$emit('onCLoseModal')" v-close-popup color="indigo-10" flat label="Отменить"
            style="border-radius: 12px;" class="q-py-sm full-width bg-grey-2  q-px-xl q-mr-md" no-caps />
          <q-btn @click="$emit('onCLoseModal')" v-close-popup color="white" flat label="Сохранить"
            style="border-radius: 12px;" class="q-py-sm full-width  q-px-xl bg-indigo-10" no-caps />
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import DefaultInput from 'src/components/input/DefaultInput.vue'
import PhoneInput from 'src/components/input/PhoneInput.vue'

const props = defineProps(['promptVal'])
const dialog = ref({
  address: '',
  phone: '',
  email: '',
  schedule: ''
})
const _promptVal = ref(false)

// eslint-disable-next-line space-before-function-paren
function onAddressInput(e: { target: { value: string } }) {
  dialog.value.address = e.target.value
}
// eslint-disable-next-line space-before-function-paren
function onPhoneInput(e: { target: { value: string } }) {
  dialog.value.phone = e.target.value
}
// eslint-disable-next-line space-before-function-paren
function onScheduleInput(e: { target: { value: string } }) {
  dialog.value.schedule = e.target.value
}
// eslint-disable-next-line space-before-function-paren
function onEmailInput(e: { target: { value: string } }) {
  dialog.value.email = e.target.value
}
watch(props, () => {
  _promptVal.value = props.promptVal
})
</script>
