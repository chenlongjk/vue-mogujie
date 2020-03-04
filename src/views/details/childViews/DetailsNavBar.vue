<template>
    <nav-bar>
        <div slot="left" class="back" @click="back"><img src="~@/assets/imgs/back.png" alt=""></div>
        <div slot="center" class="item-title">
            <div :class="{active:index===currentIndex}" v-for="(item,index) in titles" @click="checkOption(index)">
                {{item}}
            </div>
        </div>
    </nav-bar>
</template>

<script>
  import NavBar from "@/components/common/navbar/NavBar.vue"

  export default {
    name: "DetailsNavBar",
    data() {
      return {
        titles: ['商品', '参数', '详情'],
          currentIndex:0
      }
    },
    methods: {
      checkOption(index) {
        this.currentIndex = index
        this.$emit('scrollTo',index)
      },
      back(){
        this.$router.history.go(-1)
      }
    },
    components: {
      NavBar
    }
  }
</script>

<style scoped>
    .item-title {
        width: 100%;
        height: 100%;
        display: flex;
        font-size: 14px;
    }

    .item-title div {
        flex: 1;
    }

    .active {
        color: rgb(216, 30, 6);
    }

    .back {
        width: 100%;
        height: 100%;
        padding: 10px 20px;
        box-sizing: border-box;
    }

    .back img {
        width: 100%;
        height: 100%;
    }
</style>