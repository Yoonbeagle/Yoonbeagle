//var path = require('path')

module.exports = {
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       src: path.resolve(__dirname, 'src')
  //     }
  //   },
  // },
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-study/' : '/',
  outputDir: "./docs",
}
