import Vue from 'vue'
import Router from 'vue-router'



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
      component:resolve => require(['@/components/choiceness/choiceness'],resolve),
      meta:{
        sFlag:false
      }
      
    },
    {
      props:true,
      path: '/newproduct',
      name: 'newproduct',
      component:resolve => require(['@/components/newproduct/newproduct'],resolve),
      meta:{
        sFlag:false
      }
    },
    {
      props:true,
      path: '/kitchen',
      name: 'kitchen',
      component: resolve => require(['@/components/kitchen/kitchen'],resolve),
      meta:{
        sFlag:false
      }
    },
    {
      props:true,
      path: '/menu',
      name: 'menu',
      component: resolve => require(['@/components/menu/menu'],resolve),
      meta:{
        sFlag:false
      }
    },
    {
      props:true,
      path: '/serch',
      name: 'serch',
      component:resolve => require(['@/components/serch/serch'],resolve),
      meta:{
        sFlag:true
      }
    },
    {
      path: '/commodity/:id',
      name: 'commodity',
      component:resolve => require(['@/components/commodity/commodity'],resolve),
      meta:{
        sFlag:true
      }
    },
    {
      path: '/menuList',
      name: 'menuList',
      component:resolve => require(['@/components/menuList/menuList'],resolve),
      meta:{
        sFlag:true
      }
    },
    {
      path: '/result',
      name: 'result',
      component:resolve => require(['@/components/serch/result'],resolve),
      meta:{
        sFlag:false
      }
    }
]
})
