<template>
   <div class="member">
     <GoBack :title='title' />
     <div class="member_top">
       <div class="member_top-wrap">
        <div class="member_top-wrap-flex">
          <div>
            <p class="member_top-wrap-title">享专属特权</p>
            <span class="member_top-wrap-name">nuoMi 会员</span>
          </div>
          <i class="member_top-wrap-icon"/>
        </div>
        <p class="member_top-wrap-describe">开通会员立享nuoMi超值优惠</p>
       </div>
     </div> 
     <ul class="member_price" @click='togglePrice'>
       <li class="member_price-item activePrice" value='248'>
         <p class="member_price-item-title">年卡会员</p>
         <p class="member_price-item-money">¥ 248</p>
         <p class="member_price-item-num">折合 ¥0.67 /天</p>
       </li>
       <li class="member_price-item" value='68'>
         <p class="member_price-item-title">季卡会员</p>
         <p class="member_price-item-money">¥ 68</p>
         <p class="member_price-item-num">折合 ¥0.75 /天</p>
       </li>
       <li class="member_price-item" value='25'>
         <p class="member_price-item-title">月卡会员</p>
         <p class="member_price-item-money">¥ 25</p>
         <p class="member_price-item-num">折合 ¥0.83 /天</p>
       </li>
     </ul>
     <!-- 默认隐藏 -->
     <div  class="member_agree" v-if='isOpen'>
       <div class="member_agree-wrap" @click='toggleAgree'>
        <h3>nuoMi会员协议</h3>
        <div class="member_agree-wrap-agreement"> 
            非常感谢您注册使用nuoMi产品，为让您更好地使用Keep提供的产品和服务，请您务必审慎阅读、充分理解《nuoMi用户协议》（以下称“用户协议”或“本协议”）各条款内容，特别是免除或者限制责任的条款，并选择接受或不接受。
        </div>
         <p class="member_agree-wrap-agree">我已经阅读并同意该协议</p>
         <p class="member_agree-wrap-noagree">不同意</p>
       </div>
     </div>
     <div class="member_details">
       <h3 class="member_details-title">会员平均每年可省 ¥3736</h3>
       <ul class="member_details-wrap">
         <li class="member_details-wrap-item">
           <div class="member_details-wrap-item-text">
             <p>专享免费智能训练计划</p>
             <p class="member_details-wrap-item-text-title">为你量身定制,练出好身材</p>
           </div>
           <span class="member_details-wrap-item-money">¥ 1176</span>
         </li>
         <li class="member_details-wrap-item">
           <div class="member_details-wrap-item-text">
             <p>课程精讲免费看</p>
             <p class="member_details-wrap-item-text-title">70+ 课程随意看</p>
           </div>
           <span class="member_details-wrap-item-money">¥ 1000</span>
         </li>
         <li class="member_details-wrap-item">
           <div class="member_details-wrap-item-text">
             <p>专优选热门课程专项优惠</p>
             <p class="member_details-wrap-item-text-title">每月一张40元代金劵</p>
           </div>
           <span class="member_details-wrap-item-money">¥ 480</span>
         </li>
         <li class="member_details-wrap-item">
           <div class="member_details-wrap-item-text">
             <p>专享免费智能训练计划</p>
             <p class="member_details-wrap-item-text-title">为你量身定制,练出好身材</p>
           </div>
           <span class="member_details-wrap-item-money">¥ 1176</span>
         </li>
         <li class="member_details-wrap-item">
           <div class="member_details-wrap-item-text">
             <p>专享免费智能训练计划</p>
             <p class="member_details-wrap-item-text-title">为你量身定制,练出好身材</p>
           </div>
           <span class="member_details-wrap-item-money">¥ 1176</span>
         </li>
         <li class="member_details-wrap-item last">
           <div class="member_details-wrap-item-text">
             <h4>会员每年平均可省</h4>
           </div>
           <span class="member_details-wrap-item-money">¥ 3736</span>
         </li>
       </ul>
     </div>
     <div class="member_open" @click='opened'>立即开通</div>
   </div>
