module.exports = {
  mode: 'spa',
  target: 'server',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  css: [
    {src: '@/assets/global-styles/main.scss', lang: 'scss'},
    {src: '@/assets/global-styles/reset.scss', lang: 'scss'},
    {src: '@/assets/global-styles/_fonts.scss', lang: 'scss'},
  ],
  plugins: [],
  components: true,
  buildModules: [],
  modules: [
    '@nuxtjs/axios'
  ],
  build: {}
}
