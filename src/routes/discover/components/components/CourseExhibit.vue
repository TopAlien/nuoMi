<template>
  <div class="courseExhibit">
    <ul class="courseExhibit_content">
      <li class="courseExhibit_content-item" v-for='item in courseArr' :key='item.id'>
        <img :src="completionImgUrl(item.url)" alt="">
        <div class="courseExhibit_content-item-cover">
          <p class="courseExhibit_content-item-cover-title">{{ item.text }}</p>
          <span class="courseExhibit_content-item-cover-num">{{ item.num }}人已参加</span>
          <p class="courseExhibit_content-item-cover-level">
            K1 
            <span class="courseExhibit_content-item-cover-level-time">{{ item.time }}分钟</span>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>
/**
courseArr:[
  {
    id:0,
    to:'' //后面传
    url:'' img
    text:'12分钟跑步体验课',
    num:7932478,
    level: K1,
    time: 12 -分钟
  }
]
 */
<script>
  import { completionImgUrl } from '@/utils/utils'
  export default {
    name:'courseWrap',
    props:{
      courseArr:{
        type: Array,
        required: true
      }
    },
    data(){
      return{
        completionImgUrl: null
      }
    },
    created(){
      this.completionImgUrl = completionImgUrl;
    }
  }
</script>
<style lang="stylus">
.courseExhibit
  margin-top 15px
  margin-bottom 20px
  &_content
    width 100%
    box-sizing border-box
    &-item
      position relative
      width 100%
      height 120px
      margin-bottom 5px
      & img
        width 100%
        height 120px
      &-cover
        position absolute
        top 0
        left 0
        margin 10px 15px 0
        color #fff
        &-num
          font-size 12px
          font-weight 200  
        &-level
          margin-top 58px
          &-time
            font-size 12px
            font-weight 200      
</style>