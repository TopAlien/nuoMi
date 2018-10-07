<template>
  <div class="info">
    <GoBack :title='title' />
    <ul class="info_tab">
      <li :class="[ 'info_tab-item', { activeTab: currentTab === item.name} ]" v-for='item in tabArr' :key='item.id' @click='currentTab=item.name'>
        {{ item.title }}
      </li>
    </ul>
    <div class="info_wrap">
      <keep-alive>
        <component :is="currentTabComponent"></component>
      </keep-alive>
    </div>
  </div>
</template>
<script>
  import GoBack from '@/components/GoBack'
  import Private from './children/Private'
  import Comment from './children/Comment'
  import Myself from './children/Myself'
  import Fans from './children/Fans'
  import Vigour from './children/Vigour'

  export default{
    name:'info',
    components:{
      GoBack,
      Private,
      Comment,
      Myself,
      Fans,
      Vigour
    },
    data(){
      return{
        title:'消息',
        tabArr:[
          {
            id:0,
            name:'Private',
            title:'私信'
          },{
            id: 1,
            name:'Comment',
            title: '评论'
          },{
            id: 2,
            name:'Myself',
            title: '@我'
          },{
            id:3,
            name:'Fans',
            title:'粉丝'
          },{
            id:4,
            name:'Vigour',
            title:'加油'
          }
        ],
        currentTab:'Private'
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
// rgb(93,85,92)
.info
  &_tab
    display flex
    height 50px
    align-items center
    justify-content space-around
    text-align center
    background-color rgb(93,85,92)
    color #fff
    font-weight 200
    &-item
      flex 1
      position relative
      padding 17px 0
    .activeTab
      &::before
        display inline-block
        position absolute
        bottom 0
        left 0
        content ''
        width 100%
        height 3px
        background-color #fff  
</style>
