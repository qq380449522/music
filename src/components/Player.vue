<template>
  <div class="player">
    <div class="player-box">
      <img class="left" src="https://y.gtimg.cn/music/photo_new/T001R300x300M000002J4UUk29y8BY.jpg?max_age=2592000" alt="">
      <div class="info left">
        <h5>天份</h5>
        <p>薛之谦</p>
      </div>
      <div class="control right">
        <i class="icon-play-mini"></i>
        <i class="icon-playlist"></i>
      </div>
    </div>
    <div class="player-page">

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
@import '../assets/css/common.scss';
.player {
  text-align: left;
  .player-box {
    width: 100%;
    height: 60px;
    position: fixed;
    left: 0;
    bottom: 0;
    background: #333;
    z-index: 999;
    img {
      margin: 10px 10px 10px 20px;
      border-radius: 50%;
      width: 40px;
      height: 40px;
    }
    .info {
      padding: 9px;
      h5 {
        color: #fff;
        font-size: 14px;
        margin: 6px;
      }
      p {
        color: rgba(255, 255, 255, 0.5);
        font-size: 12px;
      }
    }
    .control {
      height: 100%;
      padding-top: 15px;
      i {
        color: $yellow;
        font-size: 25px;
        margin: 0 10px;
        display: inline-block;
      }
    }
  }
}
</style>
