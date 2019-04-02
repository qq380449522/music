<template>
  <div id="app">
    <Header></Header>
    <div
      class="scroll"
      ref="scroll"
      @touchstart="touchstart"
      @touchmove="touchmove"
      @touchend="touchend"
      :style="{'transform':'translateY('+height+'px)'}"
    >
      <router-view/>
    </div>
  </div>
</template>
<script>
import Header from "./components/Header";
export default {
  data() {
    return {
      start: 0,
      height: 0
    };
  },
  mounted() {},
  methods: {
    touchstart(e) {
      this.start = e.targetTouches[0].clientY;
    },
    touchmove(e) {
      let dis = e.targetTouches[0].clientY - this.start;
      if (dis > 0 && dis < 150) {
        this.height = e.targetTouches[0].clientY - this.start;
      }
    },
    touchend() {
      this.height = 0;
    }
  },
  components: {
    Header
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
  background: #222;
}
#nav {
  padding: 15px 30px;
}
.scroll {
  height: 100%;
  transition: 330ms;
}
</style>
