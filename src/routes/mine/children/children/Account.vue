<template>
  <div class="account">
    <div class="account_logOut" @click='logOut'>退出</div>
  </div>
</template>
// 账号管理和绑定
<script>
  export default{
    name: 'account',
    methods:{
      logOut(){
        //删除token
        localStorage.removeItem("jwtToken");
        //删除请求头 --- 删除授权
        this.$store.dispatch("setIsAuthenticated",false);
        this.$store.dispatch("setUser",{});
        this.$router.push('/login');
      }
    }
  }
</script>
<style lang="stylus">
.account
  &_logOut
    width 80%
    height 45px
    margin 0 auto
    line-height 45px
    color #24c789
    text-align center 
    border-radius 20px
    border 2px solid #24c789
</style>
