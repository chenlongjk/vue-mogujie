<template>
    <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in MainImgList">
            <div class="aaa">
                <img :src="item" alt="">
            </div>
        </van-swipe-item>
    </van-swipe>
</template>

<script>
  export default {
    name: "DetailSwiper",
    props: {
      MainImgList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {}
    }
  }
</script>

<style scoped>
.aaa {
    height: 350px;
    background-color: #ffffff;
}
</style>