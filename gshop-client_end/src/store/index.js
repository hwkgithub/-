/*
 * @Description: vuex核心管理对象store
 * @Autor: HWK
 * @Date: 2020-04-22 22:46:40
 * @LastEditors: HWK
 * @LastEditTime: 2020-04-23 21:21:14
 */
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
