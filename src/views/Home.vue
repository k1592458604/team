<template>
  <div>
    <router-view v-if="!show"></router-view>
    <img src="/img/A0启动图.jpg" alt v-if="show" />
    <van-tabbar v-model="active" v-if="!show" route  v-show="this.$route.meta.isShow">
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/course">课程</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/record">约课记录</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/exercise">练习</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/user">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      active: "/home"
    };
  },
  mounted() {
    setTimeout(() => {
      this.show = false;
    }, 2000);
  }
};
</script>

<style>
*{
  margin:0;
  padding:0;
}
img{
  width:100%;
}
</style>