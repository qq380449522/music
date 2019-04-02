<template>
  <div class="singer">
    <div class="navbar">
      <div class="nav-item" v-for="item in navList" :key="item">{{item}}</div>
    </div>
    <div class="singer-list">
      <div class="singer-item" v-for="item in singerlist" :key="item.title">
        <h1>{{item.title}}</h1>
      </div>
    </div>
  </div>
</template>

<script>
import { getSingerList } from "@/api/singer";
export default {
  data() {
    return {
      singerlist: [],
      navList: []
    };
  },
  created() {
    this._getSingerList();
  },
  computed: {},
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
              map['hot'].items.push(item);
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
            this.singerlist.push(map[key])
          }
          console.log(this.singerlist)
          this.navList.sort((a, b) => {
            return a.charCodeAt(0) - b.charCodeAt(0)
          });
          this.navList.splice(0,0,'热')
        }
      });
    }
  }
};
</script>

<style lang='scss'>
@import "../assets/css/common.scss";
.singer {
  .navbar {
    padding: 10px 0;
    width: 20px;
    position: fixed;
    background: #000;
    right: 0;
    top: 150px;
    border-radius: 10px;
    .nav-item {
      padding: 3px;
      line-height: 1;
      color: hsla(0, 0%, 100%, 0.5);
      font-size: 12px;
    }
    .active {
      color: $yellow;
    }
  }
}
</style>
