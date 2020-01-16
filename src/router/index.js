import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Info from '../views/Info.vue'
import User from '../views/User.vue'
import more from '../components/more.vue'
import login from '../views/login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/info',
    name: 'info',
    component: Info
  },
  {
    path:'/login',
    name:'login',
    component:login
  },
  {
    path: '/user/:name',
    //mata自定义的配置
    meta:{
      login_required:true,
    },
    name: 'user',
    component: User,
    children: [
      {
        // 以“/”开头的嵌套路径会被当作根路径，所以子路由上不用加“/”;在生成路由时，主路由上的path会被自动添加到子路由之前，所以子路由上的path不用在重新声明主路由上的path了。
        path: 'more',
        name: 'more',
        component: more
      }
    ]
  },
  {
    path: '/about',
    meta:{
      login_required:true,
    },
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
});

router.beforeEach(function(to,from,next){
  var login_in=false;
  //如果有子路由matched匹配第一个
  if(!login_in && to.matched.some(function(item){

    return item.meta.login_required;
  }))
  next('/login')
  else
    next();
});
// router.beforeEach(function(to,from,next){
//   var login_in=false;
//   if(!login_in && to.path=='/about')
//      next('/login');
//   else
//     next();
// })

export default router
