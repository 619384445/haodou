<template>
  <div id="app">
   <top/>
   <div class="main">
        <seach/>
        <keep-alive>
        <router-view></router-view>  
        </keep-alive>
   </div>
  </div>
</template>
<script>
import top from "@/components/top"
import seach from "@/components/seach"
import Vuex from 'vuex'
export default {

  components:{
    top,
    seach,
  },
  
}
</script>

<style lang="scss">
.main{
  padding:0 0.1rem;
  padding-top:0.3rem;
}
</style>
