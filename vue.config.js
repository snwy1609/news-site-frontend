const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
   publicPath: process.env.NODE_ENV === 'production'
    ? '/news-site-frontend/'
    : '/',
  transpileDependencies: [
    'quasar'
  ],

  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false
    }
  }
})
