<template>

            <div class="head">

            <BScroll>
                <ul>
                  <router-link tag="li" to="/choiceness" >精选</router-link>
                  <router-link tag="li" to="/newproduct" >新味道</router-link>
                  <router-link tag="li" to="/menu" >菜单</router-link>
                  <router-link tag="li" to="/kitchen" >厨房宝典</router-link>
                  <li v-for="item in msg">{{item}}</li>
                </ul>
            </BScroll>
            
          </div>
    
</template>

<script>
export default {
    data(){
       return{
         msg:["川辣撩人","东北菜","羊肉","降三高","低卡瘦身餐","早餐"]
       }
    },
    name:"top",
    methods:{
        
    }

}
</script>

<style scoped>
.head{
          height: .3rem;
          background: #fff;
          overflow: hidden;
          position:fixed;
          width:100%;
          z-index: 1000;
      }
      .router-link-active{
        color:#ff7d01;
        font-weight:700;
      }
      .head ul li{
         float: left;
         padding: .05rem 0.1rem ;
      }
      .head ul{
        width:max-content;
      }
</style>

