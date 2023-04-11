<template>
  <q-dialog :="promptVal" v-model="_promptVal" persistent>
    <q-card style="min-width: 700px;border-radius: 16px;" class="q-pa-md">
      <q-card-section class="row items-center">
        <div class="text-h6 font-weight-bold">Добавить обратную связь</div>
        <q-space />
        <q-btn v-close-popup icon="close" text-color="primary" flat class="bg-grey-3"
          style="width: 32px;height: 32px; border-radius: 8px;" size="13px" @click="$emit('onCLoseModal')" />
      </q-card-section>

      <q-card-section class="q-pt-none column">
        <div class="row no-wrap" style="gap: 20px;">
          <default-input v-model="dialog.name" name="name" placeholder="Введите ваше имя" type="text" label="Имя"
            @input="onNameInput" />

          <phone-input @input="onPhoneInput" v-model="dialog.phone" />
        </div>
        <div class="row q-mt-lg">
          <q-space />
          <q-btn @click="$emit('onCLoseModal')" v-close-popup color="indigo-10" flat label="Отменить"
            style="border-radius: 12px;" class="q-py-sm bg-grey-2  q-px-xl q-mr-md" no-caps />
          <q-btn @click="$emit('onCLoseModal')" v-close-popup color="white" flat label="Сохранить"
            style="border-radius: 12px;" class="q-py-sm  q-px-xl bg-indigo-10" no-caps />
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
  name: '',
  phone: ''
})
const _promptVal = ref(false)

// eslint-disable-next-line space-before-function-paren
function onNameInput(e: { target: { value: string } }) {
  dialog.value.name = e.target.value
}

// eslint-disable-next-line space-before-function-paren
function onPhoneInput(e: { target: { value: string } }) {
  dialog.value.phone = e.target.value
}

watch(props, () => {
  _promptVal.value = props.promptVal
})
</script>
