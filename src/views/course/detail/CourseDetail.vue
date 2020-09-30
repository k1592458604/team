<template>
  <div>
    <header>
      <van-nav-bar @click-left="onClickLeft">
        <template #left>
          <van-icon name="arrow-left" size="20" />
        </template>
        <template #title>
          <p>李老师16号到22号地理大课堂开课啦</p>
        </template>
        <template #right>
          <van-icon name="calendar-o" size="20" />
        </template>
      </van-nav-bar>
    </header>
    <div class="progress">
      <span>共8课时</span>
      <van-progress inactive :percentage="10" />
      <span>已学习0%</span>
    </div>
    <div class="content">
      <div class="content_wrapper">
        <div class="study" v-for="index in 8" :key="index" @click="video">
          <div>
            <p>
              <van-tag type="warning">回放</van-tag>
              第一讲第一课时
            </p>
            <p>
              <span>李青</span>
              <span>03月16日</span>
              <span>18：30-19：30</span>
            </p>
            <p>
              <van-progress inactive :percentage="10" :stroke-width="2" />
              <span>已观看0%</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div @click="sayMsg">
        <van-icon name="edit" size="16" />
        <span>写评论</span>
      </div>
      <div @click="gotoList">
        <van-icon name="qr" size="16" />
        <span>课程详情</span>
      </div>
      <div @click="del">
        <van-icon name="delete" size="16" />
        <span>移除列表</span>
      </div>
    </div>
    <van-dialog v-model="show"  show-cancel-button :showCancelButton="false">
     <div class="diaBox">
       <p> 星级：  <van-rate
        v-model="value"
        :size="25"
        color="#ffd21e"
        void-icon="star"
        void-color="#eee"
      /></p>
      <p>
          <span>内容: </span>
            <textarea  cols="25" rows="5"></textarea>
      </p>
     </div>
    </van-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      value:0
    };
  },
  methods: {
      del(){
            this.$toast('移除成功');
      },
      video(){
          this.$toast('回放未生成');
      },
    sayMsg() {
      this.show = true;
    },
    onClickLeft() {
      window.history.back();
    },
    gotoList() {
      this.$router.push({
        path: "/courseList",
      });
    },
  },
};
</script>

<style scoped lang="scss">
* {
  font-size: 0.14rem;
}
.van-dialog{
   .diaBox{
    display: flex;
    flex-direction: column;
    align-items: center;
    p{
        display: flex;
        justify-content: flex-start;
    }
   }
}
.bottom {
  width: 100%;
  font-size: 0.12rem;
  color: #646464;
  position: fixed;
  bottom: 0;
  background: #fff;
  display: flex;
  height: 0.36rem;
  justify-content: space-around;
  align-items: center;
  div {
    display: flex;
    align-items: center;
    span {
      margin: 0 0.05rem;
    }
  }
}
.content {
  width: 100%;
  height: 8rem;
  overflow: scroll;
  .content_wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    .study {
      height: 0.595rem;
      width: 3.11rem;
      padding: 0.15rem;
      border: 0.02rem solid #e9e9e9;
      margin: 0.15rem;
      border-radius: 0.03rem;
      div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        p {
          font-size: 0.14rem;
          display: flex;
          align-items: center;
          span {
            margin: 0 0.05rem;
            font-size: 0.12rem;
            color: #646464;
          }
          .van-progress {
            width: 60%;
          }
        }
      }
    }
  }
}
.progress {
  .van-progress {
    width: 60%;
  }
  display: flex;
  width: 100%;
  height: 0.53rem;
  justify-content: space-around;
  align-items: center;
  color: #646464;
  font-size: 0.12rem;
}
header {
  .van-icon {
    color: #646464;
  }
  font-size: 0.16rem;
}
</style>