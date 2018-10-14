import Vue from 'vue'
import Router from 'vue-router'
import Sport from '@/routes/sport/Sport'
import TrainCourse from '@/routes/sport/tabContent/children/TrainCourse'
import AllCourse from '@/routes/discover/components/AllCourse'
import Challen from '@/routes/discover/components/Challen'
import Diet from '@/routes/discover/components/Diet'
import MyData from '@/routes/sport/tabContent/children/MyData'
import Train from '@/routes/sport/tabContent/children/Train'
import Library from '@/routes/sport/tabContent/children/Library'
import LibraryWrap from '@/routes/sport/tabContent/children/components/LibraryWrap'

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

//shopp
import Shopp from '@/routes/shoppMall/Shopp'
import Cart from '@/routes/shoppMall/children/Cart'
import DetailShop from '@/routes/shoppMall/children/DetailShop'
import Member from '@/routes/shoppMall/children/Member'

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
      path:'/trainCourse',
      name:'trainCourse',
      component: TrainCourse
    },
    {
      path:'/allCourse',
      name:'allCourse',
      component: AllCourse
    },
    {
      path:'/challen',
      name:'challen',
      component: Challen
    },
    {
      path:'/diet',
      name:'diet',
      component: Diet
    },
    {
      path:'/myData',
      name:'myData',
      component: MyData
    },
    {
      path:'/train',
      name:'train',
      component: Train
    },
    {
      path:'/library',
      name:'library',
      component: Library
    },
    {
      path:'/libraryWrap',
      name:'libraryWrap',
      component: LibraryWrap,
      // props: (route) => ({ query: route.query.data })
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
    },
    {
      path: '/shopp',
      name: 'shopp',
      component: Shopp
    },
    {
      path:'/cart',
      name:'cart',
      component: Cart
    },
    {
      path:'/detailShop',
      name:'detailShop',
      component: DetailShop
    },
    {
      path:'/member',
      name:'member',
      component: Member
    },
    {
      path: '*',   // 错误路由
      redirect: '/sport'   //重定向
    },
    // setting route end
]

const route = new Router({
  mode:'history',
  linkActiveClass: 'active',
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

//全局守卫const isLogin = window.localStorage.jwtToken ? true : false;
route.beforeEach((to, from, next) => {
  // to: Route: 即将要进入的目标 路由对象
  // from: Route: 当前导航正要离开的路由
  // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
  const nextRoute = ['sport', 'mine', 'discover', 'community']; //可以在加
  let isLogin = window.localStorage.jwtToken ? true : false;  // 是否登录
  // 未登录状态；当路由到nextRoute指定页时，跳转至login
  if (nextRoute.indexOf(to.name) >= 0) {  
    if (!isLogin) {
      console.log('what fuck');
      route.push({ name: 'login' })
    }
  }
  // 已登录状态；当路由到login时，跳转至home 
  if (to.name === 'login') {
    if (isLogin) {
      route.push({ name: 'home' });
    }
  }
  next();
});


export default route
