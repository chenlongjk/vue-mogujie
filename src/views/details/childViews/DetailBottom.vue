<template>
  <div class="bottom-bar">
    <van-goods-action>
      <van-goods-action-icon icon="cart-o" info="0" text="购物车" @click="goCart" />
      <van-goods-action-button type="warning" text="加入购物车" @click="addCart" />
      <van-goods-action-button type="danger" text="立即购买" @click="onClickButton" />
    </van-goods-action>
  </div>
</template>

<script>
  import { Toast } from 'vant';
  export default {
    name: "DetailBottom",
    props: {
      goods: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    methods:{
      onClickButton(){
        Toast('暂未开放此功能,请点击加入购物车')
      },
      addCart(){
        this.$emit('addCart')

      },
      goCart(){
        this.$router.push('/cart')
      }
    }
  }
</script>

<style scoped>
.bottom-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content:flex-end;
  padding-right: 20px;
  box-sizing: border-box;
}
</style>