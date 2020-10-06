<template>
  <div>
    <div class="whole">
      <van-search v-model="kw" placeholder="搜索" show-action @focus="goto">
        <template #left>
          <img
            src=" http://120.53.31.103:86//img/icon-sign.96f11c58.png"
            alt=""
            width="28"
          />
        </template>
        <template #action>
          <van-icon name="envelop-o" size="22" color="#ADADAD" />
        </template>
      </van-search>
      <div class="min">
        <!-- 轮播图 -->
        <banner />
        <!-- 导航 -->
        <navigation class="tab" />
        <!-- 名师阵容 -->
        <div class="title">名师阵容</div>
        <teacher />
        <!-- 精品课程 -->
        <div class="title">精品课程</div>
        <curriculum class="curriculum" />
        <!-- 热门推荐 -->
        <div class="title">热门资讯</div>
        <hotBot />
        <!-- 推荐课程 -->
        <div class="title">推荐课程</div>
        <recommend />
        <!-- 明星讲师 -->
        <div class="title">明星讲师</div>
        <star />
        <div class="kong"></div>
      </div>
    </div>
  </div>
</template>

<script>
import banner from "./banner/Banner";
import navigation from "./navigation/Navigation";
import teacher from "./teacher/Teacher";
import curriculum from "./curriculum/Curriculum";
import recommend from "./recommend/Recommend";
import star from "./star/Star";
import hotBot from "./hot/HotBot";
export default {
  components: {
    banner,
    navigation,
    teacher,
    curriculum,
    recommend,
    star,
    hotBot,
  },
  data() {
    return {
      kw: "",
    };
  },
  methods: {
    goto() {
      this.$router.push({
        path: "/courseSearch",
      });
    },
  },
};
</script>

<style lang='scss' scoped>
.van-search__content {
  border-radius: 0.2rem !important;
  box-shadow: 0 0 1.86667vw 0 rgba(0, 0, 0, 0.1);
  background: #fff;
}
.van-search__action {
  display: flex;
}
.whole {
  width: 100%;
  height: 93.5vh;
  padding-bottom: 0.2rem;
  overflow: scroll;

  .min {
    width: 100%;
    background: rgb(240, 242, 245);
  }

  // position: relative;
  .tab {
    width: 100%;
    position: relative;
    top: -0.2rem;
    left: 0rem;
  }

  .title {
    width: 90%;
    margin-top: 0.07rem;
    margin-bottom: 0.07rem;
    margin: 0 auto;
    border-left: 0.03rem solid rgb(235, 97, 0);
    font-size: 0.16rem;
    padding-left: 0.07rem;
    color: gray;
  }
  .kong {
    height: 0.1rem;
  }
}
</style>