import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './store'
import BScroll from "@/components/BScroll"
import 'swiper/dist/css/swiper.css'
import VueTouch from 'vue-touch'
import login from "@/views/login"
import 'mint-ui/lib/style.css'



Vue.use(VueTouch, {name: 'v-touch'})
Vue.component('BScroll',BScroll)
Vue.component('login',login)




Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

export const getIndex = function(data){
  return http(data).then((res)=>{
          return res;
      })
}