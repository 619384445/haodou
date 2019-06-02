import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import {getIndex} from '@/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      indexShow:JSON.parse(sessionStorage.getItem("indexShow"))||[],
      indexFood:JSON.parse(sessionStorage.getItem("indexFood"))||[],
      users:JSON.parse(sessionStorage.getItem("users"))||[]
     
  },
  mutations: {
      mutGetIndex(state,parameter){
          state.indexShow=parameter;
          sessionStorage.setItem("indexShow",JSON.stringify(state.indexShow)); 
 },
      mutGetFood(state,parameter){
        state.indexFood=parameter;
        sessionStorage.setItem("indexFood",JSON.stringify(state.indexFood));
 },
       mutGetUsers(state,parameter){
        state.users=parameter;
        sessionStorage.setItem("users",JSON.stringify(state.users));
        console.log(parameter);
       }
},
  actions: {
       async actGetIndex({commit},parameter){
          let data= await getIndex(parameter);
          commit('mutGetIndex',data.data.dataset);
         
        },
        actGetFood({commit}){
          axios({
              method:"get",
              url:"http://localhost:3000/foods"
          }).
          then((res)=>{
              res.data.map((item)=>{
                  item.flag = true;
              })
              commit("mutGetFood",res.data);
              
          })
      },
      actGetUsers({commit}){
        axios({
            method:"get",
            url:"http://localhost:3000/users"
        }).
        then((res)=>{
            res.data.map((item)=>{
                item.flag = true;
            })
            commit("mutGetUsers",res.data);
            
        })
    }


  }
})
