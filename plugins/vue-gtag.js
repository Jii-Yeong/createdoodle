import vueGtag from 'vue-gtag';

export default defineNuxtPlugin((nuxtApp) => {
  const googleAnalyticsId = useRuntimeConfig().googleAnalyticsId;
  nuxtApp.vueApp.use(vueGtag, {
    config: {
      id: googleAnalyticsId,
      params: {
        anonymize_ip: true
      }
    },
    appName: 'createdoodle',
  }, nuxtApp.$router)
})