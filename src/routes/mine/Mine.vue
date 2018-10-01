<template>
  <div class="mine">
    <TopBar :options='optionsHead' @onScan='scan' @onInfo='info' @onSetting='setting'/>
    <div class="mine_wrap">
      <div class="mine_wrap-user">
        <img src="../../assets/images/action1.jpg" :style='{ width:"70px", height:"70px", borderRadius:"50%" }'>
        <div class="mine_wrap-user-info">
          <p class="mine_wrap-user-info-user">{{ user.name }}</p>
          <p class="mine_wrap-user-info-btn">成为 nuoMi 会员</p>
          <span class="mine_wrap-user-info-icon" />
        </div>
      </div>

      <!-- KG.O -->
      <div class="mine_wrap-lineLink">
        <span class="mine_wrap-lineLink-title">KG.O</span>
        <div>
          <span class="mine_wrap-lineLink-name">等级中心</span>
          <i class="mine_wrap-lineLink-icon"/>
        </div>
      </div>
      <!-- 我的数据 -->
      <div class="mine_wrap-data">
        <span class="mine_wrap-data-name">我的数据</span>
        <i class="mine_wrap-data-icon"/>
      </div>
      <div class="mine_wrap-total">
        <div class="mine_wrap-total-item">
          <p class="mine_wrap-total-item-title">总运动<i>(分钟)</i></p>
          <p class="mine_wrap-total-item-num">0</p>
        </div>
        <div class="mine_wrap-total-item">
          <p class="mine_wrap-total-item-title">本周排名 <i>第 - 名</i></p>
          <img src="../../assets/images/action1.jpg" :style='{ width:"30px", height:"30px"}'>
        </div>
      </div>
      <!-- 今日运动滑动 -->
      <div class="mine_wrap-scroll">
        <div class="mine_wrap-scroll-list" :style="{width: 120*5+'px'}">
          <div class="mine_wrap-scroll-list-item">
            <p class="mine_wrap-scroll-list-item-title">今日运动</p>
            <p class="mine_wrap-scroll-list-item-num">0 <i>分钟</i></p>
          </div>
          <div class="mine_wrap-scroll-list-item">
            <p class="mine_wrap-scroll-list-item-title">本周运动</p>
            <p class="mine_wrap-scroll-list-item-num">0 <i>天</i></p>
          </div>
          <div class="mine_wrap-scroll-list-item">
            <p class="mine_wrap-scroll-list-item-title">连续运动</p>
            <p class="mine_wrap-scroll-list-item-num">0 <i>天</i></p>
          </div>
          <div class="mine_wrap-scroll-list-item">
            <p class="mine_wrap-scroll-list-item-title">今日步数</p>
            <!-- 最大99999步 -->
            <p class="mine_wrap-scroll-list-item-num">99999<i>步</i></p>
          </div>
          <div class="mine_wrap-scroll-list-item">
            <p class="mine_wrap-scroll-list-item-title">身体数据</p>
            <p class="mine_wrap-scroll-list-item-num">55.0 <i>体重</i></p>
          </div>
        </div>
      </div>
      <!-- lineLink -->
      <div class="mine_wrap-list">
        <LineLink :options="scoure"/>
        <LineLink :options="activity"/>
        <LineLink :options="nuoMiPland"/>
      </div>
      <div class="mine_wrap-list">
        <LineLink :options="collect"/>
        <LineLink :options="badge"/>
        <LineLink :options="equipment"/>
      </div>
      <div class="mine_wrap-list">
        <LineLink :options="wallet"/>
        <LineLink :options="order"/>
        <LineLink :options="shopCart"/>
        <LineLink :options="service"/>
      </div>
    </div>
  </div>
</template>

<script>
  import TopBar from '@/components/TopBar'
  import LineLink from '@/components/LineLink'
  export default {
    name: 'mine',
    components:{
      TopBar,
      LineLink
    },
    data () {
      return {
        user:{},
        // topBar -options
        optionsHead:{
          title:'我',
          scan:'scan',
          info: 'info',
          setting:'setting'
        },

        //lineLink start
        scoure:{
          title:'我的课程',
           url: 'discover'
        },
        activity:{
          title: '我的活动',
           url: 'discover'
        },
        nuoMiPland:{
          title: 'nuoMiPland',
           url: 'discover'
        },
        collect: {
          title: '我的收藏',
           url: 'discover'
        },
        badge: {
          title: '我的徽章',
           url: 'discover',
          number: '0'
        },
        equipment:{
          title: '应用与设备',
           url: 'discover'
        },
        wallet: {
          title:'我的钱包',
           url: 'discover'
        },
        order: {
          title:'我的订单',
           url: 'discover'
        },
        shopCart: {
          title:'购物车',
           url: 'discover'
        },
        service: {
          title:'免流量服务',
           url: 'discover'
        },
        // lineLink END
        msg: 'Welc'
      }
    },
    methods:{
      scan(){
        alert('scan')
      },
      info(){
        alert('info')
      },
      setting(){
        alert('setting')
      }
    },
    created(){
      this.user = this.$store.getters.user
    }
  }
</script>

<style lang='stylus'>
.mine
  &_wrap
    &-user
      display flex
      align-items center
      padding 20px 0 30px
      border-bottom 3px solid #ccc
      background-color #fff
      padding 14px
      &-info
        position relative
        flex 1
        margin-left 20px
        &-btn
          margin-top 10px
          width 90px
          padding 4px 8px
          color rgb(167, 147, 76)
          font-weight 200
          font-size 10px
          background-color #777
          border-radius 20px
        &-icon
          position absolute
          top 25%
          right 0
          display inline-block
          width 25px
          height 20px
          background transparent url('../../../src/assets/images/lArrow.svg') 100% 50% / 20px 20px no-repeat
    
    &-lineLink
      background-color #fff
      display flex
      height 38px
      line-height 38px
      padding 6px 14px
      justify-content space-between
      position relative
      margin-bottom 15px
      &-title
        font-size 20px
        font-weight 400
        color #24c789
      &-name
        font-size 12px
        font-weight 200
      &-icon
        display inline-block
        vertical-align top
        width 25px
        height 40px
        background transparent url('../../../src/assets/images/lArrow.svg') 100% 50% / 20px 20px no-repeat
    
    &-data
      background-color #fff
      display flex
      height 38px
      line-height 38px
      padding 6px 14px
      justify-content space-between
      position relative
      &-title
        font-size 20px
        font-weight 400
        color #24c789
      &-name
        font-size 16px
        font-weight 200
      &-icon
        display inline-block
        vertical-align top
        width 25px
        height 40px
        background transparent url('../../../src/assets/images/lArrow.svg') 100% 50% / 20px 20px no-repeat
    
    &-total
      display flex
      background-color #fff
      &-item
        height 80px
        flex 1
        padding 10px
        & img
          border 2px solid #24c789
          border-radius 50%
        &-num
          font-size 40px
        &-title
          font-size 12px
          margin-bottom 20px
          & i
            padding-left 5px
            font-size 10px
            color #ccc
        

    &-scroll
      width 100%
      height 65px
      overflow-x scroll
      &-list
        display flex
        margin-left 10px
        &-item
          width 120px
          height 65px
          border-radius 5px
          margin-right 6px
          background-color #fff
          &-title,&-num
            font-size 12px
            font-weight 200
            padding 6px 10px
          &-num
            font-size 25px
            font-weight 400
            & i
              font-size 12px
              font-weight 200
              color #ccc
    &-list
      background-color #fff
      margin-top 12px      
  

</style>
