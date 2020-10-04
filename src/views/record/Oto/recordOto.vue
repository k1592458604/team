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
    <div class="cardBox">
        <div class="card">
            <img src="https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg" alt="">
            <div class="name">
              <p>林德胜</p>
              <div class="sex">女&nbsp;&nbsp;&nbsp;&nbsp;15年教龄</div>
            </div>
            <div class="y" @click="mine">查看详情</div>
          </div>
    </div>
    <!-- 时间 -->
    <div class="bb">
      <div class="sj">
        <span class="sj1">选择时间</span>
        <span class="bj">(北京时间)</span>
      </div>
      <!-- 周表 -->
      <div class="zhou">
        <div class="zhou1">
        
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
.sex{
  color:#B7B7B7;
}
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

.y{
    background: white;
    color: #EB6100;
    font-size: .13rem;
    width: .7rem;
    height: .26rem;
    border-radius: .41rem;
    text-align: center;
    line-height: .26rem;
    border: 0.01rem solid #EB6100;
  }
  .cardBox{
   padding: 0 .1rem; 
  }
.card{
  border-radius: .05rem;
    padding: 0 .15rem;
    position: absolute;
    top:0.5rem;
    height: .81rem;
    background: #fff;
    display: flex;
    align-items: center
}
.card img{

  width: .4rem;
  height: .4rem;
  border-radius: 50%
}
.card .name{
  height: .46rem;
  width: 2.03rem;
  margin-left: .12rem;
  flex-direction: column;
  display: flex;
  justify-content: space-around;
}
.card .name p{
  font-size: .14rem
}
.card .name div{
  font-size: .12rem;
}

.bb {
  width: 100%;
  height: 84vh;
  background: #f0f2f5;
}

.sj {
  position: absolute;
  top: 0.7rem;
  left: 0.2rem;
  // color: #707070;

}
.sj1{
  font-size: 0.16rem;
}
.bj {
  font-size: 0.14rem;
  color:#595959;
  margin-left: 0.05rem;
}

.zhou1 {
  width: 95vw;
  height: 0.7rem;
  position: absolute;
  top: 1.8rem;
  left: 0.1rem;
  background: white;
    overflow: scroll;

}
.zhou1 ul{
  width: 160vw;
  height: 100%;

}

.z {
  display: flex;
}

.z li {
  margin-top: 13px;
  font-size: 0.14rem;
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