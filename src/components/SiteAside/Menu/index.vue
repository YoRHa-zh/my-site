<template>
  <nav class="menu-container">
      <router-link :exact="item.exact" :to="{name:item.name}" v-for="item in items" :key="item.name">
          <div class="icon"><Icon :type="item.iconType"/></div>
          <p>{{item.title}}</p>
      </router-link>
  </nav>
</template>

<script>
import Icon from '@/components/Icon'
export default {
    data(){
        return {
            items:[
                {
                    name:'Home',
                    title:'主页',
                    iconType:'home',
                    exact:true
                },
                {
                    name:'Blog',
                    title:'文章',
                    iconType:'blog',
                    exact:false
                },
                 {
                    name:'About',
                    title:"关于我",
                    iconType:'about',
                    exact:true
                },
                 {
                    name:'Project',
                    title:'项目&效果',
                    iconType:'code',
                    exact:true
                },
                 {
                    name:'Message',
                    title:'留言板',
                    iconType:'chat',
                    exact:true
                },

            ]
        }
    },
    components:{Icon},
}
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';
.menu-container{
    color: @gray;
    margin: 24px 0;
    a{
        display: block;
        height: 45px;
        display: flex;
        align-items: center;
        padding:0 50px;
        font-size: 16px;
        .icon{
            width: 24px;
        }
        &.router-link-active{
            background-color: #2d2d2d;
        }
        &:hover{
            color: #fff;
        }
    }
}
</style>