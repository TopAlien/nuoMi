<template>
  <div class="allCourse">
    <GoBack :title='title' />
    <CourseWrap  :courseArr='recommend'/>
    <CourseWrap  :courseArr='training'/>
    <CourseWrap  :courseArr='news'/>
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
      <ul class="allCourse_wrapper-filter">
          <div class="allCourse_wrapper-filter-item" @click='isToggleSort'>
            <li class="allCourse_wrapper-filter-item-title" >{{ sortText }}</li>
            <i class="allCourse_wrapper-filter-item-icon bArrow-icon"></i>
          </div>
          <div class="allCourse_wrapper-filter-item" @click='isToggleFilter'>
            <li class="allCourse_wrapper-filter-item-title" >筛选</li>
            <i class="allCourse_wrapper-filter-item-icon bArrow-icon"></i>
          </div>
          <!-- 排序框 需要有个父级定位-->
          <ul v-show='isSort' class="sort_wrap"> 
            <li 
                class="sort_wrap-item"
                @click='toggleSort(item)' 
                v-for='item in sortItem' 
                :key='item.name'>
                 {{ item.text }}</li>
          </ul>
          <!-- 筛选框 需要有个父级定位-->
          <ul v-show='isFilter' class="filter_wrap"> 
            <p>难度</p>
            <li 
                class="filter_wrap-item"
                @click='togglefilter(item)' 
                v-for='item in filterItem' 
                :key='item'>
                 {{ item }}</li>
          </ul>
        </ul>
      <CourseExhibit :courseArr='newArr'/>
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
        timer:null,
        isSort:false, //是否显示排序框
        isFilter: false,
        sortKey:'synthesize',
        newArr:[],
        sortItem:[
          {
            name:'synthesize',
            text:'综合排序'
          },
          {
            name:'time',
            text:'时间从短到长'
          },
          {
            name:'consume',
            text:'卡路里消耗从高到低'
          }
        ], //综合排序
        filterItem:[
          'K1','K2','K3','K4'
        ],
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
    computed:{
      sortText(){
        switch(this.sortKey){
          case  'synthesize':
            return '综合排序';
            break;
          case  'time':
            return '时间从短到长';
            break;
          case  'consume':
            return '卡路里消耗从高到低';
            break;
        }
      },
      //排序 初始化
      sortSelectCourse(){
          return this.selectCourse.sort((time1,time2)=>{
            return time2.num - time1.num;
          })
      }
    },
    methods:{
        isToggleSort(){
          return this.isSort ? this.isSort = false : this.isSort = true;
        },
        isToggleFilter(){
          return this.isFilter ?this.isFilter = false : this.isFilter = true;
        },
        //排序
        toggleSort(item){
          this.sortKey = item.name;
          this.isFilter = false;
          this.isSort = false;
          switch(this.sortKey){
            case  'synthesize':
              return this.selectCourse.sort((time1,time2)=>{
                return time2.num - time1.num;
              })
              break;
            case  'time':
              return this.selectCourse.sort((time1,time2)=>{
                return time1.time - time2.time;
              })
              break;
            case  'consume':
              return this.selectCourse.sort(()=>{
                return Math.random()- 0.5;
              })
              break;
          }
        },
        //筛选 
        togglefilter(item){
          this.isFilter = false;
          this.isSort = false;
          const K = item;
          this.newArr = this.sortSelectCourse.filter((item)=>{
            return item.level == K;
          })
        },
        toggleTab(item){
          //根据item.id 查数据了 0 4 5 6
          this.isSort = false;
          this.isFilter = false;
          this.sortKey = 'synthesize';
          cancelAnimationFrame(this.timer);
          const _self = this;
          const speed = 100;
          this.timer = requestAnimationFrame(function fn(){
              let oTop = document.body.scrollTop || document.documentElement.scrollTop;
              if(oTop > 0 && oTop < 740){
                  document.body.scrollTop = document.documentElement.scrollTop = oTop - speed;
                  _self.timer = requestAnimationFrame(fn);
              }else{
                document.body.scrollTop = document.documentElement.scrollTop = 740;
                cancelAnimationFrame(_self.timer);
              }
          });
          if(item){
            this.currentTab = item.name;
            this.courseId = item.id;
          }
          this.$axios.get(`/discover/allCourse?course=${ this.courseId }`)
          .then((res)=>{
            this.selectCourse = res.data;
            this.newArr = this.sortSelectCourse;
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
    &-filter
      position relative
      display flex
      height 40px
      justify-content space-between
      align-items center
      border-bottom 1px solid #ccc
      color #555
      &-item
        flex 1
        text-align center
        padding 10px 0
        &-title
          display inline-block
        &-icon
          display inline-block
          width 10px
          height 10px
          background transparent url('../../../assets/images/bArrow.svg') 0 0 / 10px 10px no-repeat
      .sort_wrap,.filter_wrap
        position absolute
        width 100%
        top 40px
        left 0
        z-index 999
        background-color #fff
        &-item
          color #000
          font-weight 300
          height 50px
          line-height 50px
          border-bottom 1px solid #ccc
          &:last-child
            border-bottom none
</style>

