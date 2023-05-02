import { defineStore } from 'pinia'
import { api } from 'src/boot/axios'
import { Notify } from 'quasar'
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
    createOrder() {
      const data = {
        user: {
          first_name: inputStore.input.ordersForm.first_name,
          last_name: inputStore.input.ordersForm.last_name,
          email: inputStore.input.ordersForm.email,
          phone: inputStore.input.ordersForm.phone,
        },
        order: [
          ...this.mapSelectedProducts()
        ]
      }
      api.post('orders', data).then(r => {
        Notify.create({
          color: 'positive',
          textColor: 'white',
          message: 'Заказ успешно создан',
          position: 'top-right',
        })
      })
        .catch(e => {
          Notify.create({
            color: 'negative',
            textColor: 'white',
            message: 'Ошибка создания заказа',
            position: 'top-right',
          })
        })
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
    mapSelectedProducts() {
      const orders: any[] = []
      this.selectedProducts.map(p => {
        orders.push({
          address: inputStore.input.ordersForm.address,
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
