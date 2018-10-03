<template>
  <div class="yoga"> 
    <Basket>
      <div class="yoga_first"> 
        <span class="yoga_first-title">" 开始第一次瑜伽吧 "</span>
      </div>
    </Basket>
    <BroadCast :arrInfo='novice' />
    <Basket class="yoga-course">
      <div class="yoga-course-list">
        <span class="yoga-course-list-train">我的瑜伽练习</span>
        <span class="yoga-course-list-btn"> + 添加</span>
      </div>
      <div class="yoga-course-list">
        <span class="yoga-course-list-title">5分钟瑜伽体验课</span>
        <span class="yoga-course-list-time">2分钟· K1</span>
      </div>
      <div class="yoga-course-list">
        <span class="yoga-course-list-title">Day 1 回到当下</span>
        <span class="yoga-course-list-time">12分钟· K2</span>
      </div>
      <div class="yoga-course-list">
        <span class="yoga-course-list-title">瑜伽 · 简易力量体式串联</span>
        <span class="yoga-course-list-time">13分钟· K1</span>
      </div>
      <div class="yoga-course-list">
        <span class="yoga-course-list-title">瑜伽 · 简易柔韧体式串联</span>
        <span class="yoga-course-list-time">14分钟· K1</span>
      </div>
      <div class="yoga-course-list" v-show='allShow'>
        <span class="yoga-course-list-title">瑜伽 · 俯卧式入门</span>
        <span class="yoga-course-list-time">12分钟· K1</span>
      </div>
      <div class="yoga-course-list" v-show='allShow'>
        <span class="yoga-course-list-title">瑜伽 · 脊柱柔韧</span>
        <span class="yoga-course-list-time">12分钟· K1</span>
      </div>
      <div class="yoga-course-all" @click='allShow = !allShow'>{{allTitle}}</div>
    </Basket>
    <!-- 瑜伽课程 -->
    <Basket :title='title' class="yoga_train">
      <div class="yoga_train-item" v-for='item in yogaaid' :key='item.title'>
        <img :src="item.url" :style="{width:'100%',height:'100%'}">
        <div class="yoga_train-item-cover">
          <p class="yoga_train-item-cover-title">{{ item.title }}</p>
          <span>{{ item.num }}人已参加</span>
          <p class="yoga_train-item-cover-bottom">{{ item.level}}</p>
        </div>
      </div>
    </Basket>
    <!-- 瑜伽推荐 -->
    <BroadCast :arrInfo='recommend' :guide='guide'/>
    <Basket>
      每周瑜伽知识 - 周一更新 每周瑜伽知识 - 周一更新 每周瑜伽知识 - 周一更新
    </Basket>
    <!-- 每周跟新 -->
    <BroadCast :arrInfo='weekly' /> 
    <!-- 瑜伽活动 -->
    <BroadCast :arrInfo='activity' />
    <NoContent />
  </div>
</template>

