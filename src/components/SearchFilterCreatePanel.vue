<template>
  <q-card class="q-pa-md" flat>
    <q-card-section horizontal>
      <q-card-section class=" flex justify-center items-center " horizontal>
        <q-btn flat size="10px" class="bg-blue flex justify-center items-center q-mr-md q-pa-sm btn q-pr-md"
          color="white">
          <img src="/src/assets/filter.svg" alt="filter_icon" sizes="10px" class="q-mr-sm">
          {{ $t('filterPanel.filter') }}
        </q-btn>
        <q-input dense v-model="search" borderless class="search-input q-px-md" :placeholder="$t('search')">
          <template #prepend>
            <q-icon name="search" color="primary"></q-icon>
          </template>
        </q-input>
      </q-card-section>
      <q-space />
      <div class="flex items-center">
        <span class="text-weight-bold q-mr-sm">{{ $t('filterPanel.sort') }} </span>

        <q-select dropdown-icon="expand_more" borderless class="bg-grey-1 q-px-md q-pb-xs" style="border-radius: 12px;"
          v-model="model" :options="options" dense>
          <template #selected>
            <span>{{ $t(model) }}</span>
          </template>

          <template #option="scope">
            <q-item @click="scope.toggleOption(scope.opt)" clickable>
              <q-item-section>
                {{ $t(scope.opt) }}
              </q-item-section>
            </q-item>
          </template>
        </q-select>
      </div>
      <q-btn icon="add" size="sm" :label="$t('filterPanel.add')" color="blue" class="q-ml-md"
        @click="onAddBtn(dynamicRoute, isModal)" />
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue'
import { useRouter } from 'vue-router'
import { useModalStore } from 'src/stores/moduls/modal'

const { dynamicRoute, isModal } = defineProps(['dynamicRoute', 'isModal'])
const router = useRouter()
const options = ['filterPanel.filterOptions.byName', 'filterPanel.filterOptions.byPrice', 'filterPanel.filterOptions.byIncrease']
const model = ref(options[0])
const search = ref('')
const modalStore = useModalStore()

interface IModalInfo {
  component: string
  modalName: string
}

function onAddBtn(value: string | IModalInfo, isModal: boolean = false): void {
  console.log(isModal && typeof value === 'object')
  if (!isModal && typeof value === 'string') {
    router.push(value)
  } else if (isModal && typeof value === 'object') {
    modalStore.modal[value.component][value.modalName] = true
  }
}
</script>
<style scoped lang="scss">
.btn {
  size: 10px;
}

.search-input {
  border-radius: 10px;
  background-color: #FBFBFC;
}

.action__search {
  width: 100px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.main__container {
  margin: 0 auto;
  width: 97%;
}
</style>
