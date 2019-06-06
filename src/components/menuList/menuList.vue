<template>
<div id="caipu">
        <div id="caipulist">
            <div>
               <BScroll>
                <ul>
                    <v-touch tag="li"  v-for="(item,index) in menuList" v-on:tap="seach($event,item.id,index)" :class="index==0?li:''">{{item.name}}</v-touch>
                </ul>
              </BScroll>
            </div>
            <div class="box">
                <ul>
                    <li  v-for="item in menuSeach" >{{item.value}}</li>
                </ul>
            </div>
        </div>
    </div>

        
    
</template>

<script>
import Vuex from 'vuex'
export default {

    data(){
        return{
            li:"LI"
        }
    },
  activated(){
    this.actMenuList({ 
    uid: 138453460,
    _HOP_: {"version":"1.0.0","action":"api.mattr.home","secret_id":"5722f877e4b0d4512e3fd872","current_time":1559786595,"sign":"f7a3700bdbee0c13d6142dd738914b9a"},
    from: "mvue",
    adcode: 100000,
    appid: 3,
    uuid: "051B99E1CD3DC1CCDFB1559043172157",
    hduid: 138453460,
    vc: 170,
    vn: "1.0.0"});
     this.actMenuSeach({
                id:"attr_dishes",
                _HOP_: {"version":"1.0.0","action":"api.mattr.second","secret_id":"5722f877e4b0d4512e3fd872","current_time":1559788156,"sign":"169e62bb5a9ff8c1a38a06e819d42c6c"},
                from: "mvue",
                adcode: 100000,
                appid: 3,
                uid: 138453460,
                uuid: "051B99E1CD3DC1CCDFB1559043172157",
                hduid: 138453460,
                vc: 170,
                vn: "1.0.0"
          })
  },
  

    computed:{
      ...Vuex.mapState({
            menuList:state=>state.menuList,
            menuSeach:state=>state.menuSeach
    })
    },
      
    methods:{
      ...Vuex.mapActions({
          actMenuList:"actMenuList",
          actMenuSeach:"actMenuSeach"
      }),
      seach(e,data,index){
          var arr=[
              {"current_time":1559788156,"sign":"169e62bb5a9ff8c1a38a06e819d42c6c"},
              {"current_time":1559792681,"sign":"9fdcf3bc78de8ae9074c393dfd3e2c1b"},
              {"current_time":1559792999,"sign":"a4f2068259312595e5bdcf6a25f7e588"},
              {"current_time":1559793043,"sign":"35322c93fec11b3611799b23a479b7c0"},
              {"current_time":1559793062,"sign":"ac1c066004303aa8ca811ae2d758b440"},
              {"current_time":1559793094,"sign":"1387a3e0775d88fd2db994969b610c7f"},
              {"current_time":1559793111,"sign":"fc60333d28e491a571d00285b1c08049"},
              {"current_time":1559793127,"sign":"647f63685348e8f97dae9d8eb6e28d10"},
              {"current_time":1559793142,"sign":"6d81d8b635893677fbee997ce074e7be"},
              {"current_time":1559793159,"sign":"c8e6ffab2e63e86f70b72ca07c222aa3"},
              {"current_time":1559793175,"sign":"88caff781e3090da132d753693506c4f"},
              {"current_time":1559793200,"sign":"9ae4d39948823d42b50f08b5580bc38c"},
              {"current_time":1559793213,"sign":"c2e1048441c38929b34988e4d2098ebb"},
              {"current_time":1559793247,"sign":"a3abc652d381e45761ba470ee2c0ec19"},
              {"current_time":1559793266,"sign":"2fe19779c471f74d5e6288d22cb06d74"},
              {"current_time":1559793279,"sign":"e328540d05cf05a54e7d3ab68c1c05f0"}
          ]
          this.actMenuSeach({
                id:data,
                _HOP_: {"version":"1.0.0","action":"api.mattr.second","secret_id":"5722f877e4b0d4512e3fd872","current_time":arr[index].current_time,"sign":arr[index].sign},
                from: "mvue",
                adcode: 100000,
                appid: 3,
                uid: 138453460,
                uuid: "051B99E1CD3DC1CCDFB1559043172157",
                hduid: 138453460,
                vc: 170,
                vn: "1.0.0"
          });
          
         var arr= e.target.parentNode.childNodes;
         for(var i=0;i<arr.length;i++){
             arr[i].className="";
         }
         e.target.className="LI";
      }
  },
  
}
</script>

<style scoped>
/* 假搜索 */

#caipu {
   background:#fff;
   margin-top:0.15rem;
   position: absolute;
   width: 100%;
   left:0;
   right:0;
}
#caipu #serch span{
    color: #a1a1a1;
}
#caipu #serch .icon-fangdajing{
    font-size: .14rem;
    color: #a1a1a1;
    margin-right: .04rem;

}

/*菜谱列表*/
#caipulist{
    display: flex;
    border-top: 1px solid #e2e2e2;
}
#caipulist div:first-child{
    background: #fbfbfb;
    width: .81rem;
    overflow-x: hidden;
    height: 5.3rem;
}

#caipulist div:first-child ul{
    height: max-content;
}
#caipulist div:first-child ul li{
    width: .79rem;
    height: .38rem;
    line-height: .38rem;
    text-align: center;
    border-right: 1px solid #e2e2e2;
    border-bottom: 1px solid #e2e2e2;
}
.LI{
    border-right:none !important;
    background: #fff;
}
.box{
    background: #fff;
    flex: 1;
}
.box ul{
    display: flex;
    flex-wrap: wrap;
    width: 2.16rem;
    margin: 0 auto;
    justify-content: space-between;
}
.box ul li{
    padding: .08rem .06rem;
    border: 1px solid #e2e2e2;
    border-radius: .03rem;
    margin-top: .1rem;
}
</style>

