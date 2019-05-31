<template>
  <div id="app">
   <top/>
   <div class="main">
        <seach/>
        <router-view></router-view>  
   </div>
  </div>
</template>
<script>
import top from "@/components/top"
import seach from "@/components/seach"
export default {
  components:{
    top,
    seach
  }
}
</script>

<style lang="scss">
.main{
  padding:0 0.1rem;
}
</style>
