<template>
  <div class="register">
    <h2 class="register_title">注册nuoMi账号</h2>
    <form @submit.prevent='submit' class="register_form">
      <div class="register_form-list">
        <label for="user">用户名</label>
        <input v-model.lazy="user.name" type="text" id="user" placeholder="请输入用户名" required autofocus>
      </div>
      <div class="register_form-list">
        <label for="email">邮箱</label>
        <input v-model.lazy="user.email" type="email" id="email" placeholder="请输入邮箱" required autofocus>
      </div>
      <div class="register_form-list">
        <label for="password">密码</label>
        <input v-model.lazy="user.pass" type="password" id="password" placeholder="请输入密码" required>
      </div>
      <div class="register_form-list">
        <label for="repassword">确认密码</label>
        <input v-model.lazy="user.repass" type="password" id="repassword" placeholder="请确认密码" required>
      </div>
      <router-link to='login' class="register_form-loginBtn">登录 nuoMi 账号</router-link>
      <button class="register_form-registerBtn">注册</button>
    </form>
    <div class="register_icons">
      <i class="register_icons-icon register_icons-weixin"/>
      <i class="register_icons-icon register_icons-qq"/>
      <i class="register_icons-icon register_icons-weibo"/>
    </div>
  </div>
</template>
// 注册
<script>
  export default{
    name: 'login',
    data(){
     return{
        user:{
          name:'',
          email:'',
          repass:'',
          pass:''
        }
     }
    },
    methods:{
      submit(){
        this.$axios.post('/register',this.user).then((res)=>{
          //console.log(res.data) //返回组册信息
          this.$store.dispatch("setUser", res.data); //存储信息·
          this.$router.push('/login');
        }).catch((err)=>{
          console.log(err)
        })
      }
    }
  }
</script>
<style lang="stylus">
// #24c789
.register
  overflow hidden
  margin-top -50px
  padding 35px 0 0
  color #fff
  background-color rgb(95, 84, 92)
  // overflow hidden
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
        font-size 16px
        background transparent
        flex 1
        color #ccc
        border none 
        outline none
      & label
        display block

    &-registerBtn
      width 100%
      height 50px
      border-radius 30px
      color #ffffff
      background-color #24c789
      margin 30px 0 40px
      border none 
      outline none
    &-loginBtn
      float right
      padding 20px 0 0

  &_icons
    height 74px
    width 200px
    margin 0 auto 0
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

