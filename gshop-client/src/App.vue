<!--
 * @Description: 
 * @Autor: HWK
 * @Date: 2020-04-21 09:47:44
 * @LastEditors: HWK
 * @LastEditTime: 2020-04-21 10:23:10
 -->
<template>
  <div id="app">
    <router-view />
    <FooterGuide v-show="$route.meta.showFooter" />
  </div>
</template>

<script>


export default {

  
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.app {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
}
</style>