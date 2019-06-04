<template>
    <div>
         <div id="sousuo">
            <div>
                <i class="iconfont icon-fangdajing"></i>
                <input type="text" placeholder="搜索美食/菜单/用户" :value="tVla" @keyup="serch($event)">
            </div>
             <v-touch v-on:tap="blck" tag="span">
              返回
             </v-touch>
        </div>
        <div id="serchlist" v-if="flag">
                    <p>搜索“<span>{{tVla}}</span>”</p>
                    <ul>
                        <li v-for="item in sData">
                            <span>
                                <i class="iconfont icon-fangdajing"></i>
                                {{item.query}}
                            </span>
                                <i class="iconfont icon-changjiantou-zuo"></i>
                        </li>
                       
                    </ul>
            </div> 
</div>
</template>

<script>
import Vuex from 'vuex'
import { setTimeout } from 'timers';
export default {
    data(){
        return{
            tVla:"",
            flag:false,
            timr:null
        }
    },
    name:"seach2",
    methods:{
      blck(){
          this. $router.back(-1);
      },
      serch(e){
          var i=0;
          this.tVla=e.path[0].value;
          if(this.tVla==""){
              this.flag=false;
          }else{
              this.flag=true;
          }
          if(this.timr){
            clearTimeout(this.timr);
          }else{
                this.timr=setTimeout(function(){
                    this.actSerch({
                            keyword: this.tVla=e.path[0].value,
                            _HOP_: {"version":"1.0.0","action":"api.searchs.new.suggest","secret_id":"5722f877e4b0d4512e3fd872","current_time":1559618035,"sign":"528f0e1c3029bc92af5e01a17baea30b"},
                            from: "mvue",
                            adcode: 100000,
                            appid: 3,
                            uid: 138453460,
                            uuid: "051B99E1CD3DC1CCDFB1559043172157",
                            hduid: 138453460,
                            vc: 170,
                            vn: "1.0.0"});
                            this.timr=null;
                            console.log(this.sData)
                }.bind(this),500);
          }
        
          
      },
        ...Vuex.mapActions({
         actSerch:"actSerch",
      })

    },
    computed:{
          ...Vuex.mapState({
            sData:state=>state.serch,
    })
    }
   
}
</script>

<style scoped>
#sousuo{
    height: .38rem;
    background: #ff8900;
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 1000;
    position:fixed;
    top:0;
    left:0;
    right:0;
}
#sousuo div{
    display: flex;
    height: .23rem;
    background: #fff;
    align-items: center;
    border-radius: .1rem;
    width: 2.62rem;
}
#sousuo div input{
    border: 0;
    width: 2.2rem;
    font-size: .14rem
}
#sousuo div input::-webkit-input-placeholder{
    color: #b0b0b0;
    font-size: .12rem;
}
#sousuo>div>.icon-fangdajing{
    font-size: .1rem;
    color: #b0b0b0;
    margin:  0 .04rem 0 .13rem;
}
#sousuo span{
    color: #fff;
    font-size: .14rem;
}


#serchlist{
    padding: 0 0.1rem;
    position: fixed;
    top: .37rem;
    left: 0;
    right: 0;
    z-index: 1000;
    background:#f5f5f5;
    height: 100%;
}

#serchlist p{
    color: #f40;
    font-size: .14rem;
    border-bottom: 1px solid #eeeeee;
    height: .34rem;
    line-height: .34rem;
}
#serchlist p span{
    color: #f40;
    font-size: .14rem;
}
#serchlist ul li{
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #eeeeee;
    height: .34rem;
    line-height: .34rem;
}
#serchlist ul li .icon-fangdajing{
    font-size: .12rem;
    color: #dadada;
    margin-right: .1rem;
}
#serchlist ul li .icon-changjiantou-zuo{
    font-size: .12rem;
    color: #dadada;
    transition: all ;
    transform: rotateZ(45deg);
}
</style>

