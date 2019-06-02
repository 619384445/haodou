import Vue from 'vue'
import Router from 'vue-router'
import choiceness from "@/components/choiceness/choiceness"
import newproduct from "@/components/newproduct/newproduct"
Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      redirect:'choiceness'
    },
    {
      props:true,
      path: '/choiceness',
      name: 'choiceness',
      component: choiceness
      
    },
    {
      props:true,
      path: '/newproduct',
      name: 'newproduct',
      component: newproduct
      
    }
]
})
