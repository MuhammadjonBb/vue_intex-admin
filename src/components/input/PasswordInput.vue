<template>
  <label for="password" class="font-weight-medium text-subtitle1 q-mb-md " style="display: block;">
    {{ label }}
    <q-input :placeholder="label" id="password" v-model="password" borderless :type="isPwd ? 'password' : 'text'"
      class="q-mt-sm border-reset q-px-md">
      <template v-slot:append>
        <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
      </template>
    </q-input>
  </label>
</template>

<script setup lang="ts">
import { ref, Ref } from 'vue'

defineProps(['label', 'modelValue'])
const password: Ref<string> = ref('')
const isPwd: Ref<boolean> = ref(true)
</script>
