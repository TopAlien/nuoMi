<template>
  <div class="basket">
    <div class="basket_wrap">
      <p>{{title}}</p>
      <slot></slot>
    </div>
  </div>
</template>
/*
* title 可选
* 居中的白背景框
*/
<script>
  export default {
    name: 'basket',
    props:{
      title: String,
      default: null
    }
  }
</script>

<style lang='stylus'>
  .basket
    width 100%
    height auto
    font-weight 200
    font-size 14px
    background-color #fff
    border-radius 4px
    margin-bottom 12px
    &_wrap
      width 94%
      padding 16px 0
      margin 0 auto
</style>

