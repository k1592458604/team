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
  </div>
</template>

<script>
import { getAppIndex } from "../../../network/api/api";
export default {
      data() {
    return {
      list: [],
    };
  },
  async mounted() {
    var appIndex = await getAppIndex();
    this.list = appIndex.data.data;
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
** {
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
      height: .9rem;
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