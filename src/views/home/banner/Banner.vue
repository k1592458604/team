<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in banner" :key="index">
        <img :src="item.banner_img" alt="" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import { getBanner } from "../../../network/api/api";
export default {
  data() {
    return {
      banner: [],
    };
  },
  async mounted() {
      //轮播
    var banners = await getBanner();
    this.banner=banners.data.data
    // console.log(this.banner);
  },

};
</script>
<style lang="scss" scoped>
div {
  width: 100%;
  height: 2rem;

  img {
    width: 100%;
    height: 100%;
  }
}
</style>