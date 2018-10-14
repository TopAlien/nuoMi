<template>
  <div class="cart">
    <GoBack :title='title'/>
    <div class="cart_noCart" v-if='isShoped'>
      <i class="cart_noCart-icon"/>
      <p class="cart_noCart-title">还没有添加任何商品</p>
    </div>
    <FixedShop :shopArr='likeShop' />
    <router-link to='shopp'>
      <p class="cart_findMore">发现更多优选好货</p>
    </router-link>
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
        isShoped: true,
        likeShop:[]//猜你喜欢
      }
    },
    methods:{
      fetchData(){
        this.$axios.get('/discover/getShop?gid=0')
				.then((res)=>{
					const dataArr = res.data;
					this.likeShop = dataArr.slice(39,49);
				})
				.catch((err)=>{
					console.log('err:' + err);
				})
      }
    },
    created(){
      this.fetchData();
    }
  }
</script>
<style lang="stylus">
.cart
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

  &_findMore
    height 50px
    line-height 50px
    border-top 1px solid #ccc
    text-align center
    font-size 14px
    background-color #fff
</style>


