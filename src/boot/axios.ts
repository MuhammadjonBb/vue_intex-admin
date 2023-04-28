import { boot } from 'quasar/wrappers'
import axios, { AxiosInstance } from 'axios'
import { Notify } from 'quasar'
import { Router } from 'vue-router'
import { useRouter } from 'vue-router'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance;
  }
}

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
const api = axios.create({ baseURL: 'https://intex-shop-production.up.railway.app/api/' })

export default boot(({ app, router }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API

  api.interceptors.request.use(function (config) {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    // Do something before request is sent
    // console.log('before');
    return config;
  })
  api.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // console.log('after');
    return response;
  }, function (e) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (e.response.status === 401) {
      router.push('/login')
      if (localStorage.getItem('token') === null || e.response.data.error.name === "UnauthorizedException") {
        Notify.create({
          group: false,
          type: 'negative',
          message: 'Пользователь не авторизован',
          position: 'top-right',
        })
      } else if (e.response.data.error.name === 'JsonWebTokenError' || e.response.data.error.name === 'TokenExpiredError') {
        Notify.create({
          group: false,
          type: 'negative',
          message: 'Срок действия токена истек, выполните авторизацию заново',
          position: 'top-right',
        })
      }
    }
    return Promise.reject(e);

  })
})

export { api }
