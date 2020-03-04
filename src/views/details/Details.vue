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

    <detail-bottom></detail-bottom>
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
        currentIndex: null
      }
    },
    created() {
      goodsDetails({
        'Id': this.$route.query.id
      }).then(res => {
        console.log(res);
        this.MainImgList = res.Data.MainImgList
        this.ImgInfoList = res.Data.InfoImgList
        const goodsInfo = new GoodsInfo(res.Data)
        this.goodsInfo = goodsInfo
      })
    },
    mounted() {
      this.newRefresh = debounce(()=> {
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
        for (let i=0; i < this.position.length - 1; i++) {
          if (this.currentIndex !== i &&(pY >= this.position[i] && pY < this.position[i + 1])) {
            this.currentIndex = i
            this.$refs.navbar.currentIndex = this.currentIndex
          }
        }
      },
      scrollTo(i){
        this.$refs.scroll.backTop(0,-this.position[i])
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
</style>