<template>
  <div class="community">
    <TopBar :options='optionsHead'/>
    <!-- community选项卡 -->
    <div class="community_tab">
      <ul class="community_tab-list">
        <li 
            :class="['community_tab-list-item', { activeTab: currentTab === item.name }]"
            v-for='item in tabItem' 
            :key='item.name'
            @click="currentTab=item.name"
        >
         {{ item.title }}</li>
      </ul>   
    </div>
    <div class="community_content">
      <keep-alive>
        <componenet :is='currentTabCompnent'></componenet>
      </keep-alive>
    </div>
  </div>
</template>

<script>
  import TopBar from '@/components/TopBar'
  //tabComponent
  import Hot from './tabContent/Hot'
  import Follow from './tabContent/Follow'
  import Thing from './tabContent/Thing'
  import Diet from './tabContent/Diet'
  import Transform from './tabContent/Transform'
  import Elites from './tabContent/Elites' //达人
  import City from './tabContent/City'
  //tab End
  export default {
    name: 'community',
    components:{
      TopBar,
      // tab
      Hot,
      Follow,
      Thing,
      Diet,
      Transform,
      Elites,
      City
      // tab end
    },
    data () {
      return {
        optionsHead:{
          title:'社区',
          camera: 'camera'
        },
        currentTab: 'Hot', //当前选中的tab
        tabItem:[
          {
            name:'Hot',
            title:'热门'
          },{
            name:'Follow',
            title:'关注'
          },{
            name:'Thing',
            title:'好物'
          },{
            name:'Diet',
            title:'饮食'
          },{
            name:'Transform',
            title:'蜕变'
          },{
            name:'Elites',
            title:'达人'
          },{
            name:'City',
            title:'同城'
          }],
      }
    },
    computed:{
      currentTabCompnent(){
        return this.currentTab
      }
    }
  }
</script>

<style lang='stylus'>
.community
  &_tab
    width 100%
    height 40px
    line-height 40px
    background-color #fff
    overflow-x scroll
    &-list
      display flex
      width 460px
      justify-content space-around
      &-item 
        position relative
        font-size 14px
        font-weight 200
      //选中
      .activeTab
        &::before
          display inline-block
          position absolute
          bottom 0
          left 25%
          content ''
          width 10px
          height 3px
          background-color rgb(85, 79, 94)         
  &_content
    width 92%
    margin 0 auto
</style>
