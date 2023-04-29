import { defineStore } from 'pinia'
import { api } from 'src/boot/axios'
import { useAuthStore } from './auth'
import { Notify } from 'quasar'

const { token } = useAuthStore()

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
      return api.post('consultations', data)
    },
    editFeedback(data: any) {
      return api.put(`consultations/${data.id}`, data)
    },
    deleteFeedback(id: number) {
      console.log(id);
      return api.delete(`consultations/${id}`).then(() => {
        Notify.create({
          color: 'positive',
          textColor: 'white',
          message: 'Обратная связь успешно удалена',
          position: 'top-right',
          group: false
        })
      }).catch(e => {
        Notify.create({
          color: 'negative',
          message: 'Ошибка в удалении обратной связи',
          textColor: 'white',
          position: 'top-right',
          group: false
        })
      })
    }
  }
})
