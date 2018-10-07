<template>
  <router-link :to='options.url'>
    <div class="lineLink">
      <span class="lineLink_title">{{ options.title }}</span>
      <div v-if='showIcon'>
        <span v-if="options.number" class="lineLink_num">{{ options.number }}</span>
        <i class="lineLink_icon"/>
      </div>
    </div>
  </router-link>
</template>
/** 
* 带箭头的单行链接
* title 标题,
* show: 显示 箭头➡️
* number 可选
    options:{
      title,
      url,
      number
    }
*/
<script>
  export default{
    name:'lineLink',
    props:{
      options:{
        type: Object,
        required: true
      },
      show:{
        type: Boolean,
        default: true
      }
    },
    computed:{
      showIcon(){
        return this.show
      }
    }
  }
</script>
<style lang="stylus">
.lineLink
  display flex
  height 38px
  line-height 38px
  padding 6px 14px
  border-bottom 1px solid #ccc
  justify-content space-between
  position relative
  &_title
    font-size 16px
    font-weight 200
  &_num
    font-size 12px
    font-weight 200
  &_icon
    display inline-block
    vertical-align top
    width 25px
    height 40px
    background transparent url('../assets/images/lArrow.svg') 100% 50% / 20px 20px no-repeat
    // &:last-child
    //   border none
</style>

