import { defineStore } from 'pinia'
import { api } from 'boot/axios'
import { useInputStore } from "stores/moduls/input";
const inputStore = useInputStore()
export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('token') || '',
  }),
  getters: {

  },
  actions: {
    login() {
      return api.post('auth/admin/login', {
        email: inputStore.input.mainAuth.email,
        phone: null,
        password: inputStore.input.mainAuth.password
      }).then(r => {
        this.token = r.data.token
        localStorage.setItem('token', r.data.token)
        return r
      })
    }
  }
})
