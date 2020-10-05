<template>
  <div>
    <div class="vip">
      <van-nav-bar title="开通会员" left-arrow @click-left="onClickLeft" />
      <div class="top">
        <div class="gox-vip">
          <img
            src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/avatar.jpg"
            alt=""
          />
          <div class="fo">
            <p class="name">175*****0121</p>
            <p class="note">开通会员免费学习</p>
          </div>
        </div>
      </div>
      <div class="bottom">
          <p class="bot">
              <span class="tag1">购买会员</span>
              <span class="tag2">购买会员后可免费观看会员课程</span>
          </p>
          <div class="vip-items">
              <div class="vip-item select">
                  <p class="name">季度会员</p>
                  <p class="price">
                      <img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191HHDExgz0u1567065946.png" class="price-ico">
                      <span>40.00</span>
                  </p>
              </div>
              <div class="vip-item">
                   <p class="name">半年会员</p>
                  <p class="price">
                      <img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191HHDExgz0u1567065946.png" class="price-ico">
                      <span>75.00</span>
                  </p>
              </div>
              <div class="vip-item">
                   <p class="name">月会员</p>
                  <p class="price">
                      <img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191HHDExgz0u1567065946.png" class="price-ico">
                      <span>15.00</span>
                  </p>
              </div>
          </div>
      </div>
      <div class="btn">立即支付</div>
    </div>
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
.vip {
  min-height: 100vh;
  background: #f0f2f5;
  box-sizing: border-box;
}
.top {
  position: relative;
}
.gox-vip {
  border-top: 1px solid #f5f5f5;
  height: 19.46667vw;
  background-color: #fff;
  display: flex;
  align-items: center;
  padding: 0 4vw;
  position: relative;
}
.gox-vip img {
  width: 11.46667vw;
  height: 11.46667vw;
  border-radius: 50%;
}
.fo {
  margin-left: 2.66667vw;
  line-height: 5.6vw;
}
.name {
  font-size: 3.73333vw;
  font-weight: 500;
  color: #595959;
}
.note {
  font-size: 3.2vw;
  color: #8c8c8c;
}
.vip-items:after {
    content: "";
    width: 26.66667vw;
}
.tag1{
    font-size: 4vw;
    font-weight: 500;
    color: #595959;
}
 .tag2{
    margin-left: 2.66667vw;
    font-size: 3.2vw;
    color: #8c8c8c;
}
.vip-items{
    display: flex;
    justify-content:space-around;
    flex-wrap: wrap;
}
.vip-items .select{
    border: .02667rem solid #e6c37f;
    border: .26667vw solid #e6c37f;
    background-color: #f9f0d9;
}
.bot{
    margin-top: -.4rem;
    margin-left: .15rem;
}
.vip-item{
    width: 26.66667vw;
    height: 29.33333vw;
    border-radius: 2.13333vw;
    border: .26667vw solid #d9d9d9;
    background-color: #fff;
    margin-bottom: 2.66667vw;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.name{
    font-size: 3.46667vw;
    font-weight: 600;
    color: #595959;
    margin-bottom: .26667rem;
    margin-bottom: 2.66667vw;
    line-height: .4rem;
    line-height: 4vw;
}
.price{
    font-size: .74667rem;
    font-size: 7.46667vw;
    color: #d5a322;
}
.price-ico{
    width: 3.73333vw;
    margin-right: .4vw;
}
.btn{
    width: 92vw;
    height: 11.73333vw;
    background: linear-gradient(90deg,#eac687,#c8ae84);
    border-radius: 5.86667vw;
    font-size: 4.53333vw;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: #fff;
    line-height: 11.73333vw;
    text-align: center;
    position: fixed;
    left: 50%;
    bottom: 8vw;
    transform: translateX(-50%);
}
</style>