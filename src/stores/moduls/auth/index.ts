import { defineStore } from 'pinia'
import {api} from 'boot/axios'
import {useInputStore} from "stores/moduls/input";
const inputStore = useInputStore()
export const useAuthStore = defineStore('counter', {
  state: () => ({
    token: '',
  }),
  getters: {

  },
  actions: {
    login() {
      console.log({email: inputStore.input.mainAuth.email,
        password: inputStore.input.mainAuth.password,})
     api.post('auth/admin/login', {
        email: inputStore.input.mainAuth.email,
       phone: null,
       password: inputStore.input.mainAuth.password
     }).then(r =>{
       console.log(r)
       this.token = r.data.token
     }).catch(err=>{
       console.log(err)
     })
      console.log(this.token)
     }
  }
})
