<template>
  <div id="tab-bar">
    <slot/>
  </div>
</template>

<script>
export default {
  name: "TabBar"
};
</script>

<style scoped>
#tab-bar {
  display: flex;
  height: 49px;
  background-color: #f6f6f6;
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  box-shadow: 0 -1px 1px rgba(0, 0, 0, 0.1);
}
</style>
