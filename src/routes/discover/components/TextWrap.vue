<template>
  <router-link to='/'>
    <Basket>
      <div class="textWrap" v-for='item in contentArr' :key='item.id'>
        <p>{{ item.title }}>></p>
        <div class="textWrap_img">
          <img :src="item.url" alt="" :style="{width:'100%',height:'120px',borderRadius:'5px'}">
          <i>文章</i>
        </div>
        <p class="textWrap_text">{{ item.text }}</p>
        <span class="textWrap_volume">{{ item.readNum }} 阅读 · {{ item.collNum }} 收藏</span>
        <p class="textWrap_user">
          <img :src="item.avatar" alt="" :style="{width:'25px',height:'25px',borderRadius:'50%'}">
          <span>{{ item.userName }}</span>
        </p>
      </div>
  </Basket>
  </router-link>
</template>

<script>
/**
 * discover内容模块
 * 
 * contentArr:[
 *  id:0
 *  to:'/' 地址
 *  title:标题
 *  url: imgurl
 *  btnName：按钮名字
 *  text: 文章
 *  readNum：阅读数
 *  collNum: 收藏数
 *  avatar: 头像url
 *  userName: 用户名
 * ]
 */
  import Basket from '@/components/Basket'

  export default{
    name:'textWrap',
    props:{
      contentArr:{
        type: Array,
        required: true
      }
    },
    components:{
      Basket
    }
  }
</script>
<style lang="stylus">
.textWrap
  &_img
    position relative
    height 120px
    margin-top 20px
    & i
      display inline-block
      position absolute
      top 15px
      right 15px
      width 40px
      height 20px
      font-size 12px
      line-height 20px
      text-align center
      border-radius 5px
      background-color #ccc
  &_text
    margin 10px 0
  &_volume
    margin 10px 0
  &_user
    margin 10px 0 0
    & span
      position relative
      top -5px
</style>
