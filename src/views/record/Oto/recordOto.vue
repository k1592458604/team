<template>
  <div>
    <!-- 表头 -->
    <div class="aa">
      <ul class="kc">
        <li class="c">
          <van-icon name="arrow-left" size="20px" @click="tc" />
        </li>
        <li class="k">预约课程</li>
      </ul>
    </div>
    <!-- 卡片 -->
    <div class="card">
      <van-image round class="img" src="https://img.yzcdn.cn/vant/cat.jpeg" />
      <div class="name">毛昭燕</div>
      <div class="sex">女&nbsp;&nbsp;&nbsp;&nbsp;15年教龄</div>
      <div class="y">
        <input type="button" value="查看详情" class="yy" @click="mine" />
      </div>
    </div>
    <!-- 时间 -->
    <div class="bb">
      <div class="sj">
        <span>选择时间</span>
        <span class="bj">(北京时间)</span>
      </div>
      <!-- 周表 -->
      <div class="zhou">
        <div class="zhou1">
          <!-- <van-tabs v-model="active">
            <van-tab title="周一 09/28"></van-tab>
            <van-tab title="周一 09/28"></van-tab>
            <van-tab title="周一 09/28"></van-tab>
            <van-tab title="周一 09/28"></van-tab>
            <van-tab title="周一 09/28"></van-tab>
            <van-tab title="周一 09/28"></van-tab>
          </van-tabs> -->
          <ul class="z">
            <li>
              周一
              <br />09/28
            </li>
            <li>
              周二
              <br />09/29
            </li>
            <li>
              周三
              <br />09/30
            </li>
            <li>
              周四
              <br />10/01
            </li>
            <li>
              周五
              <br />10/02
            </li>
            <li>
              周六
              <br />10/03
            </li>
            <li>
              周日
              <br />10/04
            </li>
            <li>
              周日
              <br />10/05
            </li>
            <li>
              周一
              <br />10/06
            </li>
            <li>
              周二
              <br />10/07
            </li>
          </ul>
        </div>
      </div>
      <img src="../../../../public/img/record/暂无信息.png" alt class="xx" />
      <input type="button" value="立即预约" class="btn" @click="btn" />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    tc() {
      this.$router.go(-1);
    },
    mine() {
      this.$router.push({
        path: "/recordTeacher"
      });
    },
    btn() {
      this.$toast("请选择预约时间");
    }
  }
};
</script>

<style scoped lang="scss">
.aa {
  width: 100%;
  height: 0.8rem;
  background: #5fabf8;
}

.kc {
  width: 100%;
  display: flex;
  color: white;
  font-size: 0.2rem;
}

.c {
  margin-left: 0.2rem;
  margin-top: 0.1rem;
}

.k {
  margin-left: 1.17rem;
  margin-top: 0.1rem;
}

.card {
  width: 95%;
  height: 1rem;
  position: absolute;
  top: 0.52rem;
  left: 0.1rem;
  background: white;
  z-index: 222;
}

.img {
  margin-left: 0.35rem;
  margin-top: 0.15rem;
  height: 55%;
  width: 15%;
}

.name {
  margin-left: 1.05rem;
  margin-top: -0.8rem;
  color: #7f7f7f;
  font-size: 0.15rem;
}

.sex {
  margin-left: 1.03rem;
  margin-top: 0.07rem;
  color: #b7b7b7;
  font-size: 0.13rem;
}

.y {
  width: 0.65rem;
  height: 0.3rem;
  margin-left: 2.7rem;
  margin-top: -1.17rem;
}

.yy {
  width: 0.7rem;
  height: 0.3rem;
  border-radius: 0.25rem;
  background: white;
  color: #eb6100;
  border: 0.01rem solid#EB6100;
  font-size: 0.1rem;
}

.bb {
  width: 100%;
  height: 84vh;
  background: #f0f2f5;
}

.sj {
  position: absolute;
  top: 1.7rem;
  left: 0.2rem;
  color: #858586;
  font-size: 0.2rem;
}

.bj {
  font-size: 0.15rem;
  color: #979899;
  margin-left: 0.05rem;
}

.zhou1 {
  width: 95%;
  height: 0.7rem;
  position: absolute;
  top: 2.1rem;
  left: 0.1rem;
  background: white;
  // overflow: hidden;

}
.zhou1 ul{
  width: 95%;
  overflow: scroll;
}
// .zhou1{

// }

.z {
  display: flex;
  /* justify-content: space-around; */
}

.z li {
  margin-top: 13px;
  font-size: 0.15rem;
  height: 0.5rem;
  width: 10%;
  color: #a4a4a4;
  margin: 0rem 0.2rem;
  margin-top: 0.15rem;
}

.z li:hover,
.z li:active {
  color: #ec6c12;
  border-bottom: 0.02rem solid #4169ff;
}

.xx {
  width: 3rem;
  height: 2rem;
  margin-left: 0.5rem;
  margin-top: 2rem;
}

.btn {
  width: 100%;
  height: 0.5rem;
  background: #eb6100;
  border: 0.01rem solid #eb6100;
  color: white;
  margin-top: 1.2rem;
  font-size: 0.2rem;
}
</style>