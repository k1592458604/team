<template>
  <div>
    <van-nav-bar
      title="修改个人信息"
      left-text="返回"
      right-text="保存"
      left-arrow
      @click-left="onClickLeft"
    />
    <ul>
        <li>
            <input type="checkbox" value="">
            <span>语文</span>
        </li>
        <li>
            <input type="checkbox" value="">
            <span>数学</span>
        </li>
        <li>
            <input type="checkbox" value="">
            <span>英语</span>
        </li>
        <li>
            <input type="checkbox" value="">
            <span>物理</span>
        </li>
        <li>
            <input type="checkbox" value="">
            <span>化学</span>
        </li>
        <li>
            <input type="checkbox" value="">
            <span>生物</span>
        </li>
        <li>
            <input type="checkbox" value="">
            <span>政治</span>
        </li>
        <li>
            <input type="checkbox" value="">
            <span>信息技术</span>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>

<style>
ul{
    background: #fff;
    margin: .26667rem 0;
    padding: .13333rem .4rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}
ul li{
    width: 100%;
    height: .46667rem;
    line-height: .46667rem;
    font-size: .16rem;
    color: #595959;
    display: flex;
    align-items: center;
    position: relative;
}
input{
    width: .3rem;
    height: .3rem;
    margin-top: 0rem;
    margin-right: .26667rem;
    float: left;
}
span{
    display: inline-block;
    height: 1.46667rem;
    line-height: 1.46667rem;
}
ul li:after {
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
</style>