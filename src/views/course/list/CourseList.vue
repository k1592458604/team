<template>
  <div>
    <!-- 导航 -->
    <header>
      <van-nav-bar @click-left="onClickLeft">
        <template #left>
          <van-icon name="arrow-left" size="20" />
        </template>
        <template #title>
          <p>课程详情</p>
        </template>
        <template #right>
          <van-icon name="share-o" size="20" @click="popup" />
        </template>
      </van-nav-bar>
    </header>
    <!-- 弹出层 -->
    <van-popup v-model="show">
      <p
        style="
          text-align: center;
          font-size: 0.16rem;
          height: 0.3rem;
          line-height: 0.3rem;
        "
      >
        分享
      </p>
      <img
        src="data:image/png;base64,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"
        alt=""
      />
    </van-popup>
    <!-- 主体内容 -->
    <div class="list">
      <div class="container">
        <div class="wrapper">
          <div class="msg">
            <h5>李老师16号到22号地理大课堂开课啦</h5>
            <p>免费</p>
            <span>共8课时 | 120人已报名</span>
            <span>开课时间: 2020.03.16 18:30-2020.03.22 15:00</span>
          </div>
          <div class="teacher">
            <h5>教学团队</h5>
            <div>
              <div class="teacher_gird">
                <img
                  src="https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg"
                  alt=""
                />
                <p>李青</p>
              </div>
            </div>
          </div>
          <div class="say">
            <h5 style="font-size: 0.16rem">课程介绍</h5>
          </div>
          <div class="outline">
            <p>课程大纲</p>
            <div class="outlineList">
              <div v-for="index in 8" :key="index">
                <p>
                  <van-tag type="warning">回放</van-tag>
                  第一讲第一课时
                </p>
                <p>
                  <span>李青</span>
                  <span>03月16日</span>
                  <span>18：30-19：30</span>
                </p>
              </div>
            </div>
          </div>
          <div class="sayMsg">
            <p>课程评论</p>
            <div >
              <div v-for="index in 8" :key="index" class="sayMsgList">
                <img
                  src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20206kRSVtmcMX1589444592.jpg"
                  alt=""
                />
                <div>
                  <p>
                    <span>15910732068</span>
                    <span>
                      <van-icon v-for="index in 5" :key="index" color="#EA7A2F" name="star" />
                    </span>
                    <span style="font-size:.12rem;color:#646464">2020-04-23 14:56</span>
                  </p>
                  <span>very go o g</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 登录 -->
    <van-button type="warning" block @click="goto">立即登录</van-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    popup() {
      this.show = true;
    },
    goto() {
      this.$router.push({
        path: "/courseDetail",
      });
    },
    onClickLeft() {
      window.history.back();
    },
  },
};
</script>

<style scoped lang="scss">
header {
  .van-icon {
    color: #646464;
  }
  border-bottom: 0.01rem solid #eee;
}
.list {
  background: #f0f2f5;
  height: 86.5vh;
  .container {
    height: 100%;
    overflow: scroll;
    .wrapper {
      .sayMsg {
        padding: 0.05rem 0.1rem;
        margin-top: 0.15rem;
        background: #fff;
           p {
          height: 0.14rem;
          padding: 0.1rem 0;
          font-size: 0.16rem;
        }
        .sayMsgList{
            padding: .1rem .2rem;
            display: flex;
            justify-content: space-between;
             img{
          width: .25rem;
          height: .25rem;
          border-radius: 50%;
        }
        div{
          width: 85%;
          height: 100%;
          font-size: .14rem;
          p{
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: .14rem;
          }
        }
        }
       
    
      }
      .outline {
        height: 4.9rem;
        padding: 0.05rem 0.1rem;
        margin-top: 0.15rem;
        background: #fff;
        p {
          height: 0.14rem;
          padding: 0.1rem 0;
          font-size: 0.16rem;
        }
        .outlineList {
          padding: 0 0.15rem 0.1rem;
          div {
            margin-bottom: 0.1rem;
            p {
              padding: 0.1rem 0 0;
              font-size: 0.14rem;
              span {
                margin: 0 0.05rem;
                font-size: 0.12rem;
                color: #646464;
              }
            }
          }
        }
      }
      .say {
        height: 0.55rem;
        padding: 0.05rem 0.1rem;
        line-height: 0.55rem;
        background: #fff;
        margin-top: 0.15rem;
      }
      .teacher {
        height: 1.25rem;
        padding: 0.05rem 0.1rem;
        margin-top: 0.15rem;
        background: #fff;
        h5 {
          font-size: 0.16rem;
          font-weight: 500;
        }
        div {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          align-items: center;
          .teacher_gird {
            width: 0.7rem;
            height: 0.7rem;
            padding: 0.1rem 0;
            img {
              width: 0.39rem;
              height: 0.39rem;
              border-radius: 50%;
              overflow: hidden;
            }
            p {
              font-size: 0.14rem;
              text-align: center;
            }
          }
        }
      }
      .msg {
        height: 1.15rem;
        padding: 0.15rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        background: #fff;
        h5 {
          font-size: 0.16rem;
          font-weight: 400;
        }
        p {
          font-size: 0.2rem;
          color: coral;
        }
        span {
          font-size: 0.14rem;
          color: #646464;
        }
      }
    }
  }
}
</style>