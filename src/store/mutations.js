export default {
    mutGetIndex(state,parameter){
        state.indexShow=parameter;
        sessionStorage.setItem("indexShow",JSON.stringify(state.indexShow)); 
        state.loginFlag=false;
},
    mutGetFood(state,parameter){
      state.indexFood=parameter;
      sessionStorage.setItem("indexFood",JSON.stringify(state.indexFood));
      state.loginFlag=false;
},
     mutGetUsers(state,parameter){
      state.users=parameter;
      sessionStorage.setItem("users",JSON.stringify(state.users));
      state.loginFlag=false;
     },
     mutKitchen(state,parameter){
      state.kitchen=parameter;
      sessionStorage.setItem("kitchen",JSON.stringify(state.kitchen));
      state.loginFlag=false;
     },
     mutMenu(state,parameter){
        state.menu=parameter;
        sessionStorage.setItem("menu",JSON.stringify(state.menu));
        state.loginFlag=false;
       },
       mutSerch(state,parameter){
        state.serch=parameter;
       },
       mutShop(state,parameter){
        state.shop=parameter;
       },
       mutMenuList(state,parameter){
        state.menuList=parameter;
       },
       mutMenuSeach(state,parameter){
        state.menuSeach=parameter;
       },
       mutSeach2(state,parameter){
        state.Seach2=parameter;
        state.loginFlag=false;
       }
}