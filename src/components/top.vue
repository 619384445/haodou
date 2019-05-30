<template>
    <div class="top">

    </div>
</template>

<script>
import {http} from '../utils/http'
export default {
    created(){
       http({
           method:"post",
           url:"/hop/router/rest.json",
           data:{
              id: "5cb041e68ee0ad30421354e2",
                _HOP_: {"version":"1.0.0","action":"front.page.get","secret_id":"5722f877e4b0d4512e3fd872","current_time":1559046392,"sign":"eccfd8efe3f8fe34eb8eefd0847ea59a"},
                from: "mvue",
                adcode: 100000,
                appid: 3,
                uid: 138453460,
                uuid: "051B99E1CD3DC1CCDFB1559043172157",
                hduid: 138453460,
                vc: 170,
                vn: "1.0.0"            
           }
       }).then((res)=>{
           console.log(res);
       })
    },
    name:"top"
}
</script>

<style scoped>
.top{
        width:100%;
        height:1rem;
        background:red;
}
</style>

