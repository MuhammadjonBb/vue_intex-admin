<template>
  <label :for="name" class="font-weight-medium q-mb-md full-width" style="display: block;">
    {{ label }}
    <!-- <q-input v-model:model-value="inputVal" :="$attrs" :type="type" :id="name" borderless :value="modelValue" @input="
      $emit('update:modelValue', ($event.target as HTMLInputElement).value)
    " :placeholder="placeholder" class="q-mt-sm border-reset q-px-md">
      <template v-if="icon" #append>
        <q-icon :name="icon" color="primary"></q-icon>
      </template>
    </q-input> -->
    <q-input :id="name" borderless v-model="inputStore.input[inputData.component][inputData.inputName]"
      :placeholder="placeholder" class="q-mt-sm border-reset q-px-md" :type="type">
      <template v-if="icon" #append>
        <q-icon :name="icon" color="primary" />
      </template>
    </q-input>
  </label>
</template>

<script setup lang="ts">
import { useInputStore } from 'stores/moduls/input';

const inputStore = useInputStore()
const props = defineProps(['inputData', 'label', 'placeholder', 'type', 'name', 'icon'])
</script>
