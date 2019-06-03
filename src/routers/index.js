import Vue from 'vue'
import Router from 'vue-router'
import choiceness from "@/components/choiceness/choiceness"
import newproduct from "@/components/newproduct/newproduct"
import kitchen from "@/components/kitchen/kitchen"
import menu from "@/components/menu/menu"

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
    },
    {
      props:true,
      path: '/kitchen',
      name: 'kitchen',
      component: kitchen
    },
    {
      props:true,
      path: '/menu',
      name: 'menu',
      component: menu
    }
]
})
