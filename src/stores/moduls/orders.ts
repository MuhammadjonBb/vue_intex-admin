import { defineStore } from 'pinia'
import { api } from 'src/boot/axios'
import { useAuthStore } from './auth'

const { token } = useAuthStore()

export const useOrdersStore = defineStore('orders', {
  state: () => ({
    orders: null,
  }),

  actions: {
    getOrders() {
      api.get('orders?current_page=1', { headers: { "Authorization": `Bearer ${token}` } })
        .then(r => {
          this.orders = r.data
        }).catch(e => {
          console.log(e)
        })
    }
  }
})
