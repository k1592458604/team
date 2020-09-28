import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[
      //首页
      {
        path:'/home',
        component:()=>import('@/views/home/Home.vue')
      },
      //课程
      {
        path:'/course',
        component:()=>import('@/views/course/Course.vue')
      },
      //约课记录
      {
        path:'/record',
        component:()=>import('@/views/record/Record.vue')
      },
      //练习
      {
        path:'/exercise',
        component:()=>import('@/views/exercise/Exercise.vue')
      },
      //我的
      {
        path:'/user',
        component:()=>import('@/views/user/User.vue')
      }
    ]
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
