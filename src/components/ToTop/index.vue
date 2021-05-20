<template>
  <div class="totop-container" v-show="show" @click="handleClick">
      Top
  </div>
</template>

<script>
export default {
    data(){
        return {
            show:false
        }
    },
    created(){
        this.$bus.$on('mainScroll',this.handlerScroll)
    },
    destroyed(){
        this.$bus.$off('mainScroll',this.handlerScroll)
    },
    methods:{
        handleClick(){
            this.$bus.$emit('setMainScroll',0)
        },
        handlerScroll(dom){
            if(!dom){
                this.show = false;
                return;
            }
            this.show = dom.scrollTop >= 500;
        }
    }
}
</script>

<style scoped lang="less">
@import '~@/styles/var.less';
.totop-container{
    background-color: @primary;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: fixed;
    right: 50px;
    bottom: 50px;
    z-index: 100;
    line-height: 50px;
    text-align: center;
    color: #fff;
    cursor: pointer;
}
</style>