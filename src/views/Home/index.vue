<template>
  <div class="home-container" ref="container" @wheel="handleWheel" v-loading="loading">
    <ul
      class="carousel-container"
      :style="{ marginTop }"
      @transitionend="handleTransitionEnd"
    >
      <li v-for="item in data" :key="item.id">
       <Carousel :carousel="item" />
      </li>
    </ul>
    <div class="icon arrow-up" v-show="index > 0" @click="switchTo(index - 1)">
      <Icon type="arrowUp" />
    </div>
    <div
      class="icon arrow-down"
      v-show="index < data.length - 1"
      @click="switchTo(index + 1)"
    >
      <Icon type="arrowDown" />
    </div>
    <ul class="mark">
      <li
        v-for="(item, i) in data"
        :key="item.id"
        :class="{ active: i == index }"
        @click="switchTo(i)"
      ></li>
    </ul>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
import Carousel from "./Carousel";
import getBanner from "@/api/banner";
import {mapState} from 'vuex'
export default {
  components: {
    Carousel,
    Icon
  },
  data() {
    return {
      index: 0,
      containerHeight: 0,
      isChanging: false
    };
  },
  created(){
    this.$store.dispatch('banner/fetchBanner')
  },
  mounted() {
    this.containerHeight = this.$refs.container.clientHeight;
    window.addEventListener("resize", this.handleResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  computed: {
    marginTop() {
      return -this.index * this.containerHeight + "px";
    },
    ...mapState('banner',['loading',"data"])
  },
  methods: {
    switchTo(i) {
      this.index = i
    },
    handleWheel(e) {
      if (this.isChanging) {
        return;
      }
      if (e.deltaY > 100 && this.index < this.data.length - 1) {
        this.isChanging = true;
        this.index++;
      } else if (e.deltaY < -100 && this.index > 0) {
        this.isChanging = true;
        this.index--;
      }
    },
    handleTransitionEnd() {
      this.isChanging = false;
    },
    handleResize() {
      this.containerHeight = this.$refs.container.clientHeight;
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
.home-container {
  // background-color: @dark;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  color: #fff;
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .carousel-container {
    width: 100%;
    height: 100%;
    transition: 500ms;
    li {
      width: 100%;
      height: 100%;
    }
  }
  .icon {
    .self-center();
    font-size: 30px;
    transform: translateX(-50%);
    cursor: pointer;
    color: @gray;
    @gap: 25px;
    @jump: 5px;
    &.arrow-up {
      top: @gap;
      animation: jump-up 2s infinite;
    }
    &.arrow-down {
      top: auto;
      bottom: @gap;
      animation: jump-down 2s infinite;
    }
    @keyframes jump-up {
      0% {
        transform: translate(-50%, @jump);
      }
      50% {
        transform: translate(-50%, -@jump);
      }
      100% {
        transform: translate(-50%, @jump);
      }
    }
    @keyframes jump-down {
      0% {
        transform: translate(-50%, -@jump);
      }
      50% {
        transform: translate(-50%, @jump);
      }
      100% {
        transform: translate(-50%, -@jump);
      }
    }
  }
  .mark {
    .self-center();
    left: auto;
    right: 10px;
    transform: translateY(-50%);
    li {
      cursor: pointer;
      width: 7px;
      height: 7px;
      background-color: @words;
      border: 1px solid #fff;
      border-radius: 50%;
      margin-bottom: 10px;
      &.active {
        background-color: #fff;
      }
    }
  }
}
</style>