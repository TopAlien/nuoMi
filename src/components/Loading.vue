<template>
 <div class="loading">
  <div class="logo">loading</div>
  <div :class="actives">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
  </div>
</div>
</template>
<script>
  export default{
    name:'loading',
    data(){
      return{
        actives:'dots animate',
        timer:null,
      }
    },
    methods:{
      loadingd(){
          this.timer = null;
          this.timer = setInterval(()=>{
          this.actives = 'dots';
            setTimeout(()=>{
                this.actives = 'dots animate';
            },200)
        },3750);
        this.$once('hook:beforedestory',()=>{
          this.timer = null
        })
      }
    },
   created(){
      this.loadingd()
    }
  }
</script>
<style>
.loading{
    width:100%;
    height:667px;
    margin-top:-50px;
    background: linear-gradient(45deg,#6fc7b5 0%,#13bdce, 20%,#0094d9 40%, #5a3694 60%, #ee4d74 80%, #f58c58 100%);
    background-size: 400%;
    background-position:0% 100%;
    position:relative;
    animation:gradient 7.5s ease-in-out infinite;
}
.loading *{
    left:50%;
    top:50%;
    position:fixed;
    transform: translate3d(-50%,-50%,0) rotate(0deg);
}
.logo{
    color:#fff;
    font-size: 30px;
    font-weight:bolder;
}
.loading .dots.animate .dot{
    animation:loading-block 2.5s ease-in-out 1;
}
.loading .dots.animate .dot:after{
    animation:loading-dot 2.5s ease-in-out 1;
}
.loading .dots .dot{
    height:300px;
    width:300px;
}
.loading .dots .dot:after{
    content:"";
    display:inline-block;
    width:60px;
    height:60px;
    background-color:#fff;
    border-radius:50%;
    position:absolute;
    transform: scale(0.17);
}
.loading .dots .dot:nth-child(1) {
    top: 129px;
    left:-197px;
    animation-delay: 0s;
}
.loading .dots .dot:nth-child(1):after {
    transform-origin: top right;
    top: 0;
    right: 0;
    animation-delay: 0s;
}
.loading .dots .dot:nth-child(2) {
    top:-142px;
    left:-183px;
    animation-delay:0.25s;
}
.loading .dots .dot:nth-child(2):after{
    bottom:0;
    right:0;
    transform-origin: bottom right;
    animation-delay:0.25s;    
}
.loading .dots .dot:nth-child(3) {
    top:-156px;
    left:-131px;
    animation-delay:0.5s;
}
.loading .dots .dot:nth-child(3):after{
    bottom:0;
    right:0;
    transform-origin: bottom right;
    animation-delay:0.5s;    
}
.loading .dots .dot:nth-child(4) {
    top:148px;
    left:191px;
    animation-delay:0.75s;
}
.loading .dots .dot:nth-child(4):after{
    top:0;
    left:0;
    transform-origin: top left;
    animation-delay:0.75s;    
}
.loading .dots .dot:nth-child(5) {
    top:-130px;
    left:180px;
    animation-delay:1s;
}
.loading .dots .dot:nth-child(5):after{
    bottom:0;
    left:0;
    transform-origin: bottom left;
    animation-delay:1s;    
}
@keyframes loading-block {
    0% {
        transform: translate3d(-50%,-50%,0) rotate(0deg);        
    }
    100% {
        transform: translate3d(-50%,-50%,0) rotate(360deg);
    }
}
@keyframes loading-dot {
    0% {
        transform:scale(0.17);        
    }
    50% {
        transform:scale(1);
    }
    100% {
        transform:scale(0.17);                
    }
}
@keyframes gradient{
    0% {
        background-position: 0% 100%;
    }
    50% {
        background-position: 100% 0%;
    }
    100% {
        background-position: 0% 100%;        
    }
}
</style>
