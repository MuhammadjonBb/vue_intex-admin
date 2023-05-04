import { defineStore } from 'pinia'
import { api } from 'src/boot/axios'
interface IFeedbackCreate {
  name: string
  phone: string
}

export const useFeedbackStore = defineStore('feedback', {
  state: () => ({
    feedbackList: null,
  }),

  actions: {
    getFeedbackList() {
      api.get('consultations?current_page=1')
        .then(r => {
          this.feedbackList = r.data
        }).catch(e => {
          console.log(e)
        })
    },
    createFeedback(data: IFeedbackCreate) {
      return api.post('consultations', data).then(() => {
        this.getFeedbackList()
      })
    },
    editFeedback(data: any) {
      return api.put(`consultations/${data.id}`, data).then(() => {
        this.getFeedbackList()
      })
    },
    deleteFeedback(id: number) {
      return api.delete(`consultations/${id}`).then(() => {
        this.getFeedbackList()
      })
    }
  }
})
