<template>
  <div class="harer"> 
    <div height=".44rem">
      <van-nav-bar title="题库选择" left-arrow @click-left="onClickLeft" />
    </div>
    <div height=".34rem">
      <van-search
        shape="round"
        v-model="value"
        placeholder="请输入搜索关键词"
        @focus="go"
      />
    </div>
    <div class="exercise-footer-box">
      <div class="exercise-footer">
        <van-sidebar v-model="activeKey" @click="onclick">
          <van-sidebar-item
            v-for="(item, index) in list"
            :key="index"
            :title="item.name"
            @click="onclick(item)"
          />
        </van-sidebar>
      </div>
      <div class="exercise-footer-right">
        <van-tag class="biaoqian" type="primary" v-for="(item, index) in hlist" :key="index" @click="nav" size="large">{{ item.title }}</van-tag>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      activeKey: "0",
      hlist: [],
      list: [
        { id: "1", index: "0", name: "求导题库" },
        { id: "2", index: "1", name: "极限题库" },
        { id: "3", index: "2", name: "生物" },
        { id: "4", index: "3", name: "化学" },
        { id: "5", index: "4", name: "数学" },
        { id: "6", index: "5", name: "物理" },
        { id: "7", index: "6", name: "英语" },
        { pid: "1", activeKey: "0", title: "小学英语" },
        { pid: "2", activeKey: "1", title: "两个重要" },
        { pid: "3", activeKey: "2", title: "高生物中" },
        { pid: "4", activeKey: "3", title: "化学实验" },
        { pid: "5", activeKey: "4", title: "初中数学" },
        { pid: "6", activeKey: "5", title: "初中物理" },
        { pid: "7", activeKey: "6", title: "初中英语" },
      ],
      // array: [

      // ],
    };
  },
  mounted() {
    this.hlist=[  { pid: "1", activeKey: "0", title: "小学英语" },]
  },
  methods: {
    onClickLeft() {
      window.history.back();
    },
    onclick(item, index) {
      this.activeKey = index;
      this.hlist = [];
      this.list.forEach((ele) => {
        if (ele.pid === item.id) {
          this.hlist.push(ele);
        }
        console.log(this.hlist);
      });
    },
    nav(){
      this.$router.push({
        path:'/exercise7'
      })
    },
    go(){
       this.$router.push({
        path:'/courseSearch'
      })
    }
  },
};
</script>

<style scoped>
.harer{
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.exercise-footer-box {
  width: 100%;
  height: 4rem;
  display: flex;
  border-top: .01rem solid gainsboro;
}
.exercise-footer {
  width: 25%;
  height: 4rem;
  /* border: 1px solid palegoldenrod; */
}
.exercise-footer-right {
  width: 75%;
  height: 4rem;
  font-size: 0.14rem;
  /* border: 1px solid palegreen; */
}
.biaoqian{
  margin: 0.2rem;
}
</style>