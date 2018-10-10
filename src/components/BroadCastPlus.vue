<template>
  <Basket class="castPlus">
    <div class="castPlus-link">
      <span class="castPlus-link-title">{{ head }}</span>
      <i class="castPlus-link-icon"/>
    </div>
    <div class="castPlus_wrap" >
      <div class="castPlus_wrap-list" :style="{width: arrInfo.length * 120+'px'}">
        <div class="castPlus_wrap-list-item" v-for="item in arrInfo" :key='item.id' >
          <img :src="item.url" alt="" :style="{width:'120px',height:'120px'}">
          <p class="castPlus_wrap-list-item-title">{{ item.title }}</p>
          <span class="castPlus_wrap-list-item-num">{{ item.num }}kcal</span>
        </div>
      </div>
    </div>
    <p class="castPlus_describe">
      {{ describe }}
    </p>
  </Basket>
</template>
/**
  arrInfo:[
    {
      id: 0,
      head:'不吃肉补蛋白系列''  ----第一个对象必传
      url:'../assets/images/action5.jpg'
      title:'甘蓝炒豆角',
      num: 171,
      describe: '大豆制品(豆腐 。豆干 。的主)要阿斯'  ----第一个对象必传
    }
    ...
  ]
 */
<script>
  import Basket from './Basket'
  export default {
    name:'puls',
    components:{
      Basket
    },
    props:{
      arrInfo:{
        type:Array,
        required: true
      }
    },
    data(){
      return{
        head:'',
        describe:''
      }
    },
    created(){
      this.head = this.arrInfo[0].head;
      this.describe = this.arrInfo[0].describe;
    }
  }
</script>
<style lang="stylus">
.castPlus
  &-link
    display flex
    height 30px
    justify-content space-between
    align-items center
    &-icon
      display inline-block
      width 20px
      height 30px
      background transparent url('../assets/images/lArrow.svg') 100% 50% / 20px 20px no-repeat
  &_wrap
    width 100%
    margin-top 10px
    overflow-x scroll
    border-bottom 1px solid #ccc
    &-list
      display flex
      padding-bottom 10px
      &-item
        padding-right 8px
        & img
          width 120px
          height 120px
        &:last-child
          padding-right 0
        &-title
          margin 10px 0 5px
        &-num
          display inline-block
          margin-bottom 15px
  &_describe
    margin-top 15px
        
</style>
