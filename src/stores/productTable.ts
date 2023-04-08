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
    setColRow (rows: any, columns: any) {
      this.rows = rows
      this.columns = columns
    },
    sortRows (colum: any, keys: any) {
      if (this.key !== colum[keys[3]]) {
        this.key = colum[keys[3]]
        this.count = 0
      }
      this.rows = this.rows.sort((a:any, b:any) => {
        if (this.count === 0) {
          if (a[colum[keys[3]]] < b[colum[keys[3]]]) {
            return -1
          }
          if (a[colum[keys[3]]] > b[colum[keys[3]]]) {
            return 1
          }
          return 0
        } else {
          if (b[colum[keys[3]]] < a[colum[keys[3]]]) {
            return -1
          }
          if (b[colum[keys[3]]] > a[colum[keys[3]]]) {
            return 1
          }
          return 0
        }
      })
      this.count === 0 ? this.count = 1 : this.count = 0
    }
  }
})
