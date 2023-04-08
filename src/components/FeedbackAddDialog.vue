<template>
  <q-dialog v-model="prompt" persistent>
    <q-card style="min-width: 700px;border-radius: 16px;" class="q-pa-md">
      <q-card-section>
        <div class="text-h6 font-weight-bold">Добавить обратную связь</div>
      </q-card-section>

      <q-card-section class="q-pt-none column">
        <div class="row no-wrap" style="gap: 20px;">
          <label for="name" class="font-weight-medium q-mb-md full-width" style="display: block;">
            Имя
            <q-input id="name" borderless v-model="dialog.name" placeholder="Введите ваше имя"
              class="q-mt-sm border-reset q-px-md" />
          </label>

          <label for="tel" class="font-weight-medium full-width q-mb-md " style="display: block;">
            Номер телефона
            <q-input id="tel" borderless v-model="dialog.phone" placeholder="+998 (90) 123 45 67"
              class="q-mt-sm border-reset q-px-md" mask="+998 (##) ###-##-##" fill-mask>
              <template #prepend>
                <q-img src="/src/assets/uzb-svg.svg" width="22px" height="15px" />
              </template>
            </q-input>
          </label>
        </div>

        <div class="row q-mt-lg">
          <q-space />
          <q-btn v-close-popup color="indigo-10" flat label="Отменить" style="border-radius: 12px;"
            class="q-py-sm bg-grey-2  q-px-xl q-mr-md" no-caps />
          <q-btn v-close-popup color="white" flat label="Сохранить" style="border-radius: 12px;"
            class="q-py-sm  q-px-xl bg-indigo-10" no-caps />
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const prompt = ref(true)
const dialog = ref({
  name: '',
  phone: ''
})
</script>
