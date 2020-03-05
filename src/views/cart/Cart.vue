<template>
<div id="cart">
  <nav-bar>
    <div slot="center">购物车</div>
  </nav-bar>
</div>
</template>
<script>
  import NavBar from "@/components/common/navbar/NavBar";
export default {
name: 'Cart',
  components:{
    NavBar
  }
};
</script>
<style scoped>
  #cart {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color:#f6f6f6;
  }
</style>