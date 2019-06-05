<template>
<div class="top">     
    <!---->
    <div class="detail-show">
        <ul id="detail-show">
            <li style='z-index: 10;'>
                <img :src="shop.img">
                </li>
        </ul>
    </div>

    <!---->
    <div class="detail-evaluate">
        <h2>{{shop.foodName}}</h2>
        <p class="detail-evaluate-p1">
            <span class="iconfont">&#xe643;</span>
            <span class="iconfont">&#xe643;</span>
            <span class="iconfont">&#xe643;</span>
            <span class="iconfont">&#xe643;</span>
            <span class="iconfont iconfontNone">&#xe643;</span>
        </p>

        <p class="detail-evaluate-p2">
            <span>1.4万次浏览</span>
            <span>{{shop.difficulty}}难度</span>
            <span>制作时间5-20分钟</span>
        </p>

        <p class="detail-evaluate-p3">
                <span>香辣</span>
                <span>下酒菜</span>
                <span>快手菜</span>
        </p>
    </div>

    <!---->
    <div class="detail-user">
        <div class="detail-user-top">
            <p class="portrait">
                <a><img :src="shop.uImg"></a>
                <dl>
                    <dt class="name">{{shop.user}}</dt>
                    <dd>家常菜达人，喜欢美食，...</dd>
                </dl>
            <p>
            <p class="follow">
                <a href="">+关注</a>
            </p>
        </div>
        <h4>将要在海边生活一段时间，当然不能错过任何海鲜；花甲即花蛤,因粤语花蛤与花甲同音，花...</h4>
    </div>

    <!---->
    <div class="Ingredients">
    <div class="main">
        <h2>主料<span>1种</span></h2>
        <img src="http://recipe0.hoto.cn/pic/fooddata/e4/35/13796_120.jpg">
        <span>{{shop.materials}}</span>
        <span>500g</span>
    </div>

    <div class="accessories">
        <h2>辅料<span>13种</span></h2>
        <ul>
            <li><sapn>油</sapn><sapn>适量</sapn></li>
            <li><sapn>油</sapn><sapn>适量</sapn></li>
            <li><sapn>油</sapn><sapn>适量</sapn></li>
            <li><sapn>油</sapn><sapn>适量</sapn></li>
            <li><sapn>油</sapn><sapn>适量</sapn></li>
            <li><sapn>油</sapn><sapn>适量</sapn></li>
            <li><sapn>油</sapn><sapn>适量</sapn></li>
            <li><sapn>油</sapn><sapn>适量</sapn></li>
            <li><sapn>油</sapn><sapn>适量</sapn></li>
            <li><sapn>油</sapn><sapn>适量</sapn></li>
            <li><sapn>油</sapn><sapn>适量</sapn></li>
            <li><sapn>油</sapn><sapn>适量</sapn></li>
            <li><sapn>油</sapn><sapn>适量</sapn></li>
        </ul>
    </div>

    <div class="step">
            <h2 class="step-h2">烹饪步骤<span>11步</span></h2>
            <ul class="step-ul">
                <li>
                    <p>步骤1</p>
                    <p><img src="http://res.hoto.cn/5b4b36040135db7c7ffe0c9a.png!defaultp"></p>
                    <p>将新鲜花甲淘洗干净后，放入清水，加盐，一两滴油浸泡两个小时左右，让其吐沙，清水的量以莫过花甲为宜</p>
                </li>
                <li>
                        <p>步骤2</p>
                        <p><img src="http://res.hoto.cn/5b4b36060135db7c7ffe0c9b.png!defaultp"></p>
                        <p>将新鲜花甲淘洗干净后，放入清水，加盐，一两滴油浸泡两个小时左右，让其吐沙，清水的量以莫过花甲为宜</p>
                    </li>
                    <li>
                            <p>步骤3</p>
                            <p><img src="http://res.hoto.cn/5b4b36080135db7c7ffe0c9c.png!defaultp"></p>
                            <p>将新鲜花甲淘洗干净后，放入清水，加盐，一两滴油浸泡两个小时左右，让其吐沙，清水的量以莫过花甲为宜</p>
                        </li>
                                                      
            </ul>
    </div>
    </div>

    <!---->
    <div class="tag">
    <dl>
        <dd>小提示</dd>
        <dt>1.加入薄荷的花蛤味道很棒</dt>
        <dt>2.加入薄荷的花蛤味道很棒</dt>
    </dl>
    </div>
</div>
</template>

<script>
import Vuex from 'vuex'
export default {
    name:"commodity",
    data(){
        return{
            id:null
        } 
    },
    activated(){
        this.id=this.$route.params.id;
        this.actShop(this.id);
         console.log(this.shop);
    },
    methods:{
        ...Vuex.mapActions({
                actShop:"actShop",
            })
    },
   computed:{
      ...Vuex.mapState({
            shop:state=>state.shop,
    })
    }

}
</script>

<style scoped>

.title{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height:0.4rem;
    background: #fff;
    box-sizing: border-box;
    width:100%;
    position: fixed;
    top:0; 
    padding:0 .1rem;
    z-index: 100;
}
.title>div{
    display: flex;
    height:0.4rem;
    width: 1.2rem;
    font-size:0.26rem;
    align-items: center;
}
.title>div a{
    font-size:0.26rem;
}
.title-open{
    text-align: center;
    font-size:0.12rem;
    height: 0.26rem;
    line-height: .26rem;
    width:0.7rem;
    border:1px solid #ff4f31;
    color: #ff4f31;
    border-radius: .13rem;
}

