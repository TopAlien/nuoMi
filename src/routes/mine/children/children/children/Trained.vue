<template>
  <div>
    <GoBack :title="title" />
    <h1>还没有参加过任何训练</h1>
  </div>
</template>
<script>
  import GoBack from '@/components/GoBack'
  export default {
    name:'trained',// 
    components:{
      GoBack
    },
    data(){
      return{
        title:'参加过的训练'
      }
    }
  }
</script>

