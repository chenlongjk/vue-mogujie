<template>
  <div class="wrap" ref="wrap">
    <slot></slot>
  </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    setTimeout(() => {
      this.scorllEvent()
    }, 300);
  },
  methods: {
    backTop(x, y, time = 300) {
      this.scroll.scrollTo(x, y, time);
    },
    scorllEvent() {
      this.scroll = new BScroll(this.$refs.wrap, {
        click: true,
        probeType: this.probeType,
        pullUpLoad: true
      });
      this.scroll.on("scroll", position => {
        this.$emit("scrollTance", position);
      });
      this.scroll.on("pullingUp", () => {
      this.$emit('moreLoad')
      });
    },
    finishPullUp(){
      this.scroll.finishPullUp()
    }
  }
};
</script>
<style scoped>
.wrap {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>