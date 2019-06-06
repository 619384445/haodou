import Vue from 'vue'
import Vuex from 'vuex'
import mutations from '@/store/mutations'
import actions from '@/store/actions'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      indexShow:JSON.parse(sessionStorage.getItem("indexShow"))||[],
      indexFood:JSON.parse(sessionStorage.getItem("indexFood"))||[],
      users:JSON.parse(sessionStorage.getItem("users"))||[],
      kitchen:JSON.parse(sessionStorage.getItem("kitchen"))||[],
      menu:JSON.parse(sessionStorage.getItem("menu"))||[],
      serch:null,
      loginFlag:true,
      shop:[],
      menuList:[],
      menuSeach:[],
      Seach2:[]
  },
  mutations,
  actions
})
