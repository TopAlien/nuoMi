<template>
  <div class="health">
    <Basket>
      <div class="health_first"> 
        <span class="health_first-title">" 开始第一次健身把 "</span>
      </div>
    </Basket>
    <Basket class="health-course">
      <div class="health-course-list">
        <span class="health-course-list-train">我的健身训练</span>
        <span class="health-course-list-btn"> + 添加</span>
      </div>
      <div class="health-course-list">
        <span class="health-course-list-title">2分钟体验课程</span>
        <span class="health-course-list-time">2分钟· K1</span>
      </div>
      <div class="health-course-list">
        <span class="health-course-list-title">瘦腿训练</span>
        <span class="health-course-list-time">12分钟· K2</span>
      </div>
      <div class="health-course-list">
        <span class="health-course-list-title">腹肌训练入门</span>
        <span class="health-course-list-time">13分钟· K1</span>
      </div>
      <div class="health-course-list">
        <span class="health-course-list-title">核心功能入门</span>
        <span class="health-course-list-time">14分钟· K1</span>
      </div>
      <div class="health-course-list" v-show='allShow'>
        <span class="health-course-list-title">背部基础训练</span>
        <span class="health-course-list-time">12分钟· K1</span>
      </div>
      <div class="health-course-all" @click='allShow = !allShow'>{{allTitle}}</div>
    </Basket>

    <!-- 十一 -->
     <BroadCast :arrInfo="eleven"/>
     <!-- 正在讨论 -->
     <BroadCast :arrInfo="discussed"/>
     <!-- 动作训练区 -->
     <BroadCastSm :arrInfo="training"/>
     <!-- 动作库  -->
     <BroadCastSm :arrInfo="library"/>
     <!-- 0基础 -->
     <BroadCast :arrInfo="basis"/>
     <!-- 发现更多课程 -->
     <BroadCast :arrInfo="more"/>

    <NoContent />
  </div>
