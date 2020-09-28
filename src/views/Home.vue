<template>
    
  <div>
<<<<<<< HEAD
    <router-view v-if="!show"></router-view>
    <img src="/img/A0启动图.jpg" alt="" v-if="show" />
    <van-tabbar v-model="active" v-if="!show" route>
      <van-tabbar-item icon="home-o" to="/home" v-show="this.$route.meta.isShow">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/course" >课程</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/record" >约课记录</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/exercise" >练习</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/user" >我的</van-tabbar-item>
    </van-tabbar>
=======
        <router-view v-if="!show"></router-view>     <img
      src="/img/A0启动图.jpg"
      alt=""
      v-if="show"
    />
        <van-tabbar v-model="active" v-if="!show" route>
            <van-tabbar-item
        icon="home-o"
        to="/home"
        v-show="this.$route.meta.isShow"
        >首页</van-tabbar-item
      >
            <van-tabbar-item icon="search" to="/course">课程</van-tabbar-item>
            <van-tabbar-item icon="friends-o" to="/record"
        >约课记录</van-tabbar-item
      >
            <van-tabbar-item icon="setting-o" to="/exercise"
        >练习</van-tabbar-item
      >
            <van-tabbar-item icon="user-o" to="/user">我的</van-tabbar-item>
          </van-tabbar
    >
      
>>>>>>> 0a9c4061fdf78a933ec8f01b1c0c765ce54e9c27
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      active: "/home",
    };
  },
  mounted() {
    setTimeout(() => {
      this.show = false;
    }, 2000);
  },
};
</script>

<<<<<<< HEAD
<style >
=======
<style >
>>>>>>> 0a9c4061fdf78a933ec8f01b1c0c765ce54e9c27
*{
  margin: 0;
  padding: 0;
}
<<<<<<< HEAD
img {
=======
img{
>>>>>>> 0a9c4061fdf78a933ec8f01b1c0c765ce54e9c27
  width: 100%;
}
</style>