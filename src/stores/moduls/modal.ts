import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useModalStore: any = defineStore('modal', () => {
  const modal = ref({
    feedback: {
      create: false,
      edit: false
    },
    users: {
      create: false,
      edit: false
    },
    settings: {
      contacts: false,
      socials: false,
    }
  })

  function closeModal() {
    modal.value.feedback.create = false
    modal.value.feedback.edit = false
    modal.value.users.create = false
    modal.value.users.edit = false
    modal.value.settings.contacts = false
    modal.value.settings.socials = false
  }

  return { modal, closeModal }
})
