import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    data: [
      {
        id: 12345,
        client: 'Абдулла',
        phone: '90 123 45 67',
        address: 'Г Ташкент, Чиланзарский... ',
        goods: [ 'Samsung', 'Samsung', 'Artel', 'iPhone'],
        looks: ['Смартфон', 'Смартфон', 'Смартфон', 'Смартфон', 'Смартфон'],
        cost: '1 520 000 сум',
        date: ['28.09.2022', '14:00'],
        status: 'Оплачен',
      },
      {
        id: 23423,
        client: 'Абдулла',
        phone: '90 123 45 67',
        address: 'Г Ташкент, Чиланзарский... ',
        goods: ['Samsung', 'Artel', 'Artel', 'Artel', 'iPhone'],
        looks: ['Смартфон', 'Смартфон', 'Смартфон', 'Смартфон', 'Смартфон'],
        cost: '1 520 000 сум',
        date: ['28.09.2022', '14:00'],
        status: 'Отменен'
      },
      {
        id: 56729,
        client: 'Абдулла',
        phone: '90 123 45 67',
        address: 'Г Ташкент, Чиланзарский... ',
        goods: ['Samsung', 'Artel', 'iPhone', 'iPhone'],
        looks: ['Смартфон', 'Смартфон', 'Смартфон', 'Смартфон'],
        cost: '1 520 000 сум',
        date: ['28.09.2022', '14:00'],
        status: 'В ожидании'
      },
      {
        id: 38048,
        client: 'Абдулла',
        phone: '90 123 45 67',
        address: 'Г Ташкент, Чиланзарский... ',
        goods: ['Samsung', 'Artel', 'iPhone'],
        looks: ['Смартфон', 'Смартфон', 'Смартфон', 'Смартфон'],
        cost: '1 520 000 сум',
        date: ['28.09.2022', '14:00'],
        status: 'В проссесе'
      },
      {
        id: 38903,
        client: 'Абдулла',
        phone: '90 123 45 67',
        address: 'Г Ташкент, Чиланзарский... ',
        goods: ['Samsung', 'Artel', 'iPhone'],
        looks: ['Смартфон', 'Смартфон', 'Смартфон', 'Смартфон'],
        cost: '1 520 000 сум',
        date: ['28.09.2022', '14:00'],
        status: 'Оплачен'
      },
      {
        id: 84782,
        client: 'Абдулла ',
        phone: '90 123 45 67',
        address: 'Г Ташкент, Чиланзарский... ',
        goods: ['Samsung', 'Artel', 'Artel', 'Artel', 'iPhone'],
        looks: ['Смартфон', 'Смартфон', 'Смартфон', 'Смартфон'],
        cost: '1 520 000 сум',
        date: ['28.09.2022', '14:00'],
        status: 'Оплачен'
      },
      {
        id: 37493,
        client: 'Абдулла  У.',
        phone: '90 123 45 67',
        address: 'Г Ташкент, Чиланзарский... ',
        goods: ['iPhone'],
        looks: ['Смартфон', 'Смартфон', 'Смартфон', 'Смартфон'],
        cost: '1 520 000 сум',
        date: ['28.09.2022', '14:00'],
        status: 'Отменен'
      },
      {
        id: 48938,
        client: 'Абдулла  У.',
        phone: '90 123 45 67',
        address: 'Г Ташкент, Чиланзарский... ',
        goods: ['Samsung', 'Artel', 'iPhone'],
        looks: ['Смартфон', 'Смартфон', 'Смартфон', 'Смартфон'],
        cost: '1 520 000 сум',
        date: ['28.09.2022', '14:00'],
        status: 'Оплачен'
      },
      {
        id: 29302,
        client: 'Абдулла  У.',
        phone: '90 123 45 67',
        address: 'Г Ташкент, Чиланзарский... ',
        goods: ['Samsung', 'Artel'],
        cost: '1 520 000 сум',
        date: ['28.09.2022', '14:00'],
        status: 'В проссесе'
      },
      {
        id: 48211,
        client: 'Абдулла  У.',
        phone: '90 123 45 67',
        address: 'Г Ташкент, Чиланзарский... ',
        goods: ['Samsung', 'Artel', 'iPhone'],
        cost: '1 520 000 сум',
        date: ['28.09.2022', '14:00'],
        status: 'Оплачен'
      },
      {
        id: 12353,
        client: 'Абдулла  У.',
        phone: '90 123 45 67',
        address: 'Г Ташкент, Чиланзарский... ',
        goods: ['SamsungSamsungSamsungSamsungSamsungSamsung', 'Samsung', 'Samsung', 'Artel', 'iPhone'],
        cost: '1 520 000 сум',
        date: ['28.09.2022', '14:00'],
        status: 'Оплачен'
      },
      {
        id: 80976,
        client: 'Абдулла  У.',
        phone: '90 123 45 67',
        address: 'Г Ташкент, Чиланзарский... ',
        goods: ['Samsung', 'Artel', 'Artel', 'Artel', 'iPhone'],
        cost: '1 520 000 сум',
        date: ['28.09.2022', '14:00'],
        status: 'Отменен'
      },
      {
        id: 68967,
        client: 'Абдулла  У.',
        phone: '90 123 45 67',
        address: 'Г Ташкент, Чиланзарский... ',
        goods: ['Samsung', 'Artel', 'iPhone', 'iPhone'],
        cost: '1 520 000 сум',
        date: ['28.09.2022', '14:00'],
        status: 'В ожидании'
      },
      {
        id: 67646,
        client: 'Абдулла  У.',
        phone: '90 123 45 67',
        address: 'Г Ташкент, Чиланзарский... ',
        goods: ['Samsung', 'Artel', 'iPhone'],
        cost: '1 520 000 сум',
        date: ['28.09.2022', '14:00'],
        status: 'В проссесе'
      },
      {
        id: 78956,
        client: 'Абдулла  У.',
        phone: '90 123 45 67',
        address: 'Г Ташкент, Чиланзарский... ',
        goods: ['Samsung', 'Artel', 'iPhone'],
        cost: '1 520 000 сум',
        date: ['28.09.2022', '14:00'],
        status: 'Оплачен'
      },
      {
        id: 10274,
        client: 'Абдулла  У.',
        phone: '90 123 45 67',
        address: 'Г Ташкент, Чиланзарский... ',
        goods: ['Samsung', 'Artel', 'Artel', 'Artel', 'iPhone'],
        cost: '1 520 000 сум',
        date: ['28.09.2022', '14:00'],
        status: 'Оплачен'
      },
      {
        id: 24477,
        client: 'Абдулла  У.',
        phone: '90 123 45 67',
        address: 'Г Ташкент, Чиланзарский... ',
        goods: ['iPhone'],
        cost: '1 520 000 сум',
        date: ['28.09.2022', '14:00'],
        status: 'Отменен'
      },
      {
        id: 22384,
        client: 'Абдулла  У.',
        phone: '90 123 45 67',
        address: 'Г Ташкент, Чиланзарский... ',
        goods: ['Samsung', 'Artel', 'iPhone'],
        cost: '1 520 000 сум',
        date: ['28.09.2022', '14:00'],
        status: 'Оплачен'
      },
      {
        id: 45303,
        client: 'Абдулла  У.',
        phone: '90 123 45 67',
        address: 'Г Ташкент, Чиланзарский... ',
        goods: ['Samsung', 'Artel'],
        cost: '1 520 000 сум',
        date: ['28.09.2022', '14:00'],
        status: 'В проссесе'
      },
      {
        id: 12300,
        client: 'Абдулла  У.',
        phone: '90 123 45 67',
        address: 'Г Ташкент, Чиланзарский... ',
        goods: ['Samsung', 'Artel', 'iPhone'],
        cost: '1 520 000 сум',
        date: ['28.09.2022', '14:00'],
        status: 'Оплачен'
      }
    ]
  }),
  getters: {

  },
  actions: {
    deleteItem(id:number) {
  this.data = this.data.filter(item => item.id !== id)
}
  }
})
