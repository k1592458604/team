<template>
  <div>
    <van-nav-bar
      title="我的学习卡"
      right-text="学习卡兑换"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="cards">
      <van-empty
        class="custom-image"
        image="https://wap.365msmk.com/img/empty.0d284c2e.png"
        description="暂无兑换记录"
      />
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
.cards{
    height: 100vh;
    background: rgb(240,242,245);
}
</style>