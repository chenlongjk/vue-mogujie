<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="#d81e06">
      <img slot="item-icon" src="~@/assets/imgs/tabbar/home.svg" alt />
      <img slot="item-icon-active" src="~@/assets/imgs/tabbar/home-active.svg" alt />
      <span slot="item-text">首页</span>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img slot="item-icon" src="~@/assets/imgs/tabbar/category.svg" alt />
      <img slot="item-icon-active" src="~@/assets/imgs/tabbar/category-active.svg" alt />
      <span slot="item-text">分类</span>
    </tab-bar-item>
    <tab-bar-item path="/cart"> 
      <img slot="item-icon" src="~@/assets/imgs/tabbar/cart.svg" alt />
      <img slot="item-icon-active" src="~@/assets/imgs/tabbar/cart-active.svg" alt />
      <span slot="item-text">购物车</span>
    </tab-bar-item>
    <tab-bar-item path="/mine">
      <img slot="item-icon" src="~@/assets/imgs/tabbar/mine.svg" alt />
      <img slot="item-icon-active" src="~@/assets/imgs/tabbar/mine-active.svg" alt />
      <span slot="item-text">我的</span>
    </tab-bar-item>
  </tab-bar>
</template>
<script>
import TabBar from "@/components/common/tabbar/TabBar";
import TabBarItem from "@/components/common/tabbar/TabBarItem";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
};
</script>
<style>
</style>