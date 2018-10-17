import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'

Vue.use(Vuex)

const state = {
  isAuthenticated: false, //是否授权--登录状态
  user:{}, //用户信息,
}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
export default store










