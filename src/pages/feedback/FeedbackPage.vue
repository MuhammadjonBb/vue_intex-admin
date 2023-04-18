<template>
  <q-layout>
    <q-page class="q-pa-md main__container">
      <h1 class="text-h5 text-weight-bold">Обратная связь</h1>

      <SearchFilterCreatePanel class="q-mb-md" :dynamic-route="{ component: 'feedback', modalName: 'create' }"
        :isModal="true" />
      <FeedbackTable :data="feedbackStore.feedbackList" v-if="feedbackStore.feedbackList" />
      <FeedbackModal :modal-name="'create'" label="Добавить" />
      <FeedbackModal :modal-name="'edit'" label="Изменить" />
    </q-page>
  </q-layout>
</template>

<script setup lang="ts">
import SearchFilterCreatePanel from 'src/components/SearchFilterCreatePanel.vue'
import FeedbackTable from 'src/pages/feedback/FeedbackTable.vue'
import FeedbackModal from 'src/pages/feedback/FeedbackModal.vue'
import { useFeedbackStore } from 'src/stores/moduls/feedback'

const feedbackStore = useFeedbackStore()

feedbackStore.getFeedbackList()
</script>
