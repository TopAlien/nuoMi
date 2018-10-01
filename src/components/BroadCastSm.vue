<template>
  <Basket class="broadCastSm">
    <div class="broadCastSm_title">
      {{ arrInfo[0].title }}
    </div>
    <div class="broadCastSm_wrap" >
      <!-- 计算 有几张就 * 260px -->
      <div class="list" :style='{width:infoWidth}'>
        <div class="list_item" v-for='item in arrInfo' :key='item.id'>
          <div class="list_item-img">
            <img :style="{width:'100%',height:'100%',borderRadius:'5px'}" :src='item.url' alt="">   
          </div>
          <div class="list_item-describe">
            {{ item.describe }}
          </div>
        </div>
      </div>
    </div>
    <div class="broadCastSm_btn">
      查看更多
    </div>
  </Basket>
</template>

<script>
  import Basket from './Basket'

  export default {
    name: 'broadCast',
    components:{
      Basket
    },
    props:{
      arrInfo:{
        type: Array,
        required: true
      }
    },
    computed:{
      infoWidth(){
        return this.arrInfo.length>0 ? '60' * this.arrInfo.length + 'px' : '100%'
      }
    }
  }
</script>
/**
  小图滑动预览  {}>=2
   arrInfo:[{
    title:''  --第一个对象里面要传 {{ arrInfo[0].title }}
    describe:''
  },
  ...
  url:'../../static/image/55963b0e73800000.png'
  ]
 */
<style lang="stylus">
.broadCastSm
  &_title
    margin-bottom 20px
  &_wrap
    width 100%
    height 100px
    overflow-x scroll
    .list
      display flex
      &_item
        position relative
        margin-right 10px
        &-img
          height 60px
          width 60px //宽度
          padding 20px 20px 18px
        &:last-child
          padding 0
        &-describe
          font-size 12px
          position absolute
          bottom 0px
          left 35%
          color black
  &_btn
    height 30px
    line-height 40px
    text-align center
</style>

