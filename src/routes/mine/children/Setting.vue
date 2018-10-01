<template>
  <div class="setting">
    <GoBack :title="title"/>
    <div class="setting_list">
      <div class="setting_user">
        <LineLink class="setting_user-line" :options="user" :show='false'/>
        <img src="../../../assets/images/action5.jpg" alt="" :style="{width:'40px',height:'40px',borderRadius:'50%'}">
      </div>
      <LineLink class="setting_user-line" :options="account" :show='false'/>
      <LineLink class="setting_user-line" :options="general" :show='false'/>
      <LineLink class="setting_user-line" :options="risk" :show='false'/>
      <LineLink class="setting_user-line" :options="privacy" :show='false'/>
      <LineLink class="setting_user-line" :options="attesta" :show='false'/>
    </div>
    <div class="setting_list">
      <LineLink class="setting_user-line" :options="train" :show='false'/>
      <LineLink class="setting_user-line" :options="languageSet" :show='false'/>
      <LineLink class="setting_user-line" :options="offlineMap" :show='false'/>
    </div>
    <div class="setting_list">
      <LineLink class="setting_user-line" :options="message" :show='false'/>
      <LineLink class="setting_user-line" :options="authority" :show='false'/>
      <LineLink class="setting_user-line" :options="cache" :show='false'/>
      <LineLink class="setting_user-line" :options="sensor" :show='false'/>
      <LineLink class="setting_user-line" :options="network" :show='false'/>
    </div>
    <div class="setting_list">
      <LineLink class="setting_user-line" :options="inviting" :show='false'/>
      <LineLink class="setting_user-line" :options="help" :show='false'/>
      <LineLink class="setting_user-line" :options="conven" :show='false'/>
      <LineLink class="setting_user-line" :options="standard" :show='false'/>
      <LineLink class="setting_user-line" :options="updata" :show='false'/>
      <LineLink class="setting_user-line" :options="about" :show='false'/>
    </div>
  </div>
</template>

<script>
  import GoBack from '@/components/GoBack'
  import LineLink from '@/components/LineLink'

  export default{
    name:'setting',
    components:{
      GoBack,
      LineLink
    },
    data(){
      return{
        title: '设置',
        user:{
          title: '个人资料',
          url: 'discover'
        },
        account:{
          title:'账号管理和绑定',
          url: 'setting/account'
        },
        general:{
          title:'运动概况',
          url: 'discover'
        },
        risk:{
          title: '运动风险须知',
          url: 'discover'
        },
        privacy:{
          title: '隐私',
          url: 'discover'
        },
        attesta:{
          title: '达人认证',
          url: 'discover'
        },
        train:{
          title: '训练',
          url: 'discover'
        },
        languageSet:{
          title: '语音设置',
          url: 'discover'
        },
        offlineMap:{
          title: '离线地图',
          url: 'discover'
        },
        message:{
          title: '消息通知',
          url: 'discover'
        },
        authority:{
          title: '运动权限设置',
          url: 'discover'
        },
        cache:{
          title: '缓存管理',
          url: 'discover'
        },
        sensor:{
          title: '传感器诊断',
          url: 'discover'
        },
        network:{
          title: '网络诊断',
          url: 'discover'
        },
        inviting:{
          title: '邀请好友',
          url: 'discover'
        },
        help:{
          title: '帮助中心',
          url: 'discover'
        },
        conven:{
          title: '社区公约',
          url: 'discover'
        },
        standard:{
          title: '社区规范',
          url: 'discover'
        },
        updata:{
          title: '检查更新',
          url: 'discover'
        },
        about:{
          title: '关于',
          url: 'discover'
        }
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
