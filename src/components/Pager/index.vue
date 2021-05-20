<template>
  <div class="pager-container" v-if="totalpage > 1">
    <a @click="handleClick(1)" :class="{ disabled: current === 1 }"
      >|&lt;&lt;</a
    >
    <a @click="handleClick(current - 1)" :class="{ disabled: current === 1 }"
      >&lt;&lt;</a
    >
    <a
      @click="handleClick(n)"
      v-for="(n, i) in showpage"
      :key="i"
      :class="{ active: n === current }"
      >{{ n }}</a
    >
    <a
      @click="handleClick(current + 1)"
      :class="{ disabled: current === totalpage }"
      >&gt;&gt;</a
    >
    <a
      @click="handleClick(totalpage)"
      :class="{ disabled: current === totalpage }"
      >&gt;&gt;|</a
    >
  </div>
</template>

<script>
export default {
  props: {
    total: {
      type: Number,
      default: 300,
    },
    current: {
      type: Number,
      default: 1,
    },
    limit: {
      type: Number,
      default: 10,
    },
    visableNumber: {
      type: Number,
      default: 10,
    },
  },
  computed: {
    totalpage() {
      return Math.ceil(this.total / this.limit);
    },
    min() {
      let min = this.current - Math.floor(this.visableNumber / 2);
      if (min < 1) {
        min = 1;
      }
      return min;
    },
    max() {
      let max = this.min + this.visableNumber - 1;
      if (max > this.totalpage) {
        max = this.totalpage;
      }
      return max;
    },
    showpage() {
      let arr = [];
      for (let i = this.min; i <= this.max; i++) {
        arr.push(i);
      }
      return arr;
    },
  },
  methods: {
    handleClick(newPage) {
      if (newPage < 1) {
        newPage = 1;
      }
      if (newPage > this.totalpage) {
        newPage = this.totalpage;
      }
      if (newPage === this.current) {
        return;
      }
      this.$emit("pageChange", newPage);
    },
  },
};
</script>
<style lang='less' scoped>
@import "~@/styles/var.less";
.pager-container {
  display: flex;
  justify-content: center;
  margin: 20px 0;
  a {
    color: @primary;
    margin: 0 6px;
    cursor: pointer;
    user-select: none;
    &.disabled {
      color: @lightWords;
      cursor: not-allowed;
    }
    &.active {
      color: @words;
      font-weight: bold;
      cursor: text;
    }
  }
}
</style>