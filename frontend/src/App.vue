<template>
  <div id="app">
    <AppBarComponent></AppBarComponent>
    <router-view/>
  </div>
</template>

<script>
import AppBarComponent from "@/components/AppBarComponent";
export default {
  name: "App.vue",
  components: {
    AppBarComponent
  }
}
</script>

<style lang="scss">
#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f5f7ff;
}
</style>
