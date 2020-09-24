import Vue from "vue";
import Vuex from "vuex";
// 引入子模块
import user from './modules/user'
import shop from './modules/shop.js'
import order from './modules/order.js'
import userTalk from './modules/userTalk.js'

Vue.use(Vuex);

export default new Vuex.Store({
  modules:{
    user,
    shop,
    order,
    userTalk
  }
});
