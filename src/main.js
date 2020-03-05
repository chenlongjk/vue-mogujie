import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import './common/component.js'
import  store from '@/store/index'
Vue.config.productionTip = false
// http://192.168.0.25:1234/api/Mall/MallProductRecommendList
Vue.prototype.$bus = new Vue()
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
