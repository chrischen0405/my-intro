<template>
    <div class="container">
        <div class="main">
            <img src="/static/images/avatar.png"/>
            <p class="name">陈文杰</p>
            <p class="subtitle">前端开发</p>
        </div>
        <div class="base">
            <div class="box">
                <p>年龄: {{age}}</p>
                <p>学历: 本科</p>
                <p>所在地: 浙江杭州</p>
                <p>工作经验: {{workYear}}年</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            age: 0,
            workYear: 0
        }
    },
    created () {
        this.initAge()
        this.initWorkYear()
    },
    methods: {
        initAge () { // 计算年龄
            let date = new Date()
            let year = date.getFullYear()
            let month = date.getMonth() + 1
            let day = date.getDate()
            if (month > 4) {
                this.age = year - 1997
            } else {
                if (day > 4) {
                    this.age = year - 1997
                } else {
                    this.age = year - 1998
                }
            }
        },
        initWorkYear () { // 粗略计算工作年限
            let now = (new Date()).getTime()
            let workDay = (new Date('2019/4/17')).getTime()
            let years = (now - workDay) / (1000 * 60 * 60 * 24 * 365)
            this.workYear = Number(years).toFixed(1)
        }
    },
    onShareAppMessage () {
    }
}
</script>

<style lang="scss" scoped>
@import "../../styles/comm";

.container {
    padding-top: 40rpx;
    @include w_h(750);
    height: 100%;
    @include flex(column, flex-start, center);
    .main {
        @include w_h(670, 500);
        @include flex($j: center, $a: center);
        border-radius: 8rpx;
        box-shadow: 0 10rpx 20rpx #1296db;
        img {
            @include w_h(200, 200);
            border-radius: 100rpx;
        }
        .name {
            margin-top: 40rpx;
            text-align: center;
            @include font(40, #000, 40, 600);
        }
        .subtitle {
            margin-top: 40rpx;
            @include font(28, #333, 40);
        }
    }
    .base {
        margin-top: 80rpx;
        @include w_h(670);
        border-radius: 8rpx;
        box-shadow: 0 10rpx 20rpx #1296db;
        .box {
            margin-top: 20rpx;
            margin-bottom: 20rpx;
            p {
                text-align: center;
                @include font(32, #000, 60, 400);
            }
        }
    }
}
</style>
