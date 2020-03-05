import Vuex from 'vuex'
import Vue from 'vue'
import mutations from './mutations.js'
Vue.use(Vuex)
const store = new Vuex.Store({
  state:{
    cartList:[]
  },
  mutations,

  actions:{

  }
})
export default store