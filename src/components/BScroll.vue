<template>
    <div  ref="Bscroll" class="Bscroll">
        <slot></slot>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name:"BScroll",
    mounted(){
        this.scroll= new BScroll(this.$refs.Bscroll,{
            scrollX:true,
            scrollY:true,
            click: true,
            probeType:2
        });
    },
    methods:{
        handUp(cb){
            this.scroll.on("scroll",(pro)=>{
                if(pro.y>30)
                   cb();
            })
        },
         handDown(cb){
            this.scroll.on("touchEnd",(pro)=>{
                   cb();
            })
        }
    }
}

</script>

<style>
.Bscroll{
    height:100%;
}
</style>

