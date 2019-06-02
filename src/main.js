import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './store'

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