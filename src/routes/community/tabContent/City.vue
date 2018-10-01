<template>
  <WaterFall :fallArr='waterInfo' />
</template>

<script>
  import WaterFall from '@/components/WaterFall'
  export default{
    name: 'City',
    components:{
      WaterFall
    },
    data(){
      return{
        waterInfo:[
          {
            id: 0,
            imgUrl:'../../static/image/1507782076382_750x700.jpg',
            describe: '一秒变小蛮腰神器，戴上瞬间感觉腰部',
            avatar: '../../static/image/f970148a91d9f56c8a26423db72412914f359ccd_540x540.jpg',
            username:'ealien',
            num: 200
          },
          {
            id: 1,
            imgUrl:'../../static/image/d3da1a023fa0f791fb87719be4ccd6f44a6d8c42_1080x1080.jpg',
            describe: '一秒变小蛮腰神器，戴上瞬间感觉腰部',
            avatar: '../../static/image/76151f5d7bc2e78d55a9f2a4b64101d689b39154_1080x1080.jpg',
            username:'ealien',
            num: 200
          },
          {
            id: 2,
            imgUrl:'../../static/image/430287c80837296c0d881af110b4571b77c59bdc_958x958.jpg',
            describe: '一秒变小蛮腰神器，戴上瞬间感觉腰部',
            avatar: '../../static/image/759a11cb2aeb1861e7a53dd0ea5839119175d8ca.jpg',
            username:'ealien',
            num: 200
          },
          {
            id: 3,
            imgUrl:'../../static/image/76151f5d7bc2e78d55a9f2a4b64101d689b39154_1080x1080.jpg',
            describe: '一秒变小蛮腰神器，戴上瞬间感觉腰部',
            avatar: '../../static/image/d3da1a023fa0f791fb87719be4ccd6f44a6d8c42_1080x1080.jpg',
            username:'ealien',
            num: 200
          },
          {
            id: 4,
            imgUrl:'../../static/image/1516952026427_750x700.jpg',
            describe: '一秒变小蛮腰神器，戴上瞬间感觉腰部',
            avatar: '../../static/image/f970148a91d9f56c8a26423db72412914f359ccd_540x540.jpg',
            username:'ealien',
            num: 200
          },
          {
            id: 5,
            imgUrl:'../../static/image/1516955563493_750x700.jpg',
            describe: '一秒变小蛮腰神器，戴上瞬间感觉腰部',
            avatar: '../../static/image/91b2657b0b47387d525e6c6998c6ad3e32826d1f_960x960.jpg',
            username:'ealien',
            num: 200
          },
          {
            id: 6,
            imgUrl:'../../static/image/1507861239722_750x700.jpg',
            describe: '一秒变小蛮腰神器，戴上瞬间感觉腰部',
            avatar: '../../static/image/f970148a91d9f56c8a26423db72412914f359ccd_540x540.jpg',
            username:'ealien',
            num: 200
          }
        ]
      }
    }
  }
</script>