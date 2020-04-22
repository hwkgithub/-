/*
 * @Description: ajax请求函数模块
 * @Autor: HWK
 * @Date: 2020-04-21 09:47:43
 * @LastEditors: HWK
 * @LastEditTime: 2020-04-22 10:59:25
 */
/*
返回值: promise对象(异步返回的数据是: response.data)
 */
import axios from 'axios'
//url,请求参数（以对象的形式）,请求方式
export default function ajax(url, data = {}, type = 'GET') {

  return new Promise(function (resolve, reject) {
    // 执行异步ajax请求
    let promise
    //如果是get请求，就把data对象里面的参数拼接到URL里面去
    if (type === 'GET') {
      // 准备url query参数数据
      let dataStr = '' //数据拼接字符串
      //Object.keys() 方法会返回一个由一个给定对象的自身可枚举属性组成的数组，
      //数组中属性名的排列顺序和使用 for...in 循环遍历该对象时返回的顺序一致
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      // 发送get请求
      promise = axios.get(url)
    } else {
      // 发送post请求
      promise = axios.post(url, data)
    }
    //promise就是ajax函数传过来的数据然后.then传入function里面的response
    promise.then(function (response) {
      // 成功了调用resolve()
      resolve(response.data)
    }).catch(function (error) {
      //失败了调用reject()
      reject(error)
    })
  })
}

/*
如果说外边不包含一个Promise就会多了一步
调用函数后还要再去访问response的数据
const response = await ajax()
const result = response.data

外边包含了一个Promise就可以直接交给result
调用异步函数直接得到结果数据
const resule = await ajax()
 */
