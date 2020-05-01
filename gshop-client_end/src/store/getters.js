/*
 * @Description: 包含多个基于state的getter计算属性的对象
 * @Autor: HWK
 * @Date: 2020-04-22 22:48:18
 * @LastEditors: HWK
 * @LastEditTime: 2020-05-01 16:08:42
 */

export default {

  totalCount(state) {
    //reduce()方法 计算数组元素相加后的总和
    return state.cartFoods.reduce((preTotal, food) => preTotal + food.count, 0)
  },

  totalPrice(state) {
    return state.cartFoods.reduce((preTotal, food) => preTotal + food.count * food.price, 0)
  },

  //满意的数量
  positiveSize(state) {
    return state.ratings.reduce((preTotal, rating) => preTotal + (rating.rateType === 0 ? 1 : 0), 0)
  }
}
