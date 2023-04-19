import { defineStore } from 'pinia'
import { api } from 'src/boot/axios'

export const useListStore = defineStore('categories', {
  state: () => ({
    listData: [],
    rows: [],
    columns: [],
    count: 0,
    key: ''
  }),

  actions: {
   async getList() {
     console.log('start')
      await api.get('products').then(r => {
        console.log(r,';;;')
        this.listData = r.data.result
      }).catch(err=>{
        console.log(err)
      })
    },
    setColRow(rows: any, columns: any) {
      this.rows = rows
      this.columns = columns
    },
    getStatusClass(status: string) {
      console.log(status,'Status')
      if (status === 'Новый') {
        return 'positive text-white'
      } else if (status === 'Хит продаж') {
        return 'red-6 text-white'
      } else if (status === 'Обичный') {
        return 'grey-4 text-black'
      } else {
        return 'red-4 text-white'
      }
    }
  }
})
