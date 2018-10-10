<template>
  <div class="challen">
    <GoBack :title='title' />
    <div class="challen_list">
      <div class="challen_list-item">
        <img src="../../../assets/images/banner1.jpg" alt="">
        <p>节后甩肉大作战</p>
        <div class="challen_list-item-sub">
          <span>活动进行中</span>
          <span>1239人参加</span>
        </div>
      </div>
      <!--  -->
      <div class="challen_list-item">
        <img src="../../../assets/images/1538966114813_750x340.jpg" alt="">
        <p>助力 S8 全名跑</p>
        <div class="challen_list-item-sub">
          <span>活动进行中</span>
          <span>1232349人参加</span>
        </div>
      </div>
      <!--  -->
      <div class="challen_list-item">
        <img src="../../../assets/images/1538213364197_750x340.jpg" alt="">
        <p>我要跑南马 | 免费拿直通名额</p>
        <div class="challen_list-item-sub">
          <span>活动进行中</span>
          <span>12999人参加</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import GoBack from '@/components/GoBack'
  export default {
    name:'challen', //活动挑战
    components:{
      GoBack
    },
    data(){
      return{
        title:'精选活动'
      }
    }
  }
</script>
<style lang="stylus">
.challen
  &_list
    width 92%
    margin 0 auto
    &-item
      & img
        margin-top 15px
        width 100%
        height 160px
      & p
        padding 10px 0
      &-sub
        display flex
        justify-content space-between
        margin-bottom 10px
        & span
          font-size 12px
          color #ccc
</style>


