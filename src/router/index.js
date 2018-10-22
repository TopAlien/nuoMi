import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
    { path: '/', redirect:'/sport' }, //主页为 ---- sport
    {
      path:'/sport',
      name: 'sport',
      component: resolve=> require(['@/routes/sport/Sport'],resolve)
    },
    {
      path:'/trainCourse',
      name:'trainCourse',
      component: resolve=> require(['@/routes/sport/tabContent/children/TrainCourse'],resolve)
    },
    {
      path:'/allCourse',
      name:'allCourse',
      component: resolve=> require(['@/routes/discover/components/AllCourse'],resolve)
    },
    {
      path:'/challen',
      name:'challen',
      component: resolve=> require(['@/routes/discover/components/Challen'],resolve)
    },
    {
      path:'/diet',
      name:'diet',
      component: resolve=> require(['@/routes/discover/components/Diet'],resolve)
    },
    {
      path:'/myData',
      name:'myData',
      component: resolve=> require(['@/routes/sport/tabContent/children/MyData'],resolve)
    },
    {
      path:'/train',
      name:'train',
      component: resolve=> require(['@/routes/sport/tabContent/children/Train'],resolve)
    },
    {
      path:'/library',
      name:'library',
      component: resolve=> require(['@/routes/sport/tabContent/children/Library'],resolve)
    },
    {
      path:'/libraryWrap',
      name:'libraryWrap',
      component: resolve=> require(['@/routes/sport/tabContent/children/components/LibraryWrap'],resolve)
      // props: (route) => ({ query: route.query.data })
    },
    {
      path: '/discover',
      name: 'discover',
      component: resolve=> require(['@/routes/discover/Discover'],resolve)
    },
    {
      path: '/community',
      name: 'community',
      component: resolve=> require(['@/routes/community/Community'],resolve)
    },
    {
      path: '/mine',
      name: 'mine',
      component: resolve=> require(['@/routes/mine/Mine'],resolve)
    },
    {
      path:'/grade',
      name:'grade',
      component: resolve=> require(['@/routes/mine/children/children/children/Grade'],resolve)
    },
    // topBar url
    {
      path: '/search',
      name: 'search',
      component: resolve=> require(['@/routes/components/Search'],resolve)
    },
    {
      path: '/camera',
      name: 'camera',
      component: resolve=> require(['@/routes/community/children/Camera'],resolve)
    },
    {
      path: '/scan',
      name: 'scan',
      component: resolve=> require(['@/routes/mine/children/Scan'],resolve)
    },
    {
      path: '/info',
      name: 'info',
      component: resolve=> require(['@/routes/mine/children/Info'],resolve)
    },
    // topBar url END
    //登录
    {
      path: '/login',
      name: 'login',
      component: resolve=> require(['@/routes/components/Login'],resolve)
    },
    //注册
    {
      path: '/register',
      name: 'register',
      component: resolve=> require(['@/routes/components/Register'],resolve)
    },
    // setting route ---
    {
      path: '/setting',
      name: 'setting',
      component: resolve=> require(['@/routes/mine/children/Setting'],resolve)
    },
    {
      path: '/personal',
      name:'personal',
      component: resolve=> require(['@/routes/mine/children/children/Personal'],resolve)
    },
    {
      path: '/data',
      name: 'data',
      component: resolve=> require(['@/routes/mine/children/children/Data'],resolve)
    },
    {
      path: '/fans',
      name: 'fans',
      component: resolve=> require(['@/routes/mine/children/children/children/Fans'],resolve)
    },
    {
      path: '/follow',
      name: 'follow',
      component: resolve=> require(['@/routes/mine/children/children/children/Follow'],resolve)
    },
    {
      path: '/trend',
      name: 'trend',
      component: resolve=> require(['@/routes/mine/children/children/children/Trend'],resolve)
    },
    {
      path:'/trained',
      name:'trained',
      component: resolve=> require(['@/routes/mine/children/children/children/Trained'],resolve)
    },
    {
      path:'/publish',
      name:'publish',
      component: resolve=> require(['@/routes/mine/children/children/children/Publish'],resolve)
    },
    {
      path:'/badge',
      name:'badge',
      component: resolve=> require(['@/routes/mine/children/children/children/Badge'],resolve)
    },
    {
      path: '/account',
      name: 'account',
      component: resolve=> require(['@/routes/mine/children/children/Account'],resolve)
    },
    {
      path: '/shopp',
      name: 'shopp',
      component: resolve=> require(['@/routes/shoppMall/Shopp'],resolve)
    },
    {
      path:'/cart',
      name:'cart',
      component: resolve=> require(['@/routes/shoppMall/children/Cart'],resolve)
    },
    {
      path:'/detailShop',
      name:'detailShop',
      component: resolve=> require(['@/routes/shoppMall/children/DetailShop'],resolve)
    },
    {
      path:'/member',
      name:'member',
      component: resolve=> require(['@/routes/shoppMall/children/Member'],resolve)
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
