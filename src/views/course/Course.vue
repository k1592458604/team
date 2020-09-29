<template>
  <div class="box">
    <div class="head">
      <div class="head_top">
        <van-nav-bar title="特色课" style="color: #000">
          <template #right>
            <van-icon name="search" size="24" color="#000" @click="goto" />
          </template>
        </van-nav-bar>
      </div>
      <div class="head_btm">
        <van-dropdown-menu active-color="#EF8133">
             <van-dropdown-item title="分类" ref="classify" class="classify">

             </van-dropdown-item>
              <van-dropdown-item title="排序" ref="sort" class="sort">
               <div>
                 <p v-for="(item, index) in sort" :key="index" @click="cut(index)"
                 :class="{'color':selectIndex==index}"
                 >{{item}}</p>
             
               </div>
             </van-dropdown-item>
              <van-dropdown-item title="筛选" ref="screen" class="screen">
               
             </van-dropdown-item>
        </van-dropdown-menu>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectIndex:0,
      sort:[
        '综合排序',
        '最新',
        '最热',
        '价格从低到高',
        '价格从高到低'
      ]
    };
  },
  methods: {
    goto() {},
    cut(index){
    this.selectIndex=index
    }
  },
};
</script>

<style lang="scss" scoped>

</style>>
.color{
  color:#EF8133
}
.box{
  font-size: .14rem;
}
.head {
  width: 100%;
  height: 1rem;
  .head_top{
    height: 50%;
  }
  .head_btm{
    height: 50%;
      .sort{
   p{
     text-align: center;
     height: .51rem;
     line-height: .51rem;
    }
  }
  }

}
</style>