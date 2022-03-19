import { defineNuxtConfig } from 'nuxt3'
import { resolve } from 'pathe'
import Components from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'

export default defineNuxtConfig({
  publicRuntimeConfig: {
    url: process.env.VERCEL_URL,
    googleAnalyticsId: process.env.GOOGLE_ANALYTICS_ID,
    googleSiteVerification: process.env.GOOGLE_SITE_VERIFICATION,
  },
  srcDir: __dirname,
  buildDir: ".nuxt/dist",
  build: {
    publicPath: ".nuxt/dist"
  },
  css: [
    '@assets/css/main.scss'
  ],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
    {
      path: 'src/pages',
      extensions: ['vue'],
      pathPrefix: false,
    }
  ],
  vite: {
    plugins: [
      Components({
        resolvers: [
          IconsResolver({
            prefix: false,
            enabledCollections: ['mdi']
          }),
        ]
      })
    ],
    resolve: {
      alias: {
        '@src': resolve(__dirname, './src'),
        '@assets': resolve(__dirname, './assets')
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "./assets/css/mixin";`
        }
      }
    }
  },
})
