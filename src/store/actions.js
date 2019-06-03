import axios from 'axios'
import {getIndex} from '@/api'
export default {
    async actGetIndex({commit},parameter){
        let data= await getIndex(parameter);
        commit('mutGetIndex',data.data.dataset);
       
      },
      async actKitchen({commit},parameter){
             let data= await getIndex(parameter);
             commit('mutKitchen',data.data.dataset);
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
  },
  actMenu({commit}){
    axios({
        method:"get",
        url:"http://localhost:3000/menu"
    }).
    then((res)=>{
        res.data.map((item)=>{ 
            item.flag = true;
        })
        commit("mutMenu",res.data);
    })
}
}