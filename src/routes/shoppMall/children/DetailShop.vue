<template>
  <div class="detailShop"
    @touchend='touchEnd' 
    @touchstart='touchStart'
  >
    <GoBack :title='title' :class="{'detailShop_goback':isScroll}"/>
    <div class="detailShop_carouse">
      <Carousel :listImg='listImg'/>
    </div>
    <div class="detailShop_detailed">
      <div class="detailShop_detailed-item">
        <span class="detailShop_detailed-item-money">¥{{ money }}</span>
        <span class="detailShop_detailed-item-sold">已售 {{ soldNum }}</span>
      </div>
      <div class="detailShop_detailed-text">
        <p class="detailShop_detailed-text-title">{{ text }}</p>
        <span class="detailShop_detailed-text-describe">{{ describe }}</span>
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
    <router-link to="member">
      <div class="detailShop_member">
        <i class="detailShop_member-member"/>
        <p class="detailShop_member-title">会员免邮费,每月再送 ¥50 元代金券</p>
        <span class="detailShop_member-btn">开通会员</span>
      </div>
    </router-link>
    <div class="detailShop_address">
      <div class="detailShop_link">
        <p class="detailShop_link-title">配送地址</p>
        <span class="detailShop_link-describe">内蒙古自治区呼伦贝尔市海拉尔区</span>
        <i class="detailShop_link-icon" />
      </div>
    </div>
    <div class="detailShop_loadMore">
      <div class="detailShop_loadMore-title">
        <i class="detailShop_loadMore-title-icon"/>
        <p class="detailShop_loadMore-title-title">上拉查看图文详情</p>
      </div>
      <div class="detailShop_loadMore-content" v-show='isLoad'>
        <h5>我没有图文啊</h5>
        <h5>只有写文字了</h5>
        <h5>我没有图文啊</h5>
        <h5>只有写文字了</h5>
        <h5>我没有图文啊</h5>
        <h5>只有写文字了</h5>
      </div>
    </div>
    <ul class="detailShop_tab">
      <li class="detailShop_tab-item">
        <i class="detailShop_tab-item-service" />
        <span>客服</span>
      </li>
      <li class="detailShop_tab-item">
        <router-link to='cart'>
          <i class="detailShop_tab-item-cart"/>
          <span>购物车</span>
        </router-link>
      </li>
      <li class="detailShop_tab-addCart" @click='isAddCart = true'>
        加入购物车
      </li>
      <li class="detailShop_tab-now">
        立即购买
      </li>
    </ul>
    <div class="detailShop_addCart" v-show='isAddCart'>
     <div class="detailShop_addCart-top">
        <div class="detailShop_addCart-top-img">
          <img :src="detialImg" alt="">
        </div>
        <div class="detailShop_addCart-top-detail">
          <p class="detailShop_addCart-top-detail-money">¥{{ money }}</p>
          <p class="detailShop_addCart-top-detail-quantity">已选择 {{ quantity }} 件</p>
        </div>
        <i class="detailShop_addCart-top-close" @click='close'></i>
     </div>
     <div class="detailShop_addCart-num">
       <span class="detailShop_addCart-num-title">购买数量</span>
      <div>
        <i class="detailShop_addCart-num-subtract"    @click='subtract'>-</i>
        <span class="detailShop_addCart-num-quantity">{{ quantity }}</span>
        <i class="detailShop_addCart-num-add" @click='add'>+</i>
      </div>
     </div>
     <div class="detailShop_addCart-commit" @click='commit'>
       确认
     </div>
    </div>
  </div>
