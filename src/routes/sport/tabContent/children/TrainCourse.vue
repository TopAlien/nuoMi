<template>
  <div class="allCourse">
    <GoBack :title='title' />
    <ul class="allCourse_topBar">
      <li :class="['allCourse_topBar-item', { active: currentTab==item.name }]" v-for='item in course' :key='item.id' @click='currentTab=item.name'>
        {{ item.title }}
      </li>
    </ul>
    <div class="allCourse_content">
      <keep-alive>
        <component :is="currentTabComponent"></component>
      </keep-alive>
    </div>
  </div>
</template>
<script>
  import GoBack from '@/components/GoBack'
  import All from './components/All'
  import Health from './components/Health'
  import Run from './components/Run'
  import Yoga from './components/Yoga'

  export default {
    name:'allCourse',
    components:{
      GoBack,
      All,
      Health,
      Run,
      Yoga
    },
    data(){
      return{
        title: '训练课程',
        course:[
          {
            id:0,
            name:"All",
            title:'全部'
          },
          {
            id:1,
            name:"Health",
            title:'健身'
          },
          {
            id:2,
            name:"Run",
            title:'跑步'
          },
          {
            id:3,
            name:"Yoga",
            title:'瑜伽'
          }
        ],
        currentTab:'All'
      }
    },
    computed:{
      currentTabComponent(){
        return this.currentTab
      }
    }
  }
</script>
<style lang="stylus">
.allCourse
  &_topBar
    display flex
    height 45px
    align-items center
    text-align center
    font-weight 200
    background-color #fff
    &-item
      flex 1
      padding 14px 0
    .active
      position relative
      &::before
        display inline-block
        position absolute
        bottom 0
        left 45%
        content ''
        width 10px
        height 2px
        background-color #444
</style>
