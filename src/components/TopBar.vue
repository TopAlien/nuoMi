<template>
  <div class="topBar">
    <div class="topBar_title">{{ options.title }}</div>
    <div class="icons">
      <router-link to='search'>
        <i v-if='options.search' :class="searchIcon"/>
      </router-link>
      <router-link to='camera'>
        <i v-if='options.camera' :class="cameraIcon"/>
      </router-link>
      <router-link to='scan'>
        <i v-if='options.scan' :class="scanIcon"/>
      </router-link>
      <router-link to='info'>
        <i v-if='options.info' :class="infoIcon" />
      </router-link>
      <router-link to='setting'>
        <i v-if='options.setting' :class="settingIcon" />
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
    display flex
    width 100%
    height 50px
    justify-content space-between
    align-items center
    background-color #fff
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
