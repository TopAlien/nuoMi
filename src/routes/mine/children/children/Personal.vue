<template>
  <div class="personal">
    <GoBack :title='title'/>
    <form @submit.prevent="commit">
      <div class="personal_list">
        <label for="avatar">更换头像</label>
        <input class="personal_list-file" type="file" id='avatar' ref='avatar'>
        <img :src="'http://localhost:3000/images/'+user.avatar" class="personal_list-img"/>
      </div>
      <div class="personal_list">
        <label for="name">昵称</label>
        <input  type="text" id='name' ref="userName" class="personal_list-input" :placeholder="user.name">
      </div>
      <div class="personal_list">
        <label for="sex">性别</label>
        <input type="text" id='sex' ref='sex' class="personal_list-input" :placeholder="user.sex">
      </div>
      <div class="personal_list">
        <label for="birth">出生年月日</label>
        <input type="text" id='birth' ref='birth' class="personal_list-input" :placeholder="user.birth">
      </div>
      <div class="personal_list">
        <label for="city">所在城市</label>
        <input type="text" id='city' ref='city' class="personal_list-input" :placeholder="user.city">
      </div>
      <button class="personal_commit">保存</button>
    </form>
  </div>
</template>
<script>
  import jwt_decode from 'jwt-decode'
  import GoBack from '@/components/GoBack'
  export default{
    name:'personal', //个人资料
    components:{
      GoBack
    },
    data(){
      return{
        user:{}, //用户信息
        title:'个人资料'
      }
    },
    methods:{
      //保存提交
      commit(e){
        const userName = this.$refs.userName.value;
        const userSex = this.$refs.sex.value;
        const userBirth = this.$refs.birth.value;
        const userCity = this.$refs.city.value;
        const avatarFile = this.$refs.avatar.files[0];
        const formData = new FormData();
        formData.append('files',avatarFile);
        //提交头像
        if(typeof avatarFile != 'undefined'){
          this.$axios.post('/mine/upload',formData)
          .then((res)=>{
            //存token
            const { token, success } = res.data;
            if(success === 'ok'){
              window.localStorage.setItem('jwtToken',token);
              const decode = jwt_decode(token);     
              this.$store.dispatch("setUser", decode); //存储信息·
              window.location.reload(); //重新加载
            }else{
              console.log('a')
            }
          })
          .catch((err)=>{
            console.log(err)
          }) 
        } 
        //其他
        if(!this.isEmpty(userName)){
          this.$axios.post('/mine/personal/name',{ userName })
          .then((res)=>{
            //存token
            const { token, success } = res.data;
            if(success === 'ok'){
              window.localStorage.setItem('jwtToken',token);
              const decode = jwt_decode(token);     
              this.$store.dispatch("setUser", decode); //存储信息·
              window.location.reload(); //重新加载
            }else{
              console.log('a')
            }
          })
          .catch((err)=>{
            console.log(err)
          })
        }
        if(!this.isEmpty(userSex)){
          this.$axios.post('/mine/personal/sex',{ userSex })
          .then((res)=>{
            //存token
            const { token, success } = res.data;
            if(success === 'ok'){
              window.localStorage.setItem('jwtToken',token);
              const decode = jwt_decode(token);     
              this.$store.dispatch("setUser", decode); //存储信息·
              window.location.reload(); //重新加载
            }else{
              console.log('a')
            }
          })
          .catch((err)=>{
            console.log(err)
          })
        }
        //
        if(!this.isEmpty(userBirth)){
          this.$axios.post('/mine/personal/birth',{ userBirth })
          .then((res)=>{
            //存token
            const { token, success } = res.data;
            if(success === 'ok'){
              window.localStorage.setItem('jwtToken',token);
              const decode = jwt_decode(token);     
              this.$store.dispatch("setUser", decode); //存储信息·
              window.location.reload(); //重新加载
            }else{
              console.log('a')
            }
          })
          .catch((err)=>{
            console.log(err)
          })
        }
        //
        if(!this.isEmpty(userCity)){
          this.$axios.post('/mine/personal/city',{ userCity })
          .then((res)=>{
            //存token
            const { token, success } = res.data;
            if(success === 'ok'){
              window.localStorage.setItem('jwtToken',token);
              const decode = jwt_decode(token);     
              this.$store.dispatch("setUser", decode); //存储信息·
              window.location.reload(); //重新加载
            }else{
              console.log('a')
            }
          })
          .catch((err)=>{
            console.log(err)
          })
        }
      },
      isEmpty(value){ 
        //空为 true
        return(
          value === undefined || value === null || 
          (typeof value === 'object' && Object.keys(value).length === 0) || 
          (typeof value === 'string' && value.trim().length === 0)
        );
      }
    },
    created(){
     this.user = this.$store.getters.user
    }
  }
</script>
<style lang="stylus">
.personal
  &_list
    position relative
    display flex
    align-items center
    justify-content space-between
    padding 15px 20px
    border-bottom 1px solid #ccc
    background-color #fff
    &-file
      position absolute
      top 0 
      right 0
      border none
      outline none
      height 100px
      opacity 0 //file 去色
    &-img
      width 80px
      height 80px
      border-radius 50%
      border 1px solid #ccc
    &-input
      position absolute
      top 0 
      right 20px
      text-align right
      border none
      outline none
      height 100%
  &_commit
    position fixed
    bottom 0
    width 100%
    height 45px
    line-height 45px
    color #24c789
    border none
    outline none
    border-top 2px solid #24c789
    border-bottom 2px solid #24c789
</style>

