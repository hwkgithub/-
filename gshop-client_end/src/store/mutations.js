/*
 * @Description: 直接更新state多个方法的对象
 * @Autor: HWK
 * @Date: 2020-04-22 22:47:33
 * @LastEditors: HWK
 * @LastEditTime: 2020-04-26 15:03:48
 */
import Vue from 'vue'
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  RECEIVE_GOODS,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  CLEAR_CART,
  RECEIVE_SEARCH_SHOPS
} from './mutation-types'

export default {
  //因为mutations里面是小写的所以如果直接写会不匹配
  //要把从字符串变成一个变量，加一个中括号
  // 接收地址
  [RECEIVE_ADDRESS](state, {
    address
  }) {
    state.address = address
  },

  // 接收食品分类数组
  [RECEIVE_CATEGORYS](state, {
    categorys
  }) {
    state.categorys = categorys
  },

  // 接收商家数组
  [RECEIVE_SHOPS](state, {
    shops
  }) {
    state.shops = shops
  },

  // 接收用户信息
  [RECEIVE_USER_INFO](state, {
    userInfo
  }) {
    state.userInfo = userInfo
  },

  // 重置用户信息
  [RESET_USER_INFO](state) {
    state.userInfo = {}
  },
  [RECEIVE_INFO](state, {
    info
  }) {
    state.info = info
  },

  // 接收商家评价数组
  [RECEIVE_RATINGS](state, {
    ratings
  }) {
    state.ratings = ratings
  },

  // 接收商品数组
  [RECEIVE_GOODS](state, {
    goods
  }) {
    state.goods = goods
  },

  // 增加food中的count
  [INCREMENT_FOOD_COUNT](state, {
    food
  }) {
    if (!food.count) { // 第一次增加
      // food.count = 1  // 新增属性(没有数据绑定)
      /*
      对象
      属性名
      属性值
       */
      Vue.set(food, 'count', 1) // 让新增的属性也有数据绑定
      // 将food添加到cartFoods中
      state.cartFoods.push(food)
    } else {
      food.count++
    }
  },
  
  // 减少food中的count
  [DECREMENT_FOOD_COUNT](state, {
    food
  }) {
    if (food.count) { // 只有有值才去减
      food.count--
      if (food.count === 0) {
        // 将food从cartFoods中移除
        state.cartFoods.splice(state.cartFoods.indexOf(food), 1)
      }
    }
  },

  // 清空购物车
  [CLEAR_CART](state) {

    // 清除food中的count
    state.cartFoods.forEach(food => food.count = 0)
    // 移除购物车中所有购物项
    state.cartFoods = []
  },
  
  // 接收搜索的商家数组
  [RECEIVE_SEARCH_SHOPS](state, {
    searchShops
  }) {
    state.searchShops = searchShops
  },
}
