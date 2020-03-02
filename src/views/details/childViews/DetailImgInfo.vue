<template>
  <div class="img-info" v-if="Object.keys(ImgInfoList).length !== 0">
    <img v-for="item in ImgInfoList" :src="item" alt="" @load="imgLoad">
  </div>
</template>

<script>
  export default {
    name: "DetailImgInfo",
    props: {
      ImgInfoList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      imgLoad() {
        this.$emit('imgLoad')
      }
    }
  }
</script>

<style scoped>

</style>