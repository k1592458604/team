<template>
  <div>
    <!-- 头部导航 -->
    <div class="aa">
      <ul class="kc">
        <li class="c">
          <van-icon name="arrow-left" size="20px" @click="tc" />
        </li>
        <li class="k">讲师详情</li>
      </ul>
    </div>
    <!-- 卡片 -->
    <!-- <div class="card">
      <van-image round  class="img1"  src="https://img.yzcdn.cn/vant/cat.jpeg" />
      <div class="name">毛昭燕</div>
      <div class="sex">女&nbsp;&nbsp;&nbsp;&nbsp;15年教龄</div>
      <div class="y">
       
      </div>
    </div> -->
     <div class="cardBox">
        <div class="card">
            <img src="https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg" alt="">
            <div class="name">
              <p>林德胜</p>
              <div class="sex">女&nbsp;&nbsp;&nbsp;&nbsp;15年教龄</div>
            </div>
            <div class="y">
               <input type="button" value="关注"  v-show="value1" @click="guan" class="gz">
        <input type="button" value="已关注" v-show="value2" @click="quguan" class="gz1">
            </div>
          </div>
    </div>
    <!-- 标签切换 -->
    <div class="bb">
      <div class="mine">
        <van-tabs v-model="active">
          <!-- 讲师介绍 -->
          <van-tab title="讲师介绍" class="js">
           
            <ul class="js1">
              <li><span class="js-1">教学年龄</span>
              <font>15年</font></li>
              <li ><span class="js-1">授课价格</span>
              <font>120学币</font></li>
              <li class="jian">
              <div class="kong">老师简介</div>
              <font class="js-2">教学风格:尤其擅长阅读教学，能让学上快速掌握阅读技能
                  ，有效提高学习成绩。39岁，毕业于华中师范大学汉语言文学专业，有高中
                  语文教师资格证，从教12年以上，先后在湖北、深圳、上海等地公立，民办学校
                  及知名培训机构任教，学生多考入上海中学、南洋模范中学等重点学校.</font></li>
            </ul>
          </van-tab>
          <van-tab title="主讲课程" class="zj">
             <div class="list">
      <div class="list_container">
        <!-- 列表卡片 -->
        <div class="list_content" 
        v-for="index in 10"  :key="index"
        @click=" zhujiang"
        >
          <h5>李老师16号到22号地理大课堂开课啦</h5>
          <p>共8课时</p>
          <div class="teacher">
            <img src="https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg" alt="">
            <span>李青</span>
          </div>
          <div class="sales">
            <span>119已报名</span>
            <p>免费</p>
          </div>
        </div>
      </div>
    </div>
            <!-- <div class="zjbox">
            <div class="zj-1" @click="zhujiang">
              <div class="zj-2">每时每刻特级教师-自主招生冲刺讲座10-二次函数4-存在性问题</div>
              <div class="zj-3">共一课时</div>
              <ul class="zj-4">
                <li class="zj-4-1"><van-image
                  round
               class="img"
                  src="https://img.yzcdn.cn/vant/cat.jpeg"
                /></li>
                <li class="zj-4-2">毛昭燕</li>
              </ul>
              <div class="zj-5"></div>
              <ul class="zj-6">
                <li class="zj-6-1">61人已报名</li>
                <li class="zj-6-2">免费</li>
              </ul>
            </div>
            <div class="zj-1"  @click="zhujiang">
                <div class="zj-2">每时每刻特级教师-自主招生冲刺讲座10-二次函数4-存在性问题</div>
                <div class="zj-3">共一课时</div>
                <ul class="zj-4">
                  <li class="zj-4-1"><van-image
                    round
                  
                    class="img"
                    src="https://img.yzcdn.cn/vant/cat.jpeg"
                  /></li>
                  <li class="zj-4-2">毛昭燕</li>
                </ul>
                <div class="zj-5"></div>
                <ul class="zj-6">
                  <li class="zj-6-1">61人已报名</li>
                  <li class="zj-6-2">免费</li>
                </ul>
              </div>
              <div class="zj-1" @click="zhujiang">
                  <div class="zj-2">每时每刻特级教师-自主招生冲刺讲座10-二次函数4-存在性问题</div>
                  <div class="zj-3">共一课时</div>
                  <ul class="zj-4">
                    <li class="zj-4-1"><van-image
                      round
                     class="img"
                      src="https://img.yzcdn.cn/vant/cat.jpeg"
                    /></li>
                    <li class="zj-4-2">毛昭燕</li>
                  </ul>
                  <div class="zj-5"></div>
                  <ul class="zj-6">
                    <li class="zj-6-1">61人已报名</li>
                    <li class="zj-6-2">免费</li>
                  </ul>
                </div>
                <div class="zj-1" @click="zhujiang">
                    <div class="zj-2">每时每刻特级教师-自主招生冲刺讲座10-二次函数4-存在性问题</div>
                    <div class="zj-3">共一课时</div>
                    <ul class="zj-4">
                      <li class="zj-4-1"><van-image
                        round
                       class="img"
                        src="https://img.yzcdn.cn/vant/cat.jpeg"
                      /></li>
                      <li class="zj-4-2">毛昭燕</li>
                    </ul>
                    <div class="zj-5"></div>
                    <ul class="zj-6">
                      <li class="zj-6-1">61人已报名</li>
                      <li class="zj-6-2">免费</li>
                    </ul>
                  </div>
                  <div class="zj-1" @click="zhujiang">
                      <div class="zj-2">每时每刻特级教师-自主招生冲刺讲座10-二次函数4-存在性问题</div>
                      <div class="zj-3">共一课时</div>
                      <ul class="zj-4">
                        <li class="zj-4-1"><van-image
                          round
                          class="img"
                          src="https://img.yzcdn.cn/vant/cat.jpeg"
                        /></li>
                        <li class="zj-4-2">毛昭燕</li>
                      </ul>
                      <div class="zj-5"></div>
                      <ul class="zj-6">
                        <li class="zj-6-1">61人已报名</li>
                        <li class="zj-6-2">免费</li>
                      </ul>
                    </div>
                    </div> -->
          </van-tab>
          <van-tab title="学员评价" class="pj"><img src="../../../../public/img/record/pl.jpg" alt="" class="pl"></van-tab>
        </van-tabs>
           <input type="button" value="立即预约" class="btn" @click="btn">
      </div>
    </div>
    
  </div>
