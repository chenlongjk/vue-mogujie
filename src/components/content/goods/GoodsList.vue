<template>
    <ul class="goods-item clearfix">
        <li v-for="item in goods" @click="goGoodsDetails(item)">
            <img :src="item.MainImg" alt @load="loadImg"/>
            <span>{{item.ProductName}}</span>
            <span>{{'￥'+item.MaxPrice}}</span>
        </li>
        <div>正在加载数据...</div>
    </ul>
</template>
<script>

  import BackTop from "@/components/content/backTop/BackTop";

  export default {
    name: "GoodsList",
    props: {
      goods: Array
    },
    data() {
      return {
        pageIndex: 1
      };
    },
    methods: {
      loadImg() {
        this.$bus.$emit('goodsImgLoad')
      },
      //  跳转商品详情
      goGoodsDetails(item) {
        this.$router.push({
          path:'/details',
          query:{
            id:item.Id
          }
        })
      }
    },
    components: {
      BackTop
    }
  };
</script>
<style scoped>
    #goods {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        overflow: hidden;
    }

    .goods-item li {
        float: right;
        width: 50%;
        padding: 10px 10px;
        box-sizing: border-box;
        height: 270px;
        display: flex;
        flex-wrap: wrap;
        align-content: space-between;
    }

    .goods-item li img {
        width: 100%;
    }

    .goods-item li span {
        width: 100%;
        display: block;
        font-size: 14px;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    div {
        text-align: center;
    }
</style>