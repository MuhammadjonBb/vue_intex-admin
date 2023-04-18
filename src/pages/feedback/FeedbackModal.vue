<template>
  <q-dialog v-model="modalStore.modal.feedback[modalName]" persistent>
    <q-card style="min-width: 700px;border-radius: 16px;" class="q-pa-md">
      <q-card-section class="row items-center">
        <div class="text-h6 font-weight-bold">{{ label }} обратную связь</div>
        <q-space />
        <q-btn v-close-popup icon="close" text-color="primary" flat class="bg-grey-3"
          style="width: 32px;height: 32px; border-radius: 8px;" size="13px" @click="modalStore.closeModal()" />
      </q-card-section>

      <q-card-section class="q-pt-none column">
        <div class="row no-wrap" style="gap: 20px;">
          <DefaultInput :inputData="{ component: 'feedbackDialog', inputName: 'name' }" name="name"
            placeholder="Введите ваше имя" type="text" label="Имя" />

          <phone-input :inputData="{ component: 'feedbackDialog', inputName: 'phone' }" />
        </div>
        <div class="row q-mt-lg">
          <q-space />
          <q-btn @click="modalStore.closeModal()" v-close-popup color="indigo-10" flat label="Отменить"
            style="border-radius: 12px;" class="q-py-sm bg-grey-2  q-px-xl q-mr-md" no-caps />
          <q-btn @click="modalStore.closeModal()" v-close-popup color="white" flat label="Сохранить"
            style="border-radius: 12px;" class="q-py-sm  q-px-xl bg-indigo-10" no-caps />
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { Ref, ref, watch } from 'vue'
import DefaultInput from 'src/components/input/DefaultInput.vue'
import PhoneInput from 'src/components/input/PhoneInput.vue'
import { useModalStore } from 'src/stores/moduls/modal'

const { modalName } = defineProps(['modalName', 'label'])
const modalStore = useModalStore()
</script>
