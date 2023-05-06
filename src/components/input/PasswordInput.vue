<template>
  <label for="password" class="font-weight-medium text-subtitle1 q-mb-md " style="display: block;">
    {{ label }}
    <q-input :placeholder="label" id="password" :model-value="text"
      @update:model-value="(value) => emit('update:text', value)" borderless :type="isPwd ? 'password' : 'text'"
      class="q-mt-sm border-reset q-px-md">
      <template v-slot:append>
        <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
      </template>
    </q-input>
  </label>
</template>

<script setup lang="ts">
import { ref, Ref } from 'vue'
import { useInputStore } from 'stores/moduls/input'

const inputStore = useInputStore()

defineProps(['label', 'text'])
const emit = defineEmits(['update:text'])
const isPwd: Ref<boolean> = ref(true)
</script>
