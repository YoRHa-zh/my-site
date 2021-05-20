<template>
  <div class="test-container">
      <Menu />
  </div>
</template>

<script>
import Menu from './'
export default {
    components:{
        Menu
    }
}
</script>

<style>
.test-container{
    width: 200px;
    height: 400px;
    background-color: #000;
    margin: 0 auto;
}
</style>