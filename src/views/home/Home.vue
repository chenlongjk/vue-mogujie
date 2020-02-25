<template>
  <div id="home">
    <!-- 头部 -->
    <nav-bar>
      <div slot="center">购物街</div>
    </nav-bar>
    <!-- 轮播图 -->
    <home-swiper :bannerList="banners.list" />
    <!-- 推荐 -->
    <home-recome :recommends="recommends.list" />
    <!-- 商品导航 -->
    <tab-control :titles="['流行','新款','精选']" />
  </div>
</template>
<script>
// 子组件
import HomeSwiper from "./childHome/HomeSwiper";
import HomeRecome from "./childHome/HomeRecom";
// 公共组件
import NavBar from "@/components/common/navbar/NavBar";
import TabControl from "@/components/content/TabControl";
// 获取数据的方法
import { getHomeData } from "@/network/home";
export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: []
    };
  },
  created() {
    getHomeData().then(res => {
      console.log(res);
      this.banners = res.data.banner;
      this.recommends = res.data.recommend;
    });
  },
  components: {
    HomeSwiper,
    HomeRecome,
    NavBar,
    TabControl
  }
};
</script>
<style scoped>
</style>