<template>
  <q-layout>
    <q-page class="q-pa-md main__container">
      <h1 class="text-h5 text-weight-bold">Обратная связь</h1>

      <SearchFilterCreatePanel class="q-mb-md" :dynamic-route="{ component: 'feedback', modalName: 'create' }"
        :isModal="true" />
      <FeedbackTable :data="fakeData" />
      <FeedbackModal :modal-name="'create'" label="Добавить" />
      <FeedbackModal :modal-name="'edit'" label="Изменить" />
    </q-page>
  </q-layout>
</template>

<script setup lang="ts">
import SearchFilterCreatePanel from 'src/components/SearchFilterCreatePanel.vue'
import FeedbackTable from 'src/pages/feedback/FeedbackTable.vue'
import fakeData from 'src/helpers/feedbackData'
import FeedbackModal from 'src/pages/feedback/FeedbackModal.vue'
</script>
