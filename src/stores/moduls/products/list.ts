import {defineStore} from 'pinia'
import {api} from 'src/boot/axios'
import {useInputStore} from "stores/moduls/input";
import {Notify} from 'quasar'
const inputStore = useInputStore()

export const useListStore = defineStore('lists', {
  state: () => ({
    listData: [],
    attributes: [],
    attribut:<any> null,
    attributDialog: false,
    attribute_id: <any>[],
    attribute: <any>{},
    categories: [],
    category:<any> null,
    statuses: <any>[],
    status:<any> null,
    country_id: <any>0,
    about: { about_uz: "", about_ru: "", about_en: "" },
    images: <any>[],
    count: 0,
    key: '',
    responseType: '',
  }),
  actions: {
    async deleteProduct(id:number) {
      // await api.delete(`products/${id}`)
      //   .catch(err=>{
          console.log(id,'delete product')
        // })
    },

    async postList(path: any) {

      console.log(path, inputStore.input.productCreate.inputRef)
      // if (path.split('/')[2] === 'create'){
      //   console.log({
      //     name_ru: inputStore.input.productCreate.name_ru,
      //     name_uz: inputStore.input.productCreate.name_uz,
      //     name_en: inputStore.input.productCreate.name_en,
      //     price: inputStore.input.productCreate.price,
      //     count: inputStore.input.productCreate.count,
      //     discount_price: inputStore.input.productCreate.discount_price,
      //     about_uz: this.about.about_uz,
      //     about_ru: this.about.about_ru,
      //     about_en: this.about.about_en,
      //     image: this.images,
      //     category_id: this.category?.id,
      //     country_id: this.country_id,
      //     status_id: this.status?.id,
      //     manufacturer_id: 0,
      //     attribute_id: this.attribute_id
      //   })
      // await api.post('products',
      //   {
      //     name_ru: inputStore.input.productCreate.name_ru,
      //     name_uz: inputStore.input.productCreate.name_uz,
      //     name_en: inputStore.input.productCreate.name_en,
      //     price: inputStore.input.productCreate.price,
      //     count: inputStore.input.productCreate.count,
      //     discount_price: inputStore.input.productCreate.discount_price,
      //     about_uz: this.about.about_uz,
      //     about_ru: this.about.about_ru,
      //     about_en: this.about.about_en,
      //     image: this.images,
      //     category_id: this.category?.id,
      //     country_id: this.country_id,
      //     status_id: this.status?.id,
      //     manufacturer_id: 0,
      //     attribute_id: this.attribute_id
      //   }
      // ).catch(err => {console.log(err, 'err post')})
      // } else {
      //   console.log(
      //     {
      //         id: path.split('/')[3],
      //         name_ru: inputStore.input.productCreate.name_ru,
      //         name_uz: inputStore.input.productCreate.name_uz,
      //         name_en: inputStore.input.productCreate.name_en,
      //         price: inputStore.input.productCreate.price,
      //         count: inputStore.input.productCreate.count,
      //         discount_price: inputStore.input.productCreate.discount_price,
      //         about_uz: this.about.about_uz,
      //         about_ru: this.about.about_ru,
      //         about_en: this.about.about_en,
      //         image: this.images,
      //         category_id: this.category?.id,
      //         country_id: this.country_id,
      //         status_id: this.status?.id,
      //         manufacturer_id: 0,
      //         attribute_id: [0]
      //       },'post'
      //   )
      //   await api.put('products',
      //     {
      //       id: path.split('/')[3],
      //       name_ru: inputStore.input.productCreate.name_ru,
      //       name_uz: inputStore.input.productCreate.name_uz,
      //       name_en: inputStore.input.productCreate.name_en,
      //       price: inputStore.input.productCreate.price,
      //       count: inputStore.input.productCreate.count,
      //       discount_price: inputStore.input.productCreate.discount_price,
      //       about_uz: this.about.about_uz,
      //       about_ru: this.about.about_ru,
      //       about_en: this.about.about_en,
      //       image: this.images,
      //       category_id: this.category?.id,
      //       country_id: this.country_id,
      //       status_id: this.status?.id,
      //       manufacturer_id: 0,
      //       attribute_id: this.attribute_id
      //     }
      //   ).catch(err => {console.log(err, 'err post')})
      // }
      inputStore.input.productCreate.name_ru = ''
      inputStore.input.productCreate.name_uz = ''
      inputStore.input.productCreate.name_en = ''
      inputStore.input.productCreate.price = null
      inputStore.input.productCreate.count = null
      inputStore.input.productCreate.discount_price = null
      this.about.about_uz = ''
      this.about.about_ru = ''
      this.about.about_en = ''
      this.images = []
      this.category.id = null
      this.country_id = null
      this.status.id = null
      this.attribute_id = [0]
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

    async getListId(id: number) {
      console.log(id)
      await api.get(`products/getOne/${id}`).then(r => {
        const response = r.data[0]
        console.log( response, 'getListId')
        inputStore.input.productCreate.name_ru = response.name_ru
        inputStore.input.productCreate.name_uz = response.name_uz
        inputStore.input.productCreate.name_en = response.name_en
        inputStore.input.productCreate.price = response.price
        inputStore.input.productCreate.count = response.count
        inputStore.input.productCreate.discount_price = response.discount_price
        this.about.about_uz = response.about_uz
        this.about.about_ru = response.about_ru
        this.about.about_en = response.about_en
        this.images = response.image
        this.category.id = response.category_id
        this.country_id = response.country_id
        this.status.id = response.status_id
        this.attribute_id = [0]
      }).catch((err) => {
        console.log(err, 'put err')
      })
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
      }).catch((err) => {
        console.log(err, 'err')
      })
    },
    async getAttributes() {
      await api.get('attributes/attributes').then(r => {
        this.attributes = r.data
      }).catch((err) => {
        console.log(err, 'err')
      })
    },
    async getImg() {
      await api.get('media').then(r => {
        this.images = r.data
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
