<template>
    <div>
        <van-nav-bar title="学习日历" left-arrow @click-left="onClickLeft" />
        <van-calendar title=" " :poppable="false" :show-confirm="false" :style="{ height: '440px' }" @select="Time" />
        <div class="ri">
            <span class="ri-1">{{this.date}}</span>
            <span class="ri-2">当天0节课</span>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                date:''
            }
        },
        mounted(){
                let data = new Date()
                let m=data.getMonth()+1;
                let d=data.getDate()
                // console.log(d)
                this.date = m+'月'+d+'日'
        },
        methods: {
            onClickLeft() {
                this.$router.go(-1)
            },
            Time(data){
                let m=data.getMonth()+1;
                let d=data.getDate()
                // console.log(d)
                this.date = m+'月'+d+'日'
            }

        }
    }
</script>

<style lang='scss' scoped>
.ri{
    font-size: 0.17rem;
    padding: 0 0.1rem ;
    .ri-1{
        color: orange;
    }
    .ri-2{
        font-size: 0.13rem;
        color: rgb(196, 191, 191);
        margin-left: 0.15rem;
    }
}
</style>