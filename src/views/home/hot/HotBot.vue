<template>
  <div>
      <div class="hot"  v-for="(item, index) in hotList[2].list" :key="index">
        <img :src="item.thumb_img" alt="">
        <div class="hotMsg">
          <p>{{item.title}}</p>
          <p class="hotDes">{{item.description}}</p>
          <div>
            <span>
              <van-icon name="eye-o" color="#999" size="12" />  
                {{item.click_rate}}
            </span>
            <span>
              <van-icon name="underway-o" color="#999" size="12" />  
                {{item.created_at | time}}
            </span>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import {getAppIndex} from '../../../network/api/api'
export default {

  data() {
    return {
      hotList:[]
    }
  },
  async mounted() {
      var hotList=await getAppIndex()
      this.hotList=hotList.data.data
  },
  filters: {
    time(val){
      var ms=Number(val)*1000
      var createdTime=new Date(ms)
     var date=createdTime.toLocaleDateString()
      return date
    }
  }
}
</script>

<style scoped lang="scss">
.van-icon{
  margin-right:.05rem;
}
.hot{
  font-size: .14rem;
  height: .69rem;
  padding: .1rem;
  width: 90% ;
  margin: 0.15rem auto ;
  background: #fff;
  border-radius: .1rem;
  display: flex;
  align-items: center;;
  img{
    width: 1.04rem;
    height: .645rem;
    margin-right: .12rem;
    border-radius: .08rem;
  }
  .hotMsg{
    width: 2.09rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
      p{
        width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .hotDes,div{
    color: #999;
    font-size: .12rem;
  }
  div{
    display: flex;
    justify-content: space-between;
    align-items: center;
    span{
      display: flex;
      align-items: center;
    }
  }
  }
}
</style>