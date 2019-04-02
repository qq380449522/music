<template>
  <div class="home">
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in recommends" :key="item.id">
        <a :href="item.linkUrl">
          <img :src="item.picUrl" alt>
        </a>
      </van-swipe-item>
    </van-swipe>
    <div class="play-list">
      <h5>热门歌单推荐</h5>
      <div class="play-list-item" v-for="item in disclists" :key="item.dissid">
        <img class="left" :src="item.imgurl" alt>
        <div class="info">
          <h5>{{item.creator.name}}</h5>
          <p>{{item.dissname}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getRecommend, getDiscList } from "@/api/home.js";
export default {
  data() {
    return {
      recommends: [],
      disclists: []
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
    }
  }
};
</script>

<style lang="scss">
@import "../assets/css/common.scss";
.home {
  padding-top: 89px;
  .van-swipe {
    img {
      width: 100%;
      display: block;
    }
  }
  .play-list {
    > h5 {
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
