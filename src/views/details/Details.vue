<template>
  <div class="details">
    <details-nav-bar></details-nav-bar>
    <div class="container">
      <scroll ref="scroll">
        <div class="con">
          <detail-swiper :MainImgList="MainImgList" ref="main"/>
          <detail-info :goodsInfo="goodsInfo"/>
          <detail-img-info :ImgInfoList="ImgInfoList" @imgLoad="imgLoad"/>
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


  export default {
    name: "Details",
    data() {
      return {
        //轮播图数据
        MainImgList: [],
        goodsInfo: {},
        ImgInfoList: []
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

    },
    updated() {

    },
    methods:{
      imgLoad(){
        console.log('1');
        this.$refs.scroll.refresh()
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