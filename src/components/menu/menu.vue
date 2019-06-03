<template>

        <div class="menu">
                <div id="calssify">
                    <ul>
                        <li><img src="http://res.hoto.cn/5c1cbe6a0135db7c7f015432.png!defaultp" alt=""><i>宴客有方</i></li>
                        <li><img src="http://res.hoto.cn/5c1cbe850135db7c7f015433.png!defaultp" alt=""><i>青春永驻</i></li>
                        <li><img src="http://res.hoto.cn/5c1cbe9d0135db7c7f015434.png!defaultp" alt=""><i>周末大餐</i></li>
                        <li><img src="http://res.hoto.cn/5c1cbee30135db7c7f015435.png!defaultp" alt=""><i>全部分类</i></li>
                    </ul>
                </div>
                <!-- 产品展示 -->
                <div class="Recommend" v-for="item in menu">
                    <div>
                        <p>{{item.title}}</p>
                        <span>查看{{item.count}}</span>
                    </div>
                    <p>{{item.brief}}</p>
                    <div>
                        <BScroll>
                        <ul>
                            <li v-for="i in item.dataset">
                                <img :src="i.cover" alt="">
                                <span>{{i.title}}</span></li>
                        </ul>
                        </BScroll>
                    </div>
                    <div>
                            <p>
                                <img :src="item.user.avatar" alt="">
                                <span>{{item.user.name}}</span></p>
                            <div>
                                <i class="iconfont icon-xiaoxi"></i>
                                <span>{{item.cntComment}}</span>
                                <i class="iconfont icon-xin"></i>
                                <span>{{item.cntFavorite}}</span>
                            </div>
                    </div>
                </div>

                    
                </div>
        </div>
    
</template>

<script>
import Vuex from 'vuex'
export default {
  activated(){
    this.actMenu();
  },
    computed:{
      ...Vuex.mapState({
            menu:state=>state.menu
    })
    },
      
    methods:{
      ...Vuex.mapActions({
          actMenu:"actMenu",
      })
  },
  
}

</script>

<style scoped>
#calssify{
    background: #f3f3f3;
    height: .84rem;
   
}
#calssify>ul{
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
#calssify>ul>li{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}
#calssify>ul>li>img{
    height: .34rem;
    width: .34rem;
    border-radius: 50%;
    margin-bottom: .1rem;
}



/* 产品展示 */

.Recommend{
    width: 2.9rem;
    background: #fff;
    padding: .12rem .08rem;
    overflow: hidden;
    margin: 0 auto;
    border-radius: .06rem;
    margin-bottom: .14rem;
}
.Recommend>div:nth-of-type(1){
    display: flex;
    justify-content: space-between;
}
.Recommend>div:nth-of-type(1)>p{
    font-size: .16rem;
    color: #000;
    width: 1.8rem;
    height: .3rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.Recommend>div:nth-of-type(1)>span{
    /* width: .45rem; */
    height: .17rem;
    border: 1px solid #ff7d01;
    border-radius: .03rem;
    text-align: center;
    color:#ff7d01;
}
.Recommend>p:nth-of-type(1){
    display: -webkit-box;
    -webkit-line-clamp:2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    color: #888;
    font-size: .11rem;
}
.Recommend>div:nth-of-type(2){
    overflow-y: hidden;
}
.Recommend>div:nth-of-type(2) ul{
    display: flex;
    flex-wrap: nowrap;
    width:max-content;
    margin-left: .02rem;
}
.Recommend>div:nth-of-type(2)::-webkit-scrollbar{
    display: none;
}
.Recommend>div:nth-of-type(2) ul>li{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: .89rem;
    margin-right: .06rem;
}
.Recommend>div:nth-of-type(2) ul>li>img{
    width: .89rem;
    height: .89rem;
}
.Recommend>div:nth-of-type(2) ul>li>span{
    width: .8rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    color: #000;
}
.Recommend>div:nth-of-type(3){
    display: flex;
    justify-content: space-between;
    margin-top: .11rem;
}
.Recommend>div:nth-of-type(3)>p>img{
    width: .17rem;
    height: .17rem;
    border-radius: 50%;
    vertical-align: middle;
    margin-right: .02rem;
}
.Recommend>div:nth-of-type(3)>div{
    display: flex;
    justify-content: space-around;
    width:.6rem;
}
.Recommend>div:nth-of-type(3)>div>.icon-xiaoxi{
    font-size: .09rem;
    color: #888;
}
.Recommend>div:nth-of-type(3)>div>.icon-xin{
    font-size: .09rem;
    color: #888;
}
.Recommend>div:nth-of-type(3)>div>span{
    font-size: .09rem;
    color: #888;

}
</style>

