import { defineNuxtConfig } from 'nuxt3'
import { resolve } from 'pathe'
import Components from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'

export default defineNuxtConfig({
  buildModules: [
    'unplugin-icons/nuxt',
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
    }
  }
})