.title-i{
    color:orangered ;
    margin-left:.1rem;
 }
 




.top{
    margin-top:0.17rem;
}
.detail-show{
    display: flex;
    height:2.85rem;
    width:100%;
    box-sizing: border-box;
    position: relative;
}
.detail-show>ul{
    height:2.85rem;
    width:100%;
    overflow: hidden;

}
.detail-show>ul>li{
    position: absolute;
    top:0;
    left:0;
    height:2.85rem;
    width:100%;
    overflow: hidden;
}
.detail-show img{
    height:100%;
    width: 100%;
}

.detail-evaluate{
    display: flex; 
    flex-direction: column;
    height:1.8rem;
    box-sizing: border-box;
    border-bottom: .01rem solid grey
}
.detail-evaluate h2{
    height:0.3rem;
    font-size:0.24rem;
    text-align: center;
    line-height: 0.3rem;
    font-weight: bold;
    padding-top:.14rem ;
}
.detail-evaluate-p1{
    display: flex;
    justify-content: center;
    padding: .10rem 0
}

.detail-evaluate-p1 .iconfont{
color: #ff4f31;
}
.detail-evaluate-p1 .iconfontNone{
 color: black
}
.detail-evaluate-p2{
    display: flex;
    justify-content: center;
}
.detail-evaluate-p2 span{
    padding: 0 .12rem
}
.detail-evaluate-p3{
    display: flex;
    justify-content: flex-start;
}
.detail-evaluate-p3 span{
    font-size: .10rem;
    color: #ff4f31;
    height:.26rem;
    line-height: .26rem;
    padding: 0 .1rem;
    border: 0.01rem solid #ff4f31;
    border-radius: .13rem;
    margin-left:.04rem;
    margin-top:.2rem;}

 .detail-user{
     display: flex;
     box-sizing: border-box;
     flex-direction: column; 
     padding-top:.2rem; 
 }
 .detail-user-top{
     display: flex;
     height: .64rem;
     justify-content: space-around;
 }
 .follow a{
     display: flex;
     height:.22rem;
     line-height: .22rem;
     justify-content: center;
     width: .54rem;
     border: .01rem solid #ff4f31;
     font-size: .12rem;
     color:#ff4f31;
     border-radius: .11rem;
 }

 .portrait{
     display: flex;
     flex-direction: row;
 }
 .portrait img{
   height:.42rem;
   width:.42rem;
   border-radius: 0.21rem;
}
.detail-user h4{
    display: flex;
    font-size: .14rem;
    color: black;
    flex-wrap: wrap;
    justify-content:flex-end;
}
.name{
    font-size: .14rem;
    color:black;
    font-weight: bold;
}
.Ingredients{
    display: flex;
    flex-direction: column;
    padding-top: .5rem;
    box-sizing: border-box;
    width: 100%;
}
.main{
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    width:.8rem;
    
}

.main h2{
    font-size: .2rem;
    font-weight: bold;
    color:black;
}
.main h2 span{
    font-size: .12rem;
    color:grey;
}
.accessories{
    display: flex;
    flex-direction: column;
    padding-top:.18rem;
    align-items: center;
    box-sizing: border-box;
    justify-content: center;
}
.accessories h2{
    font-size: .2rem;
    font-weight: bold;
    color:black;
    width: 96%;
}
.accessories h2 span{
    font-size: .12rem;
    color:grey;
}
.accessories ul{
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    box-sizing: border-box;
    width: 96%;
}
.accessories li{
    display: flex;
    height:.4rem;
    width:48%;
    background: #fafafa;
    border:.011rem solid #eee;
    display: flex;
    justify-content: space-around;
    font-size: .12rem;
    align-items: center; 
    color: black;

}
.step{
    box-sizing: border-box;
    padding-top:.2rem;
    width: 100%;
    overflow: hidden;
}
.step-h2{
    font-size: .2rem;
    font-weight: bold;
    color:black;

}
h2 span{
    font-size: .12rem;
    color:grey;
}
.step-ul{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width:100%;
    overflow: hidden;

}

.step-ul li{
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width:96%;
    justify-content: center;
    padding-bottom:.1rem; 
}
.step-ul li p:nth-child(1){
    height:.36rem;
    line-height: .36rem;
    font-size: .16rem;

}
.step-ul li p:nth-child(2){
    height:1.86rem;
    width:100%;
}

.step-ul li p:nth-child(2) img{
    height:100%;
    width:100%;
}
.step-ul li p:nth-child(3){
  padding-top:.1rem;
}

.tag{
    width:100%;
    box-sizing: border-box; 
    padding-bottom: .4rem;
    border-bottom:.01rem solid grey;
    margin-bottom: .2rem 
}
.tag dl{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}
.tag dl dd{
    font-size: .2rem;
    height:.4rem;
    line-height: .4rem;
}
.tag dl dt{
    font-size: .14rem;
    height:.2rem;
    line-height: .2rem;
}




</style>

