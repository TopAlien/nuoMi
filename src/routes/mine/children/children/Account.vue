<template>
  <div class="account">
    <GoBack :title='title'/>
    <p>你使用邮箱号登录 nuoMi</p>
    <div class="account_email">
      <p class="account_email-title">邮箱号  {{ user.email }}</p>
      <i class="account_email-btn">修改密码</i>
    </div>
    <p>第三方绑定账号</p>
    <div>
      <ThirdParty v-for='item in thirdata' :key='item.id' :title="item.title" :isThird='item.isThird'/>
    </div>
    <p>绑定第三方后可直接登录 nuoMi</p>
    <div class="account_logOut" @click='logOut'>退出</div>
  </div>
</template>
// 账号管理和绑定
<script>
  import ThirdParty from '@/components/ThirdParty'
  import GoBack from '@/components/GoBack'

  export default{
    name: 'account',
    components:{
      ThirdParty,
      GoBack
    },
    data(){
      return{
        title:'账号管和绑定',
        user:{}, //用户信息
        thirdata:[
          {
            id: 0,
            title: '邮箱',
            isThird: true
          },
          {
            id: 1,
            title: '微博',
            isThird: false
          },
          {
            id: 2,
            title: 'QQ',
            isThird: false
          },
          {
            id: 3,
            title: 'gitHub',
            isThird: true
          }
        ]
      }
    },
    methods:{
      logOut(){
        //删除token
        localStorage.removeItem("jwtToken");
        //删除请求头 --- 删除授权
        this.$store.dispatch("setIsAuthenticated",false);
        this.$store.dispatch("setUser",{});
        this.$router.push('/login');
      }
    },
    created(){
     this.user = this.$store.getters.user
    }
  }
</script>
<style lang="stylus">
.account
  & p
    font-size 14px
    font-weight 200
    padding 10px 20px
  &_email
    height 50px
    align-items center
    display flex
    justify-content space-between
    background-color #fff
    &-btn
      color #fff
      font-size 12px
      font-weight 200 
      padding 10px
      margin-right 20px
      border-radius 20px
      background-color #24c789
  &_logOut
    position fixed
    left 10%
    bottom 20px
    width 80%
    height 45px
    line-height 45px
    color #24c789
    text-align center 
    border-radius 20px
    border 1px solid #24c789
    background-color #fff
</style>
