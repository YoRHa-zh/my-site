<template>
<div class="about-container" v-loading="loading">
  <iframe :src="data" frameborder="0"></iframe>
</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed:mapState('about',['data','loading']),
   created(){
  this.$store.dispatch('about/fetchAbout') 
 }
 }

</script>

<style scoped lang="less">
.about-container{
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  iframe{
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }

}
</style>