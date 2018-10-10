<template>
  <div class="library">
    <GoBack :title='title' />
    <div class="library_wrap">  
      <router-link 
        class="library_wrap-list" 
        v-for='item in libraryData' 
        :key='item.id'
        :to="'libraryWrap?data=' + item.id + '&title=' + item.title "
      >
        <img class="library_wrap-list-img" :src="item.url" alt="">
        <span class="library_wrap-list-title">{{ item.title }}</span>
        <i class="library_wrap-list-icon" />
      </router-link>
    </div>
  </div>
</template>
<script>
import GoBack from '@/components/GoBack'
  export default {
    name:'library',
    components:{
      GoBack
    },
    data(){
      return{
        title:'动作库',
        libraryData:[
          {
            id: 1,
            title: '胸部',
            url:'../../../../../static/image/55963b0e73800000.png'
          },
          {
            id: 2,
            title: '背部',
            url:'../../../../../static/image/55963ab1a4c00000.png'
          },
          {
            id: 3,
            title: '肩部',
            url:'../../../../../static/image/55963b1db3c00000.png'
          },
          {
            id: 4,
            title: '手臂',
            url:'../../../../../static/image/559639a46e400000.png'
          },
          {
            id: 5,
            title: '颈部',
            url:'../../../../../static/image/55963ab1a4c00000.png'
          },
          {
            id: 6,
            title: '腹部',
            url:'../../../../../static/image/55963afccdc00000.png'
          },
          {
            id: 7,
            title: '腰部',
            url:'../../../../../static/image/55963b2cc0800000.png'
          },
          {
            id: 8,
            title: '臀部',
            url:'../../../../../static/image/559639594f800000.png'
          },
          {
            id: 9,
            title: '腿部',
            url:'../../../../../static/image/55963ad31b400000.png'
          },
          {
            id: 10,
            title: '全身',
            url:'../../../../../static/image/559638c467800000.png'
          }
        ]
      }
    }
  }
</script>
<style lang="stylus">
.library
  &_wrap
    &-list
      display flex
      width 100%
      height 70px
      align-items center
      justify-content space-between
      background-color #fff
      padding 10px 15px
      border-bottom 1px solid #ccc
      box-sizing border-box
      &-img
        width 50px
        height 50px
      &-title
        margin-left 20px
        font-weight 200
      &-icon
        display inline-block
        flex 1
        width 20px
        height 70px
        background transparent url('../../../../assets/images/lArrow.svg') 100% 50% / 20px 20px no-repeat
</style>

