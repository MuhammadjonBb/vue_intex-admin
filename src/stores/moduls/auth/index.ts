import { defineStore } from 'pinia'
import { api } from 'boot/axios'
import { useInputStore } from "stores/moduls/input";
import { getPrefix, removeCharacters } from 'src/helpers/formatPhoneNum'

const inputStore = useInputStore()
export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('token') || '',
  }),
  actions: {
    login(data: any) {
      return api.post('auth/admin/login', {
        email: data.email,
        phone: getPrefix(data.phone) + removeCharacters(data.phone),
        password: data.password
      }).then(r => {
        this.token = r.data.token
        localStorage.setItem('token', r.data.token)
        return r
      })
    }
  }
})
