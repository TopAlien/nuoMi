<template>
  <div class="follow">
    <GoBack :title='title'/>
    <h1>还没有粉丝</h1>
  </div>
</template>
<script>
  import GoBack from '@/components/GoBack'
  export default{
    name:'fans',
    components:{
      GoBack
    },
    data(){
      return{
        title:'我的粉丝'
      }
    }
  }
</script>
