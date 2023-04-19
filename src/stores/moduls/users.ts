import { defineStore } from 'pinia'
import { api } from 'src/boot/axios'
import { useAuthStore } from './auth'

const { token } = useAuthStore()

export const useUsersStore = defineStore('users', {
  state: () => ({
    users: null,
  }),

  actions: {
    getUsers() {
      api.get('users?current_page=1')
        .then(r => {
          this.users = r.data
        }).catch(e => {
          console.log(e)
        })
    }
  }
})
