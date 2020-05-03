/*
 * @Description: 过滤器
 * @Autor: HWK
 * @Date: 2020-04-23 21:15:00
 * @LastEditors: HWK
 * @LastEditTime: 2020-05-03 18:31:16
 */
import Vue from 'vue'
// import moment from 'moment'
import format from 'date-fns/format'
// 自定义过滤器 
Vue.filter('date-format', function (value, formatStr = 'YYYY-MM-DD HH:mm:ss') {
  // return moment(value).format(formatStr)
  return format(value, formatStr)
})
