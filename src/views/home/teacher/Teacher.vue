<template>
  <div>
      <div class="teacher" v-for="(item,index) in list" :key="index">
          <div class="teacher-img">
              <img :src="item.img" alt="">
          </div>
          <div>
              <p class="teacher-name">{{item.name}}</p>
              <p class="teacher-introduce">{{item.introduce}}</p>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            list:[
                {
                    img:'/img/home/老师/1.png',
                    name:'杨德胜',
                    introduce:'杨老师，特级教师，多次被中国书学会评为全国高...'
                },
                {
                    img:'/img/home/老师/1.png',
                    name:'文卫星',
                    introduce:'文卫星，江苏沐阳县人，上海市特级教师。上海市...'
                },
                {
                    img:'/img/home/老师/1.png',
                    name:'马学斌',
                    introduce:'马学斌老师，从2004年起，专注中考数学压轴题1...'
                }
            ]
        }
    },
}
</script>

<style lang='scss' scopde>
.teacher{
    width: 95%;
    display: flex;
    height: 0.7rem;
    margin: 0.1rem auto;
    // margin: 0.1rem;
    background: white;
    .teacher-img{
        width: 0.7rem;
        display: flex;
        img{
            border-radius: 50%;
            width: 60%;
            height: 60%;
            margin-left: 20%;
            margin-top: 20%;
        }

    }
    .teacher-name{
        font-size: 0.18rem;
        margin-top: 0.11rem;
        font-weight: 100;
    }
    .teacher-introduce{
        font-size: 0.119rem;
        margin-top: 0.05rem;
        color: rgb(189, 186, 186);
    }
}
</style>