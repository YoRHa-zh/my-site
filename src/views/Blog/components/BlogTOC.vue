<template>
  <div class="blogtoc-container">
    <h2>目录</h2>
    <RightList :list="tocWithSelect" @select="handleSelect" />
  </div>
</template>

<script>
import RightList from "./RightList";
import { debounce } from "@/util";
export default {
  components: {
    RightList,
  },
  data() {
    return {
      activeAnchor: "",
    };
  },
  props: {
    toc: {
      type: Array,
    },
  },
  methods: {
    handleSelect(item) {
      location.hash = item.anchor;
    },
    setSelect(Dom) {
      if(!Dom){
        return;
      }
      this.activeAnchor = "";
      const range = 200;
      for (const dom of this.doms) {
        if (!dom) {
          continue;
        }
        const top = dom.getBoundingClientRect().top;
        if(top >= 0 && top<=range){
          this.activeAnchor = dom.id;
          return;
        }else if(top >range){
          return;
        }else{
          this.activeAnchor = dom.id
        }
      }
    },
  },
  computed: {
    tocWithSelect() {
      const getTOC = (toc = []) => {
        return toc.map((t) => ({
          ...t,
          isSelect: t.anchor === this.activeAnchor,
          children: getTOC(t.children),
        }));
      };
      return getTOC(this.toc);
    },
    doms() {
      const doms = [];
      const addToDoms = (toc) => {
        for (const t of toc) {
          doms.push(document.getElementById(t.anchor));
          if (t.children && t.children.length) {
            addToDoms(t.children);
          }
        }
      };
      addToDoms(this.toc);
      return doms;
    },
  },
  created() {
    this.setSelectDebounce = debounce(this.setSelect, 50);
    this.$bus.$on("mainScroll", this.setSelectDebounce);
  },
  destroyed(){
    this.$bus.$off("mainScroll", this.setSelectDebounce);
  }
};
</script>

<style scoped lang="less">
.blogtoc-container {
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }
}
</style>