<template>
  <label :for="name" class="font-weight-medium q-mb-md full-width" style="display: block;">
    {{ label }}
    <q-input :type="type" :id="name" borderless v-model="inputVal" :value="modelValue" @input="
      $emit('update:modelValue', ($event.target as HTMLInputElement).value)
    " :placeholder="placeholder" class="q-mt-sm border-reset q-px-md">
      <template v-if="icon" #append>
        <q-icon :name="icon" color="primary"></q-icon>
      </template>
    </q-input>
  </label>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps(['label', 'modelValue', 'placeholder', 'type', 'name', 'icon'])

defineEmits(['update:modelValue'])

const inputVal = ref('')
</script>
