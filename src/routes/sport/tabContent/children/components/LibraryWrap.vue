<template>
  <div class="libraryWrap">
    <GoBack :title='title' />
    <div class="libraryWrap_content">
      <div class="libraryWrap_content-list" v-for='item in itemInfo' :key='item.id'>
        <div>
          <img class="libraryWrap_content-list-img" :src="completionImgUrl(item.url)" alt="">
        </div>
        <div class="libraryWrap_content-list-item">
         <p class="libraryWrap_content-list-item-title">{{ item.title }}</p>
          <div class="libraryWrap_content-list-item-icon">
            <i :class=" item.flash >=1 ?'libraryWrap_content-list-item-icon-flash libraryWrap_content-list-item-icon-flashNo':'libraryWrap_content-list-item-icon-flash'"></i>
            <i :class=" item.flash >=2 ?'libraryWrap_content-list-item-icon-flash libraryWrap_content-list-item-icon-flashNo':'libraryWrap_content-list-item-icon-flash'"></i>
            <i :class=" item.flash >=3 ?'libraryWrap_content-list-item-icon-flash libraryWrap_content-list-item-icon-flashNo':'libraryWrap_content-list-item-icon-flash'"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
/**
  id:0,
  title:'胸部垫高俯卧撑',
  url:'../../image',
  flash: '' 闪电个数
 */
<script>
  import GoBack from '@/components/GoBack'
  import { completionImgUrl } from '@/utils/utils'

  export default {
    name:'libraryWrap',
    components:{
      GoBack
    },
    data(){
      return{
        title:'',
        pid: 1,
        itemInfo:[],
        completionImgUrl:null
      }
    },
     watch: {
      // 如果路由有变化，会再次执行该方法
      '$route': 'fetchData'
    },
    methods:{
      fetchData(data){
        // 请求不同数据
        this.title = this.$route.query.title;
        this.pid = this.$route.query.data;
        //请求函数
        if(this.pid!=undefined && this.title!=undefined){
          this.$axios.get(`/library?data=${this.pid}`)
          .then((res)=>{
            this.itemInfo = res.data;
          })
        }  
      }
    },
    created(){
      this.fetchData();
      this.completionImgUrl = completionImgUrl;
    }
  }
</script>
<style lang="stylus">
.libraryWrap
  &_content
    &-list
      height 90px
      width 100%
      display flex
      align-items center
      font-weight 200
      font-size 14px
      border-bottom 1px solid #ccc
      &-img
        margin 0 20px 0
        width 100px
        height 60px
      &-item
        height 60%
        width 100%
        &-title
          padding 8px 0 0
        &-icon
          margin-left -4px
          &-flash
            display inline-flex
            width 15px
            height 30px
            background transparent url('../../../../../assets/images/flash.svg') 0 0 / 30px 30px no-repeat
          &-flashNo
            display inline-flex
            width 15px
            height 30px
            background transparent url('../../../../../assets/images/flash-o.svg') 0 0 / 30px 30px no-repeat

</style>

