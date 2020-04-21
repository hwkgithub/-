<!--
 * @Description: 订单
 * @Autor: HWK
 * @Date: 2020-04-21 11:18:00
 * @LastEditors: HWK
 * @LastEditTime: 2020-04-21 21:16:34
 -->
<template>
  <div>
    <section class="order">
      <HeaderTop title="订单列表" />
      <section class="order_no_login">
        <img src="./images/person.png">
        <h3>登录后查看外卖订单</h3>
        <button>立即登陆</button>
      </section>
    </section>
  </div>
</template>

<script type="text/javascript">
import HeaderTop from "../../components/HeaderTop/HeaderTop"
export default {
  components: {
    HeaderTop
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl'
// 订单
.order
  width: 100%
  .order_no_login
    padding-top: 140px
    width: 60%
    margin: 0 auto
    text-align: center
    >img
      display: block
      width: 100%
      height: 30%
    >h3
      padding: 10px 0
      font-size: 17px
      color: #6a6a6a
    >button
      display: inline-block
      background: #02a774
      font-size: 14px
      color: #fff
      border: 0
      outline: none
      border-radius: 5px
      padding: 10px 20px
</style>
