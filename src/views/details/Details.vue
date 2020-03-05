<template>
  <div class="details">
    <details-nav-bar ref="navbar" @scrollTo="scrollTo"></details-nav-bar>
    <div class="container">
      <scroll ref="scroll" @scrollTance="scrollTance" :probe-type="3">
        <div class="con">
          <detail-swiper :MainImgList="MainImgList" ref="main"/>
          <detail-info :goodsInfo="goodsInfo" ref="info"/>
          <detail-img-info :ImgInfoList="ImgInfoList" @imgLoad="imgLoad" ref="imginfo"/>
        </div>
      </scroll>
    </div>
    <div class="backBtn" v-show="isShowBtn">
      <back-top @click.native="scrollTopHome"/>
    </div>
    <detail-bottom @addCart="addToCart"></detail-bottom>
  </div>

</template>

<script>
  import {goodsDetails, GoodsInfo} from "@/network/details";
  import DetailsNavBar from './childViews/DetailsNavBar'
  import DetailSwiper from './childViews/DetailSwiper.vue'
  import DetailInfo from './childViews/DetailInfo.vue'
  import DetailImgInfo from './childViews/DetailImgInfo.vue'
  import Scroll from '@/components/common/scroll/Scroll.vue'
  import DetailBottom from '@/views/details/childViews/DetailBottom.vue'
  import {debounce} from "@/common/utils";
  import {backTop} from "@/common/mixin";
  import { Toast } from 'vant';
  export default {
    name: "Details",
    data() {
      return {
        //轮播图数据
        MainImgList: [],
        goodsInfo: {},
        ImgInfoList: [],
        newRefresh: null,
        position: [],
        currentIndex: null,
        id:null
      }
    },

    mixins: [backTop],
    created() {
      this.id = this.$route.query.id
      goodsDetails({
        'Id': this.id
      }).then(res => {
        this.MainImgList = res.Data.MainImgList
        this.ImgInfoList = res.Data.InfoImgList
        const goodsInfo = new GoodsInfo(res.Data)
        this.goodsInfo = goodsInfo
      })
    },
    mounted() {
      this.newRefresh = debounce(() => {
        this.$refs.scroll.refresh()
        this.position = []
        this.position.push(0)
        this.position.push(this.$refs.info.$el.offsetTop)
        this.position.push(this.$refs.imginfo.$el.offsetTop)
        this.position.push(Number.MAX_VALUE)
      }, 500)
    },
    updated() {

    },
    methods: {
      imgLoad() {
        this.newRefresh()
      },
      scrollTance(p) {
        const pY = -(p.y)
        for (let i = 0; i < this.position.length - 1; i++) {
          if (this.currentIndex !== i && (pY >= this.position[i] && pY < this.position[i + 1])) {
            this.currentIndex = i
            this.$refs.navbar.currentIndex = this.currentIndex
          }
        }
        this.showBackTopBtn(pY)
      },
      scrollTo(i) {
        this.$refs.scroll.backTop(0, -this.position[i])
      },
    //  监听事件添加到购物车
      addToCart(){
        let goods = {}
        goods.img = this.MainImgList[0]
        goods.title = this.goodsInfo.ProductName
        goods.price = this.goodsInfo.MaxPrice
        goods.id = this.id
        this.$store.commit('addCart',goods)
        Toast('添加成功')
      }
    },
    components: {
      DetailsNavBar,
      DetailSwiper,
      DetailInfo,
      DetailImgInfo,
      Scroll,
      DetailBottom
    }
  }
</script>

<style scoped>
  .details {
    background-color: #FAFAFA;
    /*background-color: red;*/
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 999;
    height: 100%;

  }

  .container {
    position: absolute;
    width: 100%;
    top: 44px;
    bottom: 50px;
  }

  .con {
    position: relative;
  }

  .backBtn {
    width: 35px;
    height: 35px;
    position: absolute;
    bottom: 60px;
    right: 10px;
    border-radius: 50%;
    background-color: #ffffff;
  }
</style>