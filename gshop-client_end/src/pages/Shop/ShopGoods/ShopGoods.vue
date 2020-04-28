<!--
 * @Description: 商家页面 --- 点餐
 * @Autor: HWK
 * @Date: 2020-04-21 11:18:00
 * @LastEditors: HWK
 * @LastEditTime: 2020-04-28 23:18:27
 -->
<template>
  <div>
    <div class="goods">
      <!-- 左边 -->
      <div class="menu-wrapper">
        <ul>
          <!--
              当有current类名的时候就是选中状态 标识当前分类
              currentIndex计算得到当前分类的下标 对应index
              这样就能知道点击左边的时候哪个能应用类名current
          -->
          <li class="menu-item"
              v-for="(good, index) in goods"
              :key="index"
              :class="{current: index===currentIndex}"
              @click="clickMenuItem(index)">
            <span class="text bottom-border-1px">
              <img class="icon"
                   :src="good.icon"
                   v-if="good.icon">
              {{good.name}}
            </span>
          </li>
        </ul>
      </div>

      <!-- 右边 -->
      <div class="foods-wrapper">
        <!-- 右边顶部 -->
        <ul ref="foodsUl">
          <li class="food-list-hook"
              v-for="(good, index) in goods"
              :key="index">
            <h1 class="title">{{good.name}}</h1>
            <!-- 右边内容 -->
            <ul>
              <li class="food-item bottom-border-1px"
                  v-for="(food, index) in good.foods"
                  :key="index"
                  @click="showFood(food)">
                <div class="icon">
                  <img width="57"
                       height="57"
                       :src="food.icon">
                </div>
                <div class="content">
                  <h2 class="name">{{food.name}}</h2>
                  <p class="desc">{{food.description}}</p>
                  <div class="extra">
                    <span class="count">月售{{food.sellCount}}份</span>
                    <span>好评率{{food.rating}}%</span>
                  </div>
                  <div class="price">
                    <span class="now">￥{{food.price}}</span>
                    <span class="old"
                          v-if="food.oldPrice">￥{{food.oldPrice}}</span>
                  </div>
                  <div class="cartcontrol-wrapper">
                    <CartControl :food="food" />
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <ShopCart />
    </div>
    <Food :food="food"
          ref="food" />
  </div>
</template>


<script>
import BScroll from 'better-scroll'
import { mapState } from 'vuex'
import CartControl from '../../../components/CartControl/CartControl.vue'
import Food from '../../../components/Food/Food.vue'
import ShopCart from '../../../components/ShopCart/ShopCart.vue'

