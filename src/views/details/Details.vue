<template>
    <div class="details">
        <details-nav-bar/>
    </div>
</template>

<script>
  import {goodsDetails} from "@/network/details";
  import DetailsNavBar from './childViews/DetailsNavBar'

  export default {
    name: "Details",
    data() {
      return {}
    },
    mounted() {
      goodsDetails({
        'Id': this.$route.query.id
      }).then(res => {
        console.log(res);
      })
    },
    components: {
      DetailsNavBar
    }
  }
</script>

<style scoped>

</style>