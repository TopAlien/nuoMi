<template>
  <div>
    <DetailList v-for='item in infoData' :key='item.id' :item='item'/>
  </div>
</template>
<script>
  import DetailList from './DetailList'
  export default {
    name:'run',
    components:{
      DetailList
    },
    data(){
      return{
        infoData:[
          {
            id:0,
            title:'剧hjk脂',
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
