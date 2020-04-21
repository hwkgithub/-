/*
 * @Description: 入口JS
 * @Autor: HWK
 * @Date: 2020-04-21 09:47:43
 * @LastEditors: HWK
 * @LastEditTime: 2020-04-21 12:16:41
 */

import Vue from 'vue'
import App from './App.vue'
import router from './router'

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
