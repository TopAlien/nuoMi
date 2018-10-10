<template>
  <Basket class="broadCast" v-if='arrInfo.length>0'>
    <div class="broadCast-title">
      {{ arrInfo[0].title }} <span v-show="guide" class="broadCast-title-rBtn"> > </span>
    </div>
    <div class="broadCast-wrap" >
      <!-- 计算 有几张就 * 260px -->
      <div class="list" :style='{width:infoWidth}'>
        <div class="list_item" v-for='(item, index) in arrInfo' :key='item.id'>
          <div class="list_item-icon" @click='arrInfo.splice(index, 1)'></div>
          <div class="list_item-img">
            <img :style="{width:'100%',height:'100%',borderRadius:'5px'}" :src="item.url" alt="">   
          </div>
          <div class="list_item-describe">
            {{ item.describe }}
            <p class="list_item-describe-sm">{{ item.describeSm }}</p>
          </div>
        </div>
      </div>
    </div>
  </Basket>
</template>
/**
  guide: boolean 是否需要引导,
  arrInfo:[{
    title:''  --第一个对象里面要传 {{ arrInfo[0].title }}
    describe:''
    describeSm:''
    'url:'../../static/image/55963b0e73800000.png''
  },
  ...
  ]
  滑动预览  内容{} >=2 
 */
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
      },
      guide:{
        type: Boolean,
        default: false
      }
    },
    computed:{
      infoWidth(){
        return this.arrInfo.length> 0 ? '260' * this.arrInfo.length + 'px' : '100%'
      }
    }
  }
</script>

<style lang="stylus">
.broadCast
  position relative
  &-title
    margin-bottom 20px
    &-rBtn
      position absolute
      top 15px
      right 20px
  &-wrap
    width 100%
    overflow-x scroll
    .list
      display flex
      &_item
        position relative
        margin-right 10px
        &-img
          width 260px //宽度
          height 120px
        &-icon
          position absolute
          color #24c789
          top 10px
          right 10px
          width 20px
          height 20px
          border-radius 50%
          background white url('../assets/images/close.svg') 50% 50% / 10px 10px no-repeat
        &:last-child
          padding 0
        &-describe
          text-align center
          margin-top 10px
          line-height 20px
          &-sm
            font-size 12px
            color #ccc 

</style>

