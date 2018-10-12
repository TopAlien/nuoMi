<template>
  <div class="courseWrap">
    <div class="courseWrap_top">
      <p class="courseWrap_top-title">{{ title }}</p>
      <i class="courseWrap_top-icon"/>
    </div>
    <ul class="courseWrap_content">
      <li class="courseWrap_content-item" v-for='item in courseArr' :key='item.id'>
        <img :src="'http://localhost:3000/images/' + item.url" alt="">
        <div class="courseWrap_content-item-cover">
          <p class="courseWrap_content-item-cover-title">{{ item.text }}</p>
          <span class="courseWrap_content-item-cover-num">{{ item.num }}人已参加</span>
          <p class="courseWrap_content-item-cover-level">
            K1 
            <span class="courseWrap_content-item-cover-level-time">{{ item.time }}分钟</span>
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
    title:'为你推荐的训练',
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
      title:'',
      timer: null
    }
  },
  created(){
    //为什么啊这是
    // this.$nextTick(()=>{
    //   this.title = this.courseArr[0].title;
    // })
    clearTimeout(this.timer);
    this.timer = setTimeout(()=>{
      this.title = this.courseArr[0].title;
    }, 100);
  },
  beforeDestroy(){
    clearTimeout(this.timer);
  }
}
</script>
<style lang="stylus">
.courseWrap
  margin-bottom 20px
  &_top
    display flex
    padding 15px 15px
    justify-content space-between
    align-items center
    &-title
      font-size 12px
    &-icon
      display inline-block
      width 20px
      height 20px
      background transparent url('../../../../assets/images/lArrow.svg') 0 0 /20px 20px no-repeat
  &_content
    display flex
    width 100%
    overflow-x scroll
    padding 0 15px 5px
    box-sizing border-box
    &-item
      position relative
      width 300px
      height 150px
      margin-right 5px
      & img
        width 300px
        height 150px
        margin-right 15px
      &-cover
        position absolute
        top 0
        left 0
        margin 20px 15px
        color #fff
        &-title
          margin-bottom 5px
        &-num
          font-size 12px
          font-weight 200  
        &-level
          margin-top 58px
          &-time
            font-size 12px
            font-weight 200      
</style>


