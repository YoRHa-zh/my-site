<template>
  <div
    class="carousel-item-container"
    ref="wrap"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <div class="img" ref="inner" 
    :style="imagePosition"
    >
      <ImageLoader
        @load="this.showWords"
        :src="carousel.bigImg"
        :placeholder="carousel.midImg"
      />
    </div>
    <div class="title" ref="title">{{ carousel.title }}</div>
    <div class="description" ref="desc">{{ carousel.description }}</div>
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader";
export default {
  components: {
    ImageLoader,
  },
  props: ["carousel"],
  data() {
    return {
      titleWidth: 0,
      descWidth: 0,
      wrapSize: 0,
      innerSize: 0,
      mouseX: 0,
      mouseY: 0,
    };
  },
  mounted() {
    this.titleWidth = this.$refs.title.clientWidth;
    this.descWidth = this.$refs.desc.clientWidth;
    this.setSize();
    this.mouseX = this.center.x;
    this.mouseY = this.center.y
    window.addEventListener("resize", this.setSize);
  },
  destroyed(){
    window.removeEventListener('resize',this.setSize)
  },
  computed: {
    imagePosition() {
      if (!this.innerSize || !this.wrapSize) {
        return;
      }
      const extraWidth = this.innerSize.width - this.wrapSize.width;
      const extraHeight = this.innerSize.height - this.wrapSize.height;
      const left = (-extraWidth / this.wrapSize.width) * this.mouseX;
      const top = (-extraHeight / this.wrapSize.height) * this.mouseY;
      return {
        transform: `translate(${left}px,${top}px)`,
      };
    },
    center() {
      return {
        x: this.wrapSize.width / 2,
        y: this.wrapSize.height / 2,
      };
    },
  },
  methods: {
    showWords() {
      this.$refs.title.style.opacity = 1;
      this.$refs.title.style.width = 0;

      this.$refs.title.clientWidth; //强制渲染
      this.$refs.title.style.transition = "1s";

      this.$refs.title.style.width = this.titleWidth + "px";

      this.$refs.desc.style.opacity = 1;
      this.$refs.desc.style.width = 0;

      this.$refs.desc.clientWidth; //强制渲染
      this.$refs.desc.style.transition = "2s 1s";

      this.$refs.desc.style.width = this.descWidth + "px";
    },
    setSize() {
      (this.wrapSize = {
        width: this.$refs.wrap.clientWidth,
        height: this.$refs.wrap.clientHeight,
      }),
        (this.innerSize = {
          width: this.$refs.inner.clientWidth,
          height: this.$refs.inner.clientHeight,
        });
    },
    handleMouseEnter(e) {
      const rect = this.$refs.wrap.getBoundingClientRect();
      this.mouseX = e.clientX - rect.left;
      this.mouseY = e.clientY - rect.top;
    },
    handleMouseLeave() {
      this.mouseX = this.center.x;
      this.mouseY = this.center.y;
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.carousel-item-container {
  width: 100%;
  height: 100%;
  color: #fff;
  position: relative;
  overflow: hidden;
  .img {
    width: 110%;
    height: 110%;
    position: absolute;
    left: 0;
    top: 0;
    transition: 0.3s;
  }
  .title,
  .description {
    position: absolute;
    left: 30px;
    letter-spacing: 3px;
    color: #fff;
    overflow: hidden;
    white-space: nowrap;
    text-shadow: 1px 0 0 rgba(0, 0, 0, 0.5), -1px 0 0 rgba(0, 0, 0, 0.5),
      0 1px 0 rgba(0, 0, 0, 0.5), 0 -1px 0 rgba(0, 0, 0, 0.5);
    opacity: 0;
  }
  .title {
    font-size: 2em;
    top: calc(50% - 40px);
  }
  .description {
    font-size: 20px;
    top: calc(50% + 20px);
    color: lighten(@gray, 20%);
  }
}
</style>