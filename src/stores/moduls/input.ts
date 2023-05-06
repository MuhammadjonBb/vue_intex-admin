import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useInputStore: any = defineStore('input', () => {
  const input = ref({
    categoriesForm: {
      ruName: '',
      enName: '',
      uzName: '',
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
      email: '',
      address_ru: '',
      address_en: '',
      address_uz: '',
      work_uz: '',
      work_ru: '',
      work_en: '',
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
