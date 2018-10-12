<template>
  <div class="detailShop">
    <GoBack :title='title' :class="{'detailShop_goback':isScroll}"/>
    <div class="detailShop_carouse">
      <Carousel :listImg='listImg'/>
    </div>
    <div class="detailShop_detailed">
      <div class="detailShop_detailed-item">
        <span class="detailShop_detailed-item-money">¥199</span>
        <span class="detailShop_detailed-item-sold">已售 5056</span>
      </div>
      <div class="detailShop_detailed-text">
        <p class="detailShop_detailed-text-title">Keep 智能体脂秤</p>
        <span class="detailShop_detailed-text-describe">多才好看,wi-fi 智连让测量更简单 !</span>
      </div>
    </div>
    <div class="detailShop_link">
      <p class="detailShop_link-title">新人礼</p>
      <span class="detailShop_link-describe">首单惊喜,必备神器抵至19元</span>
      <i class="detailShop_link-icon" />
    </div>
    <div class="detailShop_explain" @click='servicePopup'>
      <div>
        <i class="detailShop_explain-checkMark" />
        <span class="detailShop_explain-title">满100元免邮费</span>
      </div>
      <div>
        <i class="detailShop_explain-checkMark"/>
        <span class="detailShop_explain-title">支持七天无理由退货</span>
      </div>
      <i class="detailShop_explain-exclamation" />
    </div>
    <!-- 服务说明 -->
    <div class="detailShop_servicePopup" v-show='isService'>
      <div class="detailShop_servicePopup-title">
        服务说明
      </div>
      <div class="detailShop_servicePopup-area">
        <div class="detailShop_servicePopup-area">
          <i class="detailShop_servicePopup-area-icon"/><span>满100免邮费</span>
          <p>单臂定金啊啊是定位技术地方额我日哦是的烦恼都十分难看</p>
        </div>
        <div class="detailShop_servicePopup-area">
          <i class="detailShop_servicePopup-area-icon"/><span>满100免邮费</span>
          <p>单臂定金啊啊是定位技术地方额我日哦是的烦恼都十分难看</p>
        </div>  
      </div>
      <div class="detailShop_servicePopup-know" @click="serviceNone">
        我知道了
      </div>
    </div>
    <div class="detailShop_member">
      <i class="detailShop_member-member"/>
      <p class="detailShop_member-title">会员免邮费,每月再送 ¥50 元代金券</p>
      <span class="detailShop_member-btn">开通会员</span>
    </div>
    <div class="detailShop_address">
      <div class="detailShop_link">
        <p class="detailShop_link-title">配送地址</p>
        <span class="detailShop_link-describe">内蒙古自治区呼伦贝尔市海拉尔区</span>
        <i class="detailShop_link-icon" />
      </div>
    </div>
    <div>
      上拉查看图文详情
    </div>
    <ul class="detailShop_tab">
      <li class="detailShop_tab-item">
        <i class="detailShop_tab-item-service" />
        <span>客服</span>
      </li>
      <li class="detailShop_tab-item">
        <i class="detailShop_tab-item-cart"/>
        <span>购物车</span>
      </li>
      <li class="detailShop_tab-addCart">
        加入购物车
      </li>
      <li class="detailShop_tab-now">
        立即购买
      </li>
    </ul>
  </div>
</template>
<script>
  import GoBack from '@/components/GoBack'
  import Carousel from '@/components/Carousel'

  export default {
    name:'detailShop',
    components:{
      GoBack,
      Carousel
    },
    data(){
      return{
        title:'商品详情',
        isScroll: true,
        listImg:[   
          {
            url:'../../../static/1538215096151_750x340.jpg'
          },
          {
            url:'../../../static/1538980672664_750x340.jpg'
          },
          {
            url:'../../../static/1538966114813_750x340.jpg'
          },
          {
            url:'../../../static/1538973105079_750x340.jpg'
          }
        ],
        isService: false
      }
    },
    methods:{
      scroll(){
        let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        if(scrollTop <= 30){
          this.isScroll = true
        }else{
          this.isScroll = false
        }
      },
      //服务说明
      servicePopup(){
        return this.isService = true
      },
      serviceNone(){
        return this.isService = false
      }
    },
    created(){
      window.addEventListener('scroll', this.scroll ,false);
    },
    beforeDestroy(){
      removeEventListener('scroll',this.scroll,false);
    }
  }
