<template>
    <div class="img-info">
        <img v-for="item in ImgInfoList" :src="item" alt="">
    </div>
</template>

<script>
  export default {
    name: "DetailImgInfo",
    props:{
      ImgInfoList:{
        type: Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>

</style>