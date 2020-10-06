<template>
  <div>
    <van-nav-bar
      title="我的学习"
      right-text="保存"
      left-arrow
      @click-left="onClickLeft"
    />

    <van-tabs v-model="active">
      <van-tab title="直播课(0)"></van-tab>
      <van-tab title="点播课(0)"></van-tab>
      <van-tab title="音频课(0)"></van-tab>
      <van-tab title="图文课(0)"></van-tab>
      <van-tab title="面授课(0)"></van-tab>
      <van-tab title="会员课(0)"></van-tab>
    </van-tabs>
    <div class="login">
        <div class="empty">
            <img src="https://wap.365msmk.com/img/empty.0d284c2e.png">
            <p>还没有课程，快去选择课程学习吧</p>
        </div>
        <div class="info" @click="opt">选择课程</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        active: -1,
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    opt(){
        
    }
  },
};
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    font-size: .16rem;
}
.login{
    width: 100%;
    height: 2.5rem;
    text-align: center;
    /* background: red; */
}
.empty img{
    width: 1.5rem;
    /* margin-left: 30%; */
    margin-top: 1rem;
}
.info{
    width: 2.34667rem;
    width: 23.46667vw;
    height: .74667rem;
    height: 7.46667vw;
    border-radius: .10667rem;
    border-radius: 1.06667vw;
    background-color: #eb6100;
    font-size: .34667rem;
    font-size: 3.46667vw;
    color: #fff;
    line-height: .74667rem;
    line-height: 7.46667vw;
    margin: 1.06667rem auto;
    margin: 10.66667vw auto;
}
</style>