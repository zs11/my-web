'use strict'
const path = require('path')

const DEV = {
  // path
  assetsPublicPath: "/",
  assetsSubDirectory: '/',

  // dev-server
  host: '127.0.0.1',
  port: 8080,
  proxy: {},

  // devtool
  devtool: 'eval-cheap-module-source-map',
}

const PROD = {
  // output
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].[chunkhash:8].js',
    chunkFilename: 'js/[id].[chunkhash:8].js'
  },

  // template
  template: path.resolve(__dirname, '../dist/index.html'),

  // path
  assetsRoot: path.resolve(__dirname, '../dist'),
  assetsSubDirectory: '/',
  assetsPublicPath: "/",

  // devtool
  devtool: 'source-map',
}

module.exports = {
  DEV,
  PROD
}