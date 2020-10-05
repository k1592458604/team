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
        data() {
            return {
                banner: ['https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019MGNW3BtiS91569839576.jpg',
                    'https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019LnKumseuhw1569839569.jpg',
                    'https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20193KAjU2cB6h1569839562.jpg',
                    'https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20197Cxc53hktC1569839552.jpg'
                ]
            }
        }
    }
</script>
<style lang="scss" scoped>
    div {
        width: 100%;
        height: 2rem;

        img {
            width: 100%;
            height: 100%;
        }
    }
</style>