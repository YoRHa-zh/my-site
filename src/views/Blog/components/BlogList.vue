<template>
  <div class="bloglist-container" v-loading="isLoading" ref="container">
    <ul>
      <li v-for="item in Data.rows" :key="item.id">
        <div class="thumb" v-if="item.thumb">
          <RouterLink
            :to="{
              name: 'BlogDetail',
              params: {
                id: item.id,
              },
            }"
          >
            <img v-lazy="item.thumb" :alt="item.title" :title="item.title" />
          </RouterLink>
        </div>
        <div class="main">
          <RouterLink
            :to="{
              name: 'BlogDetail',
              params: {
                id: item.id,
              },
            }"
          >
            <h2>{{ item.title }}</h2>
          </RouterLink>
          <div class="aside">
            <span>日期：{{ formatDate(item.createDate) }}</span>
            <span>浏览：{{ item.scanNumber }}</span>
            <span>评论：{{ item.commentNumber }}</span>
            <router-link
              :to="{
                name: 'CategoryBlog',
                params: { categoryId: item.category.id },
              }"
              >{{ item.category.name }}</router-link
            >
          </div>
          <div class="desc">
            {{ item.description }}
          </div>
        </div>
      </li>
    </ul>
    <Empty v-if="Data.length === 0 && !isLoading" />
    <Pager
      v-if="Data.total"
      :current="routeInfo.page"
      :total="Data.total"
      :limit="routeInfo.limit"
      visibleNumber="10"
      @pageChange="handlePageChange($event)"
    />
  </div>
</template>
<script>
// import {serve} from '@/config.js'
import Pager from "@/components/Pager";
import Empty from "@/components/Empty";
import { getBlogs } from "@/api/blog";
import fetchData from "@/mixins/fetchData";
import formatDate from "@/util/formatDate";
import mainScroll from "@/mixins/mainScroll";
export default {
  components: {
    Pager,
    Empty,
  },
  mixins: [fetchData({ total: 0, rows: [] }), mainScroll("container")],
  computed: {
    routeInfo() {
      const categoryId = +this.$route.params.categoryId || -1;
      const page = +this.$route.query.page || 1;
      const limit = +this.$route.query.limit || 10;
      return {
        categoryId,
        page,
        limit,
      };
    },
  },
  methods: {
    formatDate,
    async fetchData() {
      let result = await getBlogs(
        this.routeInfo.page,
        this.routeInfo.limit,
        this.routeInfo.categoryId
      );
      // result.rows.forEach(it => {
      //     it.thumb = serve + it.thumb
      // });
      return result
      
    },
    handlePageChange(newPage) {
      const query = {
        page: newPage,
        limit: this.routeInfo.limit,
      };
      // console.log(newPage,this.routeInfo.page)
      if (this.routeInfo.categoryId === -1) {
        this.$router.push({
          name: "Blog",
          query,
        });
      } else {
        this.$router.push({
          name: `CategoryBlog`,
          query,
          params: {
            categoryId: this.routeInfo.categoryId,
          },
        });
      }
    },
  },
  watch: {
    async $route() {
      this.isLoading = true;
      this.$refs.container.scrollTop = 0;
      this.Data = await this.fetchData();
      this.isLoading = false;
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.bloglist-container {
  width: 100%;
  height: 100%;
  position: relative;
  padding: 20px;
  line-height: 1.7;
  overflow-y: scroll;
  box-sizing: border-box;
  scroll-behavior: smooth;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      display: flex;
      padding: 15px 0;
      border-bottom: 1px solid @gray;
      .thumb {
        flex: 0 0 auto;
        margin-right: 15px;
        img {
          display: block;
          max-width: 200px;
          border-radius: 5px;
        }
      }
      .main {
        flex: 1 1 auto;
        h2 {
          margin: 0;
        }
        .aside {
          font-size: 12px;
          color: @gray;
          span {
            margin-right: 15px;
          }
        }
        .desc {
          margin: 15px 0;
          font-size: 14px;
        }
      }
    }
  }
}
</style>