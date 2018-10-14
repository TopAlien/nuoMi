<template>
  <div class="publish">
    <div class="publish_topBar">
      <i class="publish_topBar-icon" @click="$router.go(-1)"/>
      <span class="publish_topBar-title">新动态</span>
      <span class="publish_topBar-published" @click='published' :style="colorStyle">发布</span>
    </div>
    <div class="publish_avatar">
      <img :src="'http://94.191.17.174:3000/images/'+user.avatar" alt="" :style="{width:'35px',height:'35px',borderRadius:'50%'}">
    </div>
    <form class="publish_form">
      <textarea class="publish_form-text" name="publish" v-model='publishValue' cols="30" rows="10" placeholder="分享你的心得和经验吧"></textarea>
    </form>
  </div>
</template>
<script>
  import { isEmpty } from '@/utils/utils'
  export default {
    name:'publish', //发布
    data(){
      return{
        user:{},
        publishValue:'' //text内容
      }
    },
    methods:{
      published(){
        if(isEmpty(this.publishValue)){
          return false
        }else{
          //提交、
          alert('去提交');
          console.log(this.publishValue);
        }
      }
    },
    computed:{
      //发布的颜色
      colorStyle(){
        return isEmpty(this.publishValue) ? "color:#ccc" : "color:#24c789"
      }
    },
    created(){
      this.user = this.$store.getters.user
    },
    beforeRouteLeave (to, from , next) {
      const answer = window.confirm('你还没有发布,确定不发布了吗?')
      if (answer) {
        next()
      } else {
        next(false)
      }
    }
  }
</script>
<style lang="stylus">
.publish
  &_topBar
    position fixed
    top 0
    left 0
    z-index 999
    display flex
    height 50px
    width 100%
    justify-content space-between
    align-items center
    font-weight 200
    background-color #fff
    &-icon
      width 40px
      height 100%
      background transparent url('../../../../../assets/images/close.svg') 0 50% / 20px 20px no-repeat
      margin-left 20px
    &-published
      margin-right 20px
      color #ccc

  &_form
    width 100%
    height 250px
    &-text
      width 99%
      border 0
      outline 0
      font-size 16px
  &_avatar
    background-color #fff
    padding 15px 15px
</style>


