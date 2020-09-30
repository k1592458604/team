<template>
  <div>
    <div class="inf">
      <van-nav-bar
        title="个人信息"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />

      <ul>
        <li @click="head">
          <span>头像</span>
          <span
            ><img
              src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/avatar.jpg"
          /></span>
        </li>
        <li @click="term">
          <span>昵称</span>
          <span>175*****121</span>
        </li>
        <li>
          <span>手机号</span>
          <span>17530520121</span>
        </li>
        <li @click="sex">
          <span>性别</span>
          <span>保密</span>
        </li>
        <li @click="birthday">
          <span>出生日期</span>
          <span>2001-01-21</span>
        </li>
        <li @click="city">
          <span>所在城市</span>
          <span>北京，北京市，昌平区</span>
        </li>
        <li @click="course">
          <span>学科</span>
          <span></span>
        </li>
        <li @click="grade">
          <span>年级</span>
          <span>请选择</span>
        </li>
      </ul>
      <van-action-sheet
        v-model="show"
        :actions="actions"
        cancel-text="取消"
        close-on-click-action
      />

      <van-popup v-model="show1" position="bottom" :style="{ height: '30%' }">
        <van-datetime-picker
          v-model="currentDate"
          type="date"
          title="选择年月日"
          :min-date="minDate"
          :max-date="maxDate"
        />
      </van-popup>

      <van-popup v-model="show2" position="bottom" :style="{ height: '60%' }">
        <van-area :area-list="areaList"  >
              <template #title ></template>
          </van-area>
      </van-popup>
        
      <van-popup v-model="show3" position="bottom" style="{height:'50%}">
          <van-area  :columns="columns"   >
              <template #title ></template>
          </van-area>
      </van-popup>
      <!-- <van-picker
        title="标题"
        show-toolbar
        :columns="columns"
        @confirm="onConfirm"
        @cancel="onCancel"
        @change="onChange"
      /> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      show1: false,
      show2: false,
      show3:false,
      actions: [{ name: "拍照" }, { name: "从手机相册选择" }],
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date(),
       columns: ['杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华', '衢州'],
          areaList:{
        province_list: {
          110000: '北京市',
          120000: '天津市'
        },
        city_list: {
          110100: '北京市',
          110200: '县',
          120100: '天津市',
          120200: '县'
        },
        county_list: {
          110101: '东城区',
          110102: '西城区',
          110105: '朝阳区',
          110106: '丰台区',
          120101: '和平区',
          120102: '河东区',
          120103: '河西区',
          120104: '南开区',
          120105: '河北区',

        }
      }
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    head() {
      this.show = true;
    },
    term() {
      this.$router.push({
        path: "/userterm",
      });
    },
    sex() {
      this.$router.push({
        path: "/usersex",
      });
    },
    birthday() {
      this.show1 = true;
    },
    city() {
      this.show2 = true;
    },
    grade() {
      this.show3 = true;
    },
    course() {
      this.$router.push({
        path: "/usercourse",
      });
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
.inf {
  min-height: 100vh;
  background: #f0f2f5;
  box-sizing: border-box;
}
ul {
  background: #fff;
  margin: 0.1rem 0;
  padding: 0.13rem 0.4rem;
}
.inf ul li {
  height: 1.4rem;
  height: 14.66667vw;
  line-height: 1.4rem;
  line-height: 14.66667vw;
  display: flex;
  justify-content: space-between;
  position: relative;
}
.inf ul li:before {
  content: "";
  display: block;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%) rotate(45deg);
  width: 0.11rem;
  height: 0.11rem;
  border-top: 1px solid #b7b7b7;
  border-right: 1px solid #b7b7b7;
}
.inf ul li:after {
  content: "";
  display: block;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 1px;
  background-color: #f5f5f5;
}
.inf ul li span:first-child {
  font-size: 0.14rem;
  color: #595959;
}
li span:nth-child(2) {
  font-size: 0.14rem;
  color: #595959;
  position: absolute;
  right: 0.2rem;
}
li span > img {
  width: 0.3rem;
  height: 0.3rem;
  position: absolute;
  right: 0.3rem;
  top: 0.1rem;
}
</style>