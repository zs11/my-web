'use strict'
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const config = require('./config')

const assetsPath = function(_path) {
  const assetsSubDirectory = process.env.NODE_ENV === 'production'
  ? config.PROD.assetsSubDirectory
  : config.DEV.assetsSubDirectory

  return path.posix.join(assetsSubDirectory, _path)
}

const styleLoaders = function (options = {}) {
  const vueStyleLoader = 'vue-style-loader'

  const cssLoader = {
    loader: 'css-loader',
    options: {
      sourceMap: options.sourceMap,
      esModule: false
    }
  }

  const postcssLoader = {
    loader: 'postcss-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  const lessLoader = {
    loader: 'less-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  const useStyle = {
    css: generateLoaders('css'),
    less: generateLoaders('less')
  }

  let output = []

  for (let style in useStyle) {
    output.push({
      test: new RegExp('\\.' + style + '$'),
      use: useStyle[style]
    })
  }


  return output


  function generateLoaders (type) {
    let loaders = options.usePostCss ? [cssLoader, postcssLoader] : [cssLoader]
    switch (type) {
      case 'less':
        loaders.push(lessLoader)
        break
      default:
        break
    }
    if (options.extract) {
      return [
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            esModule: false
          }
        },
        ...loaders
      ]
    } else {
      return [
        vueStyleLoader,
        ...loaders
      ]
    }
  }
}

module.exports = {
  assetsPath,
  styleLoaders
}