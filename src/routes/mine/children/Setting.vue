<template>
  <div class="setting">
    <GoBack :title="title"/>
    <div class="setting_list">
      <div class="setting_user">
        <LineLink class="setting_user-line" :options="user" :show='false' />
        <img :src="completionImgUrl(users.avatar)" alt="" :style="{width:'40px',height:'40px',borderRadius:'50%'}">
      </div>
      <LineLink class="setting_user-line" v-for='item in settingArr.slice(0,5)' :key='item.title' :options="item" :show='false'/>
    </div>
    <div class="setting_list">
      <LineLink class="setting_user-line" v-for='item in settingArr.slice(5,8)' :key='item.title' :options="item" :show='false'/>
    </div>
    <div class="setting_list">
      <LineLink class="setting_user-line" v-for='item in settingArr.slice(8,13)' :key='item.title' :options="item" :show='false'/>
    </div>
    <div class="setting_list">
      <LineLink class="setting_user-line" v-for='item in settingArr.slice(13)' :key='item.title' :options="item" :show='false'/>
    </div>
  </div>
</template>

<script>
  import { completionImgUrl } from '@/utils/utils'
  import GoBack from '@/components/GoBack'
  import LineLink from '@/components/LineLink'

  export default{
    name:'setting',
    components:{
      GoBack,
      LineLink
    },
    computed:{
      users(){
        return this.$store.getters.user
      },
      completionImgUrl(){
        return completionImgUrl
      }
    },
    data(){
      return{
        title: '设置',
        user:{
          title: '个人资料',
          url: 'personal'
        },
        settingArr:[
          {
            title:'账号管理和绑定',
            url: 'account'
          },
          {
            title:'运动概况',
            url: 'discover'
          },
          {
            title: '运动风险须知',
            url: 'discover'
          },
          {
            title: '隐私',
            url: 'discover'
          },
          {
            title: '达人认证',
            url: 'discover'
          },
          {
            title: '训练',
            url: 'discover'
          },
          {
            title: '语音设置',
            url: 'discover'
          },
          {
            title: '离线地图',
            url: 'discover'
          },
          {
            title: '消息通知',
            url: 'discover'
          },
          {
            title: '运动权限设置',
            url: 'discover'
          },
          {
            title: '缓存管理',
            url: 'discover'
          },
          {
            title: '传感器诊断',
            url: 'discover'
          },
          {
            title: '网络诊断',
            url: 'discover'
          },
          {
            title: '邀请好友',
            url: 'discover'
          },
          {
            title: '帮助中心',
            url: 'discover'
          },
          {
            title: '社区公约',
            url: 'discover'
          },
          {
            title: '社区规范',
            url: 'discover'
          },
          {
            title: '检查更新',
            url: 'discover'
          },
          {
            title: '关于',
            url: 'discover'
          }
        ]
      }
    }
  }
</script>

<style lang="stylus">
.setting
  &_list
    margin-bottom 10px
    background-color #fff
  &_user
    position relative
    display flex
    align-items center
    &-line
      flex 1
    & img
      position absolute
      right 20px
</style>
