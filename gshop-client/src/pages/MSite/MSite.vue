<!--
 * @Description: 外卖首页  子组件
 * @Autor: HWK
 * @Date: 2020-04-21 11:18:00
 * @LastEditors: HWK
 * @LastEditTime: 2020-04-21 21:43:35
 -->
<template>
  <section class="msite">
    <!--首页头部-->
    <!-- slot是插槽可以在子组件里面写入后插入父组件里然后在父组件显示 -->
    <HeaderTop title="深圳市宝安区石岩街道黎光村中十三巷黎光幼儿园">
      <span
        class="header_search"
        slot="left"
      >
        <i class="iconfont icon-sousuo"></i>
      </span>
      <span
        class="header_login"
        slot="right"
      >
        <span class="header_login_text">登录|注册</span>
      </span>
    </HeaderTop>
    <!--首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <!-- 轮播元素 -->
          <div class="swiper-slide">
            <a
              href="javascript:"
              class="link_to_food"
            >
              <div class="food_container">
                <img src="./images/nav/1.jpg">
              </div>
              <span>甜品饮品</span>
            </a>
            <a
              href="javascript:"
              class="link_to_food"
            >
              <div class="food_container">
                <img src="./images/nav/2.jpg">
              </div>
              <span>商超便利</span>
            </a>
            <a
              href="javascript:"
              class="link_to_food"
            >
              <div class="food_container">
                <img src="./images/nav/3.jpg">
              </div>
              <span>美食</span>
            </a>
            <a
              href="javascript:"
              class="link_to_food"
            >
              <div class="food_container">
                <img src="./images/nav/4.jpg">
              </div>
              <span>简餐</span>
            </a>
            <a
              href="javascript:"
              class="link_to_food"
            >
              <div class="food_container">
                <img src="./images/nav/5.jpg">
              </div>
              <span>新店特惠</span>
            </a>
            <a
              href="javascript:"
              class="link_to_food"
            >
              <div class="food_container">
                <img src="./images/nav/6.jpg">
              </div>
              <span>准时达</span>
            </a>
            <a
              href="javascript:"
              class="link_to_food"
            >
              <div class="food_container">
                <img src="./images/nav/7.jpg">
              </div>
              <span>预订早餐</span>
            </a>
            <a
              href="javascript:"
              class="link_to_food"
            >
              <div class="food_container">
                <img src="./images/nav/8.jpg">
              </div>
              <span>土豪推荐</span>
            </a>
          </div>
          <div class="swiper-slide">
            <a
              href="javascript:"
              class="link_to_food"
            >
              <div class="food_container">
                <img src="./images/nav/9.jpg">
              </div>
              <span>甜品饮品</span>
            </a>
            <a
              href="javascript:"
              class="link_to_food"
            >
              <div class="food_container">
                <img src="./images/nav/10.jpg">
              </div>
              <span>商超便利</span>
            </a>
            <a
              href="javascript:"
              class="link_to_food"
            >
              <div class="food_container">
                <img src="./images/nav/11.jpg">
              </div>
              <span>美食</span>
            </a>
            <a
              href="javascript:"
              class="link_to_food"
            >
              <div class="food_container">
                <img src="./images/nav/12.jpg">
              </div>
              <span>简餐</span>
            </a>
            <a
              href="javascript:"
              class="link_to_food"
            >
              <div class="food_container">
                <img src="./images/nav/13.jpg">
              </div>
              <span>新店特惠</span>
            </a>
            <a
              href="javascript:"
              class="link_to_food"
            >
              <div class="food_container">
                <img src="./images/nav/14.jpg">
              </div>
              <span>准时达</span>
            </a>
            <a
              href="javascript:"
              class="link_to_food"
            >
              <div class="food_container">
                <img src="./images/nav/1.jpg">
              </div>
              <span>预订早餐</span>
            </a>
            <a
              href="javascript:"
              class="link_to_food"
            >
              <div class="food_container">
                <img src="./images/nav/2.jpg">
              </div>
              <span>土豪推荐</span>
            </a>
          </div>
        </div>
        <!-- 分页器 -->
        <div class="swiper-pagination"></div>
        <!-- 导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </nav>
    <!--首页附近商家-->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <ShopList />
    </div>
  </section>
</template>

<script type="text/javascript">

import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import HeaderTop from '../../components/HeaderTop/HeaderTop'
import ShopList from '../../components/ShopList/ShopList'

export default {

  mounted() {
    //创建一个swiper实例对象，来实现轮播 new swiper的时候保证页面已经显示了
    new Swiper('.swiper-container', {
      loop: true,  //可以无缝播放，循环轮播
      // 分页器
      pagination: {
        el: '.swiper-pagination',
      },
      //前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
  },

  components: {
    HeaderTop,
    ShopList
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl'
// 首页
.msite
  width: 100%
  .msite_nav
    bottom-border-1px(#e4e4e4)
    margin-top: 45px
    height: 200px
    background: #fff
    .swiper-container
      width: 100%
      height: 100%
      .swiper-wrapper
        width: 100%
        height: 100%
        .swiper-slide
          display: flex
          justify-content: center
          align-items: flex-start
          flex-wrap: wrap
          .link_to_food
            width: 25%
            .food_container
              display: block
              width: 100%
              text-align: center
              padding-bottom: 10px
              font-size: 0
              img
                display: inline-block
                width: 50px
                height: 50px
            span
              display: block
              width: 100%
              text-align: center
              font-size: 13px
              color: #666
      .swiper-pagination
        >span.swiper-pagination-bullet-active
          background: #02a774
  .msite_shop_list
    top-border-1px(#e4e4e4)
    margin-top: 10px
    background: #fff
    .shop_header
      padding: 10px 10px 0
      .shop_icon
        margin-left: 5px
        color: #999
      .shop_header_title
        color: #999
        font-size: 14px
        line-height: 20px
</style>
