import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useInputStore: any = defineStore('input', () => {
  const input = ref({
    attributesAdd: {
      nameRu: '',
      nameEn: '',
      nameUz: '',
      valueRu: '',
      valueEn: '',
      valueUz: '',
    },
    userDialog: {
      newPassword: '',
      confirmPassword: '',
    },
    resetPassword: {
      phone: '',
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
