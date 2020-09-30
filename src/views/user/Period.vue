<template>
  <div>
      <van-nav-bar
        title="我的余额"
        right-text="余额明细"
        left-arrow
        @click-left="onClickLeft"
      />
    <div class="box">
      <div class="ye">
        <span>我的余额</span><span style="color: red">0 学习币</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.box {
  height: 100%;
  background: rgb(238, 238, 238);
}
.ye {
  width: 100%;
  height: 0.6rem;
  background: cyan;
  font-size: 0.16rem;
  display: flex;
  align-items: center;
}
</style>