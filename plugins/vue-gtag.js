import vueGtag from 'vue-gtag';

export default defineNuxtPlugin((nuxtApp) => {
  console.log(nuxtApp.$router)
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