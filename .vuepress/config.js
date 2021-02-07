/**
 * 根目录config文件保存自定义配置项
 */

const path = require('path')
const { nav } = require('../config/nav')
// const { sidebar } = require('../config/sidebar')
const { autoSideBar } = require('../config/auto-sidebar')

const IMAGES_PATH = path.resolve(__dirname, '../images')
const sidebar = autoSideBar()



module.exports = {
  title: "Jason前端博客",
  description: "记录前端知识学习的一个博客",
  themeConfig: {
    nav,
    sidebar
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@images': IMAGES_PATH
      }
    }
  }
}