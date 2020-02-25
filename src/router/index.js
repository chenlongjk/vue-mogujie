import VueRouter from 'vue-router'
import Vue from 'vue'
const Home = ()=> import('../views/home/Home')
const Cart = ()=> import('../views/cart/Cart')
const Category = ()=> import('../views/category/Category')
const Mine = ()=> import('../views/mine/Mine')
Vue.use(VueRouter)
const routes = [
  {
    path:'',
    redirect: '/home'
  },
  {
    path:'/home',
    component: Home
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/mine',
    component:Mine
  }
]
const router = new VueRouter({
  mode: 'history',
  routes
})
export default router