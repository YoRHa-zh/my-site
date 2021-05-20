<template>
  <div class="item">
<Pager :current="current" :total="total"  @pageChange="handlePageChange($event)"/>
  </div>
</template>

<script>
import Pager from './'
export default {
    components:{Pager},
data(){
  return {
    current:10,
    total:302,
    limit:10
  }
},
methods:{
  handlePageChange(newpage){
    this.current = newpage
  }
}
}
</script>

<style>

</style>