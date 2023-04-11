import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    rows: [],
    columns: [],
    count: 0,
    key: ''
  }),
  getters: {
    getRows: (state) => state.rows,
    getColumns: (state) => state.columns
  },
  actions: {
    setColRow(rows: any, columns: any) {
      this.rows = rows
      this.columns = columns
    },
    getStatusClass(status: string) {
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
