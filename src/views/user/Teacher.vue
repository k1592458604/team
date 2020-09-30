<template>
  <div>
    <van-nav-bar
      title="我的关注"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-empty
      class="custom-image"
      image="https://img.yzcdn.cn/vant/custom-empty-image.png"
      description="暂无关注"
    />
  </div>
</template>

<script >
export default {
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
  .custom-image .van-empty__image {
    width: 90px;
    height: 90px;
  }
</style>