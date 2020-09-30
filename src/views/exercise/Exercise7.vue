<template>
  <div class="box">
    <van-nav-bar
      title="初三化学一模拟考试题"
      @click-left="onClickLeft"
      left-arrow
    >
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
    <div class="tiku">
      <van-row>
        <van-col class="col" span="2"
          ><van-icon size="22px" name="column"
        /></van-col>
        <van-col class="wenz" span="20" @click="onclick">题库选择</van-col>
        <van-col class="col" span="2"
          ><van-icon size="22px" name="setting-o"
        /></van-col>
      </van-row>
      <div class="box-div">
      <van-row class="box-div1">
        <van-col span="3"><button class="button">-</button></van-col>
        <van-col span="18">
          <div class="huaxue">化学</div>
          <div>
            <van-progress pivot-text="" color="#f2826a" :percentage="75" />
          </div>
        </van-col>
        <van-col span="3" ><van-icon @click="jiantou" class="jiantou" name="arrow" /></van-col>
      </van-row>
    </div>
    </div>
    
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      window.history.back();
    },
    onclick() {
      this.$router.push({
        path: "/exercise1",
      });
    },
    jiantou(){
        this.$router.push({
        path: "/exercise8",
      });
    }
  },
};
</script>

<style scoped>
.tiku {
  margin-top: 0.1rem;
  font-size: 0.15rem;
  width: 100%;
  height: 90vh;
  vertical-align: middle;
  background: white;
}
.col {
  line-height: 0.5rem;
}
.wenz {
  line-height: 0.4rem;
}
.box {
  width: 100%;
  height: 100vh;

  background: rgb(224, 231, 230);
}
.box-div {
  width: 100%;
  font-size: 0.15rem;

}
.box-div1{ 
     border-radius: 0.05rem;
    width: 93%;
    margin: 0.08rem;
    height: 0.55rem;
    
    border:1px solid gray;
}
.button{
    width: 0.18rem;
    height: 0.18rem;
    border-radius: 0.1rem;
    border: none;
    background: rgb(199, 198, 198);
    color: white;
    text-align: center;
    margin: 0.15rem 0.1rem;
}
.huaxue{
    margin:  0.08rem 0;
}
.jiantou{
    margin: 0.2rem 0.15rem;
}
</style>
