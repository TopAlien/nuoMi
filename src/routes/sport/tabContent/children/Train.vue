<template>
  <div class="train">
    <GoBack :title='title' />
    <div class="train_wrapper">
      <div class="train_wrapper-list" v-for='item in dataArr' :key='item.id'>
        <img class="train_wrapper-list-img" :src="item.url" alt="">
        <div class="train_wrapper-list-cover">
          <p class="train_wrapper-list-cover-title">{{ item.title }}</p>
          <span class="train_wrapper-list-cover-num">{{ item.num }} 人已参加</span>
        </div>
      </div>
    </div>
  </div>
</template>
/**
 * @data[
    {
      id:0,
      url:'imgUrl',
      title:'平板支撑',
      num:'435821'
    }
  ]
 *
 */
<script>
  import GoBack from '@/components/GoBack'
  export default {
    name:'train',
    components:{
      GoBack
    },
    data(){
      return{
        title:'动作训练区',
        dataArr:[
          {
            id:0,
            url:'../../../../../static/image/C0041r.jpg',
            title:'平板支撑',
            num: 8372349
          },
          {
            id:1,
            url:'../../../../../static/image/C0126.jpg',
            title:'深蹲',
            num: 8372349
          },
          {
            id:2,
            url:'../../../../../static/image/C0041r.jpg',
            title:'卷腹',
            num: 8372349
          },
          {
            id:3,
            url:'../../../../../static/image/C0148.jpg',
            title:'Burpee',
            num: 8372349
          },
          {
            id:4,
            url:'../../../../../static/image/C0140.jpg',
            title:'臀桥',
            num: 8372349
          },
          {
            id:5,
            url:'../../../../../static/image/C0154.jpg',
            title:'平板支撑',
            num: 8372349
          },
          {
            id:6,
            url:'../../../../../static/image/C0093.jpg',
            title:'跪姿俯卧撑',
            num: 8372349
          },
          {
            id:7,
            url:'../../../../../static/image/C0044r.jpg',
            title:'引体向上',
            num: 8372349
          },
          {
            id:8,
            url:'../../../../../static/image/C0126.jpg',
            title:'靠墙静蹲',
            num: 8372349
          },
          {
            id:9,
            url:'../../../../../static/image/C0115.jpg',
            title:'跳绳',
            num: 8372349
          },
          {
            id:10,
            url:'../../../../../static/image/C0116.jpg',
            title:'高抬腿',
            num: 8379092149
          },
          {
            id:11,
            url:'../../../../../static/image/C0114.jpg',
            title:'开合跳',
            num: 832349
          }
        ]
      }
    }
  }
</script>
<style lang="stylus">
.train
  &_wrapper
    width 90%
    margin 15px auto
    color #fff
    &-list
      position relative
      width 100%
      height 150px
      margin-bottom 10px
      &-img
        width 100%
        height 100%
      &-cover
        position absolute
        top 25px
        left 20px
        &-title
          font-size 22px
          margin-bottom 15px
        &-num
          font-size 12px       
</style>

