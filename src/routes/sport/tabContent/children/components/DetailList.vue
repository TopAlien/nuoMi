<template>
  <div class="detailist">
    <div class="detailist_wrap">
      <p class="detailist_wrap-title">
        {{ item.title }}   
      </p>
      <span class="detailist_wrap-time">{{ item.time }}分钟 · {{ item.K }}</span>
    </div>
    <p v-if='!item.isTrain' class="detailist_state">还未进行过训练</p>
  </div>
</template>
/**
  课程详情
 */
<script>
  export default {
    name:'detail',
    props:{
      item:{
        type: Object,
        required: true
      }
    }
  }
</script>
<style lang="stylus">
.detailist
  background-color #ffffff
  border-bottom 1px solid #cccccc
  &_wrap
    display flex
    height 40px
    justify-content space-between
    align-items center
    padding 10px 20px
    &-time
      font-size 12px
  &_state
    font-size 12px
    font-weight 200
    padding 0 20px 20px

</style>

