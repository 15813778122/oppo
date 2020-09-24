import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vant from 'vant';
import vueSwiper from 'vue-awesome-swiper'
import '../node_modules/swiper/css/swiper.css'
// import VueTouch from '../node_modules/vue-touch/dist/vue-touch.js'
import 'vant/lib/index.css';
import "@/assets/css/reset.css"
import '@/assets/js/flexible.js'
import ElementUI from 'element-ui';//引入elementUI框架
import 'element-ui/lib/theme-chalk/index.css';//引入ui的css

//路由守卫
import './permission.js';

Vue.config.productionTip = process.env.NODE_ENV != 'development';
Vue.use(ElementUI)
Vue.use(Vant)
Vue.use(vueSwiper)
// Vue.use(VueTouch,{name:'v-touch'})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
