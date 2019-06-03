<template>
     <div class="recommend">
                  <div class="users">
                      <BScroll>
                            <ul>
                                <li v-for="item in users">
                                  <div><img :src="item.avatar" alt=""></div>
                                  <p>{{item.name}}</p>
                                </li>
                            </ul>
                      </BScroll>
                      </div>  
                  <foods :indexFood="indexFood"></foods>
            </div>
            
  
</template>

<script>
import foods from '@/components/foods'
import Vuex from 'vuex'
export default {
   activated(){
      this.actFood();
      this.actUsers();
   },

components:{
    foods
    },
   methods:{
      ...Vuex.mapActions({
          actUsers:"actGetUsers",
          actFood:"actGetFood"
      })
  },
  computed:{
      ...Vuex.mapState({
            indexFood:state=>state.indexFood,
            users:state=>state.users
    })
    }
}
</script>

<style scoped>
      .users{
       overflow-y: hidden;
       margin-top:.2rem;
     }
   
     .users ul {
     width: max-content;
     }

     .users ul li{
         float: left;
        width: 0.6rem;
     }
     .users ul li p{
      width: 0.45rem;
      float: left;
      text-align: center;
      width:100%;
      white-space: nowrap;
      overflow:hidden;
      text-overflow:ellipsis;

     }
     .users ul li div{
      width: 0.45rem;
      height: 0.45rem;
      border-radius: 50%;
      border:1px solid red;
      overflow: hidden;
      margin:0 auto;
     }
     .users ul li div img{
      width: 0.45rem;
      height: 0.45rem;
     }

     
</style>

