<template>
  <div class="goBack">
    <i class="goBack_icon" @click='$router.go(-1)'/>
    <span class="goBack_title" v-if='title'>{{ title }}</span>
  </div>
</template>
/**
 * 回退一步
 */
<script>
  export default{
    name:'goBack',
    props:{
      title: {
        type: String
      }
    }
  }
</script>

<style lang="stylus">
.goBack
  position fixed
  top 0
  left 0
  width 100%
  height 50px
  display flex
  align-items center
  background-color rgb(95, 84, 92)
  z-index 999
  &_icon
    display inline-block
    width 35px
    height 35px
    margin 0 10px
    background transparent url('../assets/images/left.svg') 50% 50% / 20px 20px no-repeat
  &_title
    color #fff
</style>
