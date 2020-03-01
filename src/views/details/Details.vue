<template>
    <div class="details">
        <details-nav-bar></details-nav-bar>
        <detail-swiper :MainImgList="MainImgList"/>
        <detail-info :goodsInfo="goodsInfo"/>
        <detail-img-info :ImgInfoList="ImgInfoList" />
    </div>

</template>

<script>
  import {goodsDetails,GoodsInfo} from "@/network/details";
  import DetailsNavBar from './childViews/DetailsNavBar'
  import DetailSwiper from './childViews/DetailSwiper.vue'
  import DetailInfo from './childViews/DetailInfo.vue'
  import DetailImgInfo from './childViews/DetailImgInfo.vue'
  export default {
    name: "Details",
    data() {
      return {
        //轮播图数据
        MainImgList: [],
        goodsInfo:{},
        ImgInfoList:[]
      }
    },
    created(){
      goodsDetails({
        'Id': this.$route.query.id
      }).then(res => {
        console.log(res);
        this.MainImgList = res.Data.MainImgList
        this.ImgInfoList = res.Data.InfoImgList
        const goodsInfo = new GoodsInfo(res.Data)
        this.goodsInfo = goodsInfo
        console.log(goodsInfo);
      })
    },
    mounted() {

    },
    components: {
      DetailsNavBar,
      DetailSwiper,
      DetailInfo,
      DetailImgInfo
    }
  }
</script>

<style scoped>
.details{
    background-color: #FAFAFA;
    /*background-color: red;*/
    padding-bottom: 5px;
    position: relative;
    z-index: 999;
}
</style>