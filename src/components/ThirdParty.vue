<template>
  <div>
    <div class="thirdParty">
      <span class="thirdParty_title">{{ title }}</span>
      <div :class="activeToggle" @click='toggle'>
        <div class="thirdParty_toggle-btn" :style="{left: toggleLeft}">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    name:'thirdParty',
    props:{
      title:{
        type: String,
        required: true
      },
      isThird:{
        type: Boolean
      }
    },
    data(){
      return{
        toggleLeft: '-20%'
      }
    },
    methods:{
      toggle(){
        return this.toggleLeft == '-20%' ? this.toggleLeft = '50%' : this.toggleLeft ='-20%';
      }
    },
    computed:{
      activeToggle(){
        return this.toggleLeft == '50%' ? 'thirdParty_toggle active' : 'thirdParty_toggle'
      }
    },
    created(){
      if(this.isThird){
        this.toggleLeft = '50%';
      }
    }
  }
</script>
<style lang="stylus">
.thirdParty
  height 50px
  width 100%
  align-items center
  display flex
  justify-content space-between
  font-size 14px
  background-color #fff
  border-bottom 1px solid #ccc
  &_title
    margin-left 20px
  .active
    background-color #24c789
    & .thirdParty_toggle-btn
      background-color rgb(94, 166, 86)
  &_toggle
    position relative
    margin-right 20px
    width 30px
    height 15px
    border-radius 15px
    background-color #999
    &-btn
      position absolute
      top -10%
      width 20px
      height 20px
      border-radius 50%
      background-color #ccc
    
</style>

