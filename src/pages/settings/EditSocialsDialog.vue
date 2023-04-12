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
        <q-list class="column no-wrap">

          <q-item class="column q-pa-none q-mt-lg">
            <DefaultInput :inputData="{ component: 'editSocialsDialog', inputName: 'instagram' }" name="instagram"
              type="text" label="Instagram" />
            <q-btn flat icon="remove" label="Удалить социальную сеть" no-caps
              style="align-self: start; font-size: 14px; margin-top: -10px;" class="" color="negative" />
          </q-item>
          <q-item class="column q-pa-none q-mt-lg">
            <DefaultInput :inputData="{ component: 'editSocialsDialog', inputName: 'facebook' }" name="facebook"
              type="text" label="Facebook" />
            <q-btn flat icon="remove" label="Удалить социальную сеть" no-caps
              style="align-self: start; font-size: 14px; margin-top: -10px;" class="" color="negative" />
          </q-item>

          <q-item class="column q-pa-none q-mt-lg">
            <DefaultInput :inputData="{ component: 'editSocialsDialog', inputName: 'twitter' }" name="twitter" type="text"
              label="Twitter" />
            <q-btn flat icon="remove" label="Удалить социальную сеть" no-caps
              style="align-self: start; font-size: 14px; margin-top: -10px;" class="" color="negative" />
          </q-item>

          <q-item class="column q-pa-none q-mt-lg">
            <DefaultInput :inputData="{ component: 'editSocialsDialog', inputName: 'linkedin' }" name="linkedin"
              type="text" label="Linkedin" />
            <q-btn flat icon="remove" label="Удалить социальную сеть" no-caps
              style="align-self: start; font-size: 14px; margin-top: -10px;" class="" color="negative" />
          </q-item>

        </q-list>
        <q-separator class="q-mt-lg" />

        <q-btn flat icon="add" label="Добавить социальную сеть" no-caps style="align-self: start; font-size: 14px;"
          class="q-mt-lg" color="primary" />
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

const props = defineProps(['promptVal'])
const _promptVal = ref(false)

watch(props, () => {
  _promptVal.value = props.promptVal
})
</script>
