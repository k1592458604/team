<template>
    <div>
        <div class="teacher" v-for="(item,index) in list" :key="index" @click="goto">
            <div class="teacher-img">
                <img :src="item.img" alt="">
            </div>
            <div>
                <p class="teacher-name">{{item.name}}<span>{{item.m}}</span></p>
                <p class="teacher-introduce">{{item.introduce}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                list: [{
                        img: '/img/home/老师/1.png',
                        name: '杨老师',
                        introduce: '中学一级教师，16年教学经验。学校骨干教师, ...',
                        m:'M10'
                    },
                    {
                        img: '/img/home/老师/1.png',
                        name: '白静',
                        introduce: '教学风格幽默风趣的同时也很严谨，对学生有耐心...',
                        m:'M8'
                    },
                    {
                        img: '/img/home/老师/1.png',
                        name: '盛老师',
                        introduce: '教学风格讲课生动形象，机智诙谐，妙语连珠，动...',
                        m:'M11'
                    },
                    {
                        img: '/img/home/老师/1.png',
                        name: 'Grace',
                        introduce: '教学风格严谨、思路清晰、重在方法跟技巧。高...',
                        m:'M20'
                    },
                    {
                        img: '/img/home/老师/1.png',
                        name: 'Willa',
                        introduce: '国内知名师范院校英语专业毕业，授课方式清晰简...',
                        m:'M1'
                    },
                    {
                        img: '/img/home/老师/1.png',
                        name: '璐璐',
                        introduce: '具有较强的英语专业素养和较高的英语师范生技能...',
                        m:'M1'
                    },
                    {
                        img: '/img/home/老师/1.png',
                        name: '杨花花',
                        introduce: '教学风格擅长寓教于乐的教学方式，条理清晰，细...',
                        m:'M11'
                    }
                ]
            }
        },
        methods: {
              goto(){
            this.$router.push({
                path:'/recordTeacher'
            })
        }
        },
    }
</script>

<style lang='scss' scoped>
.teacher{
    width: 95%;
    display: flex;
    height: 0.7rem;
    margin: 0.1rem auto;
    background: white;
    .teacher-img{
        width: 0.7rem;
        display: flex;
        img{
            border-radius: 50%;
            width: 55%;
            height: 55%;
            margin-left: 20%;
            margin-top: 20%;
        }

    }
    .teacher-name{
        font-size: 0.17rem;
        margin-top: 0.11rem;
        font-weight: 200;
        span{
            font-size: 0.14rem;
            color: #ea7a2f;
            margin-left: 0.1rem;
            font-weight: 200;
        }
    }
    .teacher-introduce{
        font-size: 0.119rem;
        margin-top: 0.05rem;
        color: rgb(189, 186, 186);
    }
}
</style>