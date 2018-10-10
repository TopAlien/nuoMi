<template>
  <div class="login">
    <h1 class="login_title">登录nuoMi</h1>
    <form @submit.prevent='submit' class="login_form">
      <div class="login_form-list">
        <label for="email">邮箱</label>
        <input v-model.lazy="user.email" type="email" id="email" placeholder="请输入邮箱" required autofocus>
      </div>
      <div class="login_form-list">
        <label for="password">密码</label>
        <input  v-model.lazy="user.pass" type="password" id="password" placeholder="请输入密码" required>
      </div>
      <router-link to='register' class="login_form-registerBtn">注册 nuoMi 账号</router-link>
      <button class="login_form-loginBtn">登录</button>
    </form>
    <div class="login_icons">
      <i class="login_icons-icon login_icons-weixin"/>
      <i class="login_icons-icon login_icons-qq"/>
      <i class="login_icons-icon login_icons-weibo"/>
    </div>
  </div>
</template>
// deng lu
<script>
  import jwt_decode from 'jwt-decode'
  export default{
    name: 'login',
    data(){
     return{
        user:{
          email:'',
          pass:''
        }
     }
    },
    methods:{
      submit(){
        this.$axios.post('/login',this.user)
        .then((res)=>{
          // 设置请求头 utils http -axios
          //存token
          const { token, success } = res.data;
          if(success === 'ok'){
            window.localStorage.setItem('jwtToken',token);
            //解析token 过期时间 jwt-decode
            const decode = jwt_decode(token);
            //!this.isEmpty(decode) 是否有值
            this.$store.dispatch("setIsAuthenticated", !this.isEmpty(decode)); //state true false
            this.$store.dispatch("setUser", decode); //存储信息·
            //跳转
            this.$router.push('/sport');
          }else{
            alert('请确认后重新登录')
          }
        }).catch((err)=>{
          console.log(err) //ti xing
        })
    },
    // 是否为空  空为 true
    isEmpty(value){ 
      return(
        value === undefined || value === null || 
        (typeof value === 'object' && Object.keys(value).length === 0) || 
        (typeof value === 'string' && value.trim().length === 0)
      );
    }
  }
}
</script>
<style lang="stylus">
// #24c789
.login
  overflow hidden
  margin-top -50px
  padding 80px 0 87px
  color #fff
  background-color rgb(95, 84, 92)
  &_title
    text-align center
  &_form
    padding-top 30px
    width 80%
    margin 0 auto
    &-list
      margin-top 20px
      border-bottom 1px solid #ccc
      & input
        height 50px
        width 100%
        font-size 16px
        color #ccc
        background transparent
        flex 1
        border none 
        outline none
      & label
        display block

    &-loginBtn
      width 100%
      height 50px
      border-radius 30px
      color #ffffff
      background-color #24c789
      margin 30px 0 40px
      border none 
      outline none
    &-registerBtn
      float right
      padding 20px 0 0
  &_icons
    height 60px
    width 200px
    margin 10px auto 0
    padding-bottom 38px
    &-icon
      display inline-block
      width 60px
      height 60px
    &-weixin
      background transparent url("../../assets/images/weixin.png") 50% 50% / 50px 50px no-repeat
    &-qq
      background transparent url("../../assets/images/qq.png") 50% 50% / 50px 50px no-repeat
    &-weibo
      background transparent url("../../assets/images/weibo.png") 50% 50% / 50px 50px no-repeat
</style>
