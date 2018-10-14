<template>
  <div class='waterFall' ref="waterFall">
        <div class="waterFall_box" v-for='item in fallArr' :key='item.id'>
            <div class="waterFall_box-info">
                <img :src="item.imgUrl" alt="" :style="{width:'100%'}">
                <p>{{ item.describe }}</p>
                <div class="waterFall_box-info-user">
										<img class="uesr-icon" :src="item.avatar" alt="">
                    <span class="user-name">{{ item.username }}</span>
                    <i class="user-horn" />
                    <span class="user-hornNum">{{ item.num }}</span>
                </div>
            </div>
        </div>   
    </div>
</template>

<script>
/**
 * 定宽瀑布流
 * width 165px
 * 
 * fallArr = {
 * 	id: //key
 *  imgUrl:图片url
 *  describe: 描述信息
 * 	username: 用户名
 * 	avatar: 头像url
 * 	num: 喇叭数	
 * }
 * 
 */ 
  export default{
		name:'waterFall',
		props:{
			fallArr:{
				type: Array,
				required: true
			}
    },
    mounted(){
      //  window.addEventListener('load',()=>{
      //     this.calculate()
      //  })
      this.$nextTick(()=>{
          setTimeout(()=>{
          const currentWidth = document.documentElement.clientWidth*92/100; //承载容器宽度
          const oImgNum = this.$refs.waterFall.children;
          const oImgLen = this.$refs.waterFall.children.length; //图片个数
          const oImgWidth = this.$refs.waterFall.children[0].offsetWidth;
          const oRowImg = Math.floor(currentWidth/oImgWidth); //当前宽度可以放几张图片
          var boxImgArr=[];
          for(var i = 0;i < oImgLen;i++){
              if (i < oRowImg){
                //第一行的高度就等于每一张的高度
                boxImgArr[i] = oImgNum[i].offsetHeight;
              }else{
                //到达第二行了
                var minHeight = Math.min.apply(null, boxImgArr);   /*改变this 获取最boxImgArr最小值 否者计算最小高度*/
                var minHeightIndex = boxImgArr.findIndex((boxImgArr)=>(boxImgArr == minHeight));
                oImgNum[i].style.position = 'absolute';
                oImgNum[i].style.top = minHeight + 15+'px'; //margin-top 10px
                oImgNum[i].style.left = oImgNum[minHeightIndex].offsetLeft + 'px'; /* 获取最小位置的距左的距离 */
                boxImgArr[minHeightIndex] = boxImgArr[minHeightIndex] + oImgNum[i].offsetHeight + 15;
            }  
          }
          // 因为设置了 absolute  所以高度无法撑开 用 js实现
          this.$refs.waterFall.style.height = document.documentElement.scrollHeight - 150 +'px';
        },20)
      });
    }
  }
</script>

<style lang="stylus">
.waterFall
  position relative
  margin 10px auto 0
  display flex
  flex-wrap wrap
  justify-content space-between
  align-items flex-start
  padding-bottom 50px
  &_box
    width 165px  //定宽
    margin-bottom 20px
    // float left
    &-info
      box-shadow 0 0 5px #ccc
			& p 
				font-size 14px 
				//控制显示两行
				height 40px
				line-height 20px
				// 多行文本溢出显示 。。。
				overflow hidden
				text-overflow ellipsis
				display -webkit-box
				-webkit-line-clamp 2
				-webkit-box-orient vertical
			.waterFall_box-info-user // 有鬼了
				height 50px
				align-items center
				font-size 12px
				display flex
				justify-content space-around
				.uesr-icon
					width 30px
					height 30px
					border-radius 50%
					color red
				.user-name
					color #cccccc
				.user-horn
					display inline-block
					height 100%
					width 60px
					background transparent url('../assets/images/horn.svg') 100% 50% / 20px 20px no-repeat
				.user-hornNum
					color #777
</style>

