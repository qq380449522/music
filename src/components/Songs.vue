<template>
  <div class="songs" :class="showSongBox?'':'hideSong'">
    <div
      class="top"
      style="background-image: url('http://p.qpic.cn/music_cover/Fe6emiag6IuVbMib3oN6yctTaRvSyia4OdJ40ylLxPs6mzibZvZ5ia2gmnQ/600?n=1')"
    >
      <i class="icon-back left" @click="hiddenSongBox"></i>
      <h5>别劝了，就让情绪把我吞噬</h5>
      <div class="random">
        <p>
          <i class="icon-play"></i>随机播放全部
        </p>
      </div>
      <div class="filter"></div>
    </div>
    <div class="song-list">
      <div class="song-item">
        <p class="name">来不及</p>
        <p class="info">翁梓铭·伪装</p>
      </div>
      <div class="song-item">
        <p class="name">来不及</p>
        <p class="info">翁梓铭·伪装</p>
      </div>
      <div class="song-item">
        <p class="name">来不及</p>
        <p class="info">翁梓铭·伪装{{}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState({
      showSongBox: 'showSongBox'
    })
  },
  mounted() {
  },
  methods: {
    hiddenSongBox() {
      this.toggleSongBox(false)
    },
    ...mapActions([
      'toggleSongBox'
    ])
  }
};
</script>

<style lang='scss' scoped>
@import "../assets/css/common.scss";
.songs {
  transition: all .2s linear;
  position: fixed;
  left: 0;
  top: 0;
  background: #222;
  z-index: 2;
  width: 100%;
  height: 100%;
  .top {
    padding-top: 70%;
    height: 0px;
    transform: scale(1);
    z-index: 0;
    background-size: cover;
    > i {
      position: absolute;
      left: 10px;
      top: 10px;
      font-size: 22px;
      color: $yellow;
      z-index: 2;
    }
    h5 {
      position: absolute;
      top: 2px;
      left: 10%;
      z-index: 40;
      width: 80%;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      text-align: center;
      line-height: 40px;
      font-size: 18px;
      color: #fff;
    }
    .random {
      position: absolute;
      left: 30%;
      bottom: 10px;
      border-radius: 20px;
      color: $yellow;
      border: 1px solid $yellow;
      width: 40%;
      p {
        padding: 8px 12px;
        font-size: 13px;
        color: $yellow;
        i {
          margin-right: 5px;
        }
      }
    }
    .filter {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(7, 17, 27, 0.4);
    }
  }
  .song-list {
    padding-top: 30px;
    padding-bottom: 60px;
    .song-item {
      padding: 0 30px 20px;
      text-align: left;
      p {
        font-size: 14px;
        line-height: 20px;
        &.name {
          color: #fff;
        }
        &.info {
          color: hsla(0, 0%, 100%, 0.3);
          font-weight: 400;
        }
      }
    }
  }
}
.hideSong {
  transform: translateX(100%);
}
</style>
