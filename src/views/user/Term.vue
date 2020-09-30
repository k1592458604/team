<template>
  <div class="big-box">
    <van-nav-bar
      title="修改个人信息"
      left-text="返回"
      right-text="保存"
      left-arrow
      @click-left="onClickLeft"
    />
    <!-- <div >17530520121</div> -->
    <input type="text" class="box" placeholder="17530520121" />
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
.box {
  width: 100%;
  height: 0.5rem;
  background: white;
  margin-top: 0.1rem;
  font-size: 0.18rem;
  display: flex;
  outline: none;
  border: 0;
  /* align-items: center; */
}
.big-box {
  background: rgb(240, 242, 245);
  height: 100vh;
}
</style>