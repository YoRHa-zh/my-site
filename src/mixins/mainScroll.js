export default function (refValue) {
    return {
        mounted(){
            this.$bus.$on('setMainScroll',this.handlerSetMain)
            this.$refs[refValue].addEventListener('scroll',this.handlerScroll)
          },
          beforeDestroy(){
            this.$bus.$emit('mainScroll')
            this.$bus.$off('setMainScroll',this.handlerSetMain)
            this.$refs[refValue].removeEventListener('scroll',this.handlerScroll)
          },
          methods:{
            handlerSetMain(scrollTop){
              this.$refs[refValue].scrollTop = scrollTop
              },
              handlerScroll(){
                this.$bus.$emit('mainScroll',this.$refs[refValue])

              }
          }
    }
}