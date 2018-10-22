<template>
  <div class="personal">
    <GoBack :title='title'/>
    <form @submit.prevent="commit">
      <div class="personal_list">
        <label for="avatar">更换头像</label>
        <input class="personal_list-file" type="file" id='avatar' ref='avatar'>
        <img :src="completionImgUrl(user.avatar)" class="personal_list-img"/>
      </div>
      <div class="personal_list">
        <label for="name">昵称</label>
        <input  type="text" id='name' v-model="userName" class="personal_list-input" :placeholder="user.name">
      </div>
      <div class="personal_list">
        <label for="sex">性别</label>
        <input type="text" id='sex' v-model='userSex' class="personal_list-input" :placeholder="user.sex">
      </div>
      <div class="personal_list">
        <label for="birth">出生年月日</label>
        <input type="text" id='birth' v-model='userBirth' class="personal_list-input" :placeholder="user.birth">
      </div>
      <div class="personal_list">
        <label for="city">所在城市</label>
        <input type="text" id='city' v-model='userCity' class="personal_list-input" :placeholder="user.city">
      </div>
      <button class="personal_commit">保存</button>
    </form>
  </div>
</template>
<script>
  import {completionImgUrl} from '@/utils/utils'
  import jwt_decode from 'jwt-decode'
  import { isEmpty } from '@/utils/utils'
  import GoBack from '@/components/GoBack'
  export default{
    name:'personal', //个人资料
    components:{
      GoBack
    },
    data(){
      return{
        userName:'',
        userSex:'',
        userBirth:'',
        userCity:'',
        title:'个人资料'
      }
    },
    computed:{
      user(){
        return this.$store.getters.user
      },
      completionImgUrl(){
        return completionImgUrl
      }
    },
    methods:{
      //保存提交
      commit(e){
        const avatarFile = this.$refs.avatar.files[0];
        const formData = new FormData();
        const { userName, userSex, userBirth, userCity} = this;
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
        if(!isEmpty(this.userName)){
          this.$axios.post('/mine/personal/name', { userName })
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
        if(!isEmpty(this.userSex)){
          this.$axios.post('/mine/personal/sex', { userSex })
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
        if(!isEmpty(this.userBirth)){
          this.$axios.post('/mine/personal/birth', { userBirth })
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
        if(!isEmpty(this.userCity)){
          this.$axios.post('/mine/personal/city', { userCity })
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
      }
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
    bottom 20px
    left 10%
    width 80%
    height 45px
    line-height 45px
    color #24c789
    text-align center 
    border-radius 20px
    outline none
    border 1px solid #24c789
    background-color #fff
</style>

