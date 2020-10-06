<template>
  <div>
    <div
      class="teacher"
      v-for="(item, index) in list[0].list"
      :key="index"
      @click="goto"
    >
      <div class="teacher-img">
        <img :src="item.teacher_avatar" alt="" />
      </div>
      <div>
        <p class="teacher-name">
          {{ item.teacher_name }}<span>M{{ item.teacher_id }}</span>
        </p>
        <p class="teacher-introduce">{{ item.introduction }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { getAppIndex } from "../../../network/api/api";
export default {
  data() {
    return {
      list: [
        {
          img: "/img/home/老师/1.png",
          name: "杨老师",
          introduce: "中学一级教师，16年教学经验。学校骨干教师, ...",
          m: "M10",
        },
        {
          img: "/img/home/老师/1.png",
          name: "白静",
          introduce: "教学风格幽默风趣的同时也很严谨，对学生有耐心...",
          m: "M8",
        },
        {
          img: "/img/home/老师/1.png",
          name: "盛老师",
          introduce: "教学风格讲课生动形象，机智诙谐，妙语连珠，动...",
          m: "M11",
        },
        {
          img: "/img/home/老师/1.png",
          name: "Grace",
          introduce: "教学风格严谨、思路清晰、重在方法跟技巧。高...",
          m: "M20",
        },
        {
          img: "/img/home/老师/1.png",
          name: "Willa",
          introduce: "国内知名师范院校英语专业毕业，授课方式清晰简...",
          m: "M1",
        },
        {
          img: "/img/home/老师/1.png",
          name: "璐璐",
          introduce: "具有较强的英语专业素养和较高的英语师范生技能...",
          m: "M1",
        },
        {
          img: "/img/home/老师/1.png",
          name: "杨花花",
          introduce: "教学风格擅长寓教于乐的教学方式，条理清晰，细...",
          m: "M11",
        },
      ],
    };
  },
  async mounted() {
    var appIndex =await getAppIndex();
    this.list=appIndex.data.data
    console.log(this.list);
  },
  methods: {
    goto() {
      this.$router.push({
        path: "/recordTeacher",
      });
    },
  },
};
</script>

<style lang='scss' scoped>
* {
  margin: 0;
  padding: 0;
}
.teacher {
  width: 95%;
  display: flex;
  height: 0.81rem;
  margin: 0.1rem auto;
  background: white;
  .teacher-img {
    width: 0.7rem;
    display: flex;
    img {
      border-radius: 50%;
      width: 58%;
      height: 50%;
      margin-left: 20%;
      margin-top: 27%;
    }
  }
  .teacher-name {
    font-size: 0.15rem;
    margin-top: 0.17rem;
    font-weight: 200;
    span {
      font-size: 0.11rem;
      color: #ea7a2f;
      margin-left: 0.1rem;
      font-weight: 200;
    }
  }
  .teacher-introduce {
    font-size: 0.119rem;
    margin-top: 0.05rem;
    color: rgb(189, 186, 186);
  }
}
</style>