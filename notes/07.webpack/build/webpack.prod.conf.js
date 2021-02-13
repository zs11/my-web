const webpack = require('webpack')
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const config = require('./config')
const utils = require('./utils')
const baseWebpackConfig = require('./webpack.base.conf')

console.log(process.env.NODE_ENV)

const prodWebpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  devtool: config.PROD.devtool,
  output: config.PROD.output,
  module: {
    rules: utils.styleLoaders({
      sourceMap: true,
      extract: true,
      usePostCss: true
    })
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true,
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[id].[contenthash:8].css',
    }),
    new OptimizeCssAssetsPlugin({
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { 
        map: {
          inline: false,
          annotation: true
        }
      },
    })
  ],
})

module.exports = prodWebpackConfig