<template>
  <div class="cart">
    <GoBack :title='title'/>
    <div v-if='isShoped'>
      <div class="cart_noCart" >
        <i class="cart_noCart-icon"/>
        <p class="cart_noCart-title">还没有添加任何商品</p>
      </div>
      <FixedShop :shopArr='likeShop' />
      <router-link to='shopp'>
        <p class="cart_findMore">发现更多优选好货</p>
      </router-link>
    </div>
    <div v-else>
     <ul class="cart_detail">
       <li class="cart_detail-item" v-for='(item,index) in userCart' :key='index'>
         <img class="cart_detail-item-img" :src="item.url" alt="" :style="{ width:'100px',height:'100px'}">
          <div>
            <p class="cart_detail-item-text">{{item.text}}</p>
            <span class="cart_detail-item-money">¥{{item.money }}</span>
            <div class="cart-btns">
              <i class="cart_detail-item-subtract" @click="subtract(index,item.quantity)">-</i>
              <span class="cart_detail-item-quantity">{{ item.quantity }}</span>
              <i class="cart_detail-item-add" @click='add(index,item.quantity)'>+</i>
            </div>
          </div>
       </li>
     </ul>
     <div class="cart_total">
       <span class="cart_total-money">总计¥{{ total }}</span>
       <p class="cart_total-commit" @click='commit'>结算</p>
     </div>
   </div>
  </div>
</template>
<script>
  import GoBack from '@/components/GoBack'
  import FixedShop from '../components/FixedShop'

  export default {
    name: 'cart',
    components:{
      GoBack,
      FixedShop
    },
    data(){
      return{
        title:'购物车',
        userCart:[],
        likeShop:[]//猜你喜欢
      }
    },
    computed:{
      total(){
        let result = 0;
        this.userCart.filter((item)=>{
          result += item.money*item.quantity;
        })
        return result;
      },
      isShoped(){
        return this.total==0 ? true : false
      }
    },
    methods:{
      add(index,quantity){
       this.userCart[index].quantity = parseInt(this.userCart[index].quantity) + 1;
      },
      subtract(index,quantity){
        if(this.userCart[index].quantity > 1){
          this.userCart[index].quantity = parseInt(this.userCart[index].quantity) - 1;
        }else{
          this.userCart.splice(index,1);
        }
      },
      commit(){
        alert('共计'+ this.total +'元');
      },
      fetchData(){
        this.$axios.get('/discover/getShop?gid=0')
				.then((res)=>{
					const dataArr = res.data;
					this.likeShop = dataArr.slice(39,49);
				})
				.catch((err)=>{
					console.log('err:' + err);
        })
        // 获取sessionStorage
        if(sessionStorage.userCart){
          var userCartArr = sessionStorage.userCart.split(';');
          var arr = [];
          for(var item in userCartArr){
            arr.push(JSON.parse(userCartArr[item]));
          }
          this.userCart = arr;
        }
      }
    },
    created(){
      this.fetchData();
    }
  }
</script>
<style lang="stylus">
.cart
  overflow hidden
  padding-bottom 50px
  &_noCart
    width 100%
    height 200px
    text-align center
    background-color rgb(221,221,221)
    &-icon
      margin 50px 0 10px
      display inline-block
      width 80px
      height 80px
      background transparent url('../../../assets/images/noCart.svg') 100% 100% / 100% 100% no-repeat
    &-title
      font-size 12px
      font-weight 200
  &_detail
    margin-top 10px
    padding 0 15px
    &-item
      display flex
      margin 10px 0
      &-text
        margin 5px 10px 50px
        width 220px
        white-space pre-wrap
      &-money
        padding 5px 10px 0
        color #24c789
      .cart-btns
        position relative
        left 150px
        top -15px
      &-subtract
        padding 3px 8px
        border-radius 50%
        background-color #ccc
      &-quantity
        padding 0 10px
      &-add
        padding 3px 6px
        border-radius 50%
        background-color #ccc
  &_total
    position fixed
    bottom 0
    height 50px
    width 100%
    display flex
    justify-content space-between
    align-items center
    z-index 999
    background-color #fff
    &-money
      margin-left 20px
    &-commit
      color #fff
      height 100%
      line-height 50px
      width 150px
      background-color #24c789
      text-align center

      
  &_findMore
    height 50px
    line-height 50px
    border-top 1px solid #ccc
    text-align center
    font-size 14px
    background-color #fff
</style>


