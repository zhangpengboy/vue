//路由器对象模块


import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../pages/Msite/Msite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'

//声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
  //所有路由
  routes:[
    {
      path:'/msite',//首页
      component:Msite,
      meta:{
        showFooter:true,
      }
    },
    {
      path:'/order',//订单
      component:Order,
      meta:{
        showFooter:true,
      }
    },
    {
      path:'/profile',//个人
      component:Profile,
      meta:{
        showFooter:true,
      }
    },
    {
      path:'/search',//搜索
      component:Search,
      meta:{
        showFooter:true,
      }
    },
    {
      path:'/login',//登录
      component:Login
    },
    {
      path:'/',
      redirect:'/msite'
    }
  ]
})
