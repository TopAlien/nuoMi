<template>
  <div class="scrollShop">
    <p class="scrollShop_title">{{ title }}</p>
    <div class="scrollShop_wrap">
      <ul class="scrollShop_wrap-list" :style="{ width: len * 100 + 'px'}">
        <li class="scrollShop_wrap-list-item" v-for="item in shopArr" :key='item.id'>
          <img class="scrollShop_wrap-list-item-img" :src="'http:localhost:3000/images/'+item.url" alt="">
          <p class="scrollShop_wrap-list-item-text">{{ item.text }}</p>
          <p class="scrollShop_wrap-list-item-describe">{{ item.describe }}</p>
          <span class="scrollShop_wrap-list-item-money">¥{{ item.money }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
/** 
shopArr:[
  {
    id:0,
    title:'人气单品',
    url:''
    text:'智能题支撑'
    describe:'多彩好看智能好看智能好看智能'，
    money: 199
  }
]

*/
<script>
  export default {
    name: 'scrollShop',
    props:{
      shopArr:{
        type: Array,
        required: true
      }
    },
    data(){
      return{
        title:'',
        len:0
      }
    },
    created(){
      this.title = this.shopArr[0].title;
      this.len = this.shopArr.length;
    }
  }
</script>
<style lang="stylus">
.scrollShop
  width 100%
  background-color #fff
  padding 15px
  margin-top 15px
  box-sizing border-box
  &_title
    margin-bottom 20px
    font-weight 200
    font-size 14px
  &_wrap
    width 100%
    overflow-x scroll
    &-list
      width 100%
      display flex
      justify-content space-between
      padding-bottom 4px
      &-item
        width 100px
        margin-right 5px
        &:last-child
          margin-right 0
        &-img
          width 100%
          height 100px
        &-text
          margin 8px 0
          font-size 14px
        &-describe
          margin 6px 0 10px
          overflow hidden
          text-overflow ellipsis //文本溢出显示省略号
          white-space nowrap //文本不会换行（单行文本溢出）
          font-size 12px
          font-weight 200
          color #777
        &-money
          color red
</style>


