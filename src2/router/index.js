import Vue from 'vue'
import VueRouter from 'vue-router'


const Login = () => import('../views/Login.vue')
const register = () => import('../views/register.vue')

const user_first = () => import('../views/user/user_first.vue')
const apply = () => import('../views/user/apply.vue')
 const common_question = () => import('../views/user/common_question.vue')
const feedback_form = () => import('../views/user/feedback_form.vue')
const my_feedback = () => import('../views/user/my_feedback.vue')
const my_inform = () => import('../views/user/my_inform.vue')
const version = () => import('../views/user/version.vue')

const manager_first = () => import('../views/manager/manager_first.vue')
const add_version = () => import('../views/manager/add_version.vue')
const alter_common_ques = () => import('../views/manager/alter_common_ques.vue')
const authorization = () => import('../views/manager/authorization.vue')
const handle_apply = () => import('../views/manager/handle_apply.vue')
const log = () => import('../views/manager/log.vue')
const manage_users = () => import('../views/manager/manage_users')
const my_worksheet = () => import('../views/manager/my_worksheet.vue')
const software = () => import('../views/manager/software.vue')

Vue.use(VueRouter)

const routes = [
 
  {
    path:'/login',
    component:Login
  },
  {
    path:'/register',
    component:register
  },

  {
    path:'/user_first',
    component:user_first,
    children:[
      {
        path:'/user_first/apply',
        component:apply
      },
      {
        path:'/user_first/common_question',
        component:common_question
      },
      {
        path:'/user_first/feedback_form',
        component:feedback_form
      },
      {
        path:'/user_first/my_feedback',
        component:my_feedback
      },
      {
        path:'/user_first/my_inform',
        component:my_inform
      },
      {
        path:'/user_first/version',
        component:version
      },

     
    ]
  },

  {
    path:'/manager_first',
    component:manager_first,
    children:[
      {
      path:'/manager_first/add_version',
        component:add_version
    },
    {
    path:'/manager_first/alter_common_ques',
        component:alter_common_ques
    },
    {
    path:'/manager_first/authorization',
        component:authorization
    },
    {
    path:'/manager_first/log',
        component:log
    },
    {
      path:'/manager_first/manage_users',
          component:manage_users
      },
      {
        path:'/manager_first/my_worksheet',
            component:my_worksheet 
        },
        {
          path:'/manager_first/software',
              component:software
          },
          {
            path:'/manager_first/handle_apply',
                component:handle_apply
            },
  ]
  },
]

const router = new VueRouter({
  routes
})

export default router
