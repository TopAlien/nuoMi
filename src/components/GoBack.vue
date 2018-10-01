<template>
  <div class="goBack">
    <i class="goBack_icon" @click='goBack'/>
    <span class="goBack_title">{{ title }}</span>
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
    },
    methods:{
      goBack(){
        this.$router.go(-1)
      }
    }
  }
</script>

<style lang="stylus">
.goBack
  height 50px
  display flex
  align-items center
  background-color rgb(95, 84, 92)
  &_icon
    display inline-block
    width 25px
    height 40px
    margin 0 10px
    background transparent url('../assets/images/left.svg') 100% 50% / 20px 20px no-repeat
  &_title
    color #fff
</style>
