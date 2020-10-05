<template>
  <div>
    <div class="opt">
      <van-nav-bar
        title="设置"
        left-arrow
        @click-left="onClickLeft"
      />
      <div class="options">
          <ul>
              <li @click="newpass">设置密码</li>
          </ul>
      </div>
      <div class="buttom">
          <div class="btn-exit" @click="exit">
              退出登录
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{}
    },
    methods: {
        onClickLeft() {
      this.$router.go(-1);
      },
      exit(){
          this.$router.push({
              path:'/home'
          })
    },
    newpass(){
         this.$router.push({
        path: "/usernewpass",
      });
    }
    },
};
</script>

<style scoped>
.options{
    width: 100%;
}
.opt{
    background: rgb(240,242,245);
    height: 100vh;
}
ul{
    background: #fff;
    padding: 1.33333vw 4vw;
    margin-top: .1rem;
}
ul li{
    height: 1.46667rem;
    height: 14.66667vw;
    line-height: 14.66667vw;
    position: relative;
    font-size: 3.73333vw;
    color: #595959;
}
ul li:before {
    content: "";
    display: block;
    position: absolute;
    right: .1rem;
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
    width: .1rem;
    height: .1rem;
    border-top: 1px solid #b7b7b7;
    border-right: 1px solid #b7b7b7;
}
.buttom{
    overflow: hidden;
    background-color: #fff;
    height: 40vw;
}
.btn-exit{
    background-color: #eb6100;
    color: #fff;
    width: 92vw;
    height: 11.73333vw;
    margin: 17.33333vw auto;
    border-radius: 1.06667vw;
    font-size: 4.53333vw;
    text-align: center;
    line-height: 11.73333vw;
}
</style>