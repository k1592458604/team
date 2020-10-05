<template>
  <div>
    <van-nav-bar title="消息通知" left-arrow @click-left="onClickLeft" />
    <ul>
      <li>
        <div class="icon">
          <img
            src="https://wap.365msmk.com/img/icon-msg-course.d8a2c8d5.png"
            alt=""
          />
        </div>
        <div class="info">
          <span>课程通知</span>
          <p>暂无消息</p>
        </div>
      </li>
      <li>
        <div class="icon">
          <img src="https://wap.365msmk.com/img/icon-msg-system.db56e51b.png" alt="" />
        </div>
        <div class="info">
          <span>系统通知</span>
          <p>暂无消息</p>
        </div>
      </li>
      <li>
        <div class="icon">
          <img src="https://wap.365msmk.com/img/icon-msg-order.41755990.png" alt="" />
        </div>
        <div class="info">
          <span>订单通知</span>
          <p>暂无消息</p>
        </div>
      </li>
      <li>
        <div class="icon">
          <img src="https://wap.365msmk.com/img/icon-msg-oto.d8a2c8d5.png" alt="" />
        </div>
        <div class="info">
          <span>约课通知</span>
          <p>暂无消息</p>
        </div>
      </li>
      <li>
        <div class="icon">
          <img src="https://wap.365msmk.com/img/icon-msg-exam.8a210fd7.png" alt="" />
        </div>
        <div class="info">
          <span>考试通知</span>
          <p>暂无消息</p>
        </div>
      </li>
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

<style scoped>
.info {
  display: flex;
  flex-direction: column;
  color: #595959;
  /* padding: .2rem 0; */
  padding: 2vw 0;
  position: relative;
}
.info span {
  /* font-size: .4rem; */
  font-size: 4vw;
  font-weight: 500;
  /* margin-bottom: .26667rem; */
  margin-bottom: 2.66667vw;
}
.info p {
  /* font-size: .34667rem; */
  font-size: 3.46667vw;
}
.icon img {
  /* width: 1.17333rem; */
  width: 11.73333vw;
  /* height: 1.17333rem; */
  height: 11.73333vw;
  border-radius: 50%;
}
.icon {
  /* padding: .26667rem 0; */
  padding: 2.66667vw 0;
  /* margin-right: .4rem; */
  margin-right: 4vw;
}
ul li:after {
  content: "";
  display: block;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 1px;
  background-color: #f5f5f5;
}
ul {
  background: #fff;
  /* padding: .13333rem .4rem; */
  padding: 1.33333vw 4vw;
  /* margin: .26667rem 0; */
  margin: 2.66667vw 0;
}

ul li {
  height: auto;
  line-height: normal;
  display: flex;
  /* height: 1.46667rem; */
  /* height: 14.66667vw; */
  /* line-height: 1.46667rem; */
  /* line-height: 14.66667vw; */
  position: relative;
  /* font-size: .37333rem; */
  font-size: 3.73333vw;
  color: #595959;
}
</style>