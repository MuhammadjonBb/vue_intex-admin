<template>
  <q-layout>
    <q-page class="q-pa-md main__container">
      <h1 class="text-h5 text-weight-bold">Обратная связь</h1>

      <SearchFilterCreatePanel class="q-mb-md" />
      <FeedbackTable :data="fakeData" />
      <FeedbackAddDialog />
    </q-page>
  </q-layout>
</template>

<script setup lang="ts">
import SearchFilterCreatePanel from 'src/components/SearchFilterCreatePanel.vue'
import FeedbackTable from 'src/components/table/FeedbackTable.vue'
import fakeData from 'src/helpers/feedbackData'
import FeedbackAddDialog from 'src/components/FeedbackAddDialog.vue'
</script>
