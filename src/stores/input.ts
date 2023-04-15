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
    categoriesAdd: {
      ruName: '',
      ruSubName: '',
      enName: '',
      enSubName: '',
      uzName: '',
      uzSubName: '',
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
    productCreate: {
      name: '',
      price: '',
      discount: '',
    }

  })

  return { input }
})
