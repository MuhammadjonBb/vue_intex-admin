import {defineStore} from 'pinia'
import {api} from 'src/boot/axios'
import {useInputStore} from "stores/moduls/input";

const inputStore = useInputStore()
import {Notify} from 'quasar'

export const useListStore = defineStore('categories', {
  state: () => ({
    listData: [],
    attributes: [],
    attribut: null,
    attributDialog: false,
    attribute_id: <any>[],
    attribute: <any>{},
    categories: [],
    category: null,
    statuses: <any>[],
    status: null,
    country_id: <number>0,
    about: {
      about_uz: "",
      about_ru: "",
      about_en: "",
    },
    images: <any>[],
    count: 0,
    key: '',
    imgLink: [],
    imgLink2: [],
  }),
  actions: {
    async postList() {
      console.log('success', {
        name_ru: inputStore.input.productCreate.name_ru,
        name_uz: inputStore.input.productCreate.name_uz,
        name_en: inputStore.input.productCreate.name_en,
        price: inputStore.input.productCreate.price,
        discount_price: inputStore.input.productCreate.discount_price,
        about_uz: this.about.about_uz,
        about_ru: this.about.about_ru,
        about_en: this.about.about_en,
        image: this.images,
        category_id: this.category?.id,
        country_id: 0,
        status_id: this.status?.id,
        manufacturer_id: 0,
        attribute_id: this.attribute_id,
      })
      await api.post('products',
        {
          name_ru: inputStore.input.productCreate.name_ru,
          name_uz: inputStore.input.productCreate.name_uz,
          name_en: inputStore.input.productCreate.name_en,
          price: inputStore.input.productCreate.price,
          count: inputStore.input.productCreate.count,
          discount_price: inputStore.input.productCreate.discount_price,
          about_uz: this.about.about_uz,
          about_ru: this.about.about_ru,
          about_en: this.about.about_en,
          image: this.images,
          category_id: this.category?.id,
          country_id: this.country_id,
          status_id: this.status?.id,
          manufacturer_id: 0,
          attribute_id: this.attribute_id
        }
      ).then(r => {
        console.log('success post')
      }).catch((err) => {
        console.log(err, 'err post')
      })
    },
    notify(message: string, color: string, timeout: number) {
      Notify.create({
        message,
        color,
        timeout,
        position: 'top-right'
      })
    },
    async getList() {
      await api.get('products').then(r => {
        this.listData = r.data.result
      }).catch((err) => {
        console.log(err, 'err')
      })
    },

    async updateList(id: number) {
      console.log( id , 'Id update')
    },

    async getCategories() {
      await api.get('categories/getCategories').then(r => {
        this.categories = r.data
      }).catch((err) => {
        console.log(err, 'err')
      })
    },
    async getStatus() {
      await api.get('status-products').then(r => {
        this.statuses = r.data
        console.log(this.statuses, 'statuses', r)
      }).catch((err) => {
        console.log(err, 'err')
      })
    },
    async getAttributes() {
      console.log('attributes')
      await api.get('attributes/attributes').then(r => {
        this.attributes = r.data
        console.log(this.attributes, 'attributes2222')
      }).catch((err) => {
        console.log(err, 'err')
      })
    },
    async getImg() {
      await api.get('media').then(r => {
        this.images = r.data
        console.log(r, 'this.imgLink')
      })
    },
    async setImages(event: any) {
      const files = event.dataTransfer.files
      const groupImg = new FormData()
      this.notify('Изображения добавлены', 'positive', 2000)
      if (this.images.length < 4 && files.length <= 4) {
        for (let i = 0; i < files.length; i++) {
          groupImg.append(`image`, files[i], files[i].name)
        }
        await api.post('media', groupImg)
          .catch((err) => {
            console.log(err, 'err')
          })
        await this.getImg()
      } else {
        this.notify('Максимальное количество изображений 4', 'negative', 2000)
      }
    },
    async deleteImg(img: any) {
      console.log(this.images)
      Notify.create({
        color: 'accent',
        textColor: 'white',
        message: 'Удаление изображения',
        position: 'top-right',
        timeout: 2000
      })
      await api.post('media/deleteMedia', {
        file_name: img
      })
      await this.getImg()

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
