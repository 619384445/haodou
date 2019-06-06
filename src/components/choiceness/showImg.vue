<template>
   
              <div class="swiper-container showImg">
                    <div class="swiper-wrapper ul">
                        <div class="swiper-slide" v-for="item in indexShow">
                             <img :src="item.cover">
                        </div>
                    </div>
              </div>   
     
</template>

<script>
import Swiper from 'swiper';
export default {
 props:["indexShow"],
  mounted(){
     new Swiper ('.swiper-container', {
     loop: true,
     autoplay:true
  }
  )        
  }
}
</script>

<style scoped>
.showImg{
    position: relative;
    overflow: hidden;
    height: 1rem;
    width: 100%;
     margin-top:0.05rem;
}
.showImg .ul{
 position:absolute;
 height: 1rem;
 display: flex;
 flex-wrap: nowrap;
}

.showImg img{
       
        width: 100%;
        height: 1rem;
        border-radius: 0.05rem;
     }
     
</style>


