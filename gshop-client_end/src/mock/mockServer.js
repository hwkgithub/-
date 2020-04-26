/*
 * @Description: 使用mockjs提供mock数据接口
 * @Autor: HWK
 * @Date: 2020-04-23 21:15:00
 * @LastEditors: HWK
 * @LastEditTime: 2020-04-26 15:20:28
 */
import Mock from 'mockjs'
import data from './data.json'

// 返回goods的接口
//Mock.mock('路径可以随便写', {code:0(说明是个正常数据),data:(根据data.json获取数据)})
Mock.mock('/goods', {
  code: 0,
  data: data.goods
})
// 返回ratings的接口
Mock.mock('/ratings', {
  code: 0,
  data: data.ratings
})
// 返回info的接口
Mock.mock('/info', {
  code: 0,
  data: data.info
})

// export default ???  不需要向外暴露任何数据, 只需要保存能执行即可
