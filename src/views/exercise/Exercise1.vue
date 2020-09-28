<template>
  <div>
    <div height="44px">
      <van-nav-bar title="题库选择" left-arrow @click-left="onClickLeft" />
    </div>
    <div height="34px">
      <van-search
        shape="round"
        v-model="value"
        placeholder="请输入搜索关键词"
      />
    </div>
    <div class="exercise-footer-box">
      <div class="exercise-footer">
        <van-sidebar v-model="activeKey" @click="onclick">
          <van-sidebar-item title="标签名称" >
             
          </van-sidebar-item>
          <van-sidebar-item title="标签名称" />
          <van-sidebar-item title="标签名称" />
        </van-sidebar>
      </div>
      <div class="exercise-footer-right">
<div>
    <div>111</div>
    <div>222</div>
    <div>333</div>
</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      activeKey: 0,
    };
  },
  methods: {
    onClickLeft() {
      window.history.back();
    },
    onclick() {},
  },
};
</script>

<style scoped>
.exercise-footer-box{
    width: 100%;
    height: 4rem; 
    display: flex;
     border-top: 1px solid gainsboro;
}
.exercise-footer {
  width: 30%;
  height: 4rem;
  border: 1px solid palegoldenrod;

}
.exercise-footer-right{
    width: 70%;
    height: 4rem;
  border: 1px solid palegreen;

}
</style>