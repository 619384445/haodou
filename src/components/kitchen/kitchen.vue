<template>
    <div class="kitchen">
              <div id="baodian">
            <ul>
                <li v-for="item in kitchen[0].dataset">
                    <img :src="item.img" alt="">
                    <i>{{item.name}}</i>
                </li>
               
            </ul>
        </div>

        <!-- 生活技巧 -->
        <div id="baodianlist" v-for="item in kitchen[1].dataset">
            <div>
                <h3>{{item.share.title}}</h3>
                <div>
                    <h4>
                        <img :src="item.user.avatar">
                        {{item.user.nickname}}</h4>
                    <p>
                        <i class="iconfont icon-xiaoxi"></i>
                        <span>{{item.cntComment}}</span>
                        <i class="iconfont icon-zan"></i>
                        <span>{{item.cntFavLike}}</span></p>
                </div>
            </div>
            <img :src="item.cover||foodImg" alt="这里是美食">
        </div>
       
    </div>
</template>

<script>
import Vuex from 'vuex'
export default {
    data(){
      return {
          foodImg:"http://img1.hoto.cn/haodou/recipev4/wiki/195e1119b.jpg"
      }  
    },
  activated(){
    this.actKitchen({
        id: "5bc5aba52d493904572ef4f2",
        _HOP_: {"version":"1.0.0","action":"front.page.get","secret_id":"5722f877e4b0d4512e3fd872","current_time":1559545207,"sign":"05f053128d95cbf299364f45015d3570"},
        from: "mvue",
        adcode: 100000,
        appid: 3,
        uid: 138453460,
        uuid: "051B99E1CD3DC1CCDFB1559043172157",
        hduid: 138453460,
        vc: 170,
        vn: "1.0.0"
    });
  
  },
    computed:{
      ...Vuex.mapState({
            kitchen:state=>state.kitchen,
    })
    },
      
    methods:{
      ...Vuex.mapActions({
          actKitchen:"actKitchen",
      })
  },
  
}

</script>

<style scoped>
    #baodian{
    background: #f3f3f3;
    height: .84rem;
}
#baodian>ul{
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
#baodian>ul>li{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}
#baodian>ul>li>img{
    height: .34rem;
    width: .34rem;
    margin-bottom: .1rem;
}

/* 厨房宝典技巧 */
#baodianlist{
    width: 2.9rem;
    background: #fff;
    border-radius: .1rem;
    margin: 0 auto;
    padding: .1rem;
    display: flex;
    justify-content: space-between;
    margin-bottom: .14rem;
}
#baodianlist>div{
    width: 1.8rem;
}
#baodianlist>div h3{
    font-size: .14rem;
    color: #000;
    width: 1.57rem;
    display: -webkit-box;
    -webkit-line-clamp:2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
#baodianlist>div div{
    display: flex;
    justify-content: space-between;
    margin-top: .22rem;
}
#baodianlist>div div h4{
    width: .84rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
#baodianlist>div div h4 img{
    width: .17rem;
    height: .17rem;
    border-radius: 50%;
    vertical-align: middle;
    margin-right: .03rem;
}
#baodianlist>div div p{
    display: flex;
    width: .7rem;
    justify-content: space-between;
}
#baodianlist>img{
    width: .97rem;
    height: .73rem;
    border-radius: .03rem;
}
#baodianlist .icon-xiaoxi{
    font-size: .11rem;
    color: #888;
}
#baodianlist .icon-zan{
    font-size: .11rem;
    color: #888;
}
#baodianlist>div div span{
    color: #888;
}
</style>


