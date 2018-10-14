<template>
  <div class="fixedShop">
    <p class="fixedShop_title">{{ title }}</p>
    <div class="fixedShop_content">   
        <div class="fixedShop_content-item" v-for='item in shopArr' :key='item.id'>
          <router-link :to=" 'detailShop?gid=' + item.id  + '&text=' + item.text ">
            <img class="fixedShop_content-item-img" :src="completionImgUrl(item.url)" alt="">
            <p class="fixedShop_content-item-text">{{ item.text }}</p>
            <span class="fixedShop_content-item-money">¥{{ item.money }}</span>
          </router-link>
        </div> 
    </div>
  </div>
</template>
/**
shopArr:[
  {
    id:0,
    title:'新品上线',
    url:'..',
    text:'髌骨带',
    money: 99
  }
]
 */
<script>
  import {completionImgUrl} from '@/utils/utils'
  export default {
    name:'fixedShop',
    props:{
      shopArr:{
        type:Array,
        required: true
      }
    },
    data(){
      return{
        title:'',
        timer: null,
        completionImgUrl:null
      }
    },
    created(){
      clearTimeout(this.timer);
      this.timer = setTimeout(()=>{
        this.title = this.shopArr[0].title;
      },300);
      this.completionImgUrl = completionImgUrl;
    },
    beforeDestroy(){
      clearTimeout(this.timer);
    }
  }
</script>
<style lang="stylus">
.fixedShop
  color #333
  background-color #fff
  margin-top 15px
  padding 15px
  box-sizing border-box
  &_title
    margin-bottom 20px
    font-weight 200
    font-size 14px
  &_content
    display flex
    justify-content space-between
    margin-top 20px
    flex-wrap wrap
    &-item
      margin-bottom 20px
      &-img
        width 111px
        height 111px
        
      &-text
        display -webkit-box
        width 111px
        line-height 20px
        margin 8px 0 5px
        overflow hidden
        text-overflow ellipsis
        -webkit-line-clamp 2
        -webkit-box-orient vertical
        font-size 14px
      &-money
        color red
</style>
