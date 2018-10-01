<template>
  <div class="sport">
    <TopBar :options='optionsHead'/>
    <!-- 主页sport选项卡 -->
    <div class="sport_tab">
      <ul class="sport_tab-list">
        <li 
            :class="['sport_tab-list-item', { activeTab: currentTab === item.name }]"
            v-for='item in tabItem' 
            :key='item.name'
            @click="currentTab=item.name"
        >
         {{ item.title }}</li>
      </ul>   
    </div>
    <div class="sport_content">
      <keep-alive>
        <componenet :is='currentTabCompnent'></componenet>
      </keep-alive>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import TopBar from '@/components/TopBar'
//tabComponent
import Home from './tabContent/Home'
import Health from './tabContent/Health'
import Run from './tabContent/Run'
import Kit from './tabContent/Kit'
import Yoga from './tabContent/Yoga'
import Walk from './tabContent/Walk'
import Riding from './tabContent/Riding'
//tab End

export default {
  name: 'sport', //主页 sport
  components:{
    TopBar,
    // tab
    Home,
    Health,
    Run,
    Kit,
    Yoga,
    Walk,
    Riding
    // tab end
  },
  data () {
    return {
      optionsHead:{
        title:'运动',
        search: 'search'
      },
      tabItem:[
        {
        name:'Home',
        title:'首页'
      },{
        name:'Health',
        title:'健身'
      },{
        name:'Run',
        title:'跑步'
      },{
        name:'Kit',
        title:'KIT'
      },{
        name:'Yoga',
        title:'瑜伽'
      },{
        name:'Walk',
        title:'行走'
      },{
        name:'Riding',
        title:'骑行'
      }],
      currentTab: 'Home', //当前选中的tab
    }
  },
  computed:{
    currentTabCompnent(){
      return this.currentTab
    }
  },
  created(){
    
  }
}
</script >
<style lang='stylus'>
.sport
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
