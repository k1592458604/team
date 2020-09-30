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
    redirect:'/home',
    children:[
      //首页
      {
        path:'/home',
        component:()=>import('@/views/home/Home.vue'),
        meta:{
          isShow:true,
          isstay:false
        }
      },
      // 学习日历
      {
        path:'/home-calendar',
        component:()=>import('@/views/home/navigation/calendar/Calendar.vue'),
        meta:{
          isShow:false,
          isstay:true
        }
      },,
      // 留言
      {
        path:'/home_stay',
        component:()=>import('@/views/home/stay/Stay.vue'),
        meta:{
          isShow:false,
          isstay:false
        }
      },
      //课程
      {
        path:'/course',
        component:()=>import('@/views/course/Course.vue'),
        meta:{
          isShow:true,
          isstay:true
        }
      },
      {
        path:'/courseSearch',
        component:()=>import('@/views/course/search/CourseSearch.vue'),
        meta:{
          isShow:false,
          isstay:true
        }
      },
      {
        path:'/courseList',
        component:()=>import('@/views/course/list/CourseList.vue'),
        meta:{
          isShow:false,
          isstay:true
        }
      },
      //约课记录
      {
        path:'/record',
        component:()=>import('@/views/record/Record.vue'),
        meta:{
          isShow:true,
          isstay:true
        }
      },
      //练习
      {
        path:'/exercise',
        component:()=>import('@/views/exercise/Exercise.vue'),
        meta:{
          isShow:true,
          isstay:true
        }
      },
      {
        path:'/exercise1',
        component:()=>import('@/views/exercise/Exercise1.vue'),
        meta:{
          isstay:true,
          isstay:true
        }
      },
      {
        path:'/exercise2',
        component:()=>import('@/views/exercise/Exercise2.vue'),
        meta:{
          isstay:true,
          isstay:true
        }
      },
      {
        path:'/exercise3',
        component:()=>import('@/views/exercise/Exercise3.vue'),
        meta:{
          isstay:true,
          isstay:true
        }
      },
      {
        path:'/exercise4',
        component:()=>import('@/views/exercise/Exercise4.vue'),
        meta:{
          isstay:true,
          isstay:true
        }
      },
      {
        path:'/exercise5',
        component:()=>import('@/views/exercise/Exercise5.vue'),
        meta:{
          isstay:true,
          isstay:true
        }
      },
      {
        path:'/exercise6',
        component:()=>import('@/views/exercise/Exercise6.vue'),
        meta:{
          isstay:true,
          isstay:true
        }
      },
      //我的
      {
        path:'/user',
        component:()=>import('@/views/user/User.vue'),
        meta:{
          isShow:true,
          isstay:true
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
      },
      {
        path:'/userTeacher',
        component: () => import('../views/user/Teacher.vue'),
      },
      {
        path:'userenshrine',
        component: () => import('../views/user/Enshrine.vue'),
      },
      {
        path:'userperiod',
        component: () => import('../views/user/Period.vue'),
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