</template>
<script>
  import Basket from '@/components/Basket'
  import NoContent from '@/components/NoContent'
  import BroadCast from '@/components/BroadCast'
  import BroadCastSm from '@/components/BroadCastSm'

  export default{
    name: 'health',
    components:{
      Basket,
      BroadCast,
      BroadCastSm,
      NoContent
    },
    data(){
      return{
        allShow: false, //展开全部,后期通过计算个数截取显示
        eleven:[
          {
            id: 0,
            title: '十一假期怎么过',
            describe: '假期 7 天 , 只练 1 个动作',
            describeSm: '适合「 意志薄弱 」的你',
            url:'../../static/image/1516955563493_750x700.jpg'
          },
          {
            id: 1,
            title: '十一假期怎么过',
            describe: '假期 , 其实可以加速燃脂',
            describeSm: '适合「 自律 」的人',
            url:'../../static/image/qweqweqweasd.jpg'
          },
          {
            id: 2,
            title: '十一假期怎么过',
            describe: '假期不指望瘦了 , 但至少别胖呀 ！',
            describeSm: '适合「 念念不胖 」的人',
            url:'../../static/image/1507782076382_750x700.jpg'
          }
        ],
        discussed:[
          {
            id: 0,
            title: '正在讨论',
            describe: '大家说的健身是一回事么？',
            describeSm: '来自 #nuoMi# ',
            url:'../../static/image/1516952026427_750x700.jpg'
          },
          {
            id: 1,
            title: '正在讨论',
            describe: '每人分享1条 , 就是个百科全书',
            describeSm: '来自 #nuoMi#',
             url:'../../static/image/1518166526645_315x315.jpg'
          },
          {
            id: 2,
            title: '正在讨论',
            describe: '每人是个,百科全书',
            describeSm: '来自 #nuoMi#',
             url:'../../static/image/544631dea1400000.jpg'
          },
          {
            id: 3,
            title: '正在讨论',
            describe: '每人分享,是个百科全书',
            describeSm: '来自 #nuoMi#',
             url:'../../static/image/1507799644728_750x700.jpg'
          }
        ],
        training:[
          {
            id: 0,
            title: '动作训练区',
            describe: '平板支撑',
            url:'../../static/image/action1.jpg'
          },
          {
            id: 1,
            title: '动作训练区',
            describe: '俯卧撑',
            url:'../../static/image/action2.jpg'
          },
          {
            id: 2,
            title: '动作训练区',
            describe: '深蹲',
            url:'../../static/image/action3.jpg'
          },
          {
            id: 3,
            title: '动作训练区',
            describe: '卷腹',
            url:'../../static/image/action4.jpg'
          },
          {
            id: 4,
            title: '动作训练区',
            describe: 'burpee',
            url:'../../static/image/action5.jpg'
          }
        ],
        library:[
          {
            id: 0,
            title: '动作库',
            describe: '胸部',
            url:'../../static/image/55963b0e73800000.png'
          },
          {
            id: 1,
            title: '动作库',
            describe: '背部',
            url:'../../static/image/55963ab1a4c00000.png'
          },
          {
            id: 2,
            title: '动作库',
            describe: '肩部',
            url:'../../static/image/55963b1db3c00000.png'
          },
          {
            id: 3,
            title: '动作库',
            describe: '手臂',
            url:'../../static/image/559639a46e400000.png'
          },
          {
            id: 4,
            title: '动作库',
            describe: '颈部',
            url:'../../static/image/55963afccdc00000.png'
          },
          {
            id: 5,
            title: '动作库',
            describe: '腹部',
            url:'../../static/image/55963b3fc0400000.png'
          },
          {
            id: 6,
            title: '动作库',
            describe:'腰部',
            url:'../../static/image/55963b2cc0800000.png'
          },
          {
            id: 7,
            describe:'臀部',
            url:'../../static/image/559639594f800000.png'
          },
          {
            id: 8,
            title: '动作库',
            describe:'腿部',
            url:'../../static/image/55963ad31b400000.png'
          },
          {
            id: 9,
            title: '动作库',
            describe:'全身',
            url:'../../static/image/559638c467800000.png'
          }
        ],
        basis:[
          {
            id: 0,
            title: '这些课程适合「 零基础 」的你',
            describe: '徒手胸a',
            describeSm: '强壮的胸肌是男人最佳的门面',
            url:'../../static/image/1507787447661_750x700.jpg'
          },
          {
            id: 1,
            title: '这些课程适合「 零基础 」的你',
            describe: '徒手胸训练',
            describeSm: '强壮的胸肌是男',
            url:'../../static/image/1507876285351_750x700.jpg'
          },
          {
            id: 2,
            title: '这些课程适合「 零基础 」的你',
            describe: '徒d训练',
            describeSm: '强壮的胸肌最佳的门面',
            url:'../../static/image/1519455228150_750x700.jpg'
          },
          {
            id: 3,
            title: '这些课程适合「 零基础 」的你',
            describe: '训练',
            describeSm: '强壮的胸肌',
            url:'../../static/image/1507802632406_750x700.jpg'
          }
        ],
        more:[
          {
            id: 0,
            title: '发现更多「 学生宿舍 」课程',
            describe: '腹肌塑造进阶',
            describeSm: '在床上也能练的腹肌课程',
            url:'../../static/image/1507862317459_750x700.jpg'
          },
          {
            id: 1,
            title: '发现更多「 学生宿舍 」课程',
            describe: '徒手腹肌初级训练',
            describeSm: '想要更大的胸围吗？',
            url:'../../static/image/1507801857816_750x700.jpg'
          },
          {
            id: 2,
            title: '发现更多「 学生宿舍 」课程',
            describe: '突击减脂训练',
            describeSm: '减肥这是,一点难度都没有！',
            url:'../../static/image/1507861239722_750x700.jpg'
          },
          {
            id: 3,
            title: '发现更多「 学生宿舍 」课程',
            describe: '翘臀养成',
            describeSm: '蜜桃臀诞生记',
            url:'../../static/image/1519635853592_315x315.jpg'
          },
          {
            id: 4,
            title: '发现更多「 学生宿舍 」课程',
            describe: '人鱼线雕刻',
            describeSm: '让腹肌的线条更上一层楼',
            url:'../../static/image/1507862151844_750x700.jpg'
          }
          ,
          {
            id: 5,
            title: '发现更多「 学生宿舍 」课程',
            describe: '变速跳绳',
            describeSm: '科学地跳绳 , 才能瘦的更快',
            url:'../../static/image/1507860895474_750x700.jpg'
          }
          ,
          {
            id: 6,
            title: '发现更多「 学生宿舍 」课程',
            describe: '钢铁手臂塑造',
            describeSm: '宿舍增肌塑型系列课程',
            url:'../../static/image/1516955563493_750x700.jpg'
          }
        ]
      }
    },
    computed:{
      allTitle(){
        return this.allShow ? '收起' : '展开全部'
      }
    }
  }
</script>

<style lang='stylus'>
.health
  &_first
    width 100%
    height 150px
    text-align center
    background transparent url('../../../assets/images/train1.jpg') 100% 100% / 100% 100% no-repeat
    &-title
      font-size 12px 
      color #ccc
      font-weight 200
      position relative
      top 10px
  // 
  &-course 
    &-list
      display flex
      justify-content space-between
      align-items center
      // padding-bottom 25px
      margin-bottom 40px
      &-train
        color #999
      &-btn
        border-radius 20px
        padding 6px 20px
        color #fff
        font-size 10px
        background-color #24c789
      &-title
        font-size 16px
    &-all
      text-align center
  // 
  &-train
    &-title
      margin-bottom 20px
    &-wrap
      width 100%
      overflow-x scroll
      .list
        display flex
        &_item
          position relative
          padding-right 10px
          &-img,&-cover
            width 260px //宽度
            height 160px
          &:last-child
           padding 0
          &-title
            margin-top 10px
            line-height 20px
          //盖 
          &-cover
            position absolute
            top 0
            left 0
            color #fff
            background-color rgba(0, 0, 0, .3)
            &-mg
              padding 18px 10px
            &-info
              &-title
                font-size 20px
              &-btn
                position absolute
                right 10px
            &-total
              font-size 10px
            &-cycle
              position absolute
              font-size 12px
              bottom 10px

</style>
