<template>
  <div class="walk">
     <Basket>
      <div class="walk_first"> 
        <span class="walk_first-title">" 用步伐丈量世界 "</span>
      </div>
    </Basket>
    <div class="walk_map">
      <BMap></BMap>
    </div>
    <BroadCast :arrInfo='scoure' />
    <Basket>
      行走活动 行走活动 行走活动 行走活动 
    </Basket>
    <NoContent />
  </div>
</template>

<script>
  import Basket from '@/components/Basket'
  import BroadCast from '@/components/BroadCast'
  import NoContent from '@/components/NoContent'
  import BMap from '@/components/BMap'
  export default{
    name: 'walk',
    components:{
      Basket,
      BMap,
      BroadCast,
      NoContent
    },
    data(){
      return{
        scoure:[
          {
            id: 0,
            title: '行走课程',
            describe:'远离含胸驼背颈前伸',
            describeSm:'1 个课程养成女神气质',
            url:'../../static/image/1507876285351_750x700.jpg'
          },
           {
            id: 2,
            title: '行走课程',
            describe:'活力燃脂走',
            describeSm:'走起来就能瘦',
            url:'../../static/image/1507861239722_750x700.jpg'
          },
           {
            id: 3,
            title: '行走课程',
            describe:'极速燃脂走',
            describeSm:'走出 A4 腰',
            url:'../../static/image/1478591073270_750x700.jpg'
          }
        ]
      }
    },
    methods:{
      handelMap({BMap,map}){
        var geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition(function(r){
          if(this.getStatus() == BMAP_STATUS_SUCCESS){
            var mk = new BMap.Marker(r.point);
            map.addOverlay(mk);
            map.panTo(r.point);
          }
          else {
            alert('failed'+this.getStatus());
          }        
        });
      }
    }
  }
</script>
<style lang="stylus">
.walk
  &_map
    width 100%
    height 200px
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
