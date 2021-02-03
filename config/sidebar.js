const sidebar = {
  '/notes/': [
    {
      title: 'javascript',
      children: [
        {
          title: 'js介绍',
          children: [
            'javascript/js介绍/01.js和es',
          ]
        },
        {
          title: '基础知识',
          children: [
            'javascript/基础知识/01.js数据类型和判断',
            'javascript/基础知识/02.call,apply,bind',
            'javascript/基础知识/03.new',
            'javascript/基础知识/04.instanceof实现',
            'javascript/基础知识/05.对象和数组',
            'javascript/基础知识/06.深拷贝和浅拷贝',
            'javascript/基础知识/07.number',
            'javascript/基础知识/08.隐式转换',
            'javascript/基础知识/09.null和undefined',
            'javascript/基础知识/10.function-函数',
            'javascript/基础知识/11.this',
            'javascript/基础知识/12.作用域和变量提升',
            'javascript/基础知识/13.预编译',
            'javascript/基础知识/14.闭包',
            'javascript/基础知识/15.原型，原型链，原型继承',
            'javascript/基础知识/16.事件循环机制',
            'javascript/基础知识/17.js继承',
            'javascript/基础知识/18.跨域',
            'javascript/基础知识/19.严格模式',
          ]
        },
        {
          title: 'ES6',
          children: [
            'javascript/ES6/01.let、const和块级作用域',
            'javascript/ES6/02.promise',
            'javascript/ES6/03.async、await',
            'javascript/ES6/04.Iterator和for...of和for...in',
            'javascript/ES6/05.Proxy和Reflect',
            'javascript/ES6/06.class',
          ]
        },
        {
          title: '设计模式',
          children: [
            'javascript/设计模式/01.js设计模式'
          ]
        }
      ]
    },
    {
      title: 'vue',
      children: [
        {
          title: '相关知识',
          children: [
            'vue/相关知识/01.mvc、mvp、mvvm',
          ]
        },
        {
          title: 'vue特性原理',
          children: [
            'vue/vue特性原理/01.reactivity',
            'vue/vue特性原理/02.plugin',
            'vue/vue特性原理/03.render-function',
            'vue/vue特性原理/04.state-management',
            'vue/vue特性原理/05.routing',
            'vue/vue特性原理/06.form-validation',
            'vue/vue特性原理/07.i18n',
          ]
        }
      ]
    },
    {
      title: '安全、存储、网络',
      children: [
        {
          title: 'web安全',
          children: [
            'other/web安全/01.XSS',
            'other/web安全/02.CSRF',
          ]
        },
        {
          title: '前端存储',
          children: [
            'other/前端存储/01.cookie、session、token',
            'other/前端存储/02.cookie、localStorage、sessionStorage',
            'other/前端存储/03.http缓存',
          ]
        },
        {
          title: '网络知识',
          children: [
            'other/网络知识/01.http和https',
            'other/网络知识/02.http1.0、http1.1、http2.0',
            'other/网络知识/03.GET和POST的区别',
            'other/网络知识/04.TCP和UDP',
          ]
        }
      ]
    },
    {
      title: '数据结构与算法',
      children: [
        {
          title: '剑指offer',
          children: [
            'algorithm/剑指offer/01.剑指offer题解(上)',
            'algorithm/剑指offer/02.剑指offer题解(中)',
          ]
        }
      ]
    }
  ]
}

module.exports = {
  sidebar
};