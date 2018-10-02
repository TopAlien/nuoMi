<template>
  <div class="riding">
     <Basket>
      <div class="riding_first"> 
        <span class="riding_first-title">" 感受追风的快乐 "</span>
      </div>
    </Basket>
    <Basket>
      骑行地图
    </Basket>
    <!-- 精选 -->
    <BroadCast :arrInfo='choicenes' />
    <Basket>
      行走活动 行走活动 行走活动 行走活动 
    </Basket>
     <!-- 骑手日记 -->
    <BroadCast :arrInfo='diary' />
    <NoContent />
  </div>
</template>

<script>
  import Basket from '@/components/Basket'
  import BroadCast from '@/components/BroadCast'
  import NoContent from '@/components/NoContent'

  export default{
    name: 'riding',
    components:{
      Basket,
      BroadCast,
      NoContent
    },
    data(){
      return{
        choicenes:[
          {
            id: 0,
            title: '为你精选',
            describe:'中秋骑车得好礼',
            describeSm:'nuoMi 商场装备任你挑',
            url:'../../static/image/u=2912732009,2136481222&fm=26&gp=0.jpg'
          },
           {
            id: 1,
            title: '为你精选',
            describe:'中秋骑迹向团圆',
            describeSm:'中秋有奖骑行活动',
            url:'../../static/image/u=2799702000,2050941478&fm=26&gp=0.jpg'
          },
           {
            id: 2,
            title: '为你精选',
            describe:'圆',
            describeSm:'中秋有奖骑行活动',
            url:'../../static/image/u=1297405399,221632527&fm=200&gp=0.jpg'
          }
        ],
        diary:[
          { 
            id: 0,
            title: '骑手日记',
            describe:'360km 环青海湖骑行, 360度的圆满',
            describeSm:'看完真的想说走就走',
            url:'../../static/image/u=711680750,3593599751&fm=27&gp=0.jpg'
          },
           {
            id: 1,
            title: '骑手日记',
            describe:'33漫骑',
            describeSm:'和男票一起幸福地骑行是一种怎样的体验？',
            url:'../../static/image/u=1734781753,909490416&fm=200&gp=0.jpg'
          },
          {
            id: 2,
            title: '骑手日记',
            describe:'世界那么大,骑行去流浪',
            describeSm:'nuoMi 骑士的青海环湖骑行记',
            url:'../../static/image/u=1297405399,221632527&fm=200&gp=0.jpg'
          },
          {
            id: 3,
            title: '骑手日记',
            describe:'又见最美四月',
            describeSm:'粉壁上桑园小镇骑游',
            url:'../../static/image/u=1356031719,1901324463&fm=200&gp=0.jpg'
          }
        ]
      }
    }
  }
</script>

<style lang="stylus">
.riding
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
</style>
