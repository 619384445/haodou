<template>
    <div class="choiceness">
        <showImg></showImg>
           <div class="nav">
             <div v-for="item in indexShow[1].dataset">
                <img :src="item.img">
                <p>{{item.name}}</p>
             </div>
          </div>

            <div class="navList-wrap">
                  <div class="navList" >
                        <div v-for="item in indexShow[2].dataset">
                           <img :src="item.img">
                        </div>
                  </div>
            </div>

            <foods :indexFood="indexFood"></foods>
    </div>
</template>

<script>
import showImg from '@/components/choiceness/showImg'
import foods from '@/components/foods'
import Vuex from 'vuex'
export default {
  created(){
    this.actGet({ 
    id: "5cb041e68ee0ad30421354e2",
    _HOP_: {"version":"1.0.0","action":"front.page.get","secret_id":"5722f877e4b0d4512e3fd872","current_time":1559046392,"sign":"eccfd8efe3f8fe34eb8eefd0847ea59a"},
    from: "mvue",
    adcode: 100000,
    appid: 3,
    uid: 138453460,
    uuid: "051B99E1CD3DC1CCDFB1559043172157",
    hduid: 138453460,
    vc: 170,
    vn: "1.0.0"  });
  this.actFood();

   
  },
components:{
    showImg,
    foods
    },
    computed:{
      ...Vuex.mapState({
            indexShow:state=>state.indexShow,
            indexFood:state=>state.indexFood
    })
    },
      
    methods:{
      ...Vuex.mapActions({
          actGet:"actGetIndex",
          actFood:"actGetFood"
      })
  },
  
}

</script>

<style scoped>
.showImg img{
        width: 100%;
        height: 1rem;
        border-radius: 0.05rem;
     }
     .nav{
       display:flex;
       flex-wrap: wrap;
       justify-content: space-around;
       padding: .1rem 0;
     }
     .nav div{
       width:25%;
       text-align: center;
     }
     .nav div img{
         width: .4rem;
     }

     .navList-wrap{
       position: relative;
       overflow: hidden;
       height: 0.5rem;
     }
     .navList{
       position: absolute;
       width:600%;
     }
     .navList div{
       margin-right: 0.1rem;
       
     }
     .navList img,.navList div{
      float: left;
      height: 0.5rem;
     }



     
</style>

