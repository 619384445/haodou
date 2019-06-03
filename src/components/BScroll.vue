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
            click: true
        });
    }
}

</script>

<style>
.Bscroll{
    height:100%;
}
</style>

