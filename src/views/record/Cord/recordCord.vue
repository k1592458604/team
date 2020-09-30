<template>
  <div>
    <!-- 头部导航 -->
    <van-nav-bar title="一对一辅导" left-arrow>
      <template #left>
        <van-icon name="arrow-left" size="30px" color="#6F6F6F" @click="retur" />
      </template>
      <template #right>
        <van-icon name="search" size="30px" color="#6F6F6F" @click="search" />
      </template>
    </van-nav-bar>
    <div class="x"></div>
    <!-- 日期 -->

    <van-dropdown-menu>
      <van-dropdown-item title="选择上课时间" ref="item">
        <van-calendar
  title="日历"
  :poppable="false"
  :show-confirm="false"
  :style="{ height: '500px' }"
/>
      </van-dropdown-item>
      <van-dropdown-item title="选择老师条件" ref="item" >
        <div class="ls-1"> 老师类型</div>
        <div class="lss">
          <div class="ls-2" v-for="(item,index) in ls" :key="index" :class="seleindex==index?'active':''"
            @click="onclick(index)">
            {{item}}
          </div>
        </div>
        <div class="ls-1">只看</div>
        <div class="ls-1">性别</div>
        <div class="lss">
          <div class="ls-2" v-for="(item,index) in sex" :key="index" :class="seleindex1==index?'active':''"
          @click="onclick1(index)">
            {{item}}
          </div>
        </div>
        <div class="ls-1">年级</div>
        <div class="lss">
          <div class="ls-2" v-for="(item,index) in nj" :key="index" :class="seleindex2==index?'active':''"
          @click="onclick2(index)">
            {{item}}
          </div>
        </div>
        <div class="ls-1">学科</div>
        <div class="lss">
          <div class="ls-2" v-for="(item,index) in xk" :key="index" :class="seleindex3==index?'active':''"
          @click="onclick3(index)">
            {{item}}
          </div>
        </div>
        <input type="button" value="重置" class="cz" @click="onConfirm">
        <input type="button" value="确定" class="qd"  @click="onConfirm">
      </van-dropdown-item>
    </van-dropdown-menu>
    <div class="x1"></div>
    <!-- 卡片 -->
    <div class="Card">
      <div class="card" @click="xq" v-for="(item,index) in list">
        <van-image round width="3rem" class="img" height="3rem" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <div class="name">
          {{item}}
        </div>
        <div class="sex">女&nbsp;&nbsp;&nbsp;&nbsp;15年教龄</div>
        <div class="y"><input type="button" value="预约" class="yy"></div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        date: "",
        show: false,
        seleindex: 0,
        seleindex1: 0,
        seleindex2: 0,
        seleindex3: 0,
        list: ["杨德胜", "李凡", "琦玉", "森一老师", "宋老师", "T1陆老师", "T2周老师", "T3赵老师"],
        ls: ["M1", "M2", "M3", "M4", "M5", "M6", "M7", "M8", "M9", "M10", "M11", "M12", "M13", "M14",
          "M15", "M16", "M17", "M18", "M19", "M20"],
        sex: ["男", "女"],
        nj: ["小学一年级", "小学二年级", "小学三年级", "小学四年级", "小学五年级", "小学六年级",
          "初一", "初二", "初三", "高一", "高二", "高三"],
        xk: ["语文", "数学", "英语", "物理", "化学", "生物", "信息技术",]

      };
    },
    methods: {
      formatDate(date) {
        return `${date.getMonth() + 1}/${date.getDate()}`;
      },
      onConfirm(date) {
        this.show = false;
        this.date = this.formatDate(date);
      },
      retur() {
        this.$router.go(-1)
      },
      search() {
        this.$router.push({
          path: "/recordSearch"
        });
      },
      xq() {
        this.$router.push({
          path: '/recordoto'
        })
      },
      onclick(index) {
        this.seleindex = index
      },
      onclick1(index) {
        this.seleindex1 = index
      },
      onclick2(index) {
        this.seleindex2 = index
      },
      onclick3(index) {
        this.seleindex3 = index
      },
      onConfirm() {
      this.$refs.item.toggle();
    },
    }
  };
</script>

<style scoped lang="scss">
  .x {
    width: 100%;
    height: 3px;
    background: #f0f2f5;
  }

  .x1 {
    width: 100%;
    height: 8px;
    background: #f0f2f5;
  }

  .xz {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
  }

  .Card {
    background: #F0F2F5;
  }

  .card {
    width: 95%;
    height: 80px;
    margin-left: 10px;
    margin-top: 15px;
    background: white;
  }

  .img {
    margin-left: 35px;
    margin-top: 15px;
  }

  .name {
    margin-left: 93px;
    margin-top: -46px;
    color: #7f7f7f;
    font-size: 16px;
  }

  .sex {
    margin-left: 86px;
    margin-top: 7px;
    color: #B7B7B7;
    font-size: 15px;
  }

  .y {
    width: 65px;
    height: 30px;
    margin-left: 270px;
    margin-top: -39px;
  }

  .yy {
    width: 70px;
    height: 30px;
    border-radius: 25px;
    background: #EBEEFE;
    color: #EB6100;
    border: 1px solid #EBEEFE;
    font-size: 14px;
  }

  .ls-1 {
    margin-left: 30px;
    margin-top: 20px;
    font-size: 14px;
  }

  .lss {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .ls-2 {
    width: 70px;
    height: 30px;
    background: #F5F5F5;
    margin-left: 19px;
    margin-top: 15px;
    color: #7f7f7f;
    text-align: center;
    line-height: 35px;
    font-size: 14px;
  }
  .active {
    color: #FC5B09;
    background: #EBEEFE;
  }
 .cz{
   width: 50%;
   height: 40px;
   position: fixed;
   top:627px;
   background: white;
   color: #EB6100;
   border: 1px solid white;
 }
 .qd{
   width: 50%;
   height: 40px;
   position: fixed;
   top:627px;
   background: #EB6100;
   color: white;
  left: 186px;
  border: 1px solid #EB6100;
 }
  
</style>