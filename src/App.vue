<template>
  <div id="app">
      <top v-if="!$route.meta.sFlag"/>
      <seach2 v-if="$route.meta.sFlag"/>
   <BScroll>
      <div class="main">
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

import Vuex from 'vuex'
export default {

  components:{
    top,
    seach,
    seach2
  },
  created(){
    console.log(this.$route)
  }
  
}
</script>

<style lang="scss">
html{
  height: 100%;
}
body{
  height: 100%;
}
#app{
  height: 100%;
}
.main{
  padding:0 0.1rem;
  padding-top:0.3rem;
}
</style>
