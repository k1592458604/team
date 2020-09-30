<template>
  <div class="box">
    <!-- 标题 -->
    <div class="exercise-header">
      <van-nav-bar title="练习" />
    </div>
    <!-- 宫格 -->
    <div class="exercise-fenl-box">
      <div class="exercise-fenl-item" @click="onclick1">
        <div>
          <img src="../../../public/img/exercise/1.png" alt="" />
        </div>
        <div>考点专练</div>
      </div>
        <div class="exercise-fenl-item" @click="onclick2">
        <div>
          <img  src="../../../public/img/exercise/1.png" alt="" />
        </div>
        <div>套卷练习</div>
      </div>
        <div class="exercise-fenl-item" @click="onclick3">
        <div>
          <img  src="../../../public/img/exercise/1.png" alt="" />
        </div>
        <div>仿真模考</div>
      </div>
        <div class="exercise-fenl-item" @click="onclick4">
        <div>
          <img  src="../../../public/img/exercise/1.png" alt="" />
        </div>
        <div>错题练习</div>
      </div>
        <div class="exercise-fenl-item" @click="onclick5">
        <div>
          <img  src="../../../public/img/exercise/1.png" alt="" />
        </div>
        <div>测评记录</div>
      </div>
        <div class="exercise-fenl-item" @click="onclick6">
        <div>
          <img  src="../../../public/img/exercise/1.png" alt="" />
        </div>
        <div>习题收藏</div>
      </div>
    </div>
    <!-- 近期模考 -->
    <div class="exercise-footer">
      <div class="exercise-footer-div1">近期模考</div>

      <div class="exercise-footer-div2">
        <div class="exercise-footer-div3">默认排序</div>
        <div class="exercise-footer-div4">时间</div>
      </div>

      <div class="exercise-footer-div5">
        <van-empty description="咱无模考安排，敬请期待" />
      </div>
    </div>
  </div>
</template>

<script >
export default {
  methods: {
     onclick1() {
      this.$router.push({
        path:"/Exercise1"
      });
    },
     onclick2() {
      this.$router.push({
        path:"/Exercise2"
      });
    },
     onclick3() {
      this.$router.push({
        path:"/Exercise3"
      });
    },
     onclick4() {
      this.$router.push({
        path:"/Exercise4"
      });
    },
     onclick5() {
      this.$router.push({
        path:"/Exercise5"
      });
    },
     onclick6() {
      this.$router.push({
        path:"/Exercise6"
      });
    },
  },
};
</script>

<style scoped>
.box {
  width: 100%;
  height: 100vh;
  background: rgb(235, 238, 238);
}
.exercise-header {
  width: 100%;
  height: 0.44rem;
  background: white;
}
.exercise-fenl-box {
  margin: 0.13rem;
  font-size: 0.12rem;
  font-weight: 100;
  width: 93%;
  height: 1.75rem;
  display: flex;
  justify-content: flex-start;
  background: white;
  flex-wrap: wrap;

}
.exercise-fenl-item {
  width: 25%;
  text-align: center;

}
.exercise-footer {
  width: 100%;
  height: 2.35rem;
  background: white;
}
.exercise-footer-div1 {
  color: gray;
  font-size: 0.15rem;
  height: 0.35rem;
  line-height: 0.35rem;
  margin: 0 0.15rem;
}
.exercise-footer-div2 {
  font-size: 0.13rem;
  display: flex;
  justify-content: space-between;
  margin: 0 0.15rem;
}
.exercise-footer-div3 {
  color: rgb(165, 103, 2);
}
.exercise-footer-div4 {
  color: gray;
}

.exercise-fenl-item div img{
  width: 50%;
  margin: 0.06rem 0;
}

.van-empty {
  width: 100%;
  height: 1.5rem;
}
</style>