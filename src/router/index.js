import VueRouter from 'vue-router'
import Vue from 'vue'

const Home = () => import('../views/home/Home')
const Cart = () => import('../views/cart/Cart')
const Category = () => import('../views/category/Category')
const Mine = () => import('../views/mine/Mine')
const Details = () => import('@/views/details/Details.vue')
Vue.use(VueRouter)
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/mine',
    component: Mine
  },
  {
    path: '/details',
    component: Details

  }
]
const router = new VueRouter({
  mode: 'history',
  routes
})
export default router