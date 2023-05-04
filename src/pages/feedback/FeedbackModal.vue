<template>
  <q-dialog v-model="modalStore.modal.feedback[props.modalName]" persistent>
    <q-card style="min-width: 700px;border-radius: 16px;" class="q-pa-md">
      <q-card-section class="row items-center">
        <div class="text-h6 font-weight-bold">{{ label === 'Добавить' ? $t('consultations.modal.addTitle') :
          $t('consultations.modal.editTitle') }}</div>
        <q-space />
        <q-btn v-close-popup icon="close" text-color="primary" flat class="bg-grey-3"
          style="width: 32px;height: 32px; border-radius: 8px;" size="13px" @click="closeModal()" />
      </q-card-section>

      <q-card-section class="q-pt-none column">
        <div class="row no-wrap" style="gap: 20px;">
          <DefaultInput :rules="[(v: any) => !!v || 'Обязательное поле']"
            :inputData="{ component: 'feedbackDialog', inputName: 'name' }" name="name"
            :placeholder="$t('placeholder.name')" type="text" :label="$t('consultations.modal.inputs.name')" />

          <phone-input :rules="[(v: any) => !!v || 'Обязательное поле']"
            :inputData="{ component: 'feedbackDialog', inputName: 'phone' }" />
        </div>
        <div class="row q-mt-lg">
          <q-space />
          <q-btn @click="closeModal()" v-close-popup color="indigo-10" flat :label="$t('btn.cancel')"
            style="border-radius: 12px;" class="q-py-sm bg-grey-2  q-px-xl q-mr-md" no-caps />
          <q-btn @click="save()" color="white" flat :label="$t('btn.save')" style="border-radius: 12px;"
            class="q-py-sm  q-px-xl bg-indigo-10" no-caps />
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
import { useFeedbackStore } from 'src/stores/moduls/feedback'
import { useInputStore } from 'src/stores/moduls/input'
import { getPrefix, removeCharacters } from 'src/helpers/formatPhoneNum'
import { useQuasar } from 'quasar'
import cutPhoneString from "src/helpers/cutPhoneString"


const props = defineProps(['modalName', 'label', 'feedbackData'])
const modalStore = useModalStore()
const feedbackStore = useFeedbackStore()
const inputStore = useInputStore()
const $q = useQuasar()

watch(props, () => {
  setInputValues()
})

function save() {
  const data = {
    name: inputStore.input.feedbackDialog.name,
    phone: getPrefix(inputStore.input.feedbackDialog.phone) + removeCharacters(inputStore.input.feedbackDialog.phone),
  }

  if (props.modalName === 'create') {
    feedbackStore.createFeedback(data).then(() => {
      closeModal()

      $q.notify({
        message: 'Обратная связь успешно создана',
        color: 'positive',
        position: 'top-right',
      })
    })
      .catch(() => {
        $q.notify({
          message: 'Ошибка создания обратной связи',
          color: 'negative',
          position: 'top-right',
        })
      })
  } else if (props.modalName === 'edit') {
    feedbackStore.editFeedback(data).then(() => {
      closeModal()
    })
  }
}

function closeModal() {
  modalStore.closeModal()
  inputStore.input.feedbackDialog.name = ''
  inputStore.input.feedbackDialog.phone = ''
}

function setInputValues() {
  inputStore.input.feedbackDialog.name = props.feedbackData.name
  inputStore.input.feedbackDialog.phone = cutPhoneString(props.feedbackData.phone)
}
</script>
