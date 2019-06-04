<template>
          <div class="seach">
            <router-link to="/serch" tag="button">搜索美食/菜单/用户</router-link>
            <i class="iconfont icon-ling"></i>
            <i class="iconfont icon-shipin"></i>
            <i class="iconfont icon-ling"></i>
          </div>   
</template>

<script>
export default {
    created(){
       
    },
    name:"seach",
    methods:{
        
    }

}
</script>

<style scoped>
.seach{
        height: .3rem;
        padding: .05rem  0;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
      }
      .seach  button{
        height: 0.25rem;
        width:60%;
        text-align: center;
        color:#ccc;
        background:#fff;
        border-radius: .15rem;
        border:none;
      }
      .seach i{
        font-size: .2rem;
        color:#ccc;
      }
</style>

