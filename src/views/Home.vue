<template>
    
  <div class="allBox">
        <router-view ></router-view>    
    <!--  <img
      src="/img/A0启动图.jpg"
      alt=""
      v-if="show"

    /> -->
        <van-tabbar v-model="active"  route   v-show="this.$route.meta.isShow">
            <van-tabbar-item
        icon="home-o"
        to="/home"
       
        >首页</van-tabbar-item
      >       
       <!-- v-show="this.$route.meta.isShow" -->
            <van-tabbar-item icon="search" to="/course">课程</van-tabbar-item>
            <van-tabbar-item icon="friends-o" to="/record"
        >约课记录</van-tabbar-item
      >
            <van-tabbar-item icon="setting-o" to="/exercise"
        >练习</van-tabbar-item
      >
            <van-tabbar-item icon="user-o" to="/user">我的</van-tabbar-item>
          </van-tabbar
    >
      <div class="word" v-if="this.$route.meta.isstay" id="box" @touchmove='change' @click="stay">
        <van-icon size="35" color="white" name="chat-o" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // show: true,
      active: "/home",
    };
  },
  mounted() {
<<<<<<< HEAD
    setTimeout(() => {
      this.show = false;
    }, 2000);
=======
    // setTimeout(() => {
    //   this.$route.meta.isstay = true
    //   this.show = false;
    // }, 2000);
  },
  methods:{
    stay(){
      this.$router.push({
        path:'home_stay'
      })
    },
    change(event){
      let box = document.querySelector('#box')
      let x = event.targetTouches[0].clientX
      let y = event.targetTouches[0].clientY
      let clientW = document.documentElement.clientWidth
      let clientH = document.documentElement.clientHeight
      
      // 检测触碰
      if(x<35){
        x=35
      }else if(x>clientW-35){
         x=clientW-35
      }
      if(y<35){
        y=35
      }else if(y>clientH-35){
        y=clientH-35
      }
      // console.log(y)
      // console.log(x)
      box.style.left = x-35+'px'
      box.style.top = y-35+'px'
    }
>>>>>>> fbd3639bff77ebe73b8bea40dd8f6884ac7c6ba0
  }
};
</script>

<style >
* {
  margin: 0;
  padding: 0;
}
.word{
  width: 0.7rem;
  height: 0.7rem;
  background: blue;
  position: absolute;
  border-radius: 50%;
  z-index: 999;
  top: 5rem;
  left: 2.7rem;
  cursor: pointer; 
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  width: 100%;
}
</style>