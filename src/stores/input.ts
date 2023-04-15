import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useInputStore: any = defineStore('input', () => {
  const input = ref({
    editSocialsDialog: {
      facebook: '',
      instagram: '',
      twitter: '',
      linkedin: '',
    },
    ordersEdit: {
      name: '',
      address: '',
      phone: ''
    },
    userDialog: {
      name: '',
      surname: '',
      birth: '',
      phone: '',
      newPassword: '',
      confirmPassword: '',
    },
    feedbackDialog: {
      name: '',
      phone: '',
    },
    resetPassword: {
      phone: '',
    },
    editContactsDialog: {
      phone: '',
      address: '',
      schedule: '',
      email: '',
    },
    mainAuth: {
      password: '',
      name: ''
    },
    setPassword: {
      newPassword: '',
      confirmPassword: '',
    },

  })

  return { input }
})
