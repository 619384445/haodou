import axios from 'axios'
import {getIndex} from '@/api'
export default {
    async actGetIndex({state,commit},parameter){
        state.loginFlag=true;
        let data= await getIndex(parameter);
        commit('mutGetIndex',data.data.dataset);
       
      },
      async actKitchen({state,commit},parameter){
        state.loginFlag=true;
             let data= await getIndex(parameter);
             commit('mutKitchen',data.data.dataset);
           },
    async actSerch({commit},parameter){
             let data= await getIndex(parameter);
             commit('mutSerch',data.data.dataset);
           },
    async actMenuList({commit},parameter){
             let data= await getIndex(parameter);
             commit('mutMenuList',data.data);
           },
    async actMenuSeach({commit},parameter){
             let data= await getIndex(parameter);
             commit('mutMenuSeach',data.data.dataset);
           },
    async actSeach2({state,commit},parameter){
             state.loginFlag=true;
             let data= await getIndex(parameter);
             commit('mutSeach2',data.data.dataset);
             console.log(data.data.dataset);
           },
      actGetFood({state,commit}){
        state.loginFlag=true;
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
    actGetUsers({state,commit}){
        state.loginFlag=true;
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
  },
  actShop({commit},parameter){
    axios({
        method:"get",
        url:"http://localhost:3000/foods/"+parameter
    }).
    then((res)=>{
 
        commit("mutShop",res.data);
    })
},
        actMenu({commit}){
            axios({
                method:"get",
                url:"http://localhost:3000/menu"
            }).
            then((res)=>{
                commit("mutMenu",res.data);
            })
        }
      
}