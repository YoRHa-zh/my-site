<template>
  <div class="imageloader-container">
    <img v-if="prev" :src="placeholder" alt="" class="prev" />
    <img :src="src" alt="" @load="handleLoad" :style="{opacity:OriginLoaded,transition:`${duration}ms`}" />
  </div>
</template>

<script>
// import {serve} from '@/config.js'
export default {
    data(){
        return{
            prev:true,
            originLoaded:false
        }
    },
  props: {
    src: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: 500,
    },
  },
  computed:{
      OriginLoaded(){
          return this.originLoaded ? 1:0
      },
      // imgUrl(){
      //   return serve + this.src
      // }
  },
  methods:{
      handleLoad(){
          this.originLoaded = true;
          setTimeout(() => {
          this.prev = false;
          this.$emit('load')
          }, this.duration);
      }
  }
};
</script>

<style lang=less scoped>
@import '~@/styles/mixin.less';
.imageloader-container {
     width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
  img {
    .self-fill();
    object-fit: cover;
  }
  .prev{
      filter: blur(2vh);
  }
}
</style>