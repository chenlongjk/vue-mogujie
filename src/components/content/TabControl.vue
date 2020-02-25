<template>
  <div id="tab-control">
    <div class="tab-control-header">
      <div v-for="(title,index) in titles" @click="clickIndex(index)">
        <span :class="{active:currentIndex===index}">{{title}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      currentIndex:0
    }
  },
  methods: {
    clickIndex(index){
      this.currentIndex = index
    }
  }
};
</script>
<style scoped>
#tab-control {

}
.tab-control-header {
  display: flex;
  height: 40px;
  font-size: 14px;
  line-height: 40px;
  text-align: center;
}
.tab-control-header div {
  flex: 1;
}
.tab-control-header div span {
  padding: 5px 8px;
}
.active {
  color: #d81e06;
  border-bottom: 2px solid #d81e06;
}
</style>