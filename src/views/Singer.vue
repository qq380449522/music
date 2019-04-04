<template>
  <Scroll ref="listview" @scroll="scroll">
    <div class="singer">
      <div class="singer-list">
        <div
          class="singer-box"
          v-for="list in singerlist"
          :key="list.title"
          :id="list.title"
          ref="listgroup"
        >
          <h1>{{list.title}}</h1>
          <div class="singer-item" v-for="item in list.items" :key="item.Fsinger_mid" @click="selectSinger(item.Fsinger_mid)">
            <img
              class="left"
              :src="'https://y.gtimg.cn/music/photo_new/T001R300x300M000'+item.Fsinger_mid+'.jpg?max_age=2592000'"
              alt
            >
            <span>{{item.Fsinger_name}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="navbar">
      <a
        @touchstart="touchstart(index)"
        class="nav-item"
        :class="index==currentIndex?'active':''"
        v-for="(item,index) in navList"
        :key="item"
      >{{item}}</a>
    </div>
    <div v-show="scrollY<0" class="fixedbar">{{fixedTitle}}</div>
  </Scroll>
</template>

<script>
import Scroll from "@/components/Scroll";
import { getSingerList } from "@/api/singer";
export default {
  data() {
    return {
      currentBar: "热",
      singerlist: [],
      navList: [],
      scrollY: "",
      currentIndex: 0,
      listheight: []
    };
  },
  async created() {
    this._getSingerList();
  },
  computed: {
    fixedTitle() {
      if (this.scrollY > 0) {
        return "";
      }
      if (this.currentIndex == 0) {
        return "热门";
      }
      return this.navList[this.currentIndex];
    }
  },
  watch: {
    navList() {
      this.$nextTick(() => {
        let height = 0;
        this.navList.map((item, index) => {
          height += this.$refs.listgroup[index].offsetHeight;
          this.listheight.push(height);
        });
      });
    }
  },
  methods: {
    _getSingerList() {
      getSingerList().then(res => {
        if (res.code === 0) {
          let map = {
            hot: {
              title: "热门",
              items: []
            }
          };
          res.data.list.map((item, index) => {
            if (index < 10) {
              map["hot"].items.push(item);
            }
            let key = item.Findex;
            if (!map[key]) {
              map[key] = {
                title: key,
                items: []
              };
            }
            map[key].items.push(item);
          });
          for (let key in map) {
            if (/[A-Z]/.test(key)) {
              this.navList.push(key);
            }
            this.singerlist.push(map[key]);
          }
          this.singerlist.sort((a, b) => {
            return a.title.charCodeAt(0) - b.title.charCodeAt(0);
          });
          this.singerlist[0] = this.singerlist[this.singerlist.length - 1];
          this.singerlist.pop();
          this.navList.sort((a, b) => {
            return a.charCodeAt(0) - b.charCodeAt(0);
          });
          this.navList.splice(0, 0, "热");
        }
      });
    },
    selectSinger(id) {
    },


    touchstart(index) {
      this.currentIndex = index;
      let dom = this.$refs.listgroup[index];
      this.$refs.listview.scrollToElement(dom, 0);
    },
    scroll(pos) {
      this.scrollY = pos.y;
      for (let i = 0; i<this.listheight.length; i++) {
        if (this.listheight[i]>Math.abs(this.scrollY)) {
          this.currentIndex = i;
          return
        }
      }
    }
  },
  components: {
    Scroll
  }
};
</script>

<style lang='scss' scoped>
@import "../assets/css/common.scss";
.singer {
  padding-bottom: 60px;
  overflow: auto;
  min-height: 800px;
  .singer-list {
    text-align: left;
    h1 {
      height: 30px;
      line-height: 30px;
      padding-left: 20px;
      font-size: 12px;
      color: hsla(0, 0%, 100%, 0.5);
      background: #333;
    }
    .singer-item {
      overflow: hidden;
      padding: 10px 30px;
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
      span {
        margin-left: 20px;
        line-height: 50px;
        color: hsla(0, 0%, 100%, 0.5);
        font-size: 14px;
      }
    }
  }
}
.fixedbar {
  box-sizing: border-box;
  text-align: left;
  width: 100%;
  position: fixed;
  top: 89px;
  left: 0;
  height: 30px;
  line-height: 30px;
  padding-left: 20px;
  font-size: 12px;
  color: hsla(0, 0%, 100%, 0.5);
  background: #333;
}
.navbar {
  padding: 10px 0;
  width: 20px;
  position: absolute;
  background: #000;
  right: 0;
  top: 50px;
  border-radius: 10px;
  z-index: 999;
  .nav-item {
    display: block;
    padding: 3px;
    line-height: 1;
    color: hsla(0, 0%, 100%, 0.5);
    font-size: 12px;
  }
  .active {
    color: $yellow;
  }
}
</style>
