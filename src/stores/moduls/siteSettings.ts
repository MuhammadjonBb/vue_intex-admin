import { defineStore } from 'pinia'
import { api } from 'src/boot/axios'
import { useInputStore } from './input'
import { Notify } from 'quasar'
import { getPrefix, removeCharacters } from 'src/helpers/formatPhoneNum'

const inputStore = useInputStore()

export const useSiteSettingsStore: any = defineStore('siteSettings', {
  state: () => ({
    siteInfo: null,
    socialNetworks: null,
    langStatus: {
      lang_ru: false,
      lang_uz: false,
      lang_en: false
    }
  }),

  actions: {
    getSiteInfo() {
      return api.get('sites')
        .then(r => {
          this.siteInfo = r.data[0]

          inputStore.input.editContactsDialog.work_ru = this.siteInfo.work_ru
          inputStore.input.editContactsDialog.address_ru = this.siteInfo.address_ru
          inputStore.input.editContactsDialog.work_uz = this.siteInfo.work_uz
          inputStore.input.editContactsDialog.address_uz = this.siteInfo.address_uz
          inputStore.input.editContactsDialog.work_en = this.siteInfo.work_en
          inputStore.input.editContactsDialog.address_en = this.siteInfo.address_en
          inputStore.input.editContactsDialog.phone = this.siteInfo.phone
          inputStore.input.editContactsDialog.email = this.siteInfo.email
        }).catch(e => {
          console.log(e)
        })
    },
    updateSiteInfo() {
      const data = {
        id: 1,
        ...inputStore.input.editContactsDialog,
        ...this.langStatus
      }
      data.phone = getPrefix(data.phone) + removeCharacters(data.phone)
      return api.put('sites', data)
    },
    getSocialNetworks() {
      return api.get('social-networks')
        .then(r => {
          return this.socialNetworks = r.data
        })
    },
    deleteSocialNetwork(id: number) {
      return api.delete(`social-networks/${id}`)
        .then(r => {
          this.getSocialNetworks()
        })
    },
    siteLangUpdate(lang_name: string, status: boolean) {
      return api.put('sites/siteLangUpdate', {
        lang_name,
        status
      })
    },
    updateDefaultLang(lang_name: string) {
      return api.put('sites/defaultLang', { lang_name })
    },
    createSocialNetwork(data: object) {
      return api.post('social-networks', data).then(r => {
        this.getSocialNetworks()
      })
    },
    updateSocialNetwork(data: any) {
      return api.put('social-networks', data).then(r => {
        this.getSocialNetworks()
      })
    }
  },
})

