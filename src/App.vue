<template>
  <div id="App">
    <ul class="tab" v-if='showBottomTab'>
      <li class="tab_item">
        <router-link to='/sport'>
          <i class="tab_item-icon tab_item-icon-sport" />
          运动
        </router-link>
      </li>
      <li class="tab_item">
        <router-link to='/discover'>
          <i class="tab_item-icon tab_item-icon-discover" />
          发现
        </router-link>
      </li>
      <li class="tab_item">
        <router-link to='/community'>
          <i class="tab_item-icon tab_item-icon-community" />
          社区
        </router-link>
      </li>
      <li class="tab_item">
        <router-link to='/mine'>
          <i class="tab_item-icon tab_item-icon-mine" />
          我
        </router-link>
      </li>
    </ul>
    <div class="wrapper" v-if='showBottomTab'>
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>
    <div v-else>   
      <keep-alive>
        <router-view /> 
      </keep-alive>   
    </div>
  </div>
</template>

<script>
import jwt_decode from 'jwt-decode'

export default {
  name: 'App',
  computed:{
    showBottomTab(){
      const show = this.$route.name === 'sport' || this.$route.name === 'discover' || this.$route.name === 'community' || this.$route.name === 'mine';
      return show ? true : false
    }
  },
  methods:{
    isEmpty(value){ 
      return(
        value === undefined || value === null || 
        (typeof value === 'object' && Object.keys(value).length === 0) || 
        (typeof value === 'string' && value.trim().length === 0)
      );
    }
  },
  created(){
    if(localStorage.jwtToken){
       const decode = jwt_decode(localStorage.jwtToken);  //解析token
       //过期 时间
       const currentTime = Date.now() / 1000;
       if(decode.exp < currentTime){
          //过期了
          this.$store.dispatch("setIsAuthenticated", false); //state true false
          this.$store.dispatch("setUser", {});
          this.$router.push('/login');
       }else{
          //未过期
          //Authorization
          this.$store.dispatch("setIsAuthenticated", !this.isEmpty(decode)); //state true false
          this.$store.dispatch("setUser", decode); //存储信息·
       } 
    }
  }
}
</script>

<style lang='stylus'>
#App
  background-color rgb(250, 250, 250)
  .tab
    position fixed
    display flex
    width 100%
    height 50px
    bottom 0
    justify-content space-around
    align-items center
    font-size 14px
    background-color #fff
    z-index 999
    &_item
      &-icon 
        display block
        width 100%
        height 22px
        margin-bottom 3px
      &-icon-sport
        background transparent url('./assets/images/tabMenu/sport.svg') 50% 100% / 22px 22px no-repeat
      &-icon-discover
        background transparent url('./assets/images/tabMenu/discover.svg') 50% 100% / 22px 22px no-repeat
      &-icon-community
        background transparent url('./assets/images/tabMenu/community.svg') 50% 100% / 22px 22px no-repeat
      &-icon-mine
        background transparent url('./assets/images/tabMenu/mine.svg') 50% 100% / 22px 22px no-repeat
    .active
      color #28004d
      .tab_item-icon-sport
        background transparent url('./assets/images/tabMenu/sport-o.svg') 50% 100% / 22px 22px no-repeat
    .active
      .tab_item-icon-discover
        background transparent url('./assets/images/tabMenu/discover-o.svg') 50% 100% / 22px 22px no-repeat
    .active
      .tab_item-icon-community
        background transparent url('./assets/images/tabMenu/community-o.svg') 50% 100% / 22px 22px no-repeat
    .active  
      .tab_item-icon-mine
        background transparent url('./assets/images/tabMenu/mine-o.svg') 50% 100% / 22px 22px no-repeat
  .wrapper
    padding-bottom 60px
</style>