</template>
<script>
  import GoBack from '@/components/GoBack'

  export default {
    name:'member',
    components:{
      GoBack
    },
    data(){
      return{
        title:'nuoMi 会员',
        price: 248,
        isOpen: false
      }
    },
    methods:{
      togglePrice(e){
        //  取消active class
        for(var i = 0, len = e.target.parentElement.children.length;i<len;i++){
          if(e.target.parentElement.children[i].nodeName == 'LI'){
            e.target.parentElement.children[i].className = 'member_price-item'
          }
        }    
        if(e.target.nodeName != 'LI'){
          this.price = e.target.parentElement.value;
          //  取消active class
          for(var i = 0,len = e.target.parentElement.parentElement.children.length;i<3;i++){
            e.target.parentElement.parentElement.children[i].className = 'member_price-item'
          }
          e.target.parentElement.className = 'member_price-item activePrice'
        }else{
          this.price = e.target.value;
          e.target.className = 'member_price-item activePrice'
        }
      },
      toggleAgree(e){
        if(e.target.innerText == '我已经阅读并同意该协议'){
          const answer = window.confirm(`支付${ this.price }开通！！！！！`);
          if(answer){
              alert(`开通成功`);
          }
        }
        this.isOpen = false;
      },
      opened(){
        this.isOpen = true
      }
    }
  }
</script>
<style lang="stylus">
.member
  background-color #ccc
  &_top
    position relative
    width 100%
    height 200px
    background-color #000
    &-wrap
      position absolute
      width 90%
      height 160px  
      left 5%
      bottom -30px
      padding 30px 15px
      background-color #222
      border-radius 5px
      box-sizing border-box
      color #fff
      &-flex
        display flex
        align-items center
        justify-content space-between
      &-title
        color rgb(255,183,106)
        font-size 20px
        font-weight bold
      &-name
        display inline-block
        font-size 18px
        margin-top 10px
      &-icon
        display inline-block
        width 50px
        height 50px
        background transparent url('../../../assets/images/member.svg') 0 0 / 50px 50px no-repeat
      &-describe
        font-size 12px
        margin-top 55px
  &_price
    display flex
    justify-content space-between
    padding 50px 15px 20px
    background-color #fff
    font-weight 200
    margin-bottom 15px
    &-item
      height 80px
      width 113px
      padding 10px
      font-size 14px
      box-sizing border-box
      background-color rgb(194, 207, 210)
      border-radius 5px
      &-title
        margin-bottom 5px
      &-money
        color red
        font-size 18px
      &-num
        font-size 10px
        margin-top 15px
    &-item.activePrice
      padding 8px
      background-color #fff4c1
      border 2px solid #ffb76a
  &_details
    margin 15px 0
    padding-bottom 40px
    background-color #fff
    &-title
      height 70px
      line-height 70px
      text-align center
    &-wrap
      padding 0 15px
      &-item
        display flex
        height 40px
        align-items center
        justify-content space-between
        padding-bottom 10px
        border-bottom 1px solid #ccc
        margin-bottom 5px
        &-text
          &-title
            font-size 12px
            margin-top 8px
            color #777
            font-weight 200
        &.last
          color red
  &_agree
    position fixed
    top 100px
    left 10%
    width 300px
    background-color #FFF
    border-radius 5px
    text-align center
    &-wrap
      & h3
        margin-top 30px
      & p
        width 250px
        height 50px
        line-height 50px
      &-agreement
        margin-top 30px
        padding 0 20px
        font-size 12px
        height 100px
        line-height 1.5em
        overflow-y scroll
      &-agree
        margin 20px auto 0
        background-color #24c789
        border-radius 40px
        color #fff
      &-noagree
        margin 0 auto
        font-weight 200
  &_open
    position fixed
    bottom 0
    height 50px
    width 100%
    line-height 50px
    text-align center
    color #ffb76a
    background-color #222
    z-index 999
</style>
