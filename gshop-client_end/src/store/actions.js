/*
 * @Description: 通过mutations间接更新state多个方法的对象
 * @Autor: HWK
 * @Date: 2020-04-22 22:47:24
 * @LastEditors: HWK
 * @LastEditTime: 2020-04-27 23:26:52
 */
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_INFO,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  CLEAR_CART,
  RECEIVE_SEARCH_SHOPS
} from './mutation-types'
import {
  reqAddress,
  reqFoodCategorys,
  reqShops,
  reqUserInfo,
  reqLogout,
  reqShopRatings,
  reqShopGoods,
  reqShopInfo,
  reqSearchShop
} from '../api'

export default {
  // 异步获取地址
  async getAddress({
    commit,
    state
  }) {
    // 发送异步ajax请求
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqAddress(geohash)
    // 提交一个mutation
    if (result.code === 0) {
      const address = result.data
      //无论数据什么类型，传的数据都要用对象包起来
      commit(RECEIVE_ADDRESS, {
        address
      })
    }
  },

  // 异步获取食品分类列表
  async getCategorys({
    commit
  }) {
    // 发送异步ajax请求
    const result = await reqFoodCategorys()
    // 提交一个mutation
    if (result.code === 0) {
      const categorys = result.data
      //无论数据什么类型，传的数据都要用对象包起来
      commit(RECEIVE_CATEGORYS, {
        categorys
      })
    }
  },

  // 异步获取商家列表
  async getShops({
    commit,
    state
  }) {
    // 发送异步ajax请求
    const {
      longitude,
      latitude
    } = state
    const result = await reqShops(longitude, latitude)
    // 提交一个mutation
    if (result.code === 0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, {
        shops
      })
    }
  },

  //同步记录用户信息
  //在Login.vue中登录后会保存用户名密码或者手机号到这个actions
  //然后actions提交到对应的mutations后再更新vuex提供的state组件
  //后台数据库会不断读取state然后更新保存用户在cookie
  recordUser({
    commit
  }, userInfo) {
    //无论数据什么类型，传的数据都要用对象包起来
    commit(RECEIVE_USER_INFO, {
      userInfo
    })
  },

  //异步获取用户信息 
  //当你登陆过后后台会有sessionid的cookie保存用户信息
  //这里验证是否存在这么一个用户登陆过在后台数据库查找如果有的话就提交到登陆mutations上
  //在页面显示的时候就查看有没有用户信息 在App.vue发送请求调用这个actions
  //这样在登录过后刷新就不会再重置 维持登陆状态
  async getUserInfo({
    commit
  }) {
    const result = await reqUserInfo()
    if (result.code === 0) {
      const userInfo = result.data
      commit(RECEIVE_USER_INFO, {
        userInfo
      })
    }
  },

  // 异步登出
  async logout({
    commit
  }) {
    const result = await reqLogout()
    if (result.code === 0) {
      commit(RESET_USER_INFO)
    }
  },

  // 异步获取商家信息
  async getShopInfo({
    commit
  }) {
    const result = await reqShopInfo()
    if (result.code === 0) {
      const info = result.data
      commit(RECEIVE_INFO, {
        info
      })
    }
  },

  // 异步获取商家评价列表 
  async getShopRatings({
    commit
  }, callback) {
    const result = await reqShopRatings()
    if (result.code === 0) {
      const ratings = result.data
      commit(RECEIVE_RATINGS, {
        ratings
      })
      // 数据更新了, 通知一下组件
      callback && callback()
    }
  },

  // 异步获取商家商品列表
  //这里面传个回调函数是为了在页面更新之后触发滚动
  async getShopGoods({
    commit
  }, callback) {
    const result = await reqShopGoods()
    if (result.code === 0) {
      const goods = result.data
      commit(RECEIVE_GOODS, {
        goods
      })
      // 数据更新了, 通知一下组件
      callback && callback()
    }
  },

  // 同步更新food中的count值
  updateFoodCount({
    commit
  }, {
    isAdd,
    food
  }) {
    if (isAdd) {
      commit(INCREMENT_FOOD_COUNT, {
        food
      })
    } else {
      commit(DECREMENT_FOOD_COUNT, {
        food
      })
    }
  },

  // 同步清空购物车
  clearCart({
    commit
  }) {
    commit(CLEAR_CART)
  },

  // 异步获取商家商品列表
  async searchShops({
    commit,
    state
  }, keyword) {

    const geohash = state.latitude + ',' + state.longitude
    const result = await reqSearchShop(geohash, keyword)
    if (result.code === 0) {
      const searchShops = result.data
      commit(RECEIVE_SEARCH_SHOPS, {
        searchShops
      })
    }
  },
}
