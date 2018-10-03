<template>
  <Basket class="BMap">
      <BaiDuMap class="BMap_map" 
                ak='OFGrBtzOGCxbR5mOtQBmMPrCskXAjn6Y' 
                @ready='handelMap' 
                :center='center' 
                :zoom='zoom'>
      <BmCopyright
        anchor="BMAP_ANCHOR_TOP_LEFT"
        :copyright="[{id: 2, content: '<a>nuoMi 出品</a>'}]">
      </BmCopyright>
      <BmGeolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :autoLocation='true'></BmGeolocation>
      <BmNavigation anchor="BMAP_ANCHOR_TOP_RIGHT" :enableGeolocation='true' ></BmNavigation>
      </BaiDuMap>
  </Basket>
</template>
<script>
  import Basket from './Basket'
  import BaiDuMap from 'vue-baidu-map/components/map/Map'
  import { BmNavigation, BmGeolocation,BmCopyright } from 'vue-baidu-map'
  export default{
    name:'Bmap',
    components:{
      Basket,
      BaiDuMap,
      BmGeolocation, //地位
      BmCopyright,
      BmNavigation
    },
    data(){
      return{
        center: {
          lng: 116.404, 
          lat: 39.915
        },
        zoom: 12,
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
.BMap
  width 100%
  height 200px
  &_map
    width 100%
    height 200px
</style>
