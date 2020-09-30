<template>
  <div>
    <!-- 搜索框 -->
    <div class="search">
      <van-search
        v-model="kw"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
      >
        <template #left>
          <van-icon name="arrow-left" size="20" color="#999" @click="back" />
        </template>
        <template #action>
          <div @click="onSearch">
            搜索
          </div>
        </template>
      </van-search>
    </div>
    <div class="history" v-if="show">
      <h3>
        历史搜索
        <van-icon name="delete" size="20" @click="del" />
      </h3>
      <van-tag
        color="#F7F7F7"
        text-color="#000"
        size="large "
        round
        v-for="(item, index) in historyShow"
        :key="index"
        v-show="index < 8"
        >{{ item }}</van-tag
      >
    </div>
    <van-empty
      class="custom-image"
      image="https://wap.365msmk.com//img/empty.0d284c2e.png"
      description="暂无内容"
      v-if="!show"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      kw: "",
      historyList: [],
      historyShow: [],
      show: true,
    };
  },
  mounted() {
    var list = localStorage.history;
    if (list) {
      this.historyShow = JSON.parse(list);
    }
  },
  methods: {

    onSearch() {
        this.show = false;
        this.historyList.unshift(this.kw);
        localStorage.history = JSON.stringify(this.historyList);
        this.kw=''
    },
    del() {
      this.historyShow = [];
      localStorage.historyShow = [];
    },
    back(){
        window.history.back()
    }
  },
};
</script>

<style scoped lang="scss">
* {
  font-size: 0.14rem;
}
.search {
  border-bottom: 0.01rem solid 1px solid #eaeaea;
}
.history {
  margin: 0.15rem 0.17rem;
  h3 {
    display: flex;
    justify-content: space-between;
    height: 0.4rem;
    align-items: center;
    font-size: 0.16rem;
  }
  .van-tag {
    margin: 0.07rem 0.1rem;
  }
}
</style>