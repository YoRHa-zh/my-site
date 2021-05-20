<template>
  <div class="app-container">
    <Layout>
      <template v-slot:left>
        <div class="aside">
        <SiteAside />
        </div>
      </template>
      <template #default>
        <RouterView />
      <ToTop />
      </template>
    </Layout>
  </div>
</template>

<script>
import SiteAside from '@/components/SiteAside'
import Layout from '@/components/Layout'
import ToTop from '@/components/ToTop'
export default {
  name: "App",
  components: {
   Layout,
   SiteAside,
   ToTop
  }
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
.app-container{
  .self-fill(fixed)
}
.aside{
  width: 250px;
  height: 100%;
}

</style>
