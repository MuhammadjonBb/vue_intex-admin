<template>
  <label for="password" class="font-weight-medium text-subtitle1 q-mb-md " style="display: block;">
    {{ label }}
    <q-input :class="rules?.length ? 'i-border' : 'border-reset'" :rules="rules" :placeholder="label" id="password"
      :model-value="text" @update:model-value="(value) => emit('update:text', value)" borderless
      :type="isPwd ? 'password' : 'text'" class="q-mt-sm  q-px-md" style="position: relative;">
      <template v-slot:append>
        <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
      </template>
    </q-input>
  </label>
</template>

<script setup lang="ts">
import { ref, Ref } from 'vue'

defineProps(['label', 'text', 'rules'])
const emit = defineEmits(['update:text'])
const isPwd: Ref<boolean> = ref(true)
</script>
