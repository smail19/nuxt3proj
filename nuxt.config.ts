
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr:false,
  devtools: { enabled: true },
  css: ['@fortawesome/fontawesome-free/css/all.css'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  modules: [
    ['@nuxtjs/google-fonts', {
      families: {
        'Plus Jakarta Sans': true,
        download: true,
        inject: true
      }
    }],
     '@pinia/nuxt',
  ],
 
   
 
})
