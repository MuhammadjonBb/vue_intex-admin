import { defineStore } from 'pinia'
import { api } from 'src/boot/axios'
import { useInputStore } from './input'
import { Notify } from 'quasar'

const inputStore = useInputStore()

export const useSiteSettingsStore: any = defineStore('siteSettings', {
  state: () => ({
    siteInfo: null,
    socialNetworks: null,
  }),

  actions: {
    getSiteInfo() {
      return api.get('sites')
        .then(r => {
          this.siteInfo = r.data[0]

          inputStore.input.editContactsDialog.address = this.siteInfo.address_ru
          inputStore.input.editContactsDialog.phone = this.siteInfo.phone
          inputStore.input.editContactsDialog.email = this.siteInfo.email
          inputStore.input.editContactsDialog.schedule = this.siteInfo.work_ru
        }).catch(e => {
          console.log(e)
        })
    },
    getSocialNetworks() {
      return api.get('social-networks')
        .then(r => {
          return this.socialNetworks = r.data
        })
        .catch(e => {
          Notify.create({
            message: 'Ошибка получения социальных сетей',
            color: 'negative',
            position: 'top-right',
            group: false
          })
        })
    },
    deleteSocialNetwork(id: number) {
      return api.delete(`social-networks/${id}`)
        .then(r => {
          Notify.create({
            message: 'Социальная сеть успешно удалена',
            color: 'positive',
            position: 'top-right',
            group: false
          })
          this.getSocialNetworks()
        })
        .catch(e => {
          Notify.create({
            message: 'Ошибка удаления социальной сети',
            color: 'negative',
            position: 'top-right',
            group: false
          })
        })
    },
    siteLangUpdate(lang_name: string, status: boolean) {
      return api.put('sites/siteLangUpdate', {
        lang_name,
        status
      }).then(() => {
        Notify.create({
          message: 'Язык сайта успешно обновлен',
          color: 'positive',
          position: 'top-right',
          group: false
        })
      }).catch(e => {
        Notify.create({
          message: 'Ошибка обновления языка сайта',
          color: 'negative',
          position: 'top-right',
          group: false
        })
      })
    },
    updateDefaultLang(lang_name: string) {
      return api.put('sites/defaultLang', { lang_name }).then(() => {
        Notify.create({
          message: 'Язык по умолчанию успешно обновлен',
          color: 'positive',
          position: 'top-right',
          group: false
        })
      })
        .catch(e => {
          Notify.create({
            message: 'Ошибка обновления языка по умолчанию',
            color: 'negative',
            position: 'top-right',
            group: false
          })
        })
    },
    createSocialNetwork(data: object) {
      return api.post('social-networks', data)
        .then(r => {
          Notify.create({
            message: 'Социальная сеть успешно создана',
            color: 'positive',
            position: 'top-right',
            group: false
          })
          this.getSocialNetworks()
        })
        .catch(e => {
          Notify.create({
            message: 'Ошибка создания социальной сети',
            color: 'negative',
            position: 'top-right',
            group: false
          })
        })
    },
    updateSocialNetwork(data: any) {
      return api.put('social-networks', data)
        .then(r => {
          Notify.create({
            message: 'Социальная сеть успешно обновлена',
            color: 'positive',
            position: 'top-right',
            group: false
          })
          this.getSocialNetworks()
        })
        .catch(e => {
          Notify.create({
            message: 'Ошибка обновления социальной сети',
            color: 'negative',
            position: 'top-right',
            group: false
          })
        })
    }
  },
})

