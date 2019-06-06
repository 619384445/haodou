<template>
  <div id="app">
    <login v-if="loginFlag && !$route.meta.sFlag"/>
      <top v-if="!$route.meta.sFlag"/>
      <seach2 v-if="$route.meta.sFlag"/>
      
   <BScroll ref="App">
     
      <div class="main">
        <p v-if="flush.flag" class="flush">{{msg}}</p>
            <seach v-if="!$route.meta.sFlag"/>
            <keep-alive>
            <router-view></router-view>  
            </keep-alive>
         
      </div>
   </BScroll>
  </div>
</template>
<script>
import top from "@/components/top"
import seach from "@/components/seach"
import seach2 from "@/components/seach2"
import { Indicator,Toast } from 'mint-ui';

import Vuex from 'vuex'
import { setTimeout } from 'timers';
export default {
  data(){
    return{
        msg:"松开刷新",
        flush:{
          flag:false,
          m1:"玩命加载中",
          m2:"松开刷新",
          m3:"加载完成！"
      }
    }
  },
created(){
  console.log(this);
},
  components:{
    top,
    seach,
    seach2
  },
  computed:{
          ...Vuex.mapState({
          loginFlag:state=>state.loginFlag
    })
  },
  mounted(){
      this.$refs.App.handUp(()=>{
          if(!this.flush.flag){
              this.flush.flag=true;
              this.msg=this.flush.m2;
          }
         
      });
      this.$refs.App.handDown(()=>{
        var instance=null;
          if(this.flush.flag){
              this.msg=this.flush.m1;
               Indicator.open({
                  text: '玩命加载中！',
                  spinnerType: 'fading-circle'
                });
              setTimeout(()=>{
                this.msg=this.flush.m3;
                Indicator.close();
                  instance= Toast({
                  message: '加载完成！',
                  iconClass: 'icon icon-success'
                });
              },1000)
                setTimeout(()=>{
                this.flush.flag=false;
                instance.close();
              },1800)
          }
      });
  }
  
}
</script>

<style lang="scss">
html{
  height: 100%;
}
body{
  height: 100%;
  background:#f5f5f5;
}
#app{
  height: 100%;
}
.main{
  padding:0 0.1rem;
  padding-top:0.3rem;
  
}
.flush{
  text-align: center;
  height:0.4rem;
  line-height: 0.4rem;
}
</style>