</template>
<script>
  import { isEmpty, completionImgUrl } from '@/utils/utils'
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
        isLoad: false, //加载图文,也是加载数据的开关
        lastTime: 0,
        nowTime: 0,
        isService: false,
        money: 0,
        soldNum:0,
        text:'',
        describe:'',
        listImg:[],
        detialImg:'',
        isAddCart: false, //购物
        quantity: 1, //购买数量,
        lastCart:null,
        flag: true
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
      },
      //  loadMore
      touchStart(){
        this.lastTime = +new Date();
      },
      touchEnd(){
        this.nowTime = + new Date();
        if(this.nowTime - this.lastTime > 30){
          this.isLoad = true
        }
      },
      fetchDate(){
        //为空是true
        this.listImg=[];
        if(!isEmpty(this.$route.query)){
          const gid = this.$route.query.gid;
          const text = this.$route.query.text;
         this.$axios.get(`/discover/getShop?gid=${ gid }&text=${ text }`)
         .then((res)=>{
           const { describe, detialImg,money, soldNum, text} = res.data[0];
           this.describe = describe;
           this.money = money;
           this.soldNum = soldNum;
           this.text = text;
           this.detialImg =  completionImgUrl(detialImg.split(',')[0]);
           detialImg.split(',').forEach(item => {
               this.listImg.push({ 'url':completionImgUrl(item) });
           });
         })
        }
      },
      close(){
        this.quantity = 1;
        this.isAddCart = false;
      },
      subtract(){
        if(this.quantity <=1 ){
          this.quantity = 1;
          this.isAddCart = false;
        }else{
          this.quantity -= 1;
        }
      },
      add(){
        this.quantity += 1;
      },
      commit(){
        //存入storage中 图片，名字，价格, 个数
        const userCart = {
          text: this.text,
          quantity: this.quantity,
          url: this.detialImg,
          money: this.money
        };
        //都存起来
        if(sessionStorage.userCart){
          this.lastCart = sessionStorage.userCart;
          //有无重复的
          let userCartArr = sessionStorage.userCart.split(';');
          let len = userCartArr.length;
          let count = 1;
          let norepeatList = ''; //不重复项
          for (let i = 0; i < len; i++) {
            let current = JSON.parse(userCartArr[i]);
            if(current.text == userCart.text){
              // 重复项目
              count = current.quantity + this.quantity;
            }else{
              // 不重复项目
              norepeatList = norepeatList + JSON.stringify(current)+';';
              count = this.quantity;
            }
          }
          //循环结束
          const newCart = {
            text: userCart.text,
            quantity: count,
            url: userCart.url,
            money: userCart.money
          };
          sessionStorage.setItem('userCart', norepeatList + JSON.stringify(newCart));
          // end
        }else{
          sessionStorage.setItem('userCart',JSON.stringify(userCart));  
        }
        alert('添加成功');
        this.quantity = 1;
        this.isAddCart = false;
      }
    },
    watch:{
      '$route': 'fetchDate'
    },
    created(){
      this.isAddCart = false
      window.addEventListener('scroll', this.scroll ,false);
      this.fetchDate();
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
    position fixed
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

  &_loadMore
    &-title
      display flex
      justify-content center
      &-title
        height 40px
        line-height 40px
        text-align center
        color #777
        font-weight 200
      &-icon
        display inline-block
        width 20px
        height 40px
        margin-right 10px
        background transparent url('../../../assets/images/tArrow.svg') 0 40% / 20px 20px no-repeat
    &-content
      margin-top 30px
      text-align center
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
  &_addCart
    position fixed
    bottom 0
    width 100%
    z-index 999
    background-color #fff
    &-top
      display flex
      padding-bottom 50px
      border-bottom 1px solid #ccc
      &-img
        width 100px
        height 100px
        margin -20px 15px 0
        border 2px solid #000
        & img
          width 100%
          height 100%
      &-detail
        margin-top 25px
        flex 1
        &-money
          margin-bottom 5px
        &-quantity
          color #24c789
      &-close
        display inline-block
        padding 10px
        width 20px
        height 20px
        margin-top 20px
        background transparent url('../../../assets/images/close.svg') 0 0 / 20px 20px no-repeat
    &-num
      display flex
      justify-content space-between
      margin-top 50px
      &-subtract
        padding 3px 8px
        color #fff
        background-color #ccc
        border-radius 50%
      &-quantity
        padding 0 20px
      &-add
        padding 3px 6px
        color #fff
        background-color #ccc
        border-radius 50%
        margin-right 20px
    &-commit
      height 50px
      line-height 50px
      color #fff
      text-align center 
      margin-top 100px
      background-color #24c789
</style>


