<template>
    <div class="box">
        <div class="top">
            <span>给我们留言</span>
            <van-icon size="25" name="arrow-down" @click="to" />
        </div>
        <p class="text">您好，很抱歉我们暂时无法为您提供服务，如需帮助，请留言，我们将尽快联系并解决您的问题</p>
        <p class="title">手机</p>
        <input type="text" class="inp" placeholder="请输入">
        <p class="title">留言内容</p>
        <!-- <input type="text" class="inpt" placeholder="请输入"> -->
        <textarea name="" class="test" placeholder="请输入"></textarea>
        <van-button type="info">提交</van-button>
    </div>
</template>

<script>
    export default {
        methods: {
            to() {
                this.$router.go(-1)
            }
        }
    }
</script>

<style lang='scss' scoped>
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    .box {
        width: 100%;
        height: 100vh;
        background: rgb(242, 243, 245);
        .text{
            font-size: 0.13rem;
            padding: 0.15rem;
        }
        .title{
            font-size: 0.12rem;
            padding: 0.1rem 0.15rem;
        }
        input{
            font-size: 0.13rem;
            width: 100%;
            border: none;
            height: 0.4rem;
            padding: 0 0.15rem;
            display:block;
        }
        .test{
            height: 0.9rem;
            width: 100%;
            border: none;
            font-size: 0.15rem;
            padding: 0.1rem 0.15rem;
        }
    }

    .top {
        width: 100%;
        height: 0.6rem;
        background: blue;
        color: white;
        padding: 0 0.15rem;
        line-height: 0.6rem;
        font-size: 0.15rem;
        display: flex;
        justify-content: space-between;
        align-items: center;

    }
    .van-button{
        display: block;
        width: 90%;
        margin: 0 auto;
    }
</style>