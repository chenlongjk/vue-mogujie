<template>
  <van-swipe :autoplay="3000" indicator-color="white">
    <van-swipe-item >
      <img src="" />
    </van-swipe-item>
  </van-swipe>
</template>
<script>
export default {
  name: "HomeSwiper",
  props:{
    bannerList: Array
  },
  data() {
    return {
      
    }
  },
  components:{

  }
};
</script>
<style scoped>
img {
  height: 200px;
  background-color: blue;
}
</style>