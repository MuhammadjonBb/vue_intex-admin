import { defineStore } from 'pinia'
import { api } from 'src/boot/axios'
import { Notify } from 'quasar'

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
    },
    deleteUser(id: number) {
      return api.delete(`users/${id}`).then(() => {
        Notify.create({
          message: 'Пользователь успешно удален',
          color: 'positive',
          position: 'top-right',
          group: false
        })
      }).catch(e => {
        Notify.create({
          message: 'Ошибка при удалении пользователя',
          color: 'negative',
          position: 'top-right',
          group: false
        })
      })
    }
  }
})
