<template>
  <div>
    <div>
      <van-nav-bar title="套卷练习" @click-left="onClickLeft" left-arrow>
        <template #right>
          <van-icon name="search" size="18" />
        </template>
      </van-nav-bar>
    </div>
    <div>
      <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1" />
        <van-dropdown-item v-model="value2" :options="option2" />
      </van-dropdown-menu>
    </div>
    <div>
      <van-empty class="div1" description="请稍等，试卷正在赶来的路上啦" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: 0,
      value2: "a",
      option1: [
        { text: "类型不限", value: 0 },
        { text: '全部', value: 1 },
        { text: '套卷练习', value: 2 },
        { text: '仿真模考', value: 3 },
        { text: '考点专练', value: 4 },

      ],
      option2: [
        { text: "时间", value: "a" },
        { text: "全部", value: "b" },
        { text: "今天", value: "c" },
        { text: "7天", value: "d" },
      ],
    };
  },
  methods: {
    onClickLeft() {
      window.history.back();
    },
  },
};
</script>

<style scoped>
.custom-image .van-empty__image {
  width: 1.50rem;
  height: 1.50rem;
}
.div1{
  width: 100%;
  height: 2.1rem;
}
</style>