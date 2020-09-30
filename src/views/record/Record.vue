<template>
  <div>
    <!-- 表头 -->
    <div class="top">
      约课记录
    </div>
    <div class="x"></div>
    <van-tabs v-model="active">
      <!-- 待上课 -->
      <van-tab title="待上课" class="dai">
        <img src="../../../public/img/record/ss.png" alt="" class="img">
        <p class="p">还没有待上课记录</p>
        <input type="button" value="立即约课" class="btn" @click="yue">
      </van-tab>
      <!-- 已上课 -->
      <van-tab title="已上课" class="yi">
        <img src="../../../public/img/record/ss.png" alt="" class="img">
        <p class="p">还没有上课记录哦</p>
        <input type="button" value="立即约课" class="btn" @click="yue">
      </van-tab>
      <!-- 已取消 -->
      <van-tab title="已取消" class="qu">
        <img src="../../../public/img/record/ss.png" alt="" class="img">
        <p class="p">还没有取消上课记录哦</p>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        active: 2,
      };
    },
    methods: {
      yue() {
        this.$router.push({
          path: '/recordCord'
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .top {
    width: 100%;
    height: 60px;
    text-align: center;
    line-height: 60px;
    font-size: 20px;
  }

  .x {
    width: 100%;
    height: 3px;
    background: #F0F2F5
  }

  .dai {
    width: 100%;
    height: 80vh;
    background: #F0F2F5;
  }

  .yi {
    width: 100%;
    height: 80vh;
    background: #F0F2F5;
  }

  .qu {
    width: 100%;
    height: 80vh;
    background: #F0F2F5;
  }

  .img {
    width: 222px;
    height: 150px;
    margin-left: 85px;
    margin-top: 75px;
  }

  .btn {
    width: 83px;
    height: 26px;
    background: #EB6100;
    font-size: 14px;
    border: 1px solid #EB6100;
    color: white;
    margin-left: 140px;
    margin-top: 30px;
  }

  .p {
    text-align: center;
    color: #B7B7B7;
    font-size: 14px;
  }
</style>