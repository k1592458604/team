<template>
  <div>
    <!-- 导航 -->
    <header>
      <van-nav-bar>
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
                <img src="https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg" alt="" />
                <p>李青</p>
              </div>
            </div>
          </div>
          <div class="say">
              <h5 style="font-size:.16rem">课程介绍</h5>
          </div>
        </div>
      </div>
    </div>
    <!-- 登录 -->
    <van-button type="warning" block>立即登录</van-button>
  </div>
</template>

<script>
export default {};
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
        .teacher{
            height: 1.25rem;
            padding: .05rem .1rem;
            margin-top: .15rem;
            background: #fff;
            h5{
                font-size: .16rem;
                font-weight: 500;
            }
           div{
               display: flex;
               justify-content: space-between;
               flex-wrap: wrap;
               align-items: center;
               .teacher_gird{
                   width: .7rem;
                   height: .7rem;
                   padding: .1rem 0;
                   img{
                       width: .39rem;
                       height: .39rem;
                       border-radius: 50%;
                       overflow: hidden;
                   }
                   p{
                       font-size: .14rem;
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