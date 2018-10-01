<template>
  <div class="run">
    <Basket>
      还有东西，地图
    </Basket>
    <BroadCast :arrInfo="recommend"/>
    <!-- 跑步辅助 -->
    <Basket :title='title' class="run_train" >
      <div class="run_train-item" v-for='item in runaid' :key='item.title' >
        <img :src="item.url" :style="{width:'100%',height:'100%'}">
        <div class="run_train-item-cover">
          <p class="run_train-item-cover-title">{{ item.title }}</p>
          <span>{{ item.num }}人已参加</span>
          <p class="run_train-item-cover-bottom">{{ item.level}}</p>
        </div>
      </div>
    </Basket>
    <BroadCast :arrInfo="activity"/>
    <Basket>
      全球赛事咨询 全球赛事咨询 全球赛事咨询 全球赛事咨询 全球赛事咨询
    </Basket>
    <BroadCast :arrInfo="emblem"/>
    <NoContent />
  </div>
</template>

<script>
  import Basket from '@/components/Basket'
  import BroadCast from '@/components/BroadCast'
  import NoContent from '@/components/NoContent'
  export default{
    name: 'run',
    components:{
      Basket,
      BroadCast,
      NoContent
    },
    data(){
      return{
        title:'跑步辅助训练', // 文本头标题
        // 跑步辅助
        runaid:[
          {
            id: 0,
            title:'长里程跑前热身',
            num:'124243',
            level:'K2 7分钟',
            url:'../../static/image/1507787447661_750x700.jpg'
          },
          {
            id: 1,
            title:'长里程跑后拉伸',
            num:'8783',
            level:'K2 7分钟',
            url:'../../static/image/1507861239722_750x700.jpg'
          },
          {
            id: 2,
            title:'更多跑步训练',
            num:'热身拉伸 / 损伤预防 / 跑步水平提升 / ...',
            url:'../../static/image/547dc44b51400000.jpg'
          }
        ],
        recommend:[
          {
            id: 0,
            title: '为你推荐',
            describe: '节前燃脂 ！跑掉秋膘',
            describeSm: '最后100件 T 恤免费送',
            url:'../../static/image/banner3.jpg'
          },
          {
            id: 1,
            describe: '国庆最酷活动,你准备好了吗？',
            describeSm: '和全球 nuoMi 一起狂欢吧',
            url:'../../static/image/banner2.jpg'
          },
          {
            id: 2,
            describe: '秋季跑步秘籍,更多奖更好玩',
            describeSm: '城市跑步系列活动全面启动',
            url:'../../static/image/banner1.jpg'
          }
        ],
        activity:[
           {
            id: 0,
            title: '跑步活动',
            describe: '「 九月跑步大作战」之 「 跑掉秋膘 」',
            describeSm: '活动结束时间 2018/09/30 23:59',
            url:'../../static/image/1501507391086_750x700.jpg'
          },
          {
            id: 1,
            describe: '国庆节前计划准备',
            describeSm: '活动结束时间 2018/10/01 23:59',
            url:'../../static/image/1478588178229_750x700.jpg'
          },
          {
            id: 2,
            describe: '节前计划准备',
            describeSm: '活动结束时间 2018/10/01 23:59',
            url:'../../static/image/1507787447661_750x700.jpg'
          },
          {
            id: 3,
            describe: '计划准备',
            describeSm: '活动结束时间 2018/10/01 23:59',
            url:'../../static/image/1518432578328_750x700.jpg'
          }
        ],
        emblem:[
          {
            id: 0,
            title: '徽章收集控',
            describe: '代表 nuoMi 消灭你们',
            describeSm: '完成跑步卡路里目标,兑换大徽章',
            url:'../../static/image/1507787447661_750x700.jpg'
          },
          {
            id: 1,
            describe: '走遍中国,你就是当代徐霞客',
            describeSm: '用运动轨迹点亮你的省份,收集 34 个省份...',
            url:'../../static/image/1495521473548_750x700.jpg'
          }
        ]
      }
    }
  }
</script>

<style lang="stylus">
.run
  &_train
    &-item
      position relative
      width 100%
      height 100px
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
</style>
