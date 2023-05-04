<template>
  <label :for="name" class="font-weight-medium q-mb-md full-width" style="display: block;">
    {{ label }}
    <q-input :class="rules?.length ? 'i-border' : 'border-reset'" :rules="rules" :id="name" borderless
      v-model="inputStore.input[inputData.component][inputData.inputName]" :placeholder="placeholder"
      class="q-mt-sm q-px-md" :type="type" style="position: relative;">
      <template v-if="icon" #append>
        <q-icon :name="icon" color="primary" />
      </template>
    </q-input>
  </label>
</template>

<script setup lang="ts">
import { useInputStore } from 'stores/moduls/input';

const inputStore = useInputStore()
const props = defineProps(['inputData', 'label', 'placeholder', 'type', 'name', 'icon', 'rules'])
</script>
