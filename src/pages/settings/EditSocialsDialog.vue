<template>
  <q-dialog :="promptVal" v-model="_promptVal" persistent>
    <q-card style="min-width: 700px;border-radius: 16px;" class="q-pa-md">
      <q-card-section>
        <div class="text-h6 font-weight-bold">Изменить информацию</div>
      </q-card-section>

      <q-card-section class="q-pt-none column">
        <q-list class="column no-wrap">

          <q-item class="column q-pa-none q-mt-lg">
            <default-input v-model="dialog.facebook" name="instagram" type="text" label="Instagram"
              @input="onFacebookInput" />
            <q-btn flat icon="remove" label="Удалить социальную сеть" no-caps
              style="align-self: start; font-size: 14px; margin-top: -10px;" class="" color="negative" />
          </q-item>

          <q-item class="column q-pa-none q-mt-lg">
            <default-input v-model="dialog.facebook" name="facebook" type="text" label="Facebook"
              @input="onFacebookInput" />
            <q-btn flat icon="remove" label="Удалить социальную сеть" no-caps
              style="align-self: start; font-size: 14px; margin-top: -10px;" class="" color="negative" />
          </q-item>

          <q-item class="column q-pa-none q-mt-lg">
            <default-input v-model="dialog.facebook" name="twitteer" type="text" label="Twitter"
              @input="onFacebookInput" />
            <q-btn flat icon="remove" label="Удалить социальную сеть" no-caps
              style="align-self: start; font-size: 14px; margin-top: -10px;" class="" color="negative" />
          </q-item>

          <q-item class="column q-pa-none q-mt-lg">
            <default-input v-model="dialog.facebook" name="linkedin" type="text" label="Linkedin"
              @input="onFacebookInput" />
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
const dialog = ref({
  facebook: ''
})
const _promptVal = ref(false)

// eslint-disable-next-line space-before-function-paren
function onFacebookInput(e: { target: { value: string } }) {
  dialog.value.facebook = e.target.value
}

watch(props, () => {
  _promptVal.value = props.promptVal
})
</script>
