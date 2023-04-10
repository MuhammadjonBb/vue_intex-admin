<template>
  <label for="tel" class="font-weight-medium full-width q-mb-md " style="display: block;">
    Номер телефона
    <q-input :value="modelValue" @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      v-model="inputVal" id="tel" borderless placeholder="+998 (90) 123 45 67" class="q-mt-sm border-reset q-px-md"
      mask="+998 (##) ###-##-##" fill-mask>
      <template #prepend>
        <q-img src="/src/assets/uzb-svg.svg" width="22px" height="15px" />
      </template>
    </q-input>
  </label>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps(['modelValue'])

defineEmits(['update:modelValue'])

const inputVal = ref('')
</script>
