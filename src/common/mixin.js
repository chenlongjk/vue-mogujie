import BackTop from "@/components/content/backTop/BackTop";

export const backTop = {
  data() {
    return {
      isShowBtn: false
    }
  },
  methods: {
    scrollTopHome() {
      this.$refs.scroll.backTop(0, 0);
    },
    showBackTopBtn(position) {
      this.isShowBtn = position > 600 ? true : false;
    }
  },
  components: {
    BackTop
  }
}