export default {
  data() {
    return {
      scrollY: 0, //右侧滑动的Y轴坐标(滑动过程时实时变化)
      tops: [], //所有右侧分类li的top组成的数组(列表第一次显示之后就不再变化)
      food: {} //需要显示的food
    }
  },
  mounted() {
    this.$store.dispatch('getShopGoods', () => {
      // 数据更新后执行
      //nextTick()，是将回调函数延迟在下一次dom更新数据后调用，
      //简单的理解是：当数据更新了，在dom中渲染后，自动执行该函数
      this.$nextTick(() => {
        // 列表数据更新显示后执行
        this._initScroll()
        this._initTops()
      })
    })
  },

  computed: {
    ...mapState(['goods']),

    // 计算得到当前分类的下标
    currentIndex() {
      //初始和相关数据发生了变化
      //得到条件数据
      const { scrollY, tops } = this
      //把每个和左边对应标题的top值对应的下标计算出来
      const index = tops.findIndex((top, index) => {
        // scrollY>=当前top && scrollY<下一个top
        return scrollY >= top && scrollY < tops[index + 1]
      })
      // 返回结果
      return index
    }
  },

  methods: {
    // 初始化滚动
    _initScroll() {
      // 列表显示之后创建
      new BScroll('.menu-wrapper', {
        click: true
      })
      this.foodsScroll = new BScroll('.foods-wrapper', {
        probeType: 2, // 因为惯性滑动不会触发
        click: true
      })

      // 给右侧列表绑定scroll监听
      this.foodsScroll.on('scroll', ({ x, y }) => {
        console.log(x, y)
        //函数返回指定数字的绝对值
        this.scrollY = Math.abs(y)
      })
      // 给右侧列表绑定scroll结束的监听
      this.foodsScroll.on('scrollEnd', ({ x, y }) => {
        console.log('scrollEnd', x, y)
        //函数返回指定数字的绝对值
        this.scrollY = Math.abs(y)
      })
    },

    // 初始化tops
    _initTops() {
      // 1. 初始化tops
      const tops = []
      let top = 0
      tops.push(top)
      // 2. 收集
      // 找到所有分类的li
      const lis = this.$refs.foodsUl.getElementsByClassName('food-list-hook')
      //将有length属性的对象转换为数组(特别注意： 这个对象一定要有length属性)
      Array.prototype.slice.call(lis).forEach(li => {
        //元素内部的高度clientHeight 包含内边距，但不包括水平滚动条、边框和外边距
        top += li.clientHeight
        tops.push(top)
      })
      // 3. 更新数据
      this.tops = tops
      console.log(tops)
    },

    clickMenuItem(index) {
      // console.log(index)
      // 使用右侧列表滑动到对应的位置

      // 得到目标位置的scrollY
      const scrollY = this.tops[index]
      // 立即更新scrollY(让点击的分类项成为当前分类)
      this.scrollY = scrollY
      // 平滑滑动右侧列表
      this.foodsScroll.scrollTo(0, -scrollY, 300)
    },

    // 显示点击的food
    showFood(food) {
      // 设置food
      this.food = food
      // 显示food组件 (在父组件中调用子组件对象的方法)
      this.$refs.food.toggleShow()
    }
  },

  components: {
    CartControl,
    Food,
    ShopCart
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../../common/stylus/mixins.styl'
.goods
  display flex
  position absolute
  top 195px
  bottom 46px
  width 100%
  background #fff
  overflow hidden
  .menu-wrapper
    flex 0 0 80px
    width 80px
    background #f3f5f7
    .menu-item
      display table
      height 54px
      width 56px
      padding 0 12px
      line-height 14px
      &.current
        position relative
        z-index 10
        margin-top -1px
        background #fff
        color $green
        font-weight 700
        .text
          border-none()
      .icon
        display inline-block
        vertical-align top
        width 12px
        height 12px
        margin-right 2px
        background-size 12px 12px
        background-repeat no-repeat
      .text
        display table-cell
        width 56px
        vertical-align middle
        bottom-border-1px(rgba(7, 17, 27, 0.1))
        font-size 12px
  .foods-wrapper
    flex 1
    .title
      padding-left 14px
      height 26px
      line-height 26px
      border-left 2px solid #d9dde1
      font-size 12px
      color rgb(147, 153, 159)
      background #f3f5f7
    .food-item
      display flex
      margin 18px
      padding-bottom 18px
      bottom-border-1px(rgba(7, 17, 27, 0.1))
      &:last-child
        border-none()
        margin-bottom 0
      .icon
        flex 0 0 57px
        margin-right 10px
      .content
        flex 1
        .name
          margin 2px 0 8px 0
          height 14px
          line-height 14px
          font-size 14px
          color rgb(7, 17, 27)
        .desc, .extra
          line-height 10px
          font-size 10px
          color rgb(147, 153, 159)
        .desc
          line-height 12px
          margin-bottom 8px
        .extra
          .count
            margin-right 12px
        .price
          font-weight 700
          line-height 24px
          .now
            margin-right 8px
            font-size 14px
            color rgb(240, 20, 20)
          .old
            text-decoration line-through
            font-size 10px
            color rgb(147, 153, 159)
        .cartcontrol-wrapper
          position absolute
          right 0
          bottom 12px
</style>
