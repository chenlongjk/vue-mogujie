<template>
    <div class="detail-info">
        <span class="price">{{'￥'+goodsInfo.MaxPrice}}</span>
        <span class="title">{{goodsInfo.ProductName}}</span>
        <span class="address">
            <span class="d1">发货地</span>
            <span class="d2">{{goodsInfo.ShipAddress}}</span>
            <span class="d3">快递:免运费</span>
            <span class="d4">销量:0份</span>
        </span>
    </div>
</template>

<script>
  export default {
    name: "DetailInfo",
    props: {
      goodsInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
    .detail-info {
        margin-top: 10px;

    }

    span {
        display: block;
        padding: 0 10px;
        box-sizing: border-box;
    }

    .price {
        height: 40px;
        line-height: 40px;
        color: #F3712F;
        font-size: 18px;
        background-color: #ffffff;
    }

    .title {
        color: #333333;
        font-size: 16px;
        background-color: #ffffff;
    }

    .address {
        margin-top: 10px;
        height: 30px;
        line-height: 30px;
        font-size: 14px;
        color: #999999;
        background-color: #ffffff;
        margin-bottom: 10px;
    }

    .d2,.d1,.d3 {
        float: left;
    }
    .d2 {
        color: #333333;
    }
    .d3,.d4 {
        font-size: 12px;
    }
    .d4 {
        float: right;
    }
</style>