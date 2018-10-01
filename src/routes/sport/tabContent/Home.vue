<template>
  <div class="tab_home">
    <div class="tab_home-logo">
      <i class="tab_home-logo-icon">nuoMi</i>
      <span>Coach</span>
    </div>
    <!-- content one -->
    <Basket class="tab_home-now">
      <div class='tab_home-now-item'>
        <div class="tab_home-now-item-total">
          <span>在 nuoMi 已累计运动 ></span>
        </div>
        <div class="tab_home-now-item-sport">
          <span class="tab_home-now-item-sport-title">0</span>分钟
          <span class="tab_home-now-item-sport-name">今日运动<i>-</i>分钟</span>
        </div>
      </div>
    </Basket>
  
    <!-- content two -->
    <Basket class="tab_home-course">
      <div class="tab_home-course-list">
        <span class="tab_home-course-list-course">已参加的课程</span>
        <span class="tab_home-course-list-btn">+添加</span>
      </div>
      <div class="tab_home-course-list">
        <span class="tab_home-course-list-title">剧情燃脂跑 · 帮巴扎黑减肥</span>
        <span class="tab_home-course-list-time">22分钟· K1</span>
      </div>
      <div class="tab_home-course-list">
        <span class="tab_home-course-list-title">瑜伽 · 脊柱柔韧</span>
        <span class="tab_home-course-list-time">21分钟· K1</span>
      </div>
      <div class="tab_home-course-list" v-show='showAll'>
        <span class="tab_home-course-list-title">瑜伽 · 脊柱柔韧</span>
        <span class="tab_home-course-list-time">21分钟· K1</span>
      </div>
      <div class="tab_home-course-list" v-show='showAll'>
        <span class="tab_home-course-list-title">瑜伽 · 脊柱柔韧</span>
        <span class="tab_home-course-list-time">21分钟· K1</span>
      </div>
      <div class="tab_home-course-all" @click='show'>查看全部</div>
    </Basket>
  
    <!--content three-->
    <Basket class="tab_home-plan">
      <div class="tab_home-plan-title">
        训练计划
      </div>
      <div class="tab_home-plan-img">
        <img class="tab_home-plan-img-imgbg" :src="url" alt="">
      </div>
      <div class="tab_home-plan-text">
        <div class="title">
          <span class="title_name">为你定制的智能计划</span>
          <i class="title_btn">会员免费</i>
        </div>
        <div class="info">
          想要让你的身材更好吗? nuoMi 智能训练计划已经改变了238万人的身材,希望也能改变你的！
        </div>
      </div>
      <div class="tab_home-plan-btn">
        获取智能训练计划
      </div>
    </Basket>

    <!--content four-->
    <Basket class="tab_home-train" v-if='selectrain.length>0'>
      <div class="tab_home-train-title">
        精选训练营
      </div>
      <div class="tab_home-train-wrap">
        <!-- 计算 有几张就 * 260px -->
        <div class="list" :style='{width:260*2+"px"}'> 
          <div class="list_item" v-for='(item,index) in selectrain' :key='item.id'>
            <div class="list_item-img">
              <img :style="{width:'100%',height:'100%',borderRadius:'5px'}" :src="item.url" alt="">
            </div>
            <div class="list_item-title">
              {{ item.title }}
            </div>
            <!-- 覆盖的 -->
            <div class="list_item-cover">
              <div class="list_item-cover-mg">
                <p class="list_item-cover-info">
                  <span class="list_item-cover-info-title">{{ item.describe }}</span>
                  <i class="list_item-cover-info-btn" @click='selectrain.splice(index,1)'>X</i>
                </p>
                <p class="list_item-cover-total">累计{{ item.num }}人一参加</p>
                <p class="list_item-cover-cycle">总时长 {{ item.time }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Basket>
    <NoContent />
  </div>
</template>

<script>
  import Basket from '@/components/Basket'
  import NoContent from '@/components/NoContent'


  export default {
    name: 'home',
    components: {
      Basket,
      NoContent
    },
    data(){
      return{
        showAll: false,
        url:'../../static/image/1538125542861_750x340.jpg',
        // 精选内容
        selectrain:[
          {
            id: 0,
            title:'「 新手健康用户专属 」特别为想要保持健康的你',
            num:'52398',  
            describe:'7 天放松减压训练营',
            time:' 1 周',
            url:'../static/image/1507801251943_750x700.jpg'
          },
          {
            id: 1,
            title:'「 新手男生专属 」简易运动帮你雕刻运动习惯',
            num:'52398',
            describe:'7 天放松减压训练营',
            time:' 1 周',
            url:'../static/image/54cc47743b800000.jpg'
          }
        ]
      }
    },
    methods:{
      show(){
        return this.showAll = !this.showAll
      }
    }
  }
</script>

<style lang='stylus'>

.tab_home
  // logo
  &-logo
    height 50px
    line-height 50px
  // content one
  &-now
    &-item
      &-total
        position relative
        margin-bottom 16px
      &-sport
        position relative
        &-title
          font-size 40px
          font-weight 400
          margin-right 4px
        &-name
          position absolute
          bottom 0 
          right 0
          color #ccc
      
  
  
  // content two 
  &-course 
    &-list
      display flex
      justify-content space-between
      align-items center
      padding-bottom 25px
      &-course
        color #999
      &-btn
        border-radius 20px
        padding 6px 20px
        color #fff
        font-size 10px
        background-color #24c789
      &-title
        font-size 16px
      &:nth-of-type(3)
        padding-top 25px
        border-top 1px solid #ccc
        margin-bottom 16px
    &-all
      text-align center




  
  
  
  // content three
  &-plan
    &-title
      margin-bottom 20px
    &-img
      width 100%
      height 120px
      &-imgbg
        width 100%
        height 100%
        border-radius 5px
    &-text
      margin-top 4px
      .title
        padding 10px 0
        &_name
          font-size 16px
        &_btn
          font-size 10px
          padding 0 6px
          background-color #f29c62
          border-radius 6px
      .info
        line-height 22px
        margin-bottom 15px
    &-btn
      width 80%
      height 40px
      line-height 40px
      text-align center
      color #fff
      margin 0 auto
      background-color #24c789
      border-radius 30px

  // content four
  &-train
    &-title
      margin-bottom 20px
    &-wrap
      width 100%
      overflow-x scroll
      .list
        display flex
        &_item
          position relative
          padding-right 10px
          &-img,&-cover
            width 260px //宽度
            height 160px
          &:last-child
           padding 0
          &-title
            margin-top 10px
            line-height 20px
          //盖 
          &-cover
            position absolute
            top 0
            left 0
            color #fff
            background-color rgba(0, 0, 0, .3)
            border-radius 5px
            &-mg
              padding 18px 10px
            &-info
              &-title
                font-size 20px
              &-btn
                position absolute
                right 10px
            &-total
              font-size 10px
            &-cycle
              position absolute
              font-size 12px
              bottom 10px

</style>
