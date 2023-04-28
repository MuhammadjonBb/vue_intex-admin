import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useInputStore: any = defineStore('input', () => {
  const input = ref({
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
    attributesAdd: {
      nameRu: '',
      nameEn: '',
      nameUz: '',
      valueRu: '',
      valueEn: '',
      valueUz: '',
    },
    userDialog: {
      name: '',
      surname: '',
      birth: '',
      email: '',
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
      email: '',
      phone: '',
    },
    setPassword: {
      newPassword: '',
      confirmPassword: '',
    },
    productCreate: {
      name_uz: "",
      name_ru: "",
      name_en: "",
      price: null,
      count: null,
      discount_price: null,
      about_uz: "",
      about_ru: "",
      about_en: "",
    },

  })
  return { input }
})
