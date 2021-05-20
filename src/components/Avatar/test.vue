<template>
<div>
  <Avatar :url='url[0]' :size="size"/>
  <Avatar :url='url[1]' :size="size"/>
</div>
</template>

<script>
import Avatar from './index'
export default {
  components: { Avatar },
  data(){
      return {
          url:["https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2687066280,3253341900&fm=11&gp=0.jpg ","https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=178357977,4070781339&fm=11&gp=0.jpg"],
          size:150
      }
  }

}
</script>

<style>

</style>