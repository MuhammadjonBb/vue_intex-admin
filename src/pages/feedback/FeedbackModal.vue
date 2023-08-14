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
          <DefaultInput v-model:text="inputName" :rules="[required]" name="name" :placeholder="$t('placeholder.name')"
            :label="$t('consultations.modal.inputs.name')">
          </DefaultInput>

          <phone-input :rules="[phoneRequired]" v-model:text="inputPhone" />
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
import { getPrefix, removeCharacters } from 'src/helpers/formatPhoneNum'
import { Notify, useQuasar } from 'quasar'
import { useI18n } from 'vue-i18n'
import cutPhoneString from "src/helpers/cutPhoneString"

const validation: Ref<boolean> = ref(false)

const inputName: Ref<string> = ref('')
const inputPhone: Ref<string> = ref('')

const props = defineProps(['modalName', 'label', 'feedbackData'])
const { t } = useI18n()
const modalStore = useModalStore()
const feedbackStore = useFeedbackStore()
const $q = useQuasar()

function required(v: string | number) {
  if (!!v) {
    return validation.value = true
  }
  validation.value = false
  return t('validation.required')
}

function phoneRequired(str: string) {
  const digitRegex = /\d/g;
  const matches = str.match(digitRegex);
  const amount = matches ? matches.length : 0;

  if (amount > 8) {
    return validation.value = true
  }
  validation.value = false
  return t('validation.required')
}

watch(props, () => {
  setInputValues()
})

function save() {
  if (!validation.value) {
    inputName.value = ''
    inputPhone.value = ''
    $q.notify({
      message: t('validation.fail'),
      color: 'negative',
      position: 'top',
    })
    validation.value = false
    return
  }
  const data = {
    name: inputName.value,
    phone: getPrefix(inputPhone.value) + removeCharacters(inputPhone.value),
  }

  if (props.modalName === 'create') {
    feedbackStore.createFeedback(data).then(() => {
      closeModal()

      $q.notify({
        message: t('notification.consultation.created'),
        color: 'positive',
        position: 'top-right',
      })
    })
      .catch(() => {
        $q.notify({
          message: t('notification.consultation.createError'),
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
  inputName.value = ''
  inputPhone.value = ''
}

function setInputValues() {
  inputName.value = props.feedbackData.name
  inputPhone.value = cutPhoneString(props.feedbackData.phone)
}
</script>
