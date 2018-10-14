<template>
  <div class="personalData">
    <GoBack />
    <div class="personalData_userBg" />
    <div class="personalData_userData">
      <div class="personalData_userData-avatarWrap">
        <img class="personalData_userData-avatarWrap-avatar" :src="completionImgUrl(user.avatar)" alt="">
      </div>
      <router-link to='personal'>
        <span class="personalData_userData-modify">修改资料</span>
      </router-link>
      <p class="personalData_userData-name">{{ user.name }}
        <i :class="['personalData_userData-name-icons',sexIcon]"/>
      </p>
      <p class="personalData_userData-city">{{ user.city }} 2018-10-05 加入nuoMi</p>
      <ul class="personalData_userData-fans">
        <router-link to='fans'>
          <li class="align_left">0 粉丝</li>
        </router-link>
        <router-link to='follow'>
          <li class="align_center">0 关注</li>
        </router-link>
        <router-link to='trend'>
          <li class="align_right">0 动态</li>
        </router-link>
      </ul>
    </div>
    <div class="personalData_link">
      <LineLink v-for='item in options' :key='item.title' :options='item' />
    </div>
    <div class="personalData_trend">
      <p>动态</p>
      <div class="personalData_trend-wrap">
        <i class="personalData_trend-wrap-icon" />
        <p class="personalData_trend-wrap-title">还没有动态哦</p>
        <router-link to='publish'>
          <span class="personalData_trend-wrap-btn">发布动态</span>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
  import { completionImgUrl } from '@/utils/utils'
  import GoBack from '@/components/GoBack'
  import LineLink from '@/components/LineLink'

  export default {
    name:'personalData', //个人资料
    components:{
      GoBack,
      LineLink
    },
    data(){
      return{
        user:{},
        completionImgUrl:null,
        options:[
          {
            title:'nuoMi成长值',
            url:'grade'
          },
          {
            title: '徽章',
            url: 'badge'
          },
          {
            title: '参加过的训练',
            url: 'trained',
            number: '12'
          }
        ]
      }
    },
    computed:{
      sexIcon(){
        return this.user.sex === '男' ? 'personalData_userData-name-male' : 'personalData_userData-name-female'
      }
    },
    created(){
      this.completionImgUrl = completionImgUrl;
      this.user = this.$store.getters.user;
    }
  }
</script>
<style lang="stylus">
.personalData
  &_userBg
    height 120px
    background-color rgb(93,85,92)
  &_userData
    padding 0 20px
    position relative
    height 300px
    background-color #fff
    margin-bottom 15px
    &-avatarWrap
      height 80px
      &-avatar
        position absolute
        top -14px
        left 25px
        width 70px
        height 70px
        border-radius 50%
        box-shadow 0 0 0 5px #fff
    &-modify
      position absolute
      top 20px
      right 20px
      padding 5px 10px
      border 1px solid #ccc
      border-radius 20px
    &-name
      margin 10px 0 40px
      font-weight 400px
      font-size 25px
      &-icons
        display inline-block
        width 20px
        height 20px
        border-radius 50%
      &-female
        background rgb(240,90,182) url('../../../../assets/images/female.svg') 50% 50% /16px 16px no-repeat
      &-male
        background rgb(73,148,213) url('../../../../assets/images/male.svg') 50% 50% /16px 16px no-repeat
    &-city
      margin-bottom 40px
      color #ccc
      font-weight 200
    &-fans
      display flex
      justify-content space-between
      & li
        flex 1
        padding 20px 0
      & .align_center
        text-align center
      & .align_left
        text-align left 
      & .align_right
        text-align right
  &_link
    background-color #fff
    margin-bottom 15px
  &_trend
    position relative
    font-weight 200
    height 300px
    background-color #fff
    & p:first-child 
      height 50px
      line-height 50px
      padding 0 15px
      border-bottom 1px solid #ccc
    &-wrap
      position absolute
      top 45%
      left 0
      bottom 0
      right 0
      width 100%
      margin auto
      text-align center
      &-icon
        display inline-block
        width 30px
        height 30px
        border-radius 50%
        background #ccc url('../../../../assets/images/publish.svg') 50% 50% / 20px 20px no-repeat
      &-title
        color #ccc
        margin 15px 0
        font-weight 200
        font-size 12px
      &-btn
        color #fff
        padding 5px 15px
        font-size 12px
        background-color #24c789
        border-radius 20px
</style>

