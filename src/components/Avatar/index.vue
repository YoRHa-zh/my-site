<template>

    <img class="avatar-container" :src="url" :style="{
        width:size+'px',
        height:size+'px'
        
    }"/>
</template>

<script>
// import {serve} from '@/config.js'
export default {
    props:{
        url:{
            type:String,
            required:true
        },
        size:{
            type:Number,
            default:150
        }
    },
    // computed:{
    //     imgUrl(){
    //         return serve + this.url
    //     }
    // }
}
</script>

<style scoped>
.avatar-container {
  border-radius: 50%;
  object-fit: cover;
  display: block;
}
</style>