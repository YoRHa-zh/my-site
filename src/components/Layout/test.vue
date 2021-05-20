<template>
  <div class="test-container">
    <Layout>
      <template v-slot:left>
        <div class="left">
          <h2>hello</h2>
        </div>
      </template>
      <template v-slot:default>
        <div class="main">
          <h2>world</h2>
        </div>
      </template>
       <template v-slot:right>
        <div class="right">
          <h2>right</h2>
        </div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "./";
export default {
  components: {
    Layout,
  },
};
</script>

<style scoped lang="less">
.test-container{
    background-color: #fff;
    height: 600px;
    width: 60%px;
    margin: 0 auto;
    .left{
        width: 150px;
    }
    .main{
        width: 100%;
    }
    .right{
        width: 150px;
    }
}
</style>