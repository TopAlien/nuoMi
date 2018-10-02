<template>
  <div class="discover">
    <TopBar :options='optionsHead'/>
    <div class="discover_carouse">
      <Carousel :listImg='listImg'/>
    </div>
    <ul class="discover_icons">
      <li>
        <i class="icon discover_icons-source"/>
        <span>全部课程</span>
      </li>
      <li>
        <i class="icon discover_icons-challen"/>
        <span>活动挑战</span>
      </li>
      <li>
        <i class="icon discover_icons-shopp"/>
        <span>运动商城</span>
      </li>
      <li>
        <i class="icon discover_icons-location"/>
        <span>nuoMiland</span>
      </li>
      <li>
        <i class="icon discover_icons-diet"/>
        <span>健康饮食</span>
      </li>
    </ul>
    <div class="discover_calendar discover_box">
      <div class="discover_calendar-list">
        <p class="discover_calendar-list-title">nuoMi 日签</p>
        <p class="discover_calendar-list-date"><span>02</span>OCT.2018</p>
      </div>
      <div class="discover_calendar-list">
        <p class="discover_calendar-list-article">爱你的每一个瞬间,都像飞驰而过的地铁</p>
        <span class="discover_calendar-list-subject">——《 虎口脱险 》</span>
      </div>
    </div>
    <div class="discover_box">
      <TextWrap :contentArr='food'/>
    </div>
    <div class="discover_box">
      <TextWrap :contentArr='build'/>
    </div>
    <div class="discover_box">
      <Basket class="discover_course">
        <div class="discover_course-list">
          <span class="discover_course-list-train">跑步入门</span>
        </div>
        <div class="discover_course-list">
          <span class="discover_course-list-title">2分钟体验课程</span>
          <span class="discover_course-list-time">2分钟· K1</span>
        </div>
        <div class="discover_course-list">
          <span class="discover_course-list-title">瘦腿训练</span>
          <span class="discover_course-list-time">12分钟· K2</span>
        </div>
        <div class="discover_course-list">
          <span class="discover_course-list-title">腹肌训练入门</span>
          <span class="discover_course-list-time">13分钟· K1</span>
        </div>
        <div class="discover_course-list">
          <span class="discover_course-list-title">核心功能入门</span>
          <span class="discover_course-list-time">14分钟· K1</span>
        </div>
        <div class="discover_course-list" v-show='allShow'>
          <span class="discover_course-list-title">背部基础训练</span>
          <span class="discover_course-list-time">12分钟· K1</span>
        </div>
        <div class="discover_course-all" @click='allShow = !allShow'>{{allTitle}}</div>
      </Basket>
    </div>
    <div class="discover_box">
      <TextWrap :contentArr='walk'/>
    </div>
    <div class="discover_box">
      <TextWrap :contentArr='shopp'/>
    </div>
    <div class="discover_title">以下是往期精选</div>
    <!--  -->
    <!-- 往期 -->
    <div class="discover_calendar discover_box">
      <div class="discover_calendar-list">
        <p class="discover_calendar-list-title">nuoMi 日签</p>
        <p class="discover_calendar-list-date"><span>02</span>OCT.2018</p>
      </div>
      <div class="discover_calendar-list">
        <p class="discover_calendar-list-article">爱你的每一个瞬间,都像飞驰而过的地铁</p>
        <span class="discover_calendar-list-subject">——《 虎口脱险 》</span>
      </div>
    </div>
    <div class="discover_box">
      <TextWrap :contentArr='food'/>
    </div>
    <div class="discover_box">
      <TextWrap :contentArr='build'/>
    </div>
    <div class="discover_box">
      <Basket class="discover_course">
        <div class="discover_course-list">
          <span class="discover_course-list-train">跑步入门</span>
        </div>
        <div class="discover_course-list">
          <span class="discover_course-list-title">2分钟体验课程</span>
          <span class="discover_course-list-time">2分钟· K1</span>
        </div>
        <div class="discover_course-list">
          <span class="discover_course-list-title">瘦腿训练</span>
          <span class="discover_course-list-time">12分钟· K2</span>
        </div>
        <div class="discover_course-list">
          <span class="discover_course-list-title">腹肌训练入门</span>
          <span class="discover_course-list-time">13分钟· K1</span>
        </div>
        <div class="discover_course-list">
          <span class="discover_course-list-title">核心功能入门</span>
          <span class="discover_course-list-time">14分钟· K1</span>
        </div>
        <div class="discover_course-list" v-show='allShow'>
          <span class="discover_course-list-title">背部基础训练</span>
          <span class="discover_course-list-time">12分钟· K1</span>
        </div>
        <div class="discover_course-all" @click='allShow = !allShow'>{{allTitle}}</div>
      </Basket>
    </div>
    <div class="discover_box">
      <TextWrap :contentArr='walk'/>
    </div>
    <div class="discover_box">
      <TextWrap :contentArr='shopp'/>
    </div>
    <div class="discover_calendar discover_box">
      <div class="discover_calendar-list">
        <p class="discover_calendar-list-title">nuoMi 日签</p>
        <p class="discover_calendar-list-date"><span>02</span>OCT.2018</p>
      </div>
      <div class="discover_calendar-list">
        <p class="discover_calendar-list-article">爱你的每一个瞬间,都像飞驰而过的地铁</p>
        <span class="discover_calendar-list-subject">——《 虎口脱险 》</span>
      </div>
    </div>
    <div class="discover_box">
      <TextWrap :contentArr='food'/>
    </div>
    <div class="discover_box">
      <TextWrap :contentArr='build'/>
    </div>
    <div class="discover_title">以下是往期精选</div>
    <div class="discover_box">
      <Basket class="discover_course">
        <div class="discover_course-list">
          <span class="discover_course-list-train">跑步入门</span>
        </div>
        <div class="discover_course-list">
          <span class="discover_course-list-title">2分钟体验课程</span>
          <span class="discover_course-list-time">2分钟· K1</span>
        </div>
        <div class="discover_course-list">
          <span class="discover_course-list-title">瘦腿训练</span>
          <span class="discover_course-list-time">12分钟· K2</span>
        </div>
        <div class="discover_course-list">
          <span class="discover_course-list-title">腹肌训练入门</span>
          <span class="discover_course-list-time">13分钟· K1</span>
        </div>
        <div class="discover_course-list">
          <span class="discover_course-list-title">核心功能入门</span>
          <span class="discover_course-list-time">14分钟· K1</span>
        </div>
        <div class="discover_course-list" v-show='allShow'>
          <span class="discover_course-list-title">背部基础训练</span>
          <span class="discover_course-list-time">12分钟· K1</span>
        </div>
        <div class="discover_course-all" @click='allShow = !allShow'>{{allTitle}}</div>
      </Basket>
    </div>
    <div class="discover_box">
      <TextWrap :contentArr='walk'/>
    </div>
    <div class="discover_box">
      <TextWrap :contentArr='shopp'/>
    </div>
    <div class="discover_title">以下是往期精选</div>
    <div class="discover_calendar discover_box">
      <div class="discover_calendar-list">
        <p class="discover_calendar-list-title">nuoMi 日签</p>
        <p class="discover_calendar-list-date"><span>02</span>OCT.2018</p>
      </div>
      <div class="discover_calendar-list">
        <p class="discover_calendar-list-article">爱你的每一个瞬间,都像飞驰而过的地铁</p>
        <span class="discover_calendar-list-subject">——《 虎口脱险 》</span>
      </div>
    </div>
    <div class="discover_box">
      <TextWrap :contentArr='food'/>
    </div>
    <div class="discover_box">
      <TextWrap :contentArr='build'/>
    </div>
    <div class="discover_box">
      <Basket class="discover_course">
        <div class="discover_course-list">
          <span class="discover_course-list-train">跑步入门</span>
        </div>
        <div class="discover_course-list">
          <span class="discover_course-list-title">2分钟体验课程</span>
          <span class="discover_course-list-time">2分钟· K1</span>
        </div>
        <div class="discover_course-list">
          <span class="discover_course-list-title">瘦腿训练</span>
          <span class="discover_course-list-time">12分钟· K2</span>
        </div>
        <div class="discover_course-list">
          <span class="discover_course-list-title">腹肌训练入门</span>
          <span class="discover_course-list-time">13分钟· K1</span>
        </div>
        <div class="discover_course-list">
          <span class="discover_course-list-title">核心功能入门</span>
          <span class="discover_course-list-time">14分钟· K1</span>
        </div>
        <div class="discover_course-list" v-show='allShow'>
          <span class="discover_course-list-title">背部基础训练</span>
          <span class="discover_course-list-time">12分钟· K1</span>
        </div>
        <div class="discover_course-all" @click='allShow = !allShow'>{{allTitle}}</div>
      </Basket>
    </div>
    <div class="discover_box">
      <TextWrap :contentArr='walk'/>
    </div>
    <div class="discover_box">
      <TextWrap :contentArr='shopp'/>
    </div>
  </div>
