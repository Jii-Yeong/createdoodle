import vueGtag from 'vue-gtag';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(vueGtag, {
    config: {
      id: process.env.GOOGLE_ANALYTICS_ID,
      params: {
        anonymize_ip: true
      }
    },
    appName: 'createdoodle',
  }, nuxtApp.$router)
})