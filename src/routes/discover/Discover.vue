<template>
  <div class="discover">
    <TopBar :options='optionsHead' @onSearch='search'/>
    <div class="discover_carouse">
      <Carousel :listImg='listImg'/>
    </div>
    <h1>轮播</h1>
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
  </div>
</template>

<script>
  import TopBar from '@/components/TopBar'
  import Carousel from '@/components/Carousel'

  export default {
    name: 'discover',
    components:{
      TopBar,
      Carousel
    },
    data () {
      return {
        optionsHead:{
          title:'发现',
          search: 'search'
        },
        msg: 'Welc',
        listImg:[
          {
            url:'../../../static/banner1.jpg'
          },
          {
            url:'../../../static/banner2.jpg'
          },
          {
            url:'../../../static/banner3.jpg'
          },
          {
            url:'../../../static/banner4.jpg'
          }
        ]
      }
    },
    methods:{
      search(){
        alert('search')
      }
    }
  }
</script>

<style lang='stylus'>
.discover
  &_carouse
    width 375px
    height 160px
</style>