</template>

<script>
  import TopBar from '@/components/TopBar'
  import Basket from '@/components/Basket'
  import Carousel from '@/components/Carousel'
  import TextWrap from './components/TextWrap'


  export default {
    name: 'discover',
    components:{
      TopBar,
      Basket,
      Carousel,
      TextWrap
    },
    data () {
      return {
        optionsHead:{
          title:'发现',
          search: 'search'
        },
        allShow: false, //展开全部,后期通过计算个数截取显示
        // 轮播图片 
        listImg:[
          {
            url:'../../../static/banner1.jpg'
          },
          {
            url:'../../../static/banner2.jpg'
          },
          {
            url:'../../../static/banner3.jpg'
          },
          {
            url:'../../../static/banner4.jpg'
          }
        ],
        food:[
          {
            id: 0,
            title:'「 一周最热 」这种食物吃多了 , 竟然会加速衰老！',
            url:'../../../static/image/1516952026427_750x700.jpg',
            text:'这些网红病 , 都是血糖惹得祸',
            btnName:'文章',
            readNum:200,
            collNum: 70,
            avatar:'../../../static/banner4.jpg',
            userName:'注册营养师陈然'
          }
        ],
        build:[
          {
            id: 0,
            title:'8 个健身原则,增肌新手也能快速练出效果',
            url:'../../../static/image/1507861239722_750x700.jpg',
            text:'健身的人越来越多,却不是每个人都练出效果',
            btnName:'文章',
            readNum:200,
            collNum: 70,
            avatar:'../../../static/banner1.jpg',
            userName:'王恒爱健身'
          }
        ],
        walk:[
          {
            id: 0,
            title:'听说走路就可以瘦 ？你不来试试吗？',
            url:'../../../static/image/qweqweqweasd.jpg',
            text:'报名时间: 09.26 00:00 - 10.08 00:00',
            btnName:'活动',
            readNum:999,
            collNum: 0,
            avatar:'../../../static/banner2.jpg',
            userName:'nuoMi 印花 logo 酷感十足'
          }
        ],
        shopp:[
          {
            id: 0,
            title:'新款高度运动内衣',
            url:'../../../static/image/a600af7324c3beba779be4ccb4ae7d050318dbfc.jpg',
            text:'这些网红病 , 都是血糖惹得祸',
            btnName:'装备',
            readNum:2000,
            collNum: 0,
            avatar:'../../../static/banner3.jpg',
            userName:'nuoMi 印花 logo 酷感十足'
          }
        ]
      }
    },
    computed:{
      allTitle(){
        return this.allShow ? '收起' : '展开全部'
      }
    }
  }
