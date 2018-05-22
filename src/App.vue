<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import Main from "./components/Main.vue";

export default {
  name: "App",
  components: {
    Main
  }
};
</script>

<style lang="scss">
#app {
  width: 100vw;
}
</style>
