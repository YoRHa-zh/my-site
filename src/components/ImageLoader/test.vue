<template>
  <div class="test-container">
    <ImageLoader :src="src" :placeholder="placeholder" @load="handle" :duration="duration" />
  </div>
</template>

<script>
import ImageLoader from "./";
export default {
  components: { ImageLoader },
  data() {
    return {
      src:
        "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304",
      placeholder:
        "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100",
      duration: 500,
    };
  },
  methods: {
    handle() {
      console.log("组件加载完成！");
    },
  },
};
</script>

<style>
.test-container{
  width: 500px;
  height: 600px;
  border: 2px solid;
  margin: 0 auto;
}
</style>