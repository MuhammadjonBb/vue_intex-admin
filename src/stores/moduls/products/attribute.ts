import { defineStore } from 'pinia'
import { api } from 'src/boot/axios'
import { useInputStore } from "stores/moduls/input";
import { reactive } from "vue";
import { Notify } from 'quasar'
const inputStore = useInputStore()

export const useAboutStore = defineStore('attribute', {
  state: () => ({
    listData: [],
    images: <any>[],
    count: 0,
    key: '',
    responseType: '',
    toggle: reactive({
      about_uz: null,
      about_ru: false,
      about_en: false,
    })
  }),
  actions: {
    async getAtributes() {
      await api.get('attributes').then((res) => {
        this.listData = res.data
      })
    },
    async deleteAtribute(id: number) {
      await api.delete(`attributes/${id}`)
        .then(res => {
          this.getAtributes()
        })
        .catch(err => {
          console.log(id, 'delete attribute')
        })
    },

    async postAttribute(path: any) {
      console.log([{
        attribute_ru: inputStore.input.attributesAdd.nameRu,
        attribute_uz: inputStore.input.attributesAdd.nameUz,
        attribute_en: inputStore.input.attributesAdd.nameEn,
        view: path,
        attribute_id: null
      },
      {
        attribute_ru: inputStore.input.attributesAdd.valueRu,
        attribute_uz: inputStore.input.attributesAdd.valueEn,
        attribute_en: inputStore.input.attributesAdd.valueUz,
        view: path,
        attribute_id: null
      }

      ])

      await api.post('attributes', [{
        attribute_ru: inputStore.input.attributesAdd.nameRu,
        attribute_uz: inputStore.input.attributesAdd.nameUz,
        attribute_en: inputStore.input.attributesAdd.nameEn,
        view: path,
        attribute_id: null
      },
      {
        attribute_ru: inputStore.input.attributesAdd.valueRu,
        attribute_uz: inputStore.input.attributesAdd.valueEn,
        attribute_en: inputStore.input.attributesAdd.valueUz,
        view: path,
        attribute_id: null
      }

      ]).then(res => {
        this.getAtributes()
      })
        .catch(err => {
          console.log(err)
        })
    }
  }
})
