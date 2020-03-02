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
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        scroll: null
      };
    },
    mounted() {
      this.scorllEvent();
    },
    methods: {
      //滚动位置
      backTop(x, y, time = 300) {
        this.scroll.scrollTo(x, y, time);
      },
      scorllEvent() {
        this.scroll = new BScroll(this.$refs.wrap, {
          click: true,
          probeType: this.probeType,
          pullUpLoad: this.pullUpLoad
        });
        this.scroll.on("scroll", position => {
          this.$emit("scrollTance", position);
        });
        if (this.pullUpLoad) {
          this.scroll.on("pullingUp", () => {
            setTimeout(()=>{
              this.$emit("moreLoad");
            },500)

          });
        }

      },

      finishPullUp() {
        // 上拉加载完成
        this.scroll.finishPullUp();
        console.log("上拉加载完成");
      },
      refresh() {
        // 重新计算滚动区域
        this.scroll && this.scroll.refresh();
        console.log("refresh刷新");
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