import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect:'/home',
    component: Home,
    children:[
      //首页
      {
        path:'/home',
        component:()=>import('@/views/home/Home.vue'),
        meta:{
          isShow:true
        }
      },
      //课程
      {
        path:'/course',
        component:()=>import('@/views/course/Course.vue'),
        meta:{
          isShow:true
        }
      },
      //约课记录
      {
        path:'/record',
        component:()=>import('@/views/record/Record.vue'),
        meta:{
          isShow:true
        }
      },
      //练习
      {
        path:'/exercise',
        component:()=>import('@/views/exercise/Exercise.vue'),
        meta:{
          isShow:true
        }
      },
      {
        path:'/exercise1',
        component:()=>import('@/views/exercise/Exercise1.vue'),
      },
      {
        path:'/exercise2',
        component:()=>import('@/views/exercise/Exercise2.vue'),
      },
      {
        path:'/exercise3',
        component:()=>import('@/views/exercise/Exercise3.vue'),
      },
      {
        path:'/exercise4',
        component:()=>import('@/views/exercise/Exercise4.vue'),
      },
      {
        path:'/exercise5',
        component:()=>import('@/views/exercise/Exercise5.vue'),
      },
      {
        path:'/exercise6',
        component:()=>import('@/views/exercise/Exercise6.vue'),
      },
      //我的
      {
        path:'/user',
        component:()=>import('@/views/user/User.vue'),
        meta:{
          isShow:true
        }
      },
      {
        path:'/userpersonal',
        component: () => import('../views/user/Personal.vue'),
      },
      {
        path:'/userterm',
        component: () => import('../views/user/Term.vue'),
      },
      {
        path:'/usersex',
        component: () => import('../views/user/Sex.vue'),
      },
      {
        path:'/userCourse',
        component: () => import('../views/user/Course.vue'),
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
