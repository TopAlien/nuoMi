<template>
  <div class="topBar">
    <div class="topBar_title">{{ options.title }}</div>
    <div class="icons">
      <router-link to='search' v-if='options.search'>
        <i  :class="searchIcon"/>
      </router-link>
      <router-link to='camera' v-if='options.camera'>
        <i  :class="cameraIcon"/>
      </router-link>
      <router-link to='scan' v-if='options.scan'>
        <i  :class="scanIcon"/>
      </router-link>
      <router-link to='info' v-if='options.info'>
        <i  :class="infoIcon" />
      </router-link>
      <router-link to='setting' v-if='options.setting'>
        <i  :class="settingIcon" />
      </router-link>
    </div>
  </div>
</template>

/**
 *顶部按钮 ----路径已经固定了
 * options:{
   title:'',
   search:
   scan: 
   ...
 }
 */

<script>
  export default{
    name: 'topBar',
    props:{
      options:{
        type: Object,
        required: true
      }
    },
    computed:{
      searchIcon(){
        return 'topBar_icons topBar_icons-' + this.options.search
      },
      cameraIcon(){
        return 'topBar_icons topBar_icons-' + this.options.camera
      },
      scanIcon(){
        return 'topBar_icons topBar_icons-' + this.options.scan
      },
      infoIcon(){
        return 'topBar_icons topBar_icons-' + this.options.info
      },
      settingIcon(){
        return 'topBar_icons topBar_icons-' + this.options.setting
      }
    }
  }
</script>

<style lang='stylus'>
  .topBar
    position fixed
    top 0
    left 0
    display flex
    width 100%
    height 50px
    justify-content space-between
    align-items center
    background-color #fff
    z-index 999
    &_title
      margin-left 15px
    .icons
      display flex //icon 一行显示
    &_icons
      display block
      width 35px
      height 30px
      &-search  
        background transparent url('../assets/images/topBar/search.svg') 0 50% / 20px 20px no-repeat
      &-camera
        background transparent url('../assets/images/topBar/camera.svg') 0 50% / 20px 20px no-repeat
      &-scan
        background transparent url('../assets/images/topBar/scan.svg') 0 50% / 20px 20px no-repeat
      &-info
        background transparent url('../assets/images/topBar/info.svg') 0 50% / 20px 20px no-repeat
      &-setting
        background transparent url('../assets/images/topBar/setting.svg') 0 50% / 20px 20px no-repeat






</style>
