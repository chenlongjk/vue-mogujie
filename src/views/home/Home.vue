<template>
    <div id="home">
        <!-- 头部 -->
        <nav-bar>
            <div slot="center">购物街</div>
        </nav-bar>
        <!-- 轮播图 -->
        <home-swiper :bannerList="banners.list"/>
        <!-- 推荐 -->
        <home-recome :recommends="recommends.list"/>
        <!-- 商品导航 -->
        <!-- <tab-control :titles="['流行','新款','精选']" /> -->
        <!-- 商品展示 -->
        <div class="show-goods">
            <scroll ref="scroll" @scrollTance="scrollTance" :probe-type="3" @moreLoad="moreLoad" :pullUpLoad="true">
                <goods-list :goods="goods"></goods-list>
            </scroll>
            <!-- 返回顶部按钮 -->
            <div class="backBtn" v-show="isShowBtn">
                <back-top @click.native="scrollTopHome"/>
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
  import {getHomeData, getHomeGoods} from "@/network/home";
  import {debounce} from "@/common/utils";

  export default {
    name: "Home",
    data() {
      return {
        banners: [],
        recommends: [],
        goods: [],
        params: {PageIndex: 1, PageRecord: 1},
        isShowBtn: false,
        position:{x:0,y:0}
      };
    },
    created() {
    },

    mounted() {
      const refresh = debounce(this.$refs.scroll.refresh, 500)
      getHomeGoods(this.params).then(res => {
        this.goods = res.Data.PageData;
      });
      this.$bus.$on("goodsImgLoad", () => {
        refresh()
      });
    },
    methods: {
      //返回顶部
      scrollTopHome() {
        this.$refs.scroll.backTop(0, 0);
      },
      //判断滚动距离  返回顶部按钮是否显示
      scrollTance(position) {
        this.position = position
        this.isShowBtn = -position.y > 600 ? true : false;
      },
      //加载更多
      moreLoad() {
        this.goods.push(...this.goods);
        this.$refs.scroll.finishPullUp();
      }
    },
    activated(){
      console.log('进来');
      this.$refs.scroll.backTop(0,this.position.y,0)
    },
    deactivated(){
      console.log('离开')
      console.log(this.position);
    },
    destroyed() {
      console.log('销毁');
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