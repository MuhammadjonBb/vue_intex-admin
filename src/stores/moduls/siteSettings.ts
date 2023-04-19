import { defineStore } from 'pinia'
import { api } from 'src/boot/axios'
import { useAuthStore } from './auth'

const { token } = useAuthStore()

export const useSiteSettingsStore: any = defineStore('siteSettings', {
  state: () => ({
    siteInfo: null,
  }),

  actions: {
    getSiteInfo() {
      api.get('sites')
        .then(r => {
          this.siteInfo = r.data[0]
        }).catch(e => {
          console.log(e)
        })
    }
  }
})