</template>

<script>
  export default {
    data() {
      return {
        active: 2,
        list: {
          name: '每时每刻特级教师-自主招生冲刺讲座10-二次函数4-存在性问题',
          keshi: '共一课时',
         
        },
        value1:true,
          value2:false,
      };
    },
    methods: {
      tc() {
        this.$router.go(-1)
      },
   
      btn(){
        this.$router.push({
          path:'/recordOto'
        })
      },
      guan(){
        this.$toast('成功关注')
        this.value1=false
        this.value2=true
      },
      quguan(){
        this.$toast('取消关注')
        this.value1=true
        this.value2=false
      },
      zhujiang(){
        this.$router.push({
          path:'/courseList'
        })
      }
    }
  }
</script>

<style scoped lang="scss">
.list{
  width: 100%;
  height: 77vh;
    overflow: scroll;
  background: #F0F2F5;
  .list_container{
    padding:.15rem;
  
    .list_content{
      // width: 100%;
      background: #fff;
      border-radius: .05rem;
      height: 1.73rem;
      padding: 0 .14rem;
      margin-bottom: .15rem;
      h5{
        font-size: .16rem;
        font-weight: 400;
        padding-top: .15rem;
      }
      p{
        font-size: .12rem;
        color: #999;
        height: .3rem;
        line-height: .3rem;
      }
      .teacher{
        height: .65rem;
        display: flex;
        align-items: center;
        img{
          width: .27rem;
          height: .27rem;
          border-radius: 50%;
          overflow: hidden;
        }
        span{
          font-size: .12rem;
          color: #999;
          margin: 0 .1rem;
        }
      }
      .sales{
        height: .44rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        span{
          font-size: .14rem;
          color: #999;
        }
        p{
          font-size: .16rem;
          color: #67B54E;
        }
      }
    }
  }
}
.jian{
  display: flex;
  justify-content: space-around
}
.kong{
  width: 0.9rem;
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
    background: #ebeefe;
    color: #eb6100;
    font-size: .14rem;
    width: .7rem;
    height: .31rem;
    border-radius: .41rem;
    text-align: center;
    line-height: .31rem;
  }
  .cardBox{
   padding: 0 .1rem; 
  
  }
.card{
  border-radius: .05rem;
  margin-top: .1rem;
    padding: 0 .15rem;
    height: .81rem;
    background: #fff;
    display: flex;
    align-items: center;
      position: absolute;
    top:0.5rem;
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
  /* color:#646464; */

}
.sex{
  color: #D1D1D1;
}
  

  .gz {
    width: 0.6rem;
    height: 0.25rem;
    border-radius: 0.25rem;
    background: #EBEEFE;
    color: #EB7B2F;
    border: 0.01rem solid #EBEEFE;
    font-size: 0.13rem;
  }
  .gz1 {
    width: 0.6rem;
    height: 0.25rem;
    border-radius: 0.25rem;
    background: #EBEEFE;
    color: #BABABA;
    border: 0.01rem solid #EBEEFE;
    font-size: 0.13rem;
  }


  .bb {
    width: 100%;
    height: 84vh;
    background: #F0F2F5;
  }

  .mine {
    width: 100%;
    height: 0.2rem;
    background: white;
    position: absolute;
    top: 1.5rem;
    color: #7D7E80;

  }

  .js {
    width: 100%;
    height: 45vh;
    background: white;
  }
  .js1{
    font-size: 0.13rem;
  }
  .js1 li{
    padding: 0.2rem;
  }
  .js-1{
    margin-right: 0.3rem;
  }
  .js-2{
    line-height: 0.23rem;
    flex:1;

  }

 
  .btn {
    width: 100%;
    height: 0.45rem;
    background: #EB6100;
    border: 0.01rem solid #EB6100;
    color: white;
    position: fixed;
    font-size: 0.2rem;
        top:6.21rem;
  }
 
</style>
