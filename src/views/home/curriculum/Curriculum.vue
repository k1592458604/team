<template>
  <div class="curriculum">
      <div class="curriculum-n" v-for="(item,index) in list" :key="index">
          <p class="curriculum-text">{{item.text}}</p>
          <p class="curriculum-con">{{item.con}}</p>
          <div class="curriculum-t">
              <img :src="item.img" alt="">
              <span>{{item.name}}</span>
          </div>
          <p class="curriculum-bottom">
              {{item.text1}}
              <span style="float: right;color: #44a426;">{{item.cz}}</span>
          </p>
      </div>
      <div class="curriculum-n" v-for="item in list1" :key="item.text">
          <p class="curriculum-text">{{item.text}}</p>
          <p class="curriculum-con">{{item.con}}</p>
          <div class="curriculum-t">
              <img :src="item.img" alt="">
              <span>{{item.name}}</span>
          </div>
          <p class="curriculum-bottom">
              {{item.text1}}
              <span style="float: right;color: orange;">{{item.cz}}</span>
          </p>
      </div>
      
  </div>
</template>

<script>
export default {
    data() {
        return {
            list:[
                {
                    text:'每时每课特级教师-自主招生冲刺讲座6-多元方程组可转化多元方程组问题',
                    con:'共1课时',
                    img:'/img/home/老师/1.png',
                    name:'杨德胜',
                    text1:'138人已报名',
  
                    cz:'免费'
                }
                ,{
                    text:'每时每课特级教师-自主招生冲刺讲座8-二次函数2--跟的分布',
                    con:'共1课时',
                    img:'/img/home/老师/1.png',
                    name:'杨德胜',
                    text1:'100人已报名',
           
                    cz:'免费'
                },{
                    text:'每时每课特级教师-自主招生冲刺讲座-1代数式求值1',
                    con:'共1课时',
                    img:'/img/home/老师/1.png',
                    name:'杨德胜',
                    text1:'92人已报名',
        
                    cz:'免费'
                }
            ],
            list1:[{
                    text:'初中重点几何知识点————第三讲：平行四边形与矩形、菱形、正方形的关系',
                    con:'共1课时',
                    img:'/img/home/老师/1.png',
                    name:'马学斌',
                    text1:'123人已报名',
           
                    cz:'$ 1.00'
                },{
                    text:'初中重点几何知识点————第九讲：用描点法画出二次函数y= -x^2的图像',
                    con:'共1课时',
                    img:'/img/home/老师/1.png',
                    name:'马学斌',
                    text1:'127人已报名',
          
                    cz:'$ 1.00'
                },{
                    text:'初中重点几何知识点————第二讲：三角形对平行四边形的影响',
                    con:'共1课时',
                    img:'/img/home/老师/1.png',
                    name:'马学斌',
                    text1:'120人已报名',
         
                    cz:'$ 1.00'
                },{
                    text:'初中重点几何知识点————第八讲：用描点法画出二次函数y= -x^2的图像',
                    con:'共1课时',
                    img:'/img/home/老师/1.png',
                    name:'马学斌',
                    text1:'112人已报名',
          
                    cz:'$ 1.00'
                }]
        }
    },
}
</script>

<style lang='scss' scoped>

.curriculum-n{
    box-sizing: border-box;
    width: 95%;
    padding: 0.15rem;
    margin: 0.15rem auto;
    background: white;
    border-radius: 0.1rem;
    .curriculum-text{
        font-size: 0.17rem;
    }
    .curriculum-con{
        font-size: 0.13rem;
    }
    .curriculum-t{
        display: flex;
        align-items: center;
        height: 0.3rem;
        margin: 0.2rem 0;
        img{
            width: 0.3rem;
            border-radius: 50%;
        }
        span{
            font-size: 0.13rem;
            color: gray;
            margin-left: 0.1rem;
        }
    }
    .curriculum-bottom{
        height: 0.3rem;
        line-height: 0.3rem;
        font-size: 0.15rem;
        color: gray;
        border-top: 0.01rem solid rgb(243, 242, 242);
    }
}
</style>