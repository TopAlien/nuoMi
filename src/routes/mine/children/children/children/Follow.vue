<template>
  <div class="follow">
    <GoBack :title='title'/>
    <h1>还没有好友</h1>
  </div>
</template>
<script>
  import GoBack from '@/components/GoBack'
  export default{
    name:'follow',
    components:{
      GoBack
    },
    data(){
      return{
        title:'我的关注'
      }
    }
  }
</script>
