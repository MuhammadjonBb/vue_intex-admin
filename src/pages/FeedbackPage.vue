<template>
  <q-layout>
    <q-page class="q-pa-md main__container">
      <h1 class="text-h5 text-weight-bold">Обратная связь</h1>

      <SearchFilterCreatePanel class="q-mb-md" @on-add-click="onAddClick" />
      <FeedbackTable :data="fakeData" />
      <FeedbackAddDialog @onCLoseModal="onCloseModal" :promptVal="feedbackDialog" />
    </q-page>
  </q-layout>
</template>

<script setup lang="ts">
import SearchFilterCreatePanel from 'src/components/SearchFilterCreatePanel.vue'
import FeedbackTable from 'src/components/table/FeedbackTable.vue'
import fakeData from 'src/helpers/feedbackData'
import FeedbackAddDialog from 'src/components/FeedbackAddDialog.vue'
import { ref } from 'vue'

const feedbackDialog = ref(false)

// eslint-disable-next-line space-before-function-paren
function onAddClick() {
  feedbackDialog.value = true
}
// eslint-disable-next-line space-before-function-paren
function onCloseModal() {
  feedbackDialog.value = false
}
</script>
