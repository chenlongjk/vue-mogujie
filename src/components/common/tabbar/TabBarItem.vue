<template>
  <div class="tab-item" @click="select">
    <div v-if="!isActive">
      <slot name="item-icon" />
    </div>
    <div v-else>
      <slot name="item-icon-active" />
    </div>
    <div  :style="activeStyle">
      <slot name="item-text" />
    </div>
  </div>
</template>
<script>
export default {
  name: "TabBarItem",
  props:{
    path: String,
    activeColor: {
      type: String,
      default: '#d81e06'
    }
  },
  data() {
    return {
      
    }
  },
  computed: {
    isActive(){
      return this.$route.path.indexOf(this.path) !==-1
    },
    activeStyle(){
      return this.isActive ? {color:this.activeColor}:{}
    }
  },
  methods: {
    select(){
      this.$router.replace(this.path)
    }
  }
};
</script>
<style scoped>
.tab-item {
  flex: 1;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
}
.tab-item div {
  width: 100%;
  text-align: center;
  font-size: 12px;
}
.tab-item img {
  width: 24px;
  height: 24px;
  vertical-align: bottom;
  margin: 0 auto;
}

</style>