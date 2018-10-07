import Vue from 'vue'
import Router from 'vue-router'
import Sport from '@/routes/sport/Sport'
import AllCourse from '@/routes/sport/tabContent/children/AllCourse'
import MyData from '@/routes/sport/tabContent/children/MyData'

import Discover from '@/routes/discover/Discover'
import Community from '@/routes/community/Community'
import Mine from '@/routes/mine/Mine'
import Login from '@/routes/components/Login'
import Register from '@/routes/components/Register'
import Search from '@/routes/components/Search'
import Camera from '@/routes/community/children/Camera'
import Scan from '@/routes/mine/children/Scan'
import Info from '@/routes/mine/children/Info'
import Setting from '@/routes/mine/children/Setting'
import Personal from '@/routes/mine/children/children/Personal'
import Data from '@/routes/mine/children/children/Data' //个人资料
import Fans from '@/routes/mine/children/children/children/Fans'
import Trend from '@/routes/mine/children/children/children/Trend'
import Follow from '@/routes/mine/children/children/children/Follow'
import Trained from '@/routes/mine/children/children/children/Trained'
import Badge from '@/routes/mine/children/children/children/Badge'
import Publish from '@/routes/mine/children/children/children/Publish' 
import Grade from '@/routes/mine/children/children/children/Grade'
import Account from '@/routes/mine/children/children/Account'

Vue.use(Router)

const routes = [
  //哎 用子路由吧 ---  因为子tab瀑布流刷新不好使
    { path: '/', redirect:'/sport' }, //主页为 ---- sport
    {
      path:'/sport',
      name: 'sport',
      component: Sport
    },
    {
      path:'/allCourse',
      name:'allCourse',
      component: AllCourse
    },
    {
      path:'/myData',
      name:'myData',
      component: MyData
    },
    {
      path: '/discover',
      name: 'discover',
      component: Discover
    },
    {
      path: '/community',
      name: 'community',
      component: Community
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    },
    {
      path:'/grade',
      name:'grade',
      component: Grade
    },
    // topBar url
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/camera',
      name: 'camera',
      component: Camera
    },
    {
      path: '/scan',
      name: 'scan',
      component: Scan
    },
    {
      path: '/info',
      name: 'info',
      component: Info
    },
    // topBar url END
    //登录
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    //注册
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    // setting route ---
    {
      path: '/setting',
      name: 'setting',
      component: Setting
    },
    {
      path: '/personal',
      name:'personal',
      component: Personal
    },
    {
      path: '/data',
      name: 'data',
      component: Data
    },
    {
      path: '/fans',
      name: 'fans',
      component: Fans
    },
    {
      path: '/follow',
      name: 'follow',
      component: Follow
    },
    {
      path: '/trend',
      name: 'trend',
      component: Trend
    },
    {
      path:'/trained',
      name:'trained',
      component: Trained
    },
    {
      path:'/publish',
      name:'publish',
      component: Publish
    },
    {
      path:'/badge',
      name:'badge',
      component: Badge
    },
    {
      path: '/account',
      name: 'account',
      component: Account
    }
    // setting route end
]

const route = new Router({
  mode:'history',
  linkActiveClass: 'active',
  routes
})

// 全局守卫
// route.beforeEach((to, from, next)=>{
//   const isLogin = localStorage.jwtToken ? true : false;
//   next();
// })

export default route
