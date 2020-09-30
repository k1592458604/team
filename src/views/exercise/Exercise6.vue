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
        { text: "题目类型", value: 0 },
        { text: '单选', value: 1 },
        { text: '多选', value: 2 },
        { text: '判断', value: 3 },
        { text: '连线', value: 4 },

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
  width: 1.5rem;
  height: 1.50rem;
}
.div1{
  width: 100%;
  height: 2.1rem;
}
</style>