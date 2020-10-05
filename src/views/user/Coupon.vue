<template>
  <div>
    <van-nav-bar title="我的优惠劵" left-arrow @click-left="onClickLeft" />
    <van-tabs v-model="active">
      <van-tab title="未使用"></van-tab>
      <van-tab title="已使用"></van-tab>
      <van-tab title="已过期"></van-tab>
    </van-tabs>
    <van-empty
      class="custom-image"
      image="https://wap.365msmk.com/img/empty.0d284c2e.png"
      description="暂无优惠券"
    />
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

<style>
</style>