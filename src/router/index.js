import Vue from 'vue'
import Router from 'vue-router'



Vue.use(Router)

const AuthRoute = [
  {
    path: '/register-form',
    name: 'Register Form',
    component: () => import('../pages/RegisterForm.vue')
  }
];

const MainRoute = [
  {
    path: '/',
    name: 'home',
    component: () => import('../pages/HomePage.vue')
  }
]


export default new Router({

routes: MainRoute.concat(AuthRoute),
  
})
