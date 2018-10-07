<template>
  <div class="all">
    <DetailList v-for='item in infoData' :key='item.id' :item='item'/>
  </div>
</template>
<script>
  import DetailList from './DetailList'
  export default {
    name:'all',
    components:{
      DetailList
    },
    data(){
      return{
        infoData:[
          {
            id:0,
            title:'剧情sad在燃脂',
            time:'22',
            K:'K1',
            isTrain: false
          },
          {
            id:2,
            title:'剧情wer在燃脂',
            time:'22',
            K:'K1',
            isTrain: false
          },
          {
            id:3,
            title:'剧情在ter脂',
            time:'22',
            K:'K1',
            isTrain: false
          },
          {
            id:4,
            title:'剧trrt脂',
            time:'22',
            K:'K1',
            isTrain: false
          },
          {
            id:5,
            title:'剧lplpy燃脂',
            time:'22',
            K:'K1',
            isTrain: false
          },
          {
            id:6,
            title:'剧情tryyrt脂',
            time:'22',
            K:'K1',
            isTrain: false
          },
          {
            id:7,
            title:'剧rtyrty燃脂',
            time:'22',
            K:'K1',
            isTrain: false
          },
          {
            id:8,
            title:'rty燃脂',
            time:'22',
            K:'K1',
            isTrain: false
          },
          {
            id:9,
            title:'剧rtery燃脂',
            time:'22',
            K:'K1',
            isTrain: false
          },
          {
            id:10,
            title:'燃脂',
            time:'22',
            K:'K1',
            isTrain: false
          }
        ]
      }
    }
  }
</script>
<style lang="stylus">
  
</style>


