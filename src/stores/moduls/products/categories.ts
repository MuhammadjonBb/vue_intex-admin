import { defineStore } from 'pinia'
import { api } from 'boot/axios'

export const useCategoriesStore = defineStore('categories', {
  state: () => ({
    categories: null,
  }),

  actions: {
    getCategories() {
      api.get('categories').then(r => {
        console.log('getCategories')
        this.categories = r.data
      })
    }
  }
})
