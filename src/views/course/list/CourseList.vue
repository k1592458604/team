<template>
  <div>
    <!-- 导航 -->
    <header>
      <van-nav-bar   @click-left="onClickLeft">
        <template #left>
          <van-icon name="arrow-left" size="20" />
        </template>
        <template #title>
          <p>课程详情</p>
        </template>
        <template #right>
          <van-icon name="share-o" size="20" />
        </template>
      </van-nav-bar>
    </header>
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
        </div>
      </div>
    </div>
    <!-- 登录 -->
    <van-button type="warning" block @click="goto">立即登录</van-button>
  </div>
</template>

<script>
export default {
  methods: {
    goto(){
      this.$router.push({
        path:'/courseDetail'
      })
    },
     onClickLeft(){
            window.history.back()
        }
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
            margin-bottom: .1rem;
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