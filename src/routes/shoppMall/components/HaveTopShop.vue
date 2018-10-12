<template>
  <div class="haveShop">
    <div class="haveShop_top">
      <img class="haveShop_top-img" :src="topImgUrl" alt="">
      <div class="haveShop_top-cover">
        <p class="haveShop_top-cover-title">{{ title }}</p>
        <span>nuoMi Training</span>
      </div>
    </div>
    <div class="haveShop_content">
      <div class="haveShop_content-item" v-for='item in shopArr' :key='item.id'>
        <router-link to='detailShop'>
          <img class="haveShop_content-item-img" :src="'http://localhost:3000/images/'+item.url" alt="">
          <p class="haveShop_content-item-text">{{ item.text }}</p>
          <p>{{ item.describe }}</p>
          <span class="haveShop_content-item-money">¥{{ item.money }}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>
/**
用到的字段----数据库字段会多的
shopArr:[
  {
    id:0,
    topUrl:'http:localhost:3000/images/action1.jpg'
    topTitle:'室内训练'   ---第二个对象可不传没用的
                                  this.topImgUrl = this.shopArr[0].topUrl;
                                  this.title = this.shopArr[0].topTitle;
    url:''http:localhost:3000/images/action1.jpg'
    text:'健腹轮',
    money:59
  },
  ...
]
 */
<script>
export default {
  name:'haveTopShop',
  props:{
    shopArr:{
      type: Array,
      required: true
    }
  },
  data(){
    return{
      topImgUrl:'',
      title:'',
      timer:null
    }
  },
  created(){
    this.timer = setTimeout(()=>{
      this.topImgUrl = 'http://localhost:3000/images/'+this.shopArr[0].topUrl;
      this.title = this.shopArr[0].topTitle;
    },300)
  },
  beforeDestroy(){
    clearTimeout(this.timer);
  }
}
</script>
<style lang="stylus">
.haveShop
  width 100%
  margin 15px auto 0
  padding 15px
  box-sizing border-box
  background-color #fff
  &_top
    position relative
    height 60px
    margin-bottom 15px
    &-img
      width 100%
      height 100%
    &-cover
      position absolute
      top 0
      left 0
      width 100%
      height 100%
      text-align center
      color #fff
      font-weight 200
      &-title
        margin 15px 0 5px
        font-size 16px
        font-weight bold
  &_content
    display flex
    justify-content space-between
    flex-wrap wrap
    &-item
      &-img
        width 165px
        height 165px
      &-text
        width 165px
        overflow hidden
        font-size 14px
        font-weight 200
        margin 8px 0
        text-overflow ellipsis //文本溢出显示省略号
        white-space nowrap //文本不会换行（单行文本溢出）
      &-money
        display inline-block
        color red
        margin-bottom 15px
</style>

