<template>
  <div class="follow">
    <div class="follow_icons">
      <img src="@/assets/images/Mailist.png" alt="">
      <img src="@/assets/images/weixin.png" alt="">
      <img src="@/assets/images/qq.png" alt="">
    </div>
    <div class="follow_list">
        <p>为你推荐</p>
        <div class="Wrapper">
          <div class="follow_list-content">
            <img src="@/assets/images/qq.png" alt="" :style="{width:'40px',height:'40px',borderRadius:'50%',backgroundColor:'#24c789'}">
            <span class="follow_list-content-name">吴晓蕾</span>
            <span class="follow_list-content-title">八十多主题工作室创始人</span>
            <i class="follow_list-content-btn">关注</i>
          </div>
          <div class="follow_list-content">
            <div class="follow_list-content-item">
              <img src="../../../assets/images/action1.jpg" alt="">
            </div>
            <div class="follow_list-content-item">
              <img src="../../../assets/images/action5.jpg" alt="">
            </div>
            <div class="follow_list-content-item">
              <img src="../../../assets/images/banner1.jpg" alt="">
            </div>
          </div>
          <span class="follow_list-index">附近的人</span>
        </div>

        <!--  -->
        <div class="Wrapper">
          <div class="follow_list-content">
            <img src="@/assets/images/qq.png" alt="" :style="{width:'40px',height:'40px',borderRadius:'50%',backgroundColor:'#24c789'}">
            <span class="follow_list-content-name">吴晓蕾</span>
            <span class="follow_list-content-title">八十多主题工作室创始人</span>
            <i class="follow_list-content-btn">关注</i>
          </div>
          <div class="follow_list-content">
            <div class="follow_list-content-item">
              <img src="../../../assets/images/action5.jpg" alt="">
            </div>
            <div class="follow_list-content-item">
               <img src="../../../assets/images/banner1.jpg" alt="">
            </div>
            <div class="follow_list-content-item">
               <img src="../../../assets/images/action1.jpg" alt="">
            </div>
          </div>
          <span class="follow_list-index">附近的人</span>
        </div>
        <div class="Wrapper">
          <div class="follow_list-content">
            <img src="@/assets/images/qq.png" alt="" :style="{width:'40px',height:'40px',borderRadius:'50%',backgroundColor:'#24c789'}">
            <span class="follow_list-content-name">吴晓蕾</span>
            <span class="follow_list-content-title">八十多主题工作室创始人</span>
            <i class="follow_list-content-btn">关注</i>
          </div>
          <div class="follow_list-content">
            <div class="follow_list-content-item">
              <img src="../../../assets/images/banner1.jpg" alt="">
            </div>
            <div class="follow_list-content-item">
              <img src="../../../assets/images/action5.jpg" alt="">
            </div>
            <div class="follow_list-content-item">
              <img src="../../../assets/images/action1.jpg" alt="">
            </div>
          </div>
          <span class="follow_list-index">附近的人</span>
        </div>
        <!--  -->
    </div>
  </div>
</template>
<script>
  export default{
    name: 'follow'
  }
</script>
<style lang="stylus">
// #24c789
.follow
  &_icons
    display flex
    height 80px
    line-height 80px
    background #fff
    margin-bottom 15px
    justify-content space-around
    align-items center
    & img
      width 40px
      height 40px
      border-radius 50%
      background-color #24c789
  &_list
    background-color #fff
    & p
      margin-bottom 25px
    & .Wrapper
      padding-bottom 10px
      border-bottom 1px solid #ccc
      margin-bottom 30px
    &-content
      margin-bottom 15px
      display flex
      align-items center
      justify-content space-between
      &-name
        margin-left 10px
      &-title
        font-size 12px
        color #ccc
        flex 1
        margin 10px 10px 0
      &-btn
        padding 8px 20px 
        font-size 12px
        color #fff
        background-color #24c789
        border-radius 25px
      &-item
        width 110px
        height 110px
        background-color #ccc
        & img
          width 100%
          height 100%
    &-index
      padding 2px 4px
      background-color rgb(250,250,250)
      border-radius 5px
      color #777
      font-size 12px
</style>
