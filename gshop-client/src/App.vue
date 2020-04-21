<!--
 * @Description: 
 * @Autor: HWK
 * @Date: 2020-04-21 09:47:44
 * @LastEditors: HWK
 * @LastEditTime: 2020-04-21 22:25:33
 -->
<template>
  <div id="app">
    <router-view />
    <!-- meta属性可以控制是否显示 这样只有在这四个路由里面才会显示底部通栏 -->
    <FooterGuide v-show="$route.meta.showFooter" />
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'

export default {
  components: {
    FooterGuide
  }

}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.app
  width: 100%
  height: 100%
  background: #f5f5f5
</style>