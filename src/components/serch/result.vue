<template>
<div class="sosuo">
        <div id="xuan">
            <p class="P">综合</p>
            <p>最热</p>
            <p>最新</p>
        </div>
        <div class="recommend">
                  <div class="recoBox" v-for="(item,index) in Seach2" v-if="!item.name">
                      <div class="foodBox">
                        <img :src="item.cover"  alt="" class="foodImg">
                        <div class="foodMsg">
                            <b>{{item.difficulty}}难度</b><br/>
                            <span>{{item.material}}</span><br/>
                            <i class="iconfont icon-wujiaoxing" v-for="i in item.rate"></i>
                           <br/>
                            <b>{{item.cntFavLike}}个人收藏</b>
                        </div>
                      </div>
                      <p>
                          <span class="user"><img :src="item.user.avatar" alt="">
                            {{item.user.nickname}}
                          </span>
                            
                           <span class="food"></span>
                      </p>
                  </div>
            </div>
</div>
      
            
  
</template>

<script>
import Vuex from 'vuex'
export default {

 computed:{
          ...Vuex.mapState({
            Seach2:state=>state.Seach2
    })
}
}
</script>

<style scoped>
.sosuo{
    margin-top: 0.05rem;
}
#xuan{
    height: .3rem;
    background:#fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid #eee;
}
#xuan p{
    color:#666666;
}
#xuan .P{
    color:#ff5000;
}
       .recoBox{
        background:#fff;
        border-radius: 0.1rem;
        padding: .1rem;
        
     }
     .icon-wujiaoxing{
      font-size:0.1rem !important;
      color:#ff7d01;
     }
     .recoBox p{
          overflow: hidden;
     }
     .recoBox{
          margin-top: 0.01rem;
     }
     .recoBox b{
         color:#ccc;
     }
    
     .foodImg{
       float: left;
       width: 30%;
       height: 0.8rem;
       border-radius: 0.05rem;
       margin-right: 0.08rem;
     }
     .foodMsg{
        float: left;
        line-height: 0.18rem;
        margin-top: 0.1rem;
     }
     .foodBox{
        overflow: hidden;
        margin-bottom: .05rem;
     }
     .user{
       font-size: 0.12rem;
       display:block;
       float: left;
      
     }
     .user img{
        width:.2rem;
        height: .2rem;
        border-radius: .1rem;
        vertical-align: middle;
     }
     .food{
       width: 0.45rem;
       height:0.2rem;
       border-radius: 0.1rem;
      
       float: right;
       text-align: center;
       line-height: 0.2rem;
       background: url(https://static.hoto.cn/mnuxt/dist/client/img/0695cf0.png);
    background-size: cover;
     }
</style>

