<template>
  <div id="app">
    <Header></Header>
    <keep-alive include="home">
      <router-view/>
    </keep-alive>
    <Player></Player>
    <Songs></Songs>
  </div>
</template>
<script>
import Header from "./components/Header";
import Player from "./components/Player";
import Songs from "./components/Songs";
export default {
  components: {
    Header,
    Player,
    Songs
  }
};
</script>
<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
#nav {
  padding: 15px 30px;
}
</style>
