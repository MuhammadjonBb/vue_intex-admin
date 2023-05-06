import { defineStore } from 'pinia'
import { api } from 'src/boot/axios'
import { useInputStore } from './input'

const inputStore = useInputStore()

export const useOrdersStore: any = defineStore('orders', {
  state: () => ({
    orders: null,
    products: null,
    mappedProducts: [],
    selectedProducts: [],
    statusValue: {},
    statusOptions: [
      {
        label: 'В проссесе',
        id: 5,
      },
      {
        label: 'Оплачен',
        id: 1,
      },
      {
        label: 'Отменен',
        id: 2,
      },
      {
        label: 'В ожидании',
        id: 3,
      }
    ],
  }),

  actions: {
    getOrders() {
      api.get('orders?current_page=1')
        .then(r => {
          this.orders = r.data
          console.log(this.orders);
        }).catch(e => {
          console.log(e)
        })
    },
    createOrder(userData: any) {
      const data = {
        user: {
          first_name: userData.first_name,
          last_name: userData.last_name,
          email: userData.email,
          phone: userData.phone,
        },
        order: [
          ...this.mapSelectedProducts(userData.address)
        ]
      }
      return api.post('orders', data)
    },
    getProducts() {
      api.get('products').then(r => {
        this.products = r.data
        this.mapProducts()
        this.selectedProducts.push({
          id: this.mappedProducts[0].id,
          label: this.mappedProducts[0].label,
          amount: this.mappedProducts[0].amount,
          cost: this.mappedProducts[0].price
        })
      })
    },
    mapProducts() {
      this.products.result.map(p => {
        this.mappedProducts.push({
          id: p.id,
          label: p.name_ru,
          price: p.discount_price ? p.discount_price : p.price,
          amount: p.count
        })
      })
    },
    addProduct() {
      this.selectedProducts.push({
        label: '',
        amount: 0,
        cost: 0
      })
    },
    mapSelectedProducts(address: string) {
      const orders: any[] = []
      this.selectedProducts.map(p => {
        orders.push({
          address,
          count: p.amount,
          product_id: p.id,
          status_id: this.statusValue.id,
          price: p.cost,
          comment: "string",
          country: "string",
          region: "string",
          payment_type: "cash",
          floor: "string",
          delivery_type: "free"
        })
      })
      return orders
    }
  }
})
