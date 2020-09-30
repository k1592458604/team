<template>
  <div class="big-box">
    <van-nav-bar
      title="修改个人信息"
      left-text="返回"
      right-text="保存"
      left-arrow
      @click-left="onClickLeft"
    />
    <ul class="content">
        <li>男</li>
        <p></p>
        <li>女</li>
    </ul>
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
.big-box {
  background: rgb(240, 242, 245);
  height: 100vh;
}
.content{
    /* margin:.26rem 0; */
    padding:.15rem 0;
}
li{
    width: 100%;
    height: 0.6rem;
    font-size: .16rem;
    background: white;
    display: flex;
    align-items: center;
}
/* ul li:after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 1px;
    background-color: #f5f5f5;
} */
p{
    border-bottom: 1px solid gainsboro;
}
</style>