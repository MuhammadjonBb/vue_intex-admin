import { defineStore } from 'pinia'
import { api } from 'src/boot/axios'

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
    },
    createUser(data: object) {
      return api.post('users', { ...data })
    },
    editUser(data: object) {
      return api.put('users', { data })
    }
  }
})
