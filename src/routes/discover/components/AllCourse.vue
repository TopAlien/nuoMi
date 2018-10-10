<template>
  <div>
    <GoBack :title='title' />
    <CourseWrap v-for='(item,index) in courseData' :key='index' :courseArr='item'/>
    <h1>设计课程数据中/h1>
  </div>
</template>
<script>
  import GoBack from '@/components/GoBack'
  import CourseWrap from './components/CourseWrap'

  export default {
    name:'allCouse',
    components:{
      GoBack,
      CourseWrap
    },
    data(){
      return{
        title:'全部课程',
        courseData:{
          course:[
            {
              id:0,
              title:'为你推荐',
              url:'../../../../static/1538131829620_750x340.jpg',
              text:'',
              num: 7823478,
              level: 'K1',
              time: 12
            },
            {
              id:1,
              title:'为你推荐',
              url:'../../../../static/1538131829620_750x340.jpg',
              text:'',
              num: 7823478,
              level: 'K1',
              time: 12
            },
            {
              id:2,
              title:'为你推荐',
              url:'../../../../static/1538131829620_750x340.jpg',
              text:'',
              num: 7823478,
              level: 'K1',
              time: 12
            },
            {
              id:3,
              title:'为你推荐',
              url:'../../../../static/1538131829620_750x340.jpg',
              text:'',
              num: 7823478,
              level: 'K1',
              time: 12
            }
          ],
          course2:[
            {
              id:0,
              title:'大家都在练',
              url:'../../../../static/1538131829620_750x340.jpg',
              text:'',
              num: 7823478,
              level: 'K1',
              time: 12
            },
            {
              id:1,
              title:'为你推荐',
              url:'../../../../static/1538131829620_750x340.jpg',
              text:'',
              num: 7823478,
              level: 'K1',
              time: 12
            },
            {
              id:2,
              title:'为你推荐',
              url:'../../../../static/1538131829620_750x340.jpg',
              text:'',
              num: 7823478,
              level: 'K1',
              time: 12
            },
            {
              id:3,
              title:'为你推荐',
              url:'../../../../static/1538131829620_750x340.jpg',
              text:'',
              num: 7823478,
              level: 'K1',
              time: 12
            }
          ]
        },
        
      }
    }
  }
</script>
