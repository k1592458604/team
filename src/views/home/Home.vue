<template>
<<<<<<< HEAD
  
</template>

<script>
export default {

}
</script>

<style>

=======
  <div>
    <div class="whole">
      <div class="min">
        <!-- 轮播图 -->
        <banner />
        <!-- 导航 -->
        <navigation class="tab" />
        <!-- 名师阵容 -->
        <div class="title">名师阵容</div>
        <teacher />
        <!-- 精品课程 -->
        <div class="title">精品课程</div>
        <curriculum class="curriculum" />
        <!-- 推荐课程 -->
        <div class="title">推荐课程</div>
        <recommend/>
        <!-- 明星讲师 -->
        <div class="title">明星讲师</div>
        <star/>
        <div class="kong"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import banner from './banner/Banner'
  import navigation from './navigation/Navigation'
  import teacher from './teacher/Teacher'
  import curriculum from './curriculum/Curriculum'
  import recommend from './recommend/Recommend'
  import star from './star/Star'
  export default {
    components: {
      banner,
      navigation,
      teacher,
      curriculum,
      recommend,
      star
    }
  }
</script>

<style lang='scss' scoped>
  .whole {
    width: 100%;
    height: 93.5vh;
    padding-bottom: 0.2rem;
    overflow: scroll;

    .min {
      width: 100%;
      background: rgb(240, 242, 245);
    }

    // position: relative;
    .tab {
      width: 100%;
      position: relative;
      top: -0.2rem;
      left: 0rem;
    }

    .title {
      width: 90%;
      margin-top: 0.07rem;
      margin-bottom: 0.07rem;
      margin: 0 auto;
      border-left: 0.03rem solid rgb(235, 97, 0);
      font-size: 0.16rem;
      padding-left: 0.07rem;
      color: gray;
    }
    .kong{
      height: 0.1rem;
    }
  }
>>>>>>> 684b5bd84dd1e19d3718d2e9239c9f2dcfbe2ca1
</style>