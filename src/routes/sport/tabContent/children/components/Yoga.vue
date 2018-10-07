<template>
  <div>
    <DetailList v-for='item in infoData' :key='item.id' :item='item'/>
  </div>
</template>
<script>
  import DetailList from './DetailList'
  export default {
    name:'yoga',
    components:{
      DetailList
    },
    data(){
      return{
        infoData:[
          {
            id:0,
            title:'剧sadsa脂',
            time:'22',
            K:'K1',
            isTrain: false
          },
          {
            id:2,
            title:'剧情sdfdsf脂',
            time:'22',
            K:'K1',
            isTrain: false
          },
          {
            id:3,
            title:'剧情sdfsdf',
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
