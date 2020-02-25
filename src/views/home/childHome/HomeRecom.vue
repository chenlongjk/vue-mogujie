<template>
  <div id="recommend">
    
      
    <div v-for="item in recommends">
      <a :href="item.link" >
       <img :src="item.image" alt="">
        <span>{{item.title}}</span>
      </a>
    </div>

  </div>
</template>
<script>
export default {
  name: "HomeRecom",
  props: {
    recommends: Array
  }
};
</script>
<style scoped>
#recommend {
  margin-top: 10px;
  display: flex;
  padding-top: 5px;
margin-bottom: 10px;
}
#recommend div {
  flex: 1;
  padding: 0 10px;
  box-sizing: border-box;
}
#recommend div a {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-size: 14px;
}
#recommend div img {
  height: 60px;
  width: 60px;
  background-color: blue;
  border-radius: 50%;
  margin-bottom: 5px;
}
</style>