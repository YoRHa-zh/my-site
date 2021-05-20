<template>
  <div class="blogcomment-container" id="blogcomment"> 
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
import {getComments,postComment} from '@/api/blog'
export default {
    mixins:[fetchData({total:0,row:[]})],
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
        methods:{
            async fetchData(){
                return await getComments(this.$route.params.id,this.page,this.limit)
            },
            async handleSubmit(formData,callback){
                const resp = await postComment({
                    blogid:this.$route.params.id,
                    ...formData,
                });
                this.Data.rows.unshift(resp);
                this.Data.total++;
                callback('评论成功')
            },
            async fetchMore(){
                if(!this.hasMore){
                    return;
                }
                this.isLoading = true;
                this.page++;
                const resp = await this.fetchData();
                this.Data.total = resp.total;
                this.Data.rows = this.Data.rows.concat(resp.rows);
                this.isLoading = false;
            },
            handler(dom){
                console.log(dom)
                if(this.isLoading || !dom){
                    return;
                }
                const range = 100;
                const distance = Math.abs(dom.scrollTop + dom.clientHeight - dom.scrollHeight)
                if(distance < 100){
                    this.fetchMore()
                }
            }
        }
}
</script>

<style>
.blogcomment-container {
  margin: 30px 0;
}
</style>