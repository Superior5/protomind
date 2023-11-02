// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  imports: {
    dirs: ['stores'],
  },
  devtools: { enabled: true },
  modules: [
    'nuxt-windicss',
    'nuxt-icon',
    ['@pinia/nuxt', { autoImports: ['defineStore', 'acceptHMRUpdate'] }],
    '@samk-dev/nuxt-vcalendar',
  ],
  router: {
    middleware: ['checkAuth.global'],
  },
})
