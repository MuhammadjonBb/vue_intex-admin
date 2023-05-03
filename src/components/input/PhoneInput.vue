<template>
  <label for="tel" class="font-weight-medium full-width q-mb-md " style="display: block;">
    {{ $t('phoneInput.name') }}
    <q-input :rules="rules" v-model="inputStore.input[inputData.component][inputData.inputName]" id="tel" borderless
      :class="rules?.length ? 'i-border' : 'border-reset'" class="q-mt-sm q-px-md" type="tel" style="position: relative;"
      :mask="returnMask()" fill-mask>
      <template #prepend>
        <div class="q-mr-xs">
          <q-img class="country-img" v-if="phoneCountry === '+998'" src="/src/assets/lang/2-lang.png" width="22px"
            height="15px" />
          <q-img class="country-img" v-else-if="phoneCountry === '+7'" src="/src/assets/lang/0-lang.png" width="22px"
            height="15px" />
        </div>

        <q-select dropdown-icon="expand_more" v-model="phoneCountry" :options="phoneCountries" borderless />
      </template>
    </q-input>
  </label>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useInputStore } from 'stores/moduls/input';

const inputStore = useInputStore()

const phoneCountries = ['+998', '+7']
const phoneCountry = ref(phoneCountries[0])

defineProps(['inputData', 'rules'])

function returnMask() {
  if (phoneCountry.value === '+998') {
    return '(##) ###-##-##'
  } else if (phoneCountry.value === '+7') {
    return '(###) ###-##-##'
  }
}
</script>

<style>
.q-field__append {
  padding-left: 5px;
}

.country-img {
  border-radius: 2px;
}
</style>
