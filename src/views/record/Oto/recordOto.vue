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
      <van-image round width="3rem" class="img" height="3rem" src="https://img.yzcdn.cn/vant/cat.jpeg" />
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
      <img src="../../../../public/img/record/暂无信息.png" alt="" class="xx">
      <input type="button" value="立即预约" class="btn" @click="btn">
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      tc() {
        this.$router.go(-1)
      },
      mine() {
        this.$router.push({
          path: '/recordTeacher'
        })
      },
      btn(){
        this.$toast('请选择预约时间');
      }
   
    }
  };
</script>

<style scoped lang="scss">
  .aa {
    width: 100%;
    height: 100px;
    background: #5fabf8;
  }

  .kc {
    width: 100%;
    display: flex;
    color: white;
  }

  .c {
    margin-left: 20px;
    margin-top: 10px;
  }

  .k {
    margin-left: 117px;
    margin-top: 10px;
  }

  .card {
    width: 95%;
    height: 80px;
    position: absolute;
    top: 52px;
    left: 10px;
    background: white;
    z-index: 222;
  }

  .img {
    margin-left: 35px;
    margin-top: 15px;
  }

  .name {
    margin-left: 93px;
    margin-top: -46px;
    color: #7f7f7f;
    font-size: 16px;
  }

  .sex {
    margin-left: 86px;
    margin-top: 7px;
    color: #b7b7b7;
    font-size: 15px;
  }

  .y {
    width: 65px;
    height: 30px;
    margin-left: 270px;
    margin-top: -39px;
  }

  .yy {
    width: 70px;
    height: 30px;
    border-radius: 25px;
    background: white;
    color: #eb6100;
    border: 1px solid#EB6100;
    font-size: 14px;
  }

  .bb {
    width: 100%;
    height: 84vh;
    background: #f0f2f5;
  }

  .sj {
    position: absolute;
    top: 150px;
    left: 20px;
    color: #858586;

  }

  .bj {
    font-size: 14px;
    color: #979899;
    margin-left: 5px;
  }

  .zhou {
    width: 95%;
    height: 70px;
    position: absolute;
    top: 190px;
    left: 10px;
    background: white;

  }

  .zhou1 {
    overflow: scroll;
  }

  .z {
    display: flex;
    /* justify-content: space-around; */
  }

  .z li {
    margin-top: 13px;
    font-size: 14px;
    height: 45px;
    width: 10%;
    color: #A4A4A4;
    margin:0px 1rem;
    margin-top: 15px;
  }

  .z li:hover,
  .z li:active {
    color: #EC6C12;
    border-bottom: 2px solid #4169ff;
  }

  .xx {
    width: 259px;
    height: 204px;
    margin-left: 51px;
    margin-top: 180px;
  }

  .btn {
    width: 100%;
    height: 45px;
    background: #EB6100;
    border: 1px solid #EB6100;
    color: white;
    margin-top: 132px;
  }
</style>