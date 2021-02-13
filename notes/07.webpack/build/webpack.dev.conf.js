const webpack = require('webpack')
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const baseWepackConfig = require('./webpack.base.conf')
const utils = require('./utils')
const config = require('./config')

const devWebpackConfig = merge(baseWepackConfig, {
  mode: 'development',
  devtool: config.DEV.devtool,
  devServer: {
    host: config.DEV.host,
    port: config.DEV.port,
    publicPath: config.DEV.assetsPublicPath,
    hot: true,
    compress: true,
    proxy: config.DEV.proxy
  },
  module: {
    rules: utils.styleLoaders({
      sourceMap: true,
      extract: false,
      usePostCss: true
    })
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })
  ]
})

module.exports = devWebpackConfig