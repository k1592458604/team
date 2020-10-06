<template>
  <div>
      <div class="teacher" v-for="(item,index) in list[4].list" :key="index" @click="goto">
          <div class="teacher-img">
              <img :src="item.teacher_avatar" alt="">
          </div>
          <div>
              <p class="teacher-name">{{item.teacher_name}}</p>
              <p class="teacher-introduce">{{item.introduction}}</p>
          </div>
      </div>
  </div>
</template>

<script>
import {getAppIndex} from '../../../network/api/api'
export default {
    data() {
        return {
            list:[]
        }
    },
     async mounted() {
      var list=await getAppIndex()
      this.list=list.data.data
  },
    methods: {
        goto(){
            this.$router.push({
                path:'/recordTeacher'
            })
        }
    },
}
</script>

<style lang='scss' scopde>
*{
    padding: 0;
    margin: 0;
}
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
            width: 0.4rem;
            height: 0.4rem;
            margin-left: 20%;
            margin-top: 20%;
        }

    }
    .teacher-name{
        font-size: 0.15rem;
        margin-top: 0.11rem;
        font-weight: 100;
    }
    .teacher-introduce{
        font-size: 0.12rem;
        margin-top: 0.05rem;
        color: rgb(189, 186, 186);
    }
}
</style>