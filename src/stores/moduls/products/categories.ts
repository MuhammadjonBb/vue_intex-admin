import { defineStore } from 'pinia'
import { api } from 'boot/axios'
import { Notify } from 'quasar'


export const useCategoriesStore = defineStore('categories', {
  state: () => ({
    categories: null,
  }),

  actions: {
    getCategories() {
      return api.get('categories').then(r => this.categories = r.data)
    },
    postCategory(data: object) {
      return api.post('categories', data).then(() => {
        this.getCategories()
      })
    },
    deleteCategory(id: number) {
      return api.delete(`categories/${id}`).then(() => {
        this.getCategories()
      })
    }
  }
})
