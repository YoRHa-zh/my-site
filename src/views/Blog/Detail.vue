<template>
 <Layout>
   <template>
     <div class="main-container" v-loading="isLoading" ref="mainContainer">
       <BlogDetail :blog="Data" v-if="Data"/>
       <BlogComment  v-if="!isLoading" />
     </div>
   </template>
  <template #right>
    <div class="right-container">
    <BlogTOC :toc="Data.toc" v-if="Data" />
    </div>
  </template>
 </Layout>
</template>
<script>
import Layout from '@/components/Layout'
import fetchData from '@/mixins/fetchData'
import {getBlog} from '@/api/blog'
import BlogDetail from './components/BlogDetail'
import BlogTOC from './components/BlogTOC'
import BlogComment from './components/BlogComment'
import mainScroll from '@/mixins/mainScroll'
import {controllerTitle} from '@/util'
export default {
  mixins:[fetchData(null),mainScroll('mainContainer')],
  components:{
    Layout,
    BlogDetail,
    BlogTOC,
    BlogComment
  },
  methods:{
    async fetchData(){
      let resp = await getBlog(this.$route.params.id);
      // resp = null
      if(!resp){
        this.$router.push('/404')
        return
      }
      controllerTitle.setRouterTitle(resp.title)
      return resp
    },
  },
  updated(){
    const hash = location.hash;
    location.hash = '';
    setTimeout(() => {
      location.hash = hash
    }, 50);
  }
}
</script>

<style scoped lang="less">
.main-container{
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  position: relative;
  box-sizing: border-box;
  padding: 20px;
  scroll-behavior: smooth;
}
.right-container{
    width: 300px;
    height: 100%;
    overflow-y:scroll ;
    box-sizing: border-box;
    position: relative;
    padding: 20px;
}
</style>