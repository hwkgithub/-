/*
 * @Description: 包含多个基于state的getter计算属性的对象
 * @Autor: HWK
 * @Date: 2020-04-22 22:48:18
 * @LastEditors: HWK
 * @LastEditTime: 2020-04-22 22:49:40
 */

export default {

  totalCount (state) {
    return state.cartFoods.reduce((preTotal, food) => preTotal + food.count , 0)
  },

  totalPrice (state) {
    return state.cartFoods.reduce((preTotal, food) => preTotal + food.count*food.price , 0)
  },

  positiveSize (state) {
    return state.ratings.reduce((preTotal, rating) => preTotal + (rating.rateType===0?1:0) , 0)
  }
}