<!--
 * @Description: 底部通栏
 * @Autor: HWK
 * @Date: 2020-04-21 11:18:00
 * @LastEditors: HWK
 * @LastEditTime: 2020-04-23 21:16:26
 -->
<template>
  <div class="footer_guide">
    <!-- 
    这里on样式要用强制绑定class动态绑定  
    要思考是否用对象语法(确定类名不确定什么时候应用这个类名的时候) 
    格式：  :class="{类名:布尔值}"
    -->
    <span
      class="guide_item"
      :class="{on: '/msite'===$route.path}"
      @click="goTo('/msite')"
    >
      <span class="item_icon">
        <i class="iconfont icon-waimai"></i>
      </span>
      <span>外卖</span>
    </span>
    <a
      href="javascript:;"
      class="guide_item"
      :class="{on: '/search'===$route.path}"
      @click="goTo('/search')"
    >
      <span class="item_icon">
        <i class="iconfont icon-search"></i>
      </span>
      <span>搜索</span>
    </a>
    <a
      href="javascript:;"
      class="guide_item"
      :class="{on: '/order'===$route.path}"
      @click="goTo('/order')"
    >
      <span class="item_icon">
        <i class="iconfont icon-dingdan"></i>
      </span>
      <span>订单</span>
    </a>
    <a
      href="javascript:;"
      class="guide_item"
      :class="{on: '/profile'===$route.path}"
      @click="goTo('/profile')"
    >
      <span class="item_icon">
        <i class="iconfont icon-geren"></i>
      </span>
      <span>我的</span>
    </a>
  </div>
</template>

<script>
export default {
  methods: {
    goTo(path) {
      this.$router.replace(path)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl'
.footer_guide // footer
  top-border-1px(#e4e4e4)
  position: fixed
  z-index: 100
  left: 0
  right: 0
  bottom: 0
  background-color: #fff
  width: 100%
  height: 50px
  display: flex
  .guide_item
    display: flex
    flex: 1
    text-align: center
    flex-direction: column
    align-items: center
    margin: 5px
    color: #999999
    // 这个on是动态的点击哪个底部通栏哪个通栏变绿色
    &.on
      color: #02a774
    span
      font-size: 12px
      margin-top: 2px
      margin-bottom: 2px
      .iconfont
        font-size: 22px
</style>