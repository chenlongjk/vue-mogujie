import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import './common/component.js'
Vue.config.productionTip = false
// http://192.168.0.25:1234/api/Mall/MallProductRecommendList

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
