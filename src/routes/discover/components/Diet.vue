<template>
  <div class="alldiet">
    <GoBack :title='title' />
    <div class="alldiet_carouse">
      <Carousel :listImg='listImg'/>
    </div>
    <ul class="alldiet_tab">
      <li class="alldiet_tab-item">
        <i class="alldiet_tab-item-icon icon-guide"/>
        <p class="alldiet_tab-item-text">饮食指南</p>
      </li>
      <li class="alldiet_tab-item">
        <i class="alldiet_tab-item-icon icon-menu"/>
        <p class="alldiet_tab-item-text">分类菜谱</p>
      </li>
      <li class="alldiet_tab-item">
        <i class="alldiet_tab-item-icon icon-food"/>
        <p class="alldiet_tab-item-text">食物库</p>
      </li>
    </ul>
    <BroadCast :arrInfo='allLook' />
    <BroadCastSm :arrInfo="allEat" :moreUrl='moreLibraryUrl'/>
    <BroadCastPlus :arrInfo='datas'/>
    <BroadCastPlus :arrInfo='datas'/>
    <BroadCastPlus :arrInfo='datas'/>
    <BroadCastPlus :arrInfo='datas'/>
  </div>
</template>
<script>
  import GoBack from '@/components/GoBack'
  import Carousel from '@/components/Carousel'
  import BroadCast from '@/components/BroadCast'
  import BroadCastSm from '@/components/BroadCastSm'
  import BroadCastPlus from '@/components/BroadCastPlus'

  export default {
    name:'diet', //健康饮食
    components:{
      GoBack,
      Carousel,
      BroadCast,
      BroadCastSm,
      BroadCastPlus
    },
    data(){
      return{
        title:'健康饮食',
        listImg:[
          {
            url:'../../../../../static/food2.jpg'
          },
          {
            url:'../../../../static/food3.jpg'
          },
          {
            url:'../../../../static/food1.jpg'
          },
          {
            url:'../../../../static/banner4.jpg'
          }
        ],
        allLook:[
          {
            id: 0,
            title: '大家都在看',
            describe: '假期 7 天 , 只练 1 个动作',
            describeSm: '适合「 意志薄弱 」的你',
            url:'../../static/food1.jpg'
          },
          {
            id: 1,
            title: '大家都在看',
            describe: '假期 , 其实可以加速燃脂',
            describeSm: '适合「 自律 」的人',
            url:'../../static/food2.jpg'
          },
          {
            id: 2,
            title: '大家都在看',
            describe: '假期不指望瘦了 , 但至少别胖呀 ！',
            describeSm: '适合「 念念不胖 」的人',
            url:'../../static/food3.jpg'
          }
        ],
        moreLibraryUrl:"/", //换
        allEat:[
          {
            id: 0,
            title: '大家都在吃什么',
            url:'../../static/food1.jpg'
          },
          {
            id: 1,
            title: '大家都在吃什么',
            url:'../../static/food2.jpg'
          },
          {
            id: 2,
            title: '大家都在吃什么',
            url:'../../static/food3.jpg'
          },
          {
            id: 3,
            title: '大家都在吃什么',
            url:'../../static/food1.jpg'
          },
          {
            id: 4,
            title: '大家都在吃什么',
            url:'../../static/food2.jpg'
          }
        ],
        datas:[
          {
            id: 0,
            head:'不吃蛋白系列',
            url:'../static/food2.jpg',
            title:'甘蓝炒豆角',
            num: 171,
            describe: '大豆制品(豆腐 。豆干 。的主)要阿斯'
          },
          {
            id: 1,
            url:'../static/food1.jpg',
            title:'甘蓝炒豆角',
            num: 171,
          },
          {
            id: 2,
            url:'../static/food2.jpg',
            title:'甘蓝炒豆角',
            num: 171,
          },
          {
            id: 3,
            url:'../static/food1.jpg',
            title:'甘蓝炒豆角',
            num: 171,
          }
        ]
      }
    }
  }
</script>
<style lang="stylus">
.alldiet
  &_carouse
    width 100%
    height 160px
  &_tab
    display flex
    height 80px
    align-items center
    text-align center
    justify-content space-around
    background-color #fff
    margin-bottom 15px
    &-item
      &-icon
        display inline-block
        width 30px
        height 30px
        border-radius 50%
      & .icon-guide
        background #24c789 url('../../../assets/images/guide.svg') 50% 50% / 20px 20px no-repeat
      & .icon-menu
        background #24c789 url('../../../assets/images/menu.svg') 50% 50% / 20px 20px no-repeat
      & .icon-food
        background #24c789 url('../../../assets/images/food.svg') 50% 50% / 20px 20px no-repeat
      &-text
        font-size 12px
        margin-top 5px

</style>