</script>
<style lang="stylus">
.detailShop
  padding-bottom 50px
  position relative
  // 弹窗
  &_servicePopup
    position absolute
    width 300px
    top 25%
    left 10%
    background-color #fff
    border-radius 5px
    z-index 999
    &-title
      height 50px
      line-height 50px
      text-align center
    &-area
      margin 20px 15px
      & p
        margin-top 10px
        font-size 12px
      &-icon
        display inline-block
        width 10px
        height 10px
        margin-right 10px
        background transparent url('../../../assets/images/checkMark.svg') 0 0 / 10px 10px no-repeat
    &-know
      width 100%
      height 50px
      line-height 50px
      color #fff
      text-align center
      background-color #24c789
      border-radius 0 0 5px 5px
  .swiper-container
    width 100%
    height 22rem
    & .swiper-wrapper 
    width 100%
    height 100%
      & .swiper-slide
        background-position center
        background-size cover
        width 100%
        height 100%
        & img
          width 100%
          height 100%
  &_detailed
    background-color #fff
    &-item
      height 50px
      display flex
      align-items center
      justify-content space-between
      padding 0 15px
      &-money
        color red
      &-sold
        padding 2px 8px
        font-size 12px
        font-weight 200
        background-color #ccc
        border-radius 10px
    &-text
      height 50px
      line-height 25px
      margin-bottom 10px
      padding 0 15px 
      &-title
        color #000
      &-describe
        color #ccc
        font-size 12px
        font-weight 2000
  &_link
    display flex
    font-size 14px
    font-weight 200
    padding 8px 15px 
    align-items center
    border-top 1px solid #cccccc
    border-bottom 1px solid #cccccc
    &-describe
      color #666
      flex 1
      margin-left 10px
    &-icon
      display inline-block
      width 20px
      height 30px
      background transparent url('../../../assets/images/lArrow.svg') 50% 50% / 20px 20px no-repeat
  &_address
    margin 10px 0
  &_explain
    display flex
    font-size 12px
    font-weight 200
    height 40px
    align-items center
    justify-content space-between
    padding 0 15px
    &-checkMark
      display inline-block
      width 15px
      height 15px
      vertical-align bottom
      background transparent url('../../../assets/images/checkMark.svg') 100% 50% / 15px 15px no-repeat
    &-title
      margin-right 40px
    &-exclamation
      display inline-block
      width 15px
      height 20px
      background transparent url('../../../assets/images/exclamation.svg') 100% 50% / 15px 15px no-repeat
  &_member
    display flex
    font-size 12px
    font-weight 200
    height 40px
    align-items center
    padding 0 15px
    justify-content space-between
    background-color rgb(249,201,107)
    &-member
      display inline-block
      width 25px
      height 25px
      background transparent url('../../../assets/images/member.svg') 0 0 / 25px 25px no-repeat
    &-title
      text-align center
    &-btn
      padding 5px 10px
      color rgb(255,183,106)
      background-color #111
      border-radius 20px
  &_tab
    width 100%
    position fixed
    bottom 0
    display flex
    height 50px
    align-items center
    text-align center
    z-index 999
    font-size 16px
    background-color #fff
    border-top 1px solid #444
    color #ff
    font-weight 200
    &-item
      color #333
      width 60px
      font-size 12px
      &-service
        display block
        width 60px
        height 20px
        margin-bottom 5px
        background transparent url('../../../assets/images/service.svg') 50% 100% / 20px 20px no-repeat
      &-cart
        display block
        width 60px
        height 20px
        margin-bottom 5px
        background transparent url('../../../assets/images/cart-o.svg') 50% 100% / 20px 20px no-repeat
    &-addCart
      height 100%
      flex 1
      line-height 50px
      background-color #5f545c
    &-now
      height 100%
      flex 1
      line-height 50px
      background-color #24c789
  &_goback
    &.goBack
      background transparent
    .goBack_title
      opacity 0
    .goBack_icon 
      transition opacity .3s
      background-color #222
      border-radius 50%
      opacity .5
  &_carouse
    margin-top -50px
    height 350px
</style>


