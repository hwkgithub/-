/*
 * @Description: 路由器对象模块
 * @Autor: HWK
 * @Date: 2020-04-21 11:32:23
 * @LastEditors: HWK
 * @LastEditTime: 2020-04-21 22:20:47
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import MSite from '../pages/MSite/MSite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Serach.vue'
import Login from '../pages/Login/Login.vue'
// import Shop from '../pages/Shop/Shop.vue'

//声明使用插件
Vue.use(VueRouter)

//配置
export default new VueRouter({
  //所有路由
  routes: [{
      path: '/msite',
      component: MSite,
      //meta属性可以控制是否显示 这样只有在这四个路由里面才会显示底部通栏
      //不加这个值的时候默认为空对象是false
      meta: {
        showFooter: true
      },
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFooter: true
      },
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true
      },
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: true
      },
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/',
      redirect: '/msite'
    }
  ]
})
