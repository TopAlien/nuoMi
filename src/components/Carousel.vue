<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" :key="item.url" v-for="item in listImg" :style="{ backgroundImage: 'url(' + item.url + ')' }"></div>
        </div>
        <div class="swiper-pagination swiper-pagination-white"></div>
    </div>
</template>
/** 
*轮播
*listImg:{
  url:'',
  url:'',
  url:''
}
*/
<script>
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.min.css';
  
  export default {
    name:'swiper',
    props: {
      listImg:{
        type: Array,
        required: true
      }
    },
    mounted() {
      this.$nextTick(()=>{
        const swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            loop: true,
            speed: 800,
            autoplay: true, //设置时间不能？？？？
            observer: true, //处理无法滑动
            observeParents: true,
            onTouchEnd: ()=> {
                swiper.startAutoplay()
            }
        });
      })
    //   this.$once('hook:beforeDestroy', ()=> {
    //     swiper = null;
    // })
    }
  }
</script>

<style>
.swiper-container {
  width: 100%;
  height: 10rem;
}
.swiper-container .swiper-wrapper {
  width: 100%;
  height: 100%;
}
.swiper-container .swiper-wrapper .swiper-slide {
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
}
.swiper-container .swiper-wrapper .swiper-slide img {
  width: 100%;
  height: 100%;
}
</style>