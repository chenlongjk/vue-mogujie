<template>
  <van-swipe :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for="banner in bannerList">
      <img :src="banner.image" />
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
</style>