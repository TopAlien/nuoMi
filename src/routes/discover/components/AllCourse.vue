<template>
  <div class="allCourse">
    <GoBack :title='title' />
    <CourseWrap  :courseArr='recommend'/>
    <CourseWrap  :courseArr='training'/>
    <CourseWrap  :courseArr='news'/>
    <h1>
      滚动到底部加载
    </h1>
    <div class="allCourse_wrapper">
      <p class="allCourse_wrapper-title">全部健身训练</p>
      <ul class="allCourse_wrapper-tablist">
        <li :class="['allCourse_wrapper-tablist-item',{ active:currentTab==item.name }]" 
            v-for='item in tabList' 
            :key='item.id' 
            @click='toggleTab(item)'
        >
          {{ item.title }}
        </li>
      </ul>
      <CourseExhibit :courseArr='selectCourse'/>
    </div>
  </div>
</template>
<script>
  import GoBack from '@/components/GoBack'
  import CourseWrap from './components/CourseWrap'
  import CourseExhibit from './components/CourseExhibit'

  export default {
    name:'allCouse',
    components:{
      GoBack,
      CourseWrap,
      CourseExhibit
    },
    data(){
      return{
        title:'全部课程',
        currentTab:'All',
        courseId:0,
        tabList:[
          {
            id:0,
            name:'All',
            title:'全部'
          },
          {
            id:4,
            name:'Health',
            title:'健身'
          },
          {
            id:5,
            name:'Run',
            title:'跑步'
          },
          {
            id:6,
            name:'Yoga',
            title:'瑜伽'
          }
        ],
        recommend:[],
        training:[],
        news:[],
        selectCourse:[]
      }
    },
    methods:{
        toggleTab(item){
          //根据item.id查数据了 0 4 5 6
          if(item){
            this.currentTab = item.name;
            this.courseId = item.id;
          }
          this.$axios.get(`/discover/allCourse?course=${ this.courseId }`)
          .then((res)=>{
            this.selectCourse = res.data;
          });
        },
        fetchData(){
          this.$axios.get(`/discover/allCourse?course=1`)
          .then((res)=>{
            this.recommend = res.data;
          });
          this.$axios.get(`/discover/allCourse?course=2`)
          .then((res)=>{
            this.training = res.data;
          });
          this.$axios.get(`/discover/allCourse?course=3`)
          .then((res)=>{
            this.news = res.data;
          })
        }
    },
    watch:{
      //路由变化是获取数据
       '$route': 'fetchData'
    },
    created(){
      this.fetchData();
      this.toggleTab();
    }
  }
</script>
<style lang="stylus">
.allCourse
  &_wrapper
    background-color #fff
    padding 15px
    font-size 14px
    &-title
      margin 10px 0 30px
    &-tablist
      display flex
      height 45px
      width 100%
      align-items center
      justify-content space-around
      border-bottom 1px solid #ccc
      text-align center
      &-item
        position relative
        flex 1
        width 100%
        padding 16px 0
        .active&::before
          position absolute
          display inline-block
          bottom 0
          left 38%
          content ''
          width 20px
          height 2px
          background-color #777

</style>

