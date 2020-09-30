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
    <div class="card">
      <van-image round  class="img1"  src="https://img.yzcdn.cn/vant/cat.jpeg" />
      <div class="name">毛昭燕</div>
      <div class="sex">女&nbsp;&nbsp;&nbsp;&nbsp;15年教龄</div>
      <div class="y">
        <input type="button" value="关注"  v-show="value1" @click="guan" class="gz">
        <input type="button" value="已关注" v-show="value2" @click="quguan" class="gz1">
      </div>
    </div>
    <!-- 标签切换 -->
    <div class="bb">
      <div class="mine">
        <van-tabs v-model="active">
          <van-tab title="讲师介绍" class="js">
            <div class="nl">
              <ul>
                <li>教学年龄</li>
                <li class="fen">15年</li>
              </ul>
            </div>
            <div class="jg">
              <ul>
                <li> 授课价格</li>
                <li class="fen">120学习币</li>
              </ul>
            </div>
            <div class="jj">
              <ul>
                <li class="ls">老师简介</li>
                <li class="fen1">教学风格:尤其擅长阅读教学，能让学上快速掌握阅读技能
                  ，有效提高学习成绩。39岁，毕业于华中师范大学汉语言文学专业，有高中
                  语文教师资格证，从教12年以上，先后在湖北、深圳、上海等地公立，民办学校
                  及知名培训机构任教，学生多考入上海中学、南洋模范中学等重点学校.</li>
              </ul>
            </div>
          </van-tab>
          <van-tab title="主讲课程" class="zj">
            <div class="zjbox">
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
                    </div>
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
        // this.$router.push({
        //   path:''
        // })
      }
    }
  }
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
  .img1 {
    margin-left: 0.35rem;
    margin-top: 0.15rem;
     height: 55%;
    width: 15%
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
    margin-top: -1.09rem;
  }

  .gz {
    width: 0.6rem;
    height: 0.4rem;
    border-radius: 0.25rem;
    background: #EBEEFE;
    color: #EB7B2F;
    border: 0.1rem solid #EBEEFE;
    font-size: 0.1rem;
  }
  .gz1 {
    width: 0.6rem;
    height: 0.25rem;
    border-radius: 0.25rem;
    background: #EBEEFE;
    color: #BABABA;
    border: 0.01rem solid #EBEEFE;
    font-size: 0.1rem;
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

  .nl {
    margin-left: 0.2rem;
    margin-top: 0.2rem;
    color: #8C8C8C;
    font-size: 0.1rem;
  }

  .nl ul {
    display: flex;
  }

  .jg {
    margin-left: 0.2rem;
    margin-top: 0.3rem;
    color: #8C8C8C;
    font-size: 0.1rem;
  }

  .jg ul {
    display: flex;
  }

  .fen {
    margin-left: 0.25rem;
  }

  .jj {
    margin-left: 0.2rem;
    margin-top: 0.3rem;
    color: #8C8C8C;
    font-size: 0.1rem;
  }

  .jj ul {
    display: flex;
  }

  .jj ul li {
    margin-top: 0.05rem;
  }

  .ls {
    width: 3.8rem;
  }

  .pj {
    width: 100%;

  }

  .img {
    width: 0.4rem;
    height: 0.4rem;
  }

  .zj {
    width: 100%;
    height: 64vh;
    background: white;
  overflow: scroll;
  }
  // .zjbox{
  //   width: 100%;
  //   height: 64vh;
  //   overflow: scroll
  // }
 
  .zj-1 {
    width: 95%;
    height: 190px;
    border: 0.01rem solid #F0F2F5;
    margin-left: 0.1rem;
    margin-top: 0.3rem;
  }

  .zj-2 {
    font-size: 0.16rem;
    margin-top: 0.2rem;
    margin-left: 0.2rem;
    color: #323233
  }
  .zj-3{
    margin-top: 0.1rem;
    margin-left: 0.2rem;
    color: #323233;
    font-size: 0.14rem;
  }
  .zj-4{
    display: flex;
   
  }
  .zj-4-1{
    margin-left: 0.2rem;
    margin-top:-0.0.9rem;
  }
  .zj-4-2{
    margin-left: 0.27rem;
    margin-top:0.59rem;
    font-size: 0.14rem;
    color: #7D7E80
  }
  .zj-5{
    width: 92%;
    height: 0.01rem;
    background: #F0F2F5;
    margin-left: 0.1rem;
    margin-top: 0.05rem;
  }
  .zj-6{
    display: flex;
  }
  .zj-6-1{
    font-size: 0.14rem;
    margin-left: 0.3rem;
    margin-top:0.13rem;
  }
  .zj-6-2{
    margin-left: 1.83rem;
    font-size: 0.16rem;
    margin-top:-0.65rem;
    color: #78BD62;
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
  .fen1{
    margin-left: -0.3rem
  }
</style>
