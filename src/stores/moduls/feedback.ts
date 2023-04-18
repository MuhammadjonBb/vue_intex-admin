import { defineStore } from 'pinia'
import { api } from 'src/boot/axios'
import { useAuthStore } from './auth'

const { token } = useAuthStore()

export const useFeedbackStore = defineStore('feedback', {
  state: () => ({
    feedbackList: null,
  }),

  actions: {
    getFeedbackList() {
      api.get('consultations?current_page=1', { headers: { "Authorization": `Bearer ${token}` } })
        .then(r => {
          this.feedbackList = r.data
        }).catch(e => {
          console.log(e)
        })
    }
  }
})
