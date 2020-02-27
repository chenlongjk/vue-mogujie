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
    <!-- <tab-control :titles="['流行','新款','精选']" /> -->
    <!-- 商品展示 -->
    <div class="show-goods">
      <scroll ref="scroll" @scrollTance="scrollTance" :probe-type="3" @moreLoad="moreLoad">
        <goods-list :goods="goods"></goods-list>
      </scroll>
      <!-- 返回顶部按钮 -->
      <div class="backBtn" v-show="isShowBtn">
        <back-top @click.native="scrollTopHome" />
      </div>
    </div>
  </div>
</template>
<script>
// 子组件
import HomeSwiper from "./childHome/HomeSwiper";
import HomeRecome from "./childHome/HomeRecom";
// 公共组件
import NavBar from "@/components/common/navbar/NavBar";
import TabControl from "@/components/content/TabControl";
import GoodsList from "@/components/content/goods/GoodsList";
import BackTop from "@/components/content/backTop/BackTop";
import Scroll from "@/components/common/scroll/Scroll";
// 获取数据的方法
import { getHomeData, getHomeGoods } from "@/network/home";
export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      goods: [],
      params: { PageIndex: 1, PageRecord: 1 },
      isShowBtn:false
    };
  },
  created() {
    getHomeGoods(this.params).then(res => {
      this.goods = res.Data.PageData;
    });
  },
  methods: {
    scrollTopHome(){
      this.$refs.scroll.backTop(0,0)
    },
    scrollTance(position){
      console.log();
      this.isShowBtn = (-position.y) >600?true:false
    },
    moreLoad(){
      setTimeout(()=>{
        this.goods.push(...this.goods)
        this.$refs.scroll.finishPullUp()
      },500)
      
    }
  },
  components: {
    HomeSwiper,
    HomeRecome,
    NavBar,
    TabControl,
    GoodsList,
    BackTop,
    Scroll
  }
};
</script>
<style scoped>
#home {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.show-goods {
  position: absolute;
  top: 244px;
  bottom: 50px;
  width: 100%;
}
.backBtn {
  width: 35px;
  height: 35px;
  position: absolute;
  bottom: 10px;
  right: 10px;
  border-radius: 50%;
}
</style>