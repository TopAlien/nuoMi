<template>
  <div class="grade">
    <GoBack :title='title'/>
    <div class="grade_user">
      <img class="grade_user-avatar" :src="completionImgUrl(user.avatar)" alt="">
      <span class="grade_user-record">得分记录</span>
      <p class="grade_user-name">{{ user.name }}</p>
      <p>120 成长值</p>
    </div>
    <div class="grade_scroll">
      <ul class="grade_scroll-top">
        <li class="grade_scroll-top-item">Start <p>0成长值</p></li>
        <li class="grade_scroll-top-item">nuoMi.1 <p>800成长值</p></li>
        <li class="grade_scroll-top-item">nuoMi.2 <p>2000成长值</p></li>
        <li class="grade_scroll-top-item">nuoMi.3 <p>6000成长值</p></li>
        <li class="grade_scroll-top-item">nuoMi.4<p>12000成长值</p></li>
        <li class="grade_scroll-top-item">nuoMi.5 <p>20000成长值</p></li>
        <li class="grade_scroll-top-item">nuoMi.6 <p>30000成长值</p></li>
        <li class="grade_scroll-top-item">nuoMi.7 <p>50000成长值</p></li>
        <li class="grade_scroll-top-item">nuoMi.8 <p>75000成长值</p></li>
        <li class="grade_scroll-top-item">nuoMi.9 <p>100000成长值</p></li>
        <li class="grade_scroll-top-item">nuoMi.10 <p>150000成长值</p></li>
      </ul>
    </div>
    <div class="grade_wrapper">
      <div class="grade_content">
        <ul class="grade_content-wrap"  
            @touchmove='touchMove' 
            @touchend='touchEnd' 
            @touchstart='touchStart' >
          <li class="grade_content-wrap-item">Start <p>0成长值</p></li>
          <li class="grade_content-wrap-item">nuoMi.1 <p>800成长值</p></li>
          <li class="grade_content-wrap-item">nuoMi.2 <p>2000成长值</p></li>
          <li class="grade_content-wrap-item">nuoMi.3 <p>6000成长值</p></li>
          <li class="grade_content-wrap-item">nuoMi.4<p>12000成长值</p></li>
          <li class="grade_content-wrap-item">nuoMi.5 <p>20000成长值</p></li>
          <li class="grade_content-wrap-item">nuoMi.6 <p>30000成长值</p></li>
          <li class="grade_content-wrap-item">nuoMi.7 <p>50000成长值</p></li>
          <li class="grade_content-wrap-item">nuoMi.8 <p>75000成长值</p></li>
          <li class="grade_content-wrap-item">nuoMi.9 <p>100000成长值</p></li>
          <li class="grade_content-wrap-item">nuoMi.10 <p>150000成长值</p></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import {completionImgUrl} from '@/utils/utils'
  import GoBack from '@/components/GoBack'
  export default {
    name:'grade',
    components:{
      GoBack
    },
    data(){
      return{
        user:{},
        completionImgUrl:null,
        title:'我的 nuoMi 等级'
      }
    },
    methods:{
      touchStart(){
      },
      touchMove(){
      },
      touchEnd(){
      }
    },
    created(){
      this.completionImgUrl = completionImgUrl;
      this.user = this.$store.getters.user
    }
  }
</script>

<style lang="stylus">
.grade
  width 100%
  height 615px
  color #ccc
  font-weight 200
  background-color rgb(93,85,92)
  &_user
    position relative
    width 100%
    text-align center
    margin 0 auto
    &-record
      position absolute
      top 20px
      right 20px
      font-size 12px
      padding 5px 10px
      background-color #333
      border-radius 20px
    &-avatar
      margin 30px 0 20px
      width 60px
      height 60px
      border-radius 50%
      box-shadow 0 0 0 3px #ccc
    &-name
      margin-bottom 10px
  &_scroll
    width 100%
    overflow-x scroll
    &-top
      display flex
      height 55px
      justify-content space-between
      text-align center
      margin-top 70px
      &-item
        padding 0 44px
        position relative
        &::before
          position absolute
          top -30px
          left 50%
          display inline-block
          content ''
          width 8px
          height 8px
          border-radius 50%
          background-color #fff
        &::after
          position absolute
          top -28px
          left 60%
          display inline-block
          content ''
          width 120px
          height 4px
          background-color #ccc
  
  &_wrapper
    width 100%
    overflow-x scroll
    // 包一层解决 ::before 无法显示的问题
  .grade_content
    margin-top 30px
    width 100%
    &-wrap
      display flex
      justify-content space-around
      height 314px
      width 3800px
      margin-left 10px
      &-item
        position relative
        flex 1
        height 100%
        margin-left 10px
        border-radius 5px 5px 0 0
        background-color #fff
        &::before
          position absolute
          top -20px
          left 50%
          display block
          content ''
          width 0
          height 0
          border 10px solid transparent
          border-bottom 10px solid #fff


</style>


