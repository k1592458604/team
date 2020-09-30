<template>
    <div>
        <div class="Navigation">
            <div class="Navigation-con" v-for="(item,index) in Navigation" :key="index" @click="enter(index)">
                <van-icon :name="item.ioc" size='0.3rem'/>
                <p style="font-size:0.13rem;color:gray">{{item.name}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                Navigation: [{
                    ioc: 'column',
                    name: '特色课'
                }, {
                    ioc: 'column',
                    name: '一对一辅导'
                }, {
                    ioc: 'column',
                    name:'学习日历'
                }]
            }
        },
        methods:{
            enter(index){
                if(index==0){
                    this.$router.push({
                        path:"/course"
                    })
                }
                if(index==2){
                    this.$router.push({
                        path:'/home-calendar'
                    })
                }
            }
        }
    }
</script>

<style lang='scss' scoped>
.Navigation{
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content:space-around;
    align-items: center;
    .Navigation-con{
        flex: 1;
        margin: 0 0.1rem;
        // border: 0.001rem solid gray;
        padding: 0.25rem 0;
        display: flex;
        flex-direction:column;
        text-align: center;
        background: white;
        border-radius: 15%;
    }
}
</style>