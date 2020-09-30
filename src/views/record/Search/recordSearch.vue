<template>
  <div>
    <div>
      <van-search v-model="value" show-action shape="round" placeholder="请输入关键字" @search="onSearch">
        <template #left>
          <div>
            <van-icon name="arrow-left" size="25" @click="onFan" />
          </div>
        </template>
        <template #action>
          <div>取消</div>
        </template>
      </van-search>
    </div>

    <div>
      <van-cell>
        <template #title>
          <span class="custom-title">历史记录</span>
        </template>
        <template #right-icon>
          <van-icon name="delete" class="search-icon" @click="onDelete" />
        </template>
      </van-cell>
    </div>
    <div style="margin-left:25px">
      <van-button
        round
        type="default"
        color="#F7F7F7"
        size="mini"
        v-for="(item,index) in history"
        :key="index"
        @click="onClick(item)"
      >
        <span style="color:black">{{item}}</span>
      </van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      history: []
    };
  },
  created() {
    let history = localStorage.history;
    if (history) {
      this.history = JSON.parse(history);
    }
  },
  methods: {
    onSearch(val) {
      this.save(val);
    },
    onClick(item) {
      this.save(item);
    },
    save(item) {
      this.value = item;
      var index = this.history.findIndex(element => {
        return element == item;
      });
      if (index !== -1) {
        this.history.splice(index, 1);
      }
      this.history.unshift(item);
      localStorage.history = JSON.stringify(this.history);
      //       if (this.history.length > 4) {
      //         this.history.pop();
      //       }
    },
    onDelete() {
      this.history = [];
      localStorage.history = JSON.stringify(this.history);
    },
    onFan() {
      this.$router.go(-1);
    }
  }
};
</script>
<style  scoped lang="scss">
.search-icon  {
    font-size: 20px;
    line-height: inherit;
    font-weight: 500;
}
.custom-title  {
    margin-right: 4px;
    vertical-align: middle;
    font-weight: 600;
}
</style