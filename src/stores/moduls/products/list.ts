import { defineStore } from 'pinia'
import { api } from 'src/boot/axios'
import {useInputStore} from "stores/moduls/input";
const inputStore = useInputStore()

export const useListStore = defineStore('categories', {
  state: () => ({
    listData: [],
    attributes: [],
    attribut: null,
    attributDialog: false,
    attribute_id: <any>[],
    about: {
      about_uz: "",
      about_ru: "",
      about_en: "",
    },
    categories:[],
    category: null,
    categoryDialog: false,
    columns : [
      { name: 'id', label: 'ID', field: (row:any) => row.id, align: 'left', icon: true, sortable: true },
      {
        name: 'name',
        required: true,
        label: 'Название товара',
        field: (row:any) => row.name_ru,
        style: 'max-width: 3000px',
        align: 'left',
        sortable: true,
        icon: true
      },
      { name: 'price', align: 'left', label: 'Цена', field: (row:any) => row.price, icon: false },
      {
        name: 'discount',
        label: 'Cо скидкой',
        field: (row:any) => row.discount_price,
        align: 'left',
        icon: false
      },
      { name: 'count', label: 'Кол-во', field: 'count', align: 'left', icon: true, sortable: true },
      { name: 'category', label: 'Категория', field: (row:any) => row.category_ru, align: 'left', icon: true, sortable: true },
      { name: 'status', label: 'Статус', field: (row:any) => row.status_ru, align: 'left', icon: false },
      { name: 'action', label: '', align: 'left', icon: false }
    ],
    images:<any> [],
    status:false,
    count: 0,
    key: '',
    imgLink:[]
  }),

  actions: {
    async postList() {
      console.log('success', {
        name_ru: inputStore.input.productCreate.name_ru,
        name_uz: inputStore.input.productCreate.name_uz,
        name_en: inputStore.input.productCreate.name_en,
        price: inputStore.input.productCreate.price,
        discount_price: inputStore.input.productCreate.discount_price,
        about_uz: inputStore.input.productCreate.about_uz,
        about_ru: inputStore.input.productCreate.about_ru,
        about_en: inputStore.input.productCreate.about_en,
        image: this.images,
        category_id: 0,
            country_id: 0,
            status_id: 0,
            manufacturer_id: 0,
            attribute_id: [
              0
            ]
      })
      // await api.post('products',
      //   {
      //     "name_uz": "string",
      //     "name_ru": "string",
      //     "name_en": "string",
      //     "discount_price": 0,
      //     "price": 0,
      //     "count": 0,
      //     "about_uz": "string",
      //     "about_ru": "string",
      //     "about_en": "string",
      //     "image": [
      //       "string"
      //     ],
      //     "category_id": 0,
      //     "country_id": 0,
      //     "status_id": 0,
      //     "manufacturer_id": 0,
      //     "attribute_id": [
      //       0
      //     ]
      //   }
      //   ).then(r => {
      //   console.log('success')
      // }).catch((err)=>{
      //   console.log(err,'err')
      // })
    },
   async getList() {
     console.log('getList')
      await api.get('products').then(r => {
        console.log(r,';;;',r.status === 200)
        this.listData = r.data.result
      }).catch((err)=>{
        console.log(err,'err')
      })
    },
    async getCategories() {
      await api.get('categories/getCategories').then(r => {
        this.categories = r.data
        console.log(this.categories,'categories')
      }).catch((err)=>{
        console.log(err,'err')
      })
    },
    async getAttributes() {
      console.log('attributes')
      await api.get('attributes/attributes').then(r => {
        this.attributes = r.data
        console.log(this.attributes,'attributes2222')
      }).catch((err)=>{
        console.log(err,'err')
      })
    },
    setImages(event: any) {
      const files = event.dataTransfer.files
      for (let i = 0; i < files.length; i++) {
        if (this.images.length >= 4) return
        if (this.images.length === 0) {
          const path = URL.createObjectURL(files[i])
          this.images.push({ name: files[i].name, link: path })
        }
        else {
          for (let j = 0; j < this.images.length; j++) {
            if (this.images[j]?.name === files[i].name) continue
            else {
              const path = URL.createObjectURL(files[i])
              this.images.push({ name: files[i].name, link: path })
            }
          }
        }
      }
    },
    // async setImageLink(imgLink) {
    //   await api.post('media')
    // },
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
