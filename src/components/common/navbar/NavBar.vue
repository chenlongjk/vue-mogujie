<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "NavBar"
};
</script>
<style scoped>
  .nav-bar {
    background-color: #ffffff;
    display: flex;
    height: 44px;
    width: 100%;
    line-height: 44px;
    box-sizing: border-box;
    box-shadow: 1px 0 1px #cccccc;
  }
  .left, .right {
    width: 60px;
  }
  .center {
    flex: 1;
    text-align: center;
  }
</style>