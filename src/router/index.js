import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Work from '../views/Work.vue'
import Skills from '../views/Skills.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: { name: 'Home' }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/work',
    name: 'Work',
    component: Work
  },
  {
    path: '/skills',
    name: 'Skills',
    component: Skills
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
