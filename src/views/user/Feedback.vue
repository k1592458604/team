<template>
  <div>
    <van-nav-bar title="意见反馈" left-arrow @click-left="onClickLeft" />
    <div class="content">
        <div class="van-cell van-field van-field--min-height">
            <div class="van-cell__value van-cell__value--alone">
                <div class="van-field__body">
                    <textarea placeholder="请输入您的意见" maxlength="500" class="van-field__control"></textarea>
                </div>
            </div>
        </div>
    </div>
    <p class="max-len">0/500</p>
    <p class="btn">提交</p>
  </div>
</template>

<script>
export default {
 methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
  },
}
</script>

<style scoped>
.btn{
    background-color: #eb6100;
    color: #fff;
    width: 92vw;
    height: 11.73333vw;
    margin: 30.66667vw auto;
    border-radius: 1.06667vw;
    font-size: 4.53333vw;
    text-align: center;
    line-height: 11.73333vw;
}
.max-len{
    font-size: 3.2vw;
    color: #b7b7b7;
    text-align: right;
    margin: 1.33333vw 5.33333vw 0 0;
}
textarea {
    padding: 2.66667vw 2.66667vw;
    font-size: 3.2vw;
    line-height: 3.2vw;
    min-height: 0;
    height: 44vw;
}
.van-cell__value {
    border: 1px solid #ddd;
    border-radius: 1.33333vw;
}
.content{
    margin-top: .4rem;
    margin-top: 4vw;
}
.van-cell {
    font-size: 4vw;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(0,0,0,.85);
    padding: 0 4vw;
}
</style>