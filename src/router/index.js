import Vue from 'vue'
import Router from 'vue-router'
import Sport from '@/routes/sport/Sport'
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
