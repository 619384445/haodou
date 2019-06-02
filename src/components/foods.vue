
<template>
    <div class="recommend">
              <h1>为你推荐</h1>
                  <div class="recoBox" v-for="item in indexFood">
                      <div class="foodBox">
                        <img :src="item.img"  alt="" class="foodImg">
                        <div class="foodMsg">
                            <b>{{item.difficulty}}难度</b><br/>
                            <span>{{item.materials}}</span><br/>
                            <i class="iconfont icon-wujiaoxing" v-for="i in item.star"></i>
                           <br/>
                            <b>{{item.collect}}个人收藏</b>
                        </div>
                      </div>
                      <p>
                          <span class="user"><img :src="item.uImg" alt="">
                            {{item.user}}
                          </span>
                            
                           <span class="food"></span>
                      </p>
                  </div>
            </div>
</template>

<script>
export default {
props:["indexFood"]
}
</script>

<style scoped>
.recommend h1{
       font-size: 0.16rem;
       font-weight: bold;
       margin-bottom: 0.05rem;
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
          margin-top: 0.1rem;
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

