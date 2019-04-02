<template>
  <div class="header">
    <div class="logo"></div>
    <h4>Chicken Music</h4>
    <div id="nav">
      <router-link to="/" exact>推荐</router-link>
      <router-link to="/singer">歌手</router-link>
      <router-link to="/about">排行</router-link>
      <router-link to="/about">搜索</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import '../assets/css/common.scss';
.header {
  background: #222;
  position: fixed;
  width: 100%;
  z-index: 1;
  .logo {
    display: inline-block;
    vertical-align: top;
    margin-top: 6px;
    width: 30px;
    height: 32px;
    margin-right: 9px;
    background-image: url('../assets/logo.png');
    background-size: 30px 32px;
  }
  h4 {
    display: inline-block;
    vertical-align: top;
    line-height: 44px;
    font-size: 18px;
    color: $yellow;
  }
  #nav {
    display: flex;
    justify-content: space-between;
    a {
      color: #aaa;
      font-weight: normal;
      font-size: 15px;
    }
    a.router-link-active {
      color: $yellow;
    }
  }
}
</style>

