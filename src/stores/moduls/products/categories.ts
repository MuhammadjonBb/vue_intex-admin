import { defineStore } from 'pinia'
import { api } from 'boot/axios'

export const useCategoriesStore = defineStore('categories', {
  state: () => ({
    categories: null,
  }),

  actions: {
    getCategories() {
      return api.get('categories').then(r => this.categories = r.data)
    }
  }
})