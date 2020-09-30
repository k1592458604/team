<template>
    <div>
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
    </div>
</template>

<script>
    export default {
        data() {
            return {
                list: [{
                    text: '每时每刻初中数学——初一拓展-分式（一）',
                    con: '共1课时',
                    img: '/img/home/老师/1.png',
                    name: '廖天金',
                    text1: '36人已报名',
                    img1: '',
                    cz: '免费'
                }, {
                    text: '每时每课-初二物理-摩擦力',
                    con: '共1课时',
                    img: '/img/home/老师/1.png',
                    name: '白静',
                    text1: '43人已报名',
                    img1: '',
                    cz: '免费'
                }, {
                    text: '每时每课-初二物理-牛顿第一定律&二力平衡知识点',
                    con: '共1课时',
                    img: '/img/home/老师/1.png',
                    name: '白静',
                    text1: '39人已报名',
                    img1: '',
                    cz: '免费'
                }, {
                    text: '每时每课-初一英语-where引导的特殊疑问句和on,in,under介词用法知识点',
                    con: '共1课时',
                    img: '/img/home/老师/1.png',
                    name: '璐璐',
                    text1: '37人已报名',
                    img1: '',
                    cz: '免费'
                }, {
                    text: '每时每课-初二英语-频率副词知识点',
                    con: '共1课时',
                    img: '/img/home/老师/1.png',
                    name: 'Willa',
                    text1: '28人已报名',
                    img1: '',
                    cz: '免费'
                }
                ]
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