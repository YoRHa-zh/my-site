<template>
  <div class="message-container" ref="messageContainer"> 
      <MessageArea 
      title="评论列表"
      :subTitle="`(${Data.total})`"
      :list="Data.rows"
      :isListLoading="isLoading"
      @submit="handleSubmit"
      />
  </div>
</template>
<script>
import MessageArea from '@/components/MessageArea'
import fetchData from '@/mixins/fetchData'
import {postMessage,getMessage} from '@/api/message'
import mainScroll from '@/mixins/mainScroll'
export default {
    mixins:[fetchData({total:0,row:[]}),mainScroll('messageContainer')],
        components:{
            MessageArea,
        },
        data(){
            return {
                page:1,
                limit:10
            }
        },
        computed:{
            hasMore(){
                return this.Data.rows.length < this.Data.total
            }
        },
        created(){
           this.$bus.$on('mainScroll',this.handler)
        },
        destroyed(){
            this.$bus.$off('mainScroll',this.handler)
        },
  methods: {
    async fetchData() {
      return await getMessage(this.page, this.limit);
    },
    async fetchMore() {
      if (!this.hasMore) {
        return;
      }
      this.isLoading = true;
      this.page++;
      const resp = await this.fetchData();
      this.Data.total = resp.total;
      this.Data.rows = this.Data.rows.concat(resp.rows);
      this.isLoading = false;
    },
    handler(dom) {
      if (this.isLoading || !dom) {
        return;
      }  
      const distance = Math.abs(dom.scrollTop + dom.clientHeight - dom.scrollHeight);
      if (distance <= 100) {
        this.fetchMore();
      }
    },
    async handleSubmit(data, callback) {
      const resp = await postMessage({data});
      this.Data.rows.unshift(resp);
      this.Data.total++;
      callback("评论成功");
    }
  }
}
</script>
<style scoped>
.message-container {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 25px 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}
.messageArea-container {
  width: 700px;
  margin: 0 auto;
}
</style>