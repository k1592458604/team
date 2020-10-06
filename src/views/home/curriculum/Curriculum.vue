<template>
  <div class="curriculum">
    <div
      class="curriculum-n"
      v-for="(item, index) in list[1].list"
      :key="index"
      @click="goto"
    >
      <div class="curriculumBox">
        <img :src="item.cover_img" alt="" />
        <div class="curriculumMsg">
          <h5>{{item.title}}</h5>
          <p>
              {{item.sales_num}}人已报名
            <span></span>
          </p>
        </div>
      </div>
    </div>
    <!-- <div
      class="curriculum-n"
      v-for="item in list1"
      :key="item.text"
      @click="goto"
    >
      <p class="curriculum-text">{{ item.text }}</p>
      <p class="curriculum-con">{{ item.con }}</p>
      <div class="curriculum-t">
        <img :src="item.img" alt="" />
        <span>{{ item.name }}</span>
      </div>
      <p class="curriculum-bottom">
        {{ item.text1 }}
        <span style="float: right; color: orange; font-size: 16px">{{
          item.cz
        }}</span>
      </p>
    </div> -->
  </div>
</template>

<script>
import { getAppIndex } from "../../../network/api/api";
export default {
  data() {
    return {
      list: [],
    //   list1: [
    //     {
    //       text:
    //         "初中重点几何知识点————第三讲：平行四边形与矩形、菱形、正方形的关系",
    //       con: "共1课时",
    //       img: "/img/home/老师/1.png",
    //       name: "马学斌",
    //       text1: "123人已报名",

    //       cz: "$ 1.00",
    //     },
    //     {
    //       text:
    //         "初中重点几何知识点————第九讲：用描点法画出二次函数y= -x^2的图像",
    //       con: "共1课时",
    //       img: "/img/home/老师/1.png",
    //       name: "马学斌",
    //       text1: "127人已报名",

    //       cz: "$ 1.00",
    //     },
    //     {
    //       text: "初中重点几何知识点————第二讲：三角形对平行四边形的影响",
    //       con: "共1课时",
    //       img: "/img/home/老师/1.png",
    //       name: "马学斌",
    //       text1: "120人已报名",

    //       cz: "$ 1.00",
    //     },
    //     {
    //       text:
    //         "初中重点几何知识点————第八讲：用描点法画出二次函数y= -x^2的图像",
    //       con: "共1课时",
    //       img: "/img/home/老师/1.png",
    //       name: "马学斌",
    //       text1: "112人已报名",

    //       cz: "$ 1.00",
    //     },
    //   ],
    };
  },
  async mounted() {
    var list = await getAppIndex();
    this.list = list.data.data;
    console.log(this.list);
  },
  methods: {
    goto() {
      this.$router.push({
        path: "/courseList",
      });
    },
  },
};
</script>

<style lang='scss' scoped>
* {
  padding: 0;
  margin: 0;
}
.curriculumBox {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center ;
  img {
    width: 30vw;
    height: 12vh;
    border-radius: .2rem;
    margin-right: .2rem;
  }
  .curriculumMsg{
      height: .8rem;
      width: 60%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      h5{
          font-size: .14rem;
      }
      p{
          font-size: .12rem;
          color: rgba(0,0,0,.45);
      }
  }
}
.curriculum-n {
  box-sizing: border-box;
  width: 95%;
  padding: 0.14rem;
  margin: 0.15rem auto;
  background: white;
  border-radius: 0.1rem;
  .curriculum-text {
    font-size: 0.16rem;
  }
  .curriculum-con {
    font-size: 0.13rem;
  }
  .curriculum-t {
    display: flex;
    align-items: center;
    height: 0.3rem;
    margin: 0.14rem 0;
    img {
      width: 0.27rem;
      border-radius: 50%;
    }
    span {
      font-size: 0.13rem;
      color: gray;
      margin-left: 0.1rem;
    }
  }
  .curriculum-bottom {
    height: 0.3rem;
    line-height: 0.3rem;
    font-size: 0.13rem;
    color: gray;
    border-top: 0.01rem solid rgb(243, 242, 242);
  }
}
</style>