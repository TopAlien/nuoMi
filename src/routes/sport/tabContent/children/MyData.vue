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
            <p class="left_list-title">健身</p>
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
            <p class="center_list-title">瑜伽</p>
            <div class="center_list-wrap">
              <h1 class="center_list-wrap-num">0.0</h1>
              <span>分钟</span>
            </div>
          </Basket>
        </div>
        <div class="myData_wrapper-center-right">
          <Basket class="center_list">
            <p class="center_list-title">跑步</p>
            <div class="center_list-wrap">
              <h1 class="center_list-wrap-num">0.0</h1>
              <span>公里</span>
            </div>
          </Basket>
          <Basket class="center_list">
            <p class="center_list-title">行走</p>
            <div class="center_list-wrap">
              <h1 class="center_list-wrap-num">0.0</h1>
              <span>公里</span>
            </div>
          </Basket>
          <Basket class="center_list">
            <p class="center_list-title">骑行</p>
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
            margin-bottom 25px
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
        &-wrap
          display flex
          align-items flex-end
          &-num
            margin 20px 10px 0 0
    // &-foot

    
</style>