</script>

<style lang='stylus'>
.discover
  &_box  
    width 95%
    margin 15px auto 0
    border-radius 4px
    background-color #fff
  &_carouse
    width 375px
    height 160px
  &_icons
    height 80px
    padding-top 10px
    align-items center
    background #fff
    display flex
    justify-content space-around
    & span 
      display inline-block
      margin-top 10px
      font-size 12px
    & .icon
      display inline-block
      width 100%
      height 30px
    &-source
      background transparent url('../../assets/images/source.svg') 50% 100% / 30px 30px no-repeat
    &-challen
      background transparent url('../../assets/images/challen.svg') 50% 100% / 30px 30px no-repeat
    &-shopp
      background transparent url('../../assets/images/shop.svg') 50% 100% / 30px 30px no-repeat
    &-location
      background transparent url('../../assets/images/location.svg') 50% 100% / 30px 30px no-repeat
    &-diet
      background transparent url('../../assets/images/diet.svg') 50% 100% / 30px 30px no-repeat
  
  &_calendar
    height 110px
    padding 10px
    box-sizing border-box
    display flex
    font-size 12px
    &-list
      position relative
      border-right 1px solid #ccc
      &:nth-of-type(2n)
        border none
      &-title
        margin-top 5px
        border-left 4px solid #ddd
        padding 2px 8px 2px
      &-date
        padding 30px 16px 10px 0
        & span
          font-size 40px
          font-weight bold
      &-article
        margin-top 5px
        padding 2px 0 0 8px
      &-subject
        position absolute
        color #ccc
        right 0
        bottom 5px
  &_course 
    &-list
      display flex
      justify-content space-between
      align-items center
      margin-bottom 40px
      &-train
        color #000
        font-size 16px
      &-title
        font-size 14px
    &-all
      text-align center

  &_title
    height 35px
    line-height 35px
    font-size 12px
    font-weight 200
    text-align center
</style>
