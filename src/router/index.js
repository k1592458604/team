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
        meta:{
          isShow:false
        }

      },
      {
        path:'/exercise2',
        component:()=>import('@/views/exercise/Exercise2.vue'),
        meta:{
          isShow:false
        }
      },
      {
        path:'/exercise3',
        component:()=>import('@/views/exercise/Exercise3.vue'),
        meta:{
          isShow:false
        }
      },
      {
        path:'/exercise4',
        component:()=>import('@/views/exercise/Exercise4.vue'),
        meta:{
          isShow:false
        }
      },
      {
        path:'/exercise5',
        component:()=>import('@/views/exercise/Exercise5.vue'),
        meta:{
          isShow:false
        }
      },
      {
        path:'/exercise6',
        component:()=>import('@/views/exercise/Exercise6.vue'),
        meta:{
          isShow:false
        }
      },
      //我的
      {
        path:'/user',
        component:()=>import('@/views/user/User.vue'),
        meta:{
          isShow:true
        }
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
