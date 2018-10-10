<template>
  <div class="myData">
    <GoBack />
    <div class="myData_wrapper">
      <h1 class="myData_wrapper-title">我的数据</h1>
      <!-- Top -->
      <Basket class="myData_wrapper-top">
        <p class="myData_wrapper-top-title">累计运动时长</p>
        <div class="myData_wrapper-top-time">
          <h1>0</h1>
          <span>分钟</span>
        </div>
        <ul class="myData_wrapper-top-list">
          <li class="myData_wrapper-top-list-item">
            <p>消耗(千卡)</p>
            <h1>0</h1>
          </li>
          <li class="myData_wrapper-top-list-item">
            <p>累计(天)</p>
            <h1>0</h1>
          </li>
          <li class="myData_wrapper-top-list-item">
            <p>连续(天)</p>
            <h1>0</h1>
          </li>
        </ul>
      </Basket>
      <!-- Top end -->
      <!-- Center -->
      <div class="myData_wrapper-center">
        <div class="myData_wrapper-center-left">
          <Basket class="left_list">
            <p class="left_list-title">
              <i class="left_list-title-icon icon-health"/>
              健身
            </p>
            <div class="left_list-wrap">
              <h1>0</h1>
              <span>分钟</span>
            </div>
            <p class="left_list-title left_list-cut">累计消耗</p>
            <div class="left_list-wrap">
              <h1>0</h1>
              <span>千卡</span>
            </div>
          </Basket>
          <Basket class="center_list">
            <p class="center_list-title">
              <i class="left_list-title-icon icon-yoga"/>
              瑜伽
            </p>
            <div class="center_list-wrap">
              <h1 class="center_list-wrap-num">0.0</h1>
              <span>分钟</span>
            </div>
          </Basket>
        </div>
        <div class="myData_wrapper-center-right">
          <Basket class="center_list">
            <p class="center_list-title">
              <i class="center_list-title-icon icon-run"/>
              跑步
            </p>
            <div class="center_list-wrap">
              <h1 class="center_list-wrap-num">0.0</h1>
              <span>公里</span>
            </div>
          </Basket>
          <Basket class="center_list">
            <p class="center_list-title">
              <i class="center_list-title-icon icon-walk"/>
              行走
            </p>
            <div class="center_list-wrap">
              <h1 class="center_list-wrap-num">0.0</h1>
              <span>公里</span>
            </div>
          </Basket>
          <Basket class="center_list">
            <p class="center_list-title">
              <i class="center_list-title-icon icon-riding"/>
              骑行
            </p>
            <div class="center_list-wrap">
              <h1 class="center_list-wrap-num">0.0</h1>
              <span>公里</span>
            </div>
          </Basket>
        </div>
      </div>
      <!-- center end -->
      <!-- weekDay -->
      <Basket>
        <p>每周目标</p>
      </Basket>
      <!-- Day -->
      <Basket>
        <p>今日步数</p>
      </Basket>
      <!-- Sport -->
      <Basket>
        <p>运动能力</p>
      </Basket>
      <!-- Body -->
      <Basket>
        <p>身体数据</p>
      </Basket>
    </div>
  </div>
</template>
<script>
  import GoBack from '@/components/GoBack'
  import Basket from '@/components/Basket'
  export default {
    name:'myData',
    components:{
      GoBack,
      Basket
    }
  }
</script>
<style lang="stylus">
.myData
  background-color #5f545c
  &_wrapper
    padding 30px 20px 10px
    &-title
      color #fff
      font-weight 300
    //Basket 覆盖样式背景
    // &-item,.basket
    //   background-color red
    &-top
      margin 20px 0 15px
      &-title
        margin 10px 0 20px
      &-time
        display flex
        align-items flex-end
        & h1
          margin-right 5px
      &-list
        margin-top 25px
        display flex
        justify-content space-between
        &-item h1
          margin-top 10px
    &-center  
      display flex
      &-left
        flex 1
        margin-right 10px
        .left_list
          &-title
            margin-bottom 30px
            &-icon
              display inline-block
              width 25px
              height 25px
              border-radius 50%
              vertical-align bottom
            .icon-health
              background white url('../../../../assets/images/health.svg') 50% 50% / 20px 20px no-repeat
            .icon-yoga
              background red url('../../../../assets/images/yoga.svg') 50% 50% / 20px 20px no-repeat
          &-cut
            margin-top 34px
          &-wrap
            display flex
            align-items flex-end
          &.basket
            background-color rgb(69,145,212)
      &-right
        flex 1
      .center_list
        &-title
          color #5f545c
          &-icon
            display inline-block
            width 25px
            height 25px
            border-radius 50%
            vertical-align bottom
          .icon-run
            background #4591d4 url('../../../../assets/images/run.svg') 50% 50% / 20px 20px no-repeat
          .icon-walk
            background #4591d4 url('../../../../assets/images/walk.svg') 50% 50% / 20px 20px no-repeat
          .icon-riding
            background #4591d4 url('../../../../assets/images/riding.svg') 50% 50% / 20px 20px no-repeat
        &-wrap
          display flex
          align-items flex-end
          &-num
            margin 20px 10px 0 0
    // &-foot

    
</style>


