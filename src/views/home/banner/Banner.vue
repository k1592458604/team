<template>
    <div>
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(item,index) in banner" :key="index">
                <img :src="item" alt="">
            </van-swipe-item>
        </van-swipe>
    </div>
</template>
<script>
export default {
    data(){
        return{
            banner:['/img/home/轮播图/timg (3).jpg','/img/home/轮播图/img1.jpg','/img/home/轮播图/img2.jpg']
        }
    }
}
</script>
<style lang="scss" scoped>
div{
    width: 100%;
    height: 2rem;
    img{
        width: 100%;
        height: 100%;
    }
}
</style>