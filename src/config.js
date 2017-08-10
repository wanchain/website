require('babel-polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT,
  app: {
    title: 'Wanchian website',
    description: 'This is the Wanchain website',
    head: {
      titleTemplate: 'Wanchian website: %s',
      meta: [
        {name: 'description', content: 'Wanchian website.'},
        {charset: 'utf-8'},
        {property: 'og:site_name', content: 'Wanchian website'},
        {property: 'og:image', content: ''},
        {property: 'og:locale', content: 'en_US'},
        {property: 'og:title', content: 'Wanchian website.'},
        {property: 'og:description', content: 'Wanchian website.'},
        {property: 'og:card', content: 'summary'},
        {property: 'og:site', content: '@erikras'},
        {property: 'og:creator', content: '@erikras'},
        {property: 'og:image:width', content: '200'},
        {property: 'og:image:height', content: '200'}
      ]
    },
    files: {
      WhitepaperCH: '/files/Wanchain-Whitepaper-CH-version.pdf',
      WhitepaperEN: '/files/Wanchain-Whitepaper-EN-version.pdf',
      YellowpaperCH: '/files/Wanchain-Yellowpaper-CH-version.pdf',
      YellowpaperEN: '/files/Wanchain-Yellowpaper-EN-version.pdf',
    }
  },

}, environment);
