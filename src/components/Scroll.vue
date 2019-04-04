<template>
  <div class="wrapper" ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      scrollY: -1,
      currentIndex: 0,
      diff: -1
    };
  },
  mounted() {
    setTimeout(() => {
      this._initScroll();
    }, 20);
  },
  methods: {
    _initScroll() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: 3,
        click: true
      });
      this.scroll.on("scroll", pos => {
        this.$emit("scroll", pos);
      });
    },
    getY() {
      this.scroll.on("scroll", res => {
        console.log(res);
      });
    },
    scrollToTop() {
      this.scroll && this.scroll.scrollTo(0, 0);
    },
    scrollToElement() {
      this.scroll &&
        this.scroll.scrollToElement.apply(this.scroll, arguments);
    }
  }
};
</script>

<style>
.wrapper {
  width: 100%;
  position: fixed;
  bottom: 0;
  top: 89px;
  overflow: hidden;
}
</style>
