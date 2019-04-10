<template>
  <Scroll>
    <div class="home">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item
          v-for="item in recommends"
          :key="item.id"
          @click="jumpToLink(item.linkUrl)"
          @touchmove="touchmove"
        >
          <img :src="item.picUrl" alt>
        </van-swipe-item>
      </van-swipe>
      <div class="play-list">
        <h5>热门歌单推荐</h5>
        <div
          class="play-list-item"
          v-for="item in disclists"
          :key="item.dissid"
          @click="showSongBox"
        >
          <img class="left" :src="item.imgurl" alt>
          <div class="info">
            <h5>{{item.creator.name}}</h5>
            <p>{{item.dissname}}</p>
          </div>
        </div>
      </div>
    </div>
  </Scroll>
</template>

<script>
import Scroll from "@/components/Scroll";
import { getRecommend, getDiscList } from "@/api/home.js";
import { mapActions } from "vuex";
export default {
  name: "home",
  data() {
    return {
      recommends: [],
      disclists: [],
      isClick: true
    };
  },
  created() {
    this._getRecommend();
    this._getDiscList();
  },
  methods: {
    _getRecommend() {
      getRecommend().then(res => {
        if (res.code === 0) {
          this.recommends = res.data.slider;
        }
      });
    },
    _getDiscList() {
      getDiscList().then(res => {
        if (res.code === 0) {
          this.disclists = res.data.list;
        }
      });
    },
    jumpToLink(link) {
      if (this.isClick) {
        window.location = link;
      }
      this.isClick = true;
    },
    touchmove() {
      this.isClick = false;
    },
    showSongBox() {
      this.toggleSongBox(true);
    },
    ...mapActions(["toggleSongBox"])
  },
  components: {
    Scroll
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/common.scss";
.home {
  padding-bottom: 60px;
  .van-swipe {
    height: 150px;
    img {
      width: 100%;
      display: block;
    }
  }
  .play-list {
    min-height: 500px;
    > h5 {
      text-align: center;
      color: $yellow;
      height: 65px;
      line-height: 65px;
      font-size: 14px;
    }
    .play-list-item {
      overflow: hidden;
      padding: 10px 20px;
      img {
        width: 60px;
        height: 60px;
      }
      .info {
        text-align: left;
        overflow: hidden;
        padding: 10px 20px;
        h5 {
          font-size: 14px;
          color: #fff;
          margin-bottom: 10px;
        }
        p {
          font-size: 14px;
          color: hsla(0, 0%, 100%, 0.3);
        }
      }
    }
  }
}
</style>
