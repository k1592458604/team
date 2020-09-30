<template>
  <div class="box">
    <!-- 顶部 -->
    <div class="head">
      <!-- 顶部导航 -->
      <div class="head_top">
        <van-nav-bar title="特色课" style="color: #000">
          <template #right>
            <van-icon name="search" size="24" color="#000" @click="goto" />
          </template>
        </van-nav-bar>
      </div>
      <!-- 顶部筛选 -->
      <div class="head_btm">
        <van-dropdown-menu active-color="#EF8133">
          <van-dropdown-item title="分类" ref="classify" class="classify">
            <div class="content">
              <div>
                <p>年级</p>
                <span v-for="(item, index) in grade" :key="index"
                @click="classify_gradeCut(index)"
                 :class="{ span: classify_gradeIndex == index }"
                >{{
                  item
                }}</span>
              </div>
               <div>
                <p>学科</p>
                <span v-for="(item, index) in grade" :key="index"
                 @click="classify_subjectCut(index)"
                 :class="{ span: classify_subjectIndex == index }"
                >{{
                  item
                }}</span>
              </div>
            </div>
          </van-dropdown-item>
          <van-dropdown-item title="排序" ref="sort" class="sort">
            <div>
              <p
                v-for="(item, index) in sort"
                :key="index"
                @click="sortCut(index)"
                :class="{ color: sortIndex == index }"
              >
                {{ item }}
              </p>
            </div>
          </van-dropdown-item>
          <van-dropdown-item title="筛选" ref="screen" class="screen">
            <div class="content">
             <div>
               <p></p>
               <span v-for="(item, index) in screen" :key="index"
               @click="screenCut(index)"
                  :class="{ span: screenIndex == index }"
               >{{item}}</span>
             </div>
            </div>
          </van-dropdown-item>
        </van-dropdown-menu>
      </div>
    </div>
    <!-- 列表 -->
    <div class="list">
      <div class="list_container">
        <!-- 列表卡片 -->
        <div class="list_content" 
        v-for="index in 10"  :key="index"
        @click="gotoList"
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      classify_gradeIndex:-1,
      classify_subjectIndex:-1,
      sortIndex: 0,
      screenIndex:-1,
      sort: ["综合排序", "最新", "最热", "价格从低到高", "价格从高到低"],
      grade: ["初一", "初二", "初三", "高一", "高二"],
      screen:["全部","大班课","小班课","公开课","点播课","面授课","音频课","系统课","图文课","会员课"]
    };
  },
  methods: {
    goto() {
      this.$router.push({
        path:'/courseSearch'
      })
    },
    classify_gradeCut(index){
      this.classify_gradeIndex=index
      console.log(11);
    },
     classify_subjectCut(index){
      this.classify_subjectIndex=index
      console.log(22);
    },
    sortCut(index) {
      this.sortIndex = index;
      console.log(33);
    },
    screenCut(index){
      this.screenIndex=index
      console.log(44);
    },
    gotoList(){
      this.$router.push({
        path:'/courseList'
      })
    }
  },
};
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
.color {
  color: #ef8133 !important;
}
.box {
  font-size: 0.14rem;
}
.head {
  width: 100%;
  height: 15vh;
  .head_top {
    height: 50%;
  }
  .head_btm {
    height: 50%;
    .sort {
      p {
        text-align: center;
        height: 0.51rem;
        line-height: 0.51rem;
        color: #646464;
      }
    }
  
      .content {
        padding: 0 0 0.1rem 0.15rem;
        div {
          padding-bottom: .1rem;
          border-bottom: .01rem solid #eee;
          p {
            color: #646464;
            padding: 0.1rem 0;
          }
          span {
            display: inline-block;
            width: 0.7rem;
            height: 0.33rem;
            text-align: center;
            line-height: 0.33rem;
            margin: 0 0.2rem 0.07rem 0;
            background: #f5f5f5;
            color: #646464;
          }
        }
      }
    
  }
}
.span {
  color: #eb6100 !important;
  background: #ebeefe !important;
}
</style>