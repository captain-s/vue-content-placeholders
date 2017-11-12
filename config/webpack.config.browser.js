var webpack = require('webpack')
var merge = require('webpack-merge')
var base = require('./webpack.config.base')
var path = require('path')

var outputFile = 'vue-content-placeholders'
var globalName = 'VueContentPlaceholders'

module.exports = merge(base, {
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: outputFile + '.browser.js',
    library: globalName,
    libraryTarget: 'umd',
  },
  externals: {},
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: true,
      },
      mangle: false,
    }),
  ],
})
