import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect:'/home',
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
      {
        path:'/courseSearch',
        component:()=>import('@/views/course/search/CourseSearch.vue'),
        meta:{
          isShow:false
        }
      },
      {
        path:'/courseList',
        component:()=>import('@/views/course/list/CourseList.vue'),
        meta:{
          isShow:false
        }
      },
      {
        path:'/courseDetail',
        component:()=>import('@/views/course/detail/CourseDetail.vue'),
        meta:{
          isShow:false
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