<script>
  import Basket from '@/components/Basket'
  import BroadCast from '@/components/BroadCast'
  import NoContent from '@/components/NoContent'
  export default{
    name: 'yoga',
    components:{
      Basket,
      BroadCast,
      NoContent
    },
    data(){
      return{
        allShow: false,
        guide: true, //BroadCast-props 启用引导箭头➡️
        title: '更多瑜伽课程',
        yogaaid:[
          {
            id: 0,
            title:'长里程跑前热身',
            num:'124243',
            level:'K2 7分钟',
            url:'../../static/image/1507801857816_750x700.jpg'
          },
          {
            id: 1,
            title:'长里程跑后拉伸',
            num:'8783',
            level:'K2 7分钟',
            url:'../../static/image/1507801670626_750x700.jpg'
          },
          {
            id: 2,
            title:'长里程跑后拉伸',
            title:'更多跑步训练',
            num:'热身拉伸 / 损伤预防 / 跑步水平提升 / ...',
            url:'../../static/image/547dc44b51400000.jpg'
          }
        ],
        novice:[
          {
            id: 0,
            title:'瑜伽新手专区',
            describe:'瑜伽入门教练',
            describeSm:'为瑜伽新手专区推荐',
            url:'../../static/image/1507802632406_750x700.jpg'
          },
          {
            id: 1,
            title:'瑜伽新手专区',
            describe:'瑜伽正在毁掉 2000w 中国人的身体？',
            describeSm:'这种谣言你可别信',
            url:'../../static/image/1534315399305_1776x1332.jpg'
          },
          {
            id: 2,
            title:'瑜伽新手专区',
            describe:'新手 | 瑜伽入门计划',
            describeSm:'7天 手把手带你瑜伽入门',
            url:'../../static/image/1507801670626_750x700.jpg'
          },
          {
            id: 3,
            title:'瑜伽新手专区',
            describe:'瑜伽快速入门攻略',
            describeSm:'瑜伽新手必看',
            url:'../../static/image/1507802632406_750x700.jpg'
          }
        ],
        recommend:[
          {
            id: 4,
            title:'瑜伽课程推荐',
            describe:'「 力量瑜伽 」',
            describeSm:'强化身体力量提升瑜伽体能',
            url:'../../static/image/1533804989203_600x338.jpg'
          },
          {
            id: 5,
            title:'瑜伽课程推荐',
            describe:'「 魅力提升 」',
            describeSm:'瑜伽帮你塑造男性魅力',
            url:'../../static/image/1488452269169_750x700.jpg'
          },
          {
            id: 6,
            title:'瑜伽课程推荐',
            describe:'「 减脂塑形瑜伽 」',
            describeSm:'瑜伽帮你完美体型',
            url:'../../static/image/1507801670626_750x700.jpg'
          },
          {
            id: 7,
            title:'瑜伽课程推荐',
            describe:'「 放松解压 」',
            describeSm:'瑜伽帮你释放身心',
            url:'../../static/image/1507801670626_750x700.jpg'
          },
          {
            id: 9,
            title:'瑜伽课程推荐',
            describe:'「 备孕解压 」',
            describeSm:'滋养孕育空间与能量',
            url:'../../static/image/1517364960595_315x315.jpg'
          }
        ],
        weekly:[
          {
            id: 0,
            title:'每周瑜伽达人 - 周三更新',
            describe:'@美猫是我 印度瑜伽游学记',
            describeSm:'瑜伽不是想练就练,而是一周6天的自律练习',
            url:'../../static/image/1507800851171_750x700.jpg'
          },
          {
            id: 1,
            title:'每周瑜伽达人 - 周三更新',
            describe:'十一年瑜伽,老妈练出了模特身材',
            describeSm:'雪君33: 1560次的坚持和执着,平凡也会变...',
            url:'../../static/image/1519635853592_315x315.jpg'
          }
        ],
        activity:[
          {
            id: 0,
            title:'瑜伽活动',
            describe:'天鹅劲养成 | 气质体态提升',
            describeSm:'活动时间：9月26日 - 10月2日',
            url:'../../static/image/1534315399305_1776x1332.jpg'
          },
          {
            id: 1,
            title:'瑜伽活动',
            describe:'快速免费领取 nuoMi 瑜伽垫',
            describeSm:'十一特别活动 | 7天闭关挑战',
            url:'../../static/image/1533804989203_600x338.jpg'
          },
          {
            id: 2,
            title:'瑜伽活动',
            describe:'7 天放松减压训练营',
            describeSm:'粉碎压力 释放身心',
            url:'../../static/image/1507801857816_750x700.jpg'
          },
          {
            id: 3,
            title:'瑜伽活动',
            describe:'每日瑜伽签到',
            describeSm:'分享每一次瑜伽',
            url:'../../static/image/1507800851171_750x700.jpg'
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
<style lang="stylus">
.yoga
  &_first
    width 100%
    height 150px
    text-align center
    background transparent url('../../../assets/images/train1.jpg') 100% 100% / 100% 100% no-repeat
    &-title
      font-size 12px 
      color #ccc
      font-weight 200
      position relative
      top 10px
   &_train
    &-item
      position relative
      width 100%
      height 100px
      background-color red
      margin 5px 0 5px
      &-cover
        color #fff
        position absolute
        top 0
        left 0
        padding 10px
        &-title
          font-size 20px
        &-bottom
          font-size 16px
          position relative
          bottom -30px
  &-course 
    &-list
      display flex
      justify-content space-between
      align-items center
      // padding-bottom 25px
      margin-bottom 40px
      &-train
        color #999
      &-btn
        border-radius 20px
        padding 6px 20px
        color #fff
        font-size 10px
        background-color #24c789
      &-title
        font-size 16px
    &-all
      text-align center
</style>
