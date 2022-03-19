import googleAnalytics from '@nuxtjs/google-analytics';

export default defineNuxtPlugin((nuxtApp) => {
  const googleAnalyticsId = useRuntimeConfig().googleAnalyticsId;
  nuxtApp.vueApp.use(googleAnalytics, {
    id: googleAnalyticsId
  })
})