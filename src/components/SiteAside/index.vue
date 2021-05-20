<template>
  <div class="siteAside-container">
    <template v-if="data">
    <Avatar
      :url="data.avatar"
    />
    <h2>{{data.siteTitle}}</h2>
    </template>
    <Menu />
    <Contact v-if="data" />
    <p class="footer" v-if="data">
      {{data.icp}}
    </p>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Contact from "./Contact";
import Menu from "./Menu";
import {mapState} from 'vuex'
export default {
  components: {
    Avatar,
    Contact,
    Menu,
  },
  computed:mapState('setting',['data'])
};
</script>

<style lang='less' scoped>
@import "~@/styles/var.less";
.siteAside-container {
  width: 100%;
  height: 100%;
  background: @dark;
  padding: 20px 0;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
  h2{
    text-align: center;
    color: #fff;
  }
}
.avatar-container {
  margin: 0 auto;
}
.footer {
  text-align: center;
  font-size: 12px;
}
.title {
  font-size: 1.2em;
  color: #fff;
  text-align: center;
}
</style